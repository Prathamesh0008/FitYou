import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    console.log("🔐 /api/verify-otp called");
    await dbConnect();

    const { email, otp } = await req.json();
    console.log("Verifying OTP for:", email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found:", email);
      return NextResponse.json({ success: false, error: "User not found" }, { status: 400 });
    }

    console.log("User OTP:", user.otpCode, "Input OTP:", otp);
    console.log("OTP expires:", new Date(user.otpExpires), "Now:", new Date());

    if (!user.otpCode || user.otpCode !== otp) {
      console.log("❌ OTP mismatch");
      return NextResponse.json({ success: false, error: "Invalid OTP code" }, { status: 400 });
    }

    if (user.otpExpires < Date.now()) {
      console.log("❌ OTP expired");
      return NextResponse.json({ success: false, error: "OTP expired" }, { status: 400 });
    }

    // Clear OTP
    user.otpCode = null;
    user.otpExpires = null;
    await user.save();
    console.log("✅ OTP verified and cleared");

    // Create success response
    const response = NextResponse.json({ 
      success: true, 
      user: {
        email: user.email,
        name: user.name,
        phone: user.phone,
        dob: user.dob,
        address: user.address
      }
    });

    // Set cookie - IMPORTANT: secure must be true on Vercel
    const isProduction = process.env.NODE_ENV === 'production';
    const cookieStore = await cookies();
    
    cookieStore.set("fityou_auth", email, {
      httpOnly: true,
      secure: isProduction,  // TRUE on Vercel (HTTPS)
      sameSite: "lax",       // Better for cross-origin
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    console.log("🍪 Cookie set for:", email);
    return response;

  } catch (err) {
    console.error("💥 OTP VERIFY ERROR:", err);
    return NextResponse.json({ 
      success: false, 
      error: "Server error",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }, { status: 500 });
  }
}