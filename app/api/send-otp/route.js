import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ success: false, error: "Email is required" });
  }

  // Generate 6 digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // TEMP storage (replace with DB later)
  global.tempEmailOtp = { email, otp };

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.OTP_FROM,
      to: email,
      subject: "Your FitYou OTP",
      html: `
        <h2>Your OTP is <b>${otp}</b></h2>
        <p>Valid for 10 minutes.</p>
      `,
    });

    // 🔥 FRONTEND EXPECTS THIS
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("SMTP ERROR:", err);
    return NextResponse.json({ success: false, error: "Failed to send OTP" });
  }
}
