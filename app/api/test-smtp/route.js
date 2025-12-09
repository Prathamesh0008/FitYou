import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    console.log("🔍 Testing SMTP configuration...");
    
    // Check if all required variables exist
    const required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'];
    const missing = required.filter(key => !process.env[key]);
    
    if (missing.length > 0) {
      return NextResponse.json({
        success: false,
        error: "Missing SMTP configuration",
        missing
      }, { status: 500 });
    }
    
    // Test SMTP connection
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    
    await transporter.verify();
    console.log("✅ SMTP connection successful");
    
    return NextResponse.json({
      success: true,
      message: "SMTP configuration is valid",
      config: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        hasPassword: !!process.env.SMTP_PASS
      }
    });
    
  } catch (error) {
    console.error("❌ SMTP test failed:", error.message);
    
    return NextResponse.json({
      success: false,
      error: error.message,
      errorCode: error.code,
      config: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        hasPassword: !!process.env.SMTP_PASS
      }
    }, { status: 500 });
  }
}