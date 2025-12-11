import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();

    const { phone, password } = await req.json();

    if (!phone || !password) {
      return NextResponse.json(
        { error: "Phone and password required" },
        { status: 400 }
      );
    }

    // 👉 Find user by phone (not email)
    const user = await User.findOne({ phone });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid phone or password" },
        { status: 400 }
      );
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json(
        { error: "Invalid phone or password" },
        { status: 400 }
      );
    }

    // 👉 Make response
    const response = NextResponse.json({
      message: "Logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
      },
    });

    // 👉 Set cookie WITH PHONE (NOT EMAIL)
    response.cookies.set("fityou_auth", user.phone, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
