import { NextResponse } from "next/server";

export async function GET() {
  // List all environment variables (hide values for security)
  const envVars = {
    SMTP_HOST: process.env.SMTP_HOST ? "*** SET ***" : "MISSING",
    SMTP_PORT: process.env.SMTP_PORT ? "*** SET ***" : "MISSING",
    SMTP_USER: process.env.SMTP_USER ? "*** SET ***" : "MISSING",
    SMTP_PASSWORD: process.env.SMTP_PASSWORD ? "*** SET ***" : "MISSING",
    OTP_FROM: process.env.OTP_FROM ? "*** SET ***" : "MISSING",
    MONGODB_URI: process.env.MONGODB_URI ? "*** SET ***" : "MISSING",
    NODE_ENV: process.env.NODE_ENV || "development"
  };

  console.log("Environment Variables Status:", envVars);

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    environment: envVars,
    note: "Check if SMTP variables are set correctly"
  });
}