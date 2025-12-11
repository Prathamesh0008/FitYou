import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, otp } = await req.json();
    console.log("VERIFY API BODY:", { email, otp });

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, error: "Email and OTP required" },
        { status: 400 }
      );
    }

    // Make sure global store exists
    if (!global.emailOtps) global.emailOtps = {};

    const record = global.emailOtps[email];
    console.log("OTP RECORD:", record);

    if (!record) {
      return NextResponse.json(
        { success: false, error: "OTP expired or not found" },
        { status: 400 }
      );
    }

    if (record.otp !== otp) {
      return NextResponse.json(
        { success: false, error: "Incorrect OTP" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ phone: record.phone });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    user.email = email;
    await user.save();

    delete global.emailOtps[email];

    return NextResponse.json({
      success: true,
      user: {
        email: user.email,
        phone: user.phone,
        name: user.name,
        dob: user.dob,
        address: user.address,
      },
    });
  } catch (err) {
    console.error("VERIFY OTP ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
