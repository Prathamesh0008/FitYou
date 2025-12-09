import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import nodemailer from "nodemailer";

export async function POST(req) {
  console.log("📧 /api/send-otp called");
  
  try {
    // Check environment variables first
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
    const missingVars = requiredEnvVars.filter(key => !process.env[key]);
    
    if (missingVars.length > 0) {
      console.error("❌ Missing env vars:", missingVars);
      return NextResponse.json(
        { 
          success: false, 
          error: "Email service not configured",
          missing: missingVars 
        },
        { status: 500 }
      );
    }

    console.log("✅ SMTP config check passed");
    
    await dbConnect();
    console.log("✅ Database connected");

    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ 
        success: false, 
        error: "Email required" 
      }, { status: 400 });
    }

    console.log("📨 Processing email:", email);

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    console.log("🔢 Generated OTP:", otp);

    let user = await User.findOne({ email });
    if (!user) {
      console.log("👤 Creating new user:", email);
      user = await User.create({ email });
    } else {
      console.log("👤 Found existing user");
    }

    user.otpCode = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000; // 5 minutes
    await user.save();
    console.log("💾 OTP saved to database");

    // SMTP CONFIG
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Helps with SSL issues
      },
    });

    console.log("🔍 Verifying SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP connection verified");

    // BEAUTIFUL EMAIL UI
    const htmlTemplate = `
    <div style="background:#f4f9ff;padding:30px;width:100%;font-family:Arial,Helvetica,sans-serif;">
      <div style="
        max-width:420px;
        margin:auto;
        background:#ffffff;
        border-radius:14px;
        padding:30px;
        box-shadow:0 4px 20px rgba(0,0,0,0.08);
        text-align:center;
      ">

        <!-- LOGO -->
        <img src="https://instasize.com/api/image/31b93bf1504858963649f40913a0f55450500ccb6c267a15e7f09393d3accada.png" 
             alt="FitYou" 
             style="width:140px;margin-bottom:20px;" />

        <h2 style="color:#0D4F8B;margin-bottom:10px;">Your OTP Verification Code</h2>
        <p style="color:#375C7A;font-size:15px;line-height:1.6;">
          Use the OTP below to continue your secure login.  
          This code is valid for <strong>5 minutes</strong>.
        </p>

        <!-- OTP BOX -->
        <div style="
          margin:25px auto;
          background:#F0F7FF;
          width:200px;
          padding:12px 0;
          border-radius:10px;
          font-size:26px;
          letter-spacing:4px;
          color:#0D4F8B;
          font-weight:bold;
        ">
          ${otp}
        </div>

        <p style="font-size:14px;color:#7A8CA5;margin-top:20px;">
          If you didn't request this, please ignore this email.<br />
          This is an automated message — do not reply.
        </p>

        <hr style="border:none;border-top:1px solid #E3EAF4;margin:25px 0">

        <p style="font-size:12px;color:#9FB3C8;">
          © ${new Date().getFullYear()} FitYou<br>
          Improving lives through science-backed weight management.
        </p>
      </div>
    </div>
    `;

    console.log("🚀 Sending email...");
    await transporter.sendMail({
      from: process.env.OTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Your FitYou OTP Code",
      html: htmlTemplate,
    });

    console.log("✅ Email sent successfully to:", email);
    return NextResponse.json({ 
      success: true,
      message: "OTP sent successfully" 
    });
    
  } catch (err) {
    console.error("💥 OTP SEND ERROR:", {
      message: err.message,
      code: err.code,
      stack: err.stack?.split('\n')[0]
    });
    
    let errorMessage = "Server error sending OTP";
    if (err.code === 'EAUTH') {
      errorMessage = "Email authentication failed. Check SMTP credentials.";
    } else if (err.code === 'ECONNECTION') {
      errorMessage = "Cannot connect to email server.";
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      },
      { status: 500 }
    );
  }
}