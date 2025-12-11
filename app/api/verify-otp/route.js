import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req) {
  console.log("🔐 /api/verify-otp (Twilio Verify) called");

  try {
    const body = await req.json();
    const phone = body?.phone?.toString().trim();
    const otp = body?.otp?.toString().trim();

    console.log("📥 Incoming verify:", { phone, otp });

    if (!phone) {
      return NextResponse.json(
        { success: false, error: "Phone number is required" },
        { status: 400 }
      );
    }

    if (!otp || !/^\d{6}$/.test(otp)) {
      return NextResponse.json(
        { success: false, error: "OTP must be 6 digits" },
        { status: 400 }
      );
    }

    // 1️⃣ CHECK OTP WITH TWILIO VERIFY
    console.log("📡 Checking OTP with Twilio Verify...");

    const check = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks.create({
        to: phone,
        code: otp,
      });

    console.log("✅ Twilio Verify check status:", check.status);

    if (check.status !== "approved") {
      return NextResponse.json(
        { success: false, error: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // 2️⃣ CONNECT DB AND FIND/CREATE USER BY PHONE
    await dbConnect();
    console.log("✅ Database connected");

    let user = await User.findOne({ phone });

    if (!user) {
      console.log("👤 No user with this phone, creating new one…");
      user = await User.create({ phone }); // email is no longer required
    }

    // 3️⃣ SET AUTH COOKIE (phone-based)
    const response = NextResponse.json({
      success: true,
      user: {
        phone: user.phone,
        name: user.name || "",
        email: user.email || "",
        dob: user.dob || "",
        address: user.address || {},
      },
      message: "OTP verified successfully!",
    });

    const isProduction = process.env.NODE_ENV === "production";
    const cookieStore = await cookies();

 cookieStore.set("fityou_auth", phone, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24 * 30, // 30 days
});


    console.log("🍪 Authentication cookie set for phone:", phone);
    return response;
  } catch (err) {
    console.error("💥 /api/verify-otp error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Server error during verification",
        details:
          process.env.NODE_ENV === "development" ? err?.message : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "POST { phone, otp } to verify with Twilio Verify",
  });
}
