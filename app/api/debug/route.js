import { NextResponse } from "next/server";

export async function GET() {
  const env = {
    // SMTP
    SMTP_HOST: process.env.SMTP_HOST ? "✅ SET" : "❌ MISSING",
    SMTP_PORT: process.env.SMTP_PORT ? "✅ SET" : "❌ MISSING",
    SMTP_USER: process.env.SMTP_USER ? "✅ SET" : "❌ MISSING",
    SMTP_PASS: process.env.SMTP_PASS ? "✅ SET" : "❌ MISSING",
    OTP_FROM: process.env.OTP_FROM ? "✅ SET" : "❌ MISSING",
    
    // Database
    MONGODB_URI: process.env.MONGODB_URI ? "✅ SET" : "❌ MISSING",
    
    // Auth
    JWT_SECRET: process.env.JWT_SECRET ? "✅ SET" : "❌ MISSING",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? "✅ SET" : "❌ MISSING",
    
    // App
    NODE_ENV: process.env.NODE_ENV || "development",
  };

  console.log("🔍 Environment Variables:", env);

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    environment: env,
    note: "Check which variables are missing"
  });
}