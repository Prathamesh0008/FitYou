import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  console.log("🔐 /api/verify-otp called");
  
  try {
    // Parse request
    let email, otp;
    try {
      const body = await req.json();
      email = body?.email?.trim();
      otp = body?.otp?.trim();
      console.log("Verifying OTP for:", email, "OTP:", otp ? "***" : "missing");
    } catch (parseError) {
      console.error("Failed to parse request:", parseError);
      return NextResponse.json({ 
        success: false, 
        error: "Invalid request format" 
      }, { status: 400 });
    }

    if (!email || !otp) {
      console.error("Missing email or OTP");
      return NextResponse.json({ 
        success: false, 
        error: "Email and OTP are required" 
      }, { status: 400 });
    }

    // Connect to database
    try {
      await dbConnect();
      console.log("✅ Database connected");
    } catch (dbError) {
      console.error("❌ Database connection failed:", dbError.message);
      return NextResponse.json({ 
        success: false, 
        error: "Database unavailable" 
      }, { status: 500 });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found:", email);
      return NextResponse.json({ 
        success: false, 
        error: "User not found" 
      }, { status: 400 });
    }

    console.log("📊 OTP Verification Debug:");
    console.log("- User found:", user.email);
    console.log("- OTP in DB:", user.otpCode || "NULL");
    console.log("- OTP Input:", otp);
    console.log("- OTP expires (timestamp):", user.otpExpires);
    console.log("- Current timestamp:", Date.now());
    console.log("- Is OTP expired?", user.otpExpires ? user.otpExpires < Date.now() : "N/A");

    // Check OTP exists
    if (!user.otpCode) {
      console.log("❌ No OTP found for user");
      return NextResponse.json({ 
        success: false, 
        error: "No OTP requested. Please request a new OTP." 
      }, { status: 400 });
    }

    // Check OTP match (exact string comparison)
    if (user.otpCode !== otp) {
      console.log("❌ OTP mismatch");
      console.log("   DB OTP:", `"${user.otpCode}"`);
      console.log("   Input OTP:", `"${otp}"`);
      console.log("   Length DB:", user.otpCode.length);
      console.log("   Length Input:", otp.length);
      console.log("   Type DB:", typeof user.otpCode);
      console.log("   Type Input:", typeof otp);
      return NextResponse.json({ 
        success: false, 
        error: "Invalid OTP code" 
      }, { status: 400 });
    }

    // Check if OTP is expired (otpExpires is a Number timestamp)
    if (!user.otpExpires || user.otpExpires < Date.now()) {
      console.log("❌ OTP expired or no expiry time");
      console.log("   OTP Expires:", user.otpExpires);
      console.log("   Current Time:", Date.now());
      console.log("   Difference:", user.otpExpires ? Date.now() - user.otpExpires : "N/A");
      return NextResponse.json({ 
        success: false, 
        error: "OTP expired. Please request a new OTP." 
      }, { status: 400 });
    }

    // Clear OTP and update user
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
        address: user.address || {}
      }
    });

    // Set cookie
    const isProduction = process.env.NODE_ENV === 'production';
    const cookieStore = await cookies();
    
    cookieStore.set("fityou_auth", email, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    console.log("🍪 Cookie set for:", email);
    return response;

  } catch (err) {
    console.error("💥 OTP VERIFY ERROR:", err.message);
    return NextResponse.json({ 
      success: false, 
      error: "Server error",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }, { status: 500 });
  }
}