import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, otp } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ success: false, error: "User missing" });
    }

    if (user.otpCode !== otp || user.otpExpires < Date.now()) {
      return NextResponse.json({ success: false, error: "Invalid OTP" });
    }

    // Clear OTP
    user.otpCode = null;
    await user.save();

    // Create success response
    const response = NextResponse.json({ success: true, user: {
      email: user.email,
      name: user.name,
      phone: user.phone,
      dob: user.dob,
      address: user.address
    }});

    // 🔥 SET COOKIE PROPERLY (this is the correct way)
    const cookieStore = await cookies();
    cookieStore.set("fityou_auth", email, {
      httpOnly: true,
      secure: false,       // true in production
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;

  } catch (err) {
    console.log("OTP VERIFY ERROR:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
