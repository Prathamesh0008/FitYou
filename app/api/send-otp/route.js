// app/api/send-otp/route.js
import { NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req) {
  console.log("📱 /api/send-otp (Verify) called");

  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json(
        { success: false, error: "Phone number required" },
        { status: 400 }
      );
    }

    console.log("📨 Requesting OTP via Twilio Verify for:", phone);

    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verifications.create({
        to: phone,
        channel: "sms",
      });

    console.log("✅ Twilio Verify status:", verification.status);

    return NextResponse.json({
      success: true,
      message: "OTP sent via Twilio Verify",
      status: verification.status,
    });
  } catch (err) {
    console.error("❌ Twilio Verify error:", err?.message || err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send OTP",
        details:
          process.env.NODE_ENV === "development" ? err?.message : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: "Use POST with { phone } to send OTP via Twilio Verify",
    },
    { status: 405 }
  );
}
