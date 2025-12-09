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
        secure: false,
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

      const htmlTemplate = `...`; // Your email template

      await transporter.sendMail({
        from: process.env.OTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: "Your FitYou OTP Code",
        html: htmlTemplate,
      });

      console.log("✅ Email sent successfully");
      
      return NextResponse.json({
        success: true,
        message: "OTP sent successfully",
        emailSent: true,
        savedToDatabase: dbSuccess
      });
      
    } catch (emailError) {
      console.error("❌ Email sending failed:", emailError.message);
      
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