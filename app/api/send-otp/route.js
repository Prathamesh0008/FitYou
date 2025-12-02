import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ success: false, error: "Email missing" });
  }

  // Generate 6 digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store in memory (use DB later)
  global.tempEmailOtp = { email, otp };

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // MOST RELIABLE SENDER
      to: email,
      subject: "Your FitYou Login OTP",
      html: `
        <h2>Your OTP is: <b>${otp}</b></h2>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log("RESEND ERROR:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
