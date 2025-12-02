import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, otp } = await req.json();

  if (!global.tempEmailOtp) {
    return NextResponse.json({ error: "No OTP found" }, { status: 400 });
  }

  if (
    global.tempEmailOtp.email === email &&
    global.tempEmailOtp.otp === otp
  ) {
    const response = NextResponse.json({ success: true });

    // Create login cookie
    response.cookies.set("token", email, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  }

  return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
}
