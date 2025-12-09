import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import nodemailer from "nodemailer";

export async function POST(req) {
  console.log("📧 /api/send-otp called");
  
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ 
        success: false, 
        error: "Email required" 
      }, { status: 400 });
    }

    console.log("📨 Processing OTP for:", email);
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    console.log("🔢 Generated OTP:", otp);

    // Try database connection (but don't fail if it doesn't work)
    let dbSuccess = false;
    try {
      await dbConnect();
      console.log("✅ Database connected");
      
      let user = await User.findOne({ email });
      if (!user) {
        console.log("👤 Creating new user");
        user = await User.create({ email });
      }
      
      user.otpCode = otp;
      user.otpExpires = Date.now() + 5 * 60 * 1000;
      await user.save();
      dbSuccess = true;
      console.log("💾 OTP saved to database");
    } catch (dbError) {
      console.warn("⚠️ Database operation failed:", dbError.message);
      // Continue without database
    }

    // Check if we can send email
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("⚠️ SMTP not configured, returning OTP in response");
      
      return NextResponse.json({
        success: true,
        message: "OTP generated (email service not configured)",
        otp: otp, // Return OTP in development
        emailSent: false,
        savedToDatabase: dbSuccess,
        note: "Configure SMTP environment variables for production"
      });
    }

    // Send email
    console.log("📤 Attempting to send email...");
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      await transporter.verify();
      console.log("✅ SMTP connection verified");

      // FIXED: Add the actual email template
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
        from: process.env.OTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: "Your FitYou OTP Code",
        html: htmlTemplate,
        text: `Your FitYou OTP code is: ${otp}. This code expires in 5 minutes.`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Email sent successfully:", info.messageId);
      
      return NextResponse.json({
        success: true,
        message: "OTP sent successfully",
        emailSent: true,
        savedToDatabase: dbSuccess
      });
      
    } catch (emailError) {
      console.error("❌ Email sending failed:", {
        message: emailError.message,
        code: emailError.code,
        response: emailError.response
      });
      
      // Still return success if we saved to DB
      return NextResponse.json({
        success: dbSuccess,
        message: dbSuccess ? "OTP saved but email failed" : "Failed to send OTP",
        error: emailError.message,
        emailSent: false,
        savedToDatabase: dbSuccess,
        otp: process.env.NODE_ENV === 'development' ? otp : undefined
      });
    }

  } catch (error) {
    console.error("💥 /api/send-otp error:", error.message);
    
    return NextResponse.json({
      success: false,
      error: "Failed to process OTP request",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}
// Add this to your /api/send-otp/route.js
export async function GET() {
  return NextResponse.json({
    message: "Use POST method to send OTP",
    example: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { email: "user@example.com" }
    }
  }, { status: 405 }); // Method Not Allowed
}