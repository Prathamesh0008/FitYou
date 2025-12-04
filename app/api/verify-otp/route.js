// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { email, otp } = await req.json();

//   if (!global.tempEmailOtp) {
//     return NextResponse.json({ error: "No OTP found" }, { status: 400 });
//   }

//   if (
//     global.tempEmailOtp.email === email &&
//     global.tempEmailOtp.otp === otp
//   ) {
//     const response = NextResponse.json({ success: true });

//     // Create login cookie
//     response.cookies.set("token", email, {
//       httpOnly: true,
//       secure: true,
//       path: "/",
//       maxAge: 60 * 60 * 24 * 7, // 7 days
//     });

//     return response;
//   }

//   return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
// }

// ************************Email OTP*************************New **************

// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { email, otp } = await req.json();

//   // SAFETY CHECK
//   if (!email || !otp) {
//     return NextResponse.json({ success: false, error: "Missing fields" });
//   }

//   // CHECK IF TEMP OTP EXISTS
//   if (
//     !global.tempEmailOtp ||
//     global.tempEmailOtp.email !== email ||
//     global.tempEmailOtp.otp !== otp
//   ) {
//     return NextResponse.json({
//       success: false,
//       error: "Invalid or expired OTP",
//     });
//   }

//   // OPTIONAL: clear stored otp after success
//   global.tempEmailOtp = null;

//   return NextResponse.json({ success: true });
// }


import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, otp } = await req.json();

  if (!email || !otp) {
    return NextResponse.json({ success: false });
  }

  // Check OTP
  if (
    !global.tempEmailOtp ||
    global.tempEmailOtp.email !== email ||
    global.tempEmailOtp.otp !== otp
  ) {
    return NextResponse.json({ success: false });
  }

  // Clear OTP
  global.tempEmailOtp = null;

  // Create JWT token
  const token = jwt.sign({ email }, "MY_SECRET_KEY", { expiresIn: "7d" });

  // Store token in cookie
  const response = NextResponse.json({ success: true });

  response.cookies.set("fityou_token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  return response;
}
