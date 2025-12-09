// app/api/verify-otp/route.js - UPDATED VERSION
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  console.log("🔐 /api/verify-otp called");
  
  try {
    // Parse request with more validation
    let email, otp;
    try {
      const body = await req.json();
      email = body?.email?.toString().trim();
      otp = body?.otp?.toString().trim();
      
      console.log("📥 Request received:");
      console.log("- Raw email:", body?.email);
      console.log("- Cleaned email:", email);
      console.log("- Raw OTP:", body?.otp);
      console.log("- Cleaned OTP:", otp ? "******" : "EMPTY");
      console.log("- OTP length:", otp?.length || 0);
    } catch (parseError) {
      console.error("❌ Failed to parse request:", parseError);
      return NextResponse.json({ 
        success: false, 
        error: "Invalid request format" 
      }, { status: 400 });
    }

    // Validate inputs
    if (!email || !email.includes('@')) {
      console.log("❌ Invalid email:", email);
      return NextResponse.json({ 
        success: false, 
        error: "Valid email is required" 
      }, { status: 400 });
    }

    if (!otp || otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      console.log("❌ Invalid OTP format:", otp);
      return NextResponse.json({ 
        success: false, 
        error: "OTP must be 6 digits" 
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
        error: "Database unavailable. Please try again." 
      }, { status: 500 });
    }

    // Find user (case-insensitive search)
    const user = await User.findOne({ 
      email: { $regex: new RegExp(`^${email}$`, 'i') }
    });
    
    if (!user) {
      console.log("❌ User not found for email:", email);
      return NextResponse.json({ 
        success: false, 
        error: "User not found. Please request a new OTP." 
      }, { status: 400 });
    }

    console.log("📊 User found:", user.email);
    console.log("📊 OTP in database:", user.otpCode || "NULL");
    console.log("📊 OTP expiry timestamp:", user.otpExpires);
    console.log("📊 Current timestamp:", Date.now());
    
    if (user.otpExpires) {
      console.log("📊 OTP expires at (human):", new Date(user.otpExpires).toISOString());
      console.log("📊 Current time (human):", new Date().toISOString());
      console.log("📊 Is expired?", user.otpExpires < Date.now() ? "YES" : "NO");
      console.log("📊 Time left (seconds):", Math.max(0, user.otpExpires - Date.now()) / 1000);
    }

    // Check OTP exists
    if (!user.otpCode) {
      console.log("❌ No OTP found in database for this user");
      return NextResponse.json({ 
        success: false, 
        error: "No OTP requested. Please request a new OTP." 
      }, { status: 400 });
    }

    // Check OTP match (exact comparison with logging)
    console.log("🔍 Comparing OTPs:");
    console.log("- Database OTP:", `"${user.otpCode}"`);
    console.log("- Input OTP:", `"${otp}"`);
    console.log("- Length match?", user.otpCode.length === otp.length);
    console.log("- Character by character:");
    
    for (let i = 0; i < Math.max(user.otpCode.length, otp.length); i++) {
      const dbChar = user.otpCode[i];
      const inputChar = otp[i];
      const match = dbChar === inputChar;
      console.log(`  Position ${i}: DB "${dbChar}" vs Input "${inputChar}" = ${match ? "✓" : "✗"}`);
    }

    if (user.otpCode !== otp) {
      console.log("❌ OTP MISMATCH!");
      console.log("   DB OTP type:", typeof user.otpCode);
      console.log("   Input OTP type:", typeof otp);
      return NextResponse.json({ 
        success: false, 
        error: "Invalid OTP code. Please check and try again." 
      }, { status: 400 });
    }

    // Check if OTP is expired
    if (!user.otpExpires || user.otpExpires < Date.now()) {
      console.log("❌ OTP EXPIRED!");
      if (user.otpExpires) {
        console.log("   Expired", Math.floor((Date.now() - user.otpExpires) / 1000), "seconds ago");
      }
      return NextResponse.json({ 
        success: false, 
        error: "OTP has expired. Please request a new OTP." 
      }, { status: 400 });
    }

    // SUCCESS - Clear OTP
    console.log("✅ OTP VERIFIED SUCCESSFULLY!");
    user.otpCode = null;
    user.otpExpires = null;
    await user.save();
    console.log("✅ OTP cleared from database");

    // Create success response
    const response = NextResponse.json({ 
      success: true, 
      user: {
        email: user.email,
        name: user.name || "",
        phone: user.phone || "",
        dob: user.dob || "",
        address: user.address || {}
      },
      message: "OTP verified successfully!"
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

    console.log("🍪 Authentication cookie set for:", email);
    return response;

  } catch (err) {
    console.error("💥 OTP VERIFY ERROR:", err);
    console.error("Error stack:", err.stack);
    
    return NextResponse.json({ 
      success: false, 
      error: "Server error during verification",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }, { status: 500 });
  }
}

// GET method for debugging
export async function GET() {
  return NextResponse.json({
    message: "OTP Verification Endpoint",
    instructions: "Send a POST request with email and otp",
    example: {
      curl: 'curl -X POST https://your-site.com/api/verify-otp -H "Content-Type: application/json" -d \'{"email":"user@example.com","otp":"123456"}\'',
      javascript: `fetch('/api/verify-otp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'user@example.com', otp: '123456' })
})`
    }
  });
}