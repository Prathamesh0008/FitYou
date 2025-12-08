import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await dbConnect();

    const { email } = await req.json();
    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    // Check if environment variables exist
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'OTP_FROM'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.error("Missing environment variables:", missingVars);
      return NextResponse.json(
        { 
          success: false, 
          error: "Email service configuration missing",
          missing: missingVars 
        },
        { status: 500 }
      );
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));

    let user = await User.findOne({ email });
    if (!user) user = await User.create({ email });

    user.otpCode = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000;
    await user.save();

    // SMTP CONFIG - FIXED VARIABLE NAME
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465', // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,  // ← FIXED THIS LINE
      },
      tls: {
        rejectUnauthorized: false, // Helps with some SSL issues
      },
    });

    // Test connection first
    await transporter.verify();
    console.log("SMTP connection verified successfully");

    // BEAUTIFUL EMAIL UI (your existing template is fine)
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

    const mailOptions = {
      from: process.env.OTP_FROM,
      to: email,
      subject: "Your FitYou OTP Code",
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);
    console.log(`OTP sent successfully to ${email}`);

    return NextResponse.json({ 
      success: true, 
      message: "OTP sent successfully" 
    });
  } catch (err) {
    console.error("OTP SEND ERROR DETAILS:", {
      message: err.message,
      code: err.code,
      stack: err.stack
    });
    
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to send OTP",
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      },
      { status: 500 }
    );
  }
}