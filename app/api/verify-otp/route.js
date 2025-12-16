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

    // 🔹 1) Check OTP using Twilio Verify
    console.log("📡 Checking OTP with Twilio Verify...");

    const check = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks.create({
        to: phone,
        code: otp,
      });

    console.log("✅ Twilio Verify status:", check.status);

    if (check.status !== "approved") {
      return NextResponse.json(
        { success: false, error: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // 🔹 2) Connect DB
    await dbConnect();
    console.log("✅ Database connected");

    // 🔹 3) Find or create user
    let user = await User.findOne({ phone });

    if (!user) {
      console.log("👤 Creating new user...");
      user = await User.create({
        phone,
        role: "user", // ⭐ default role
      });
    }

    // ⭐ IMPORTANT: return user role to frontend
    const userRole = user.role || "user";

    // 🔹 4) Set cookies
    const cookieStore = await cookies();

    // Phone authentication cookie
    cookieStore.set("fityou_auth", phone, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    // ⭐ Role cookie
    cookieStore.set("fityou_role", userRole, {
      httpOnly: false, // UI needs to read this
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    console.log(`🍪 Role cookie set: ${userRole}`);

    // 🔹 5) Respond
    return NextResponse.json({
      success: true,
      role: userRole,          // ⭐ CRITICAL for dashboards
      user: {
        phone: user.phone,
        name: user.name,
        role: userRole,
        email: user.email,
        dob: user.dob,
        address: user.address,
      },
      message: "OTP verified successfully!",
    });
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
