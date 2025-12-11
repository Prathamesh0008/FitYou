import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await dbConnect();

    const { email } = await req.json();
    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email required" },
        { status: 400 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // INIT GLOBAL OTP STORE
    if (!global.emailOtps) global.emailOtps = {};

    // Get logged in user's phone for mapping
    const phone = req.cookies.get("fityou_auth")?.value;

    global.emailOtps[email] = {
      otp,
      phone, // IMPORTANT
      createdAt: Date.now(),
    };

    // SEND EMAIL
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.OTP_FROM,
      to: email,
      subject: "FitYou Email Verification",
      text: `Your OTP is ${otp}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SEND OTP ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send OTP" },
      { status: 500 }
    );
  }
}
