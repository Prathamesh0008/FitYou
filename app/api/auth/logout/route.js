// import { NextResponse } from "next/server";

// export async function POST() {
//   const res = NextResponse.json({ message: "Logged out" });
//   res.cookies.set("token", "", { path: "/", maxAge: 0 });
//   return res;
// }

// ***********************************************************************************************************
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export async function POST() {
//   const response = NextResponse.json({ success: true });

//   response.cookies.set("token", "", {
//     expires: new Date(0),
//     path: "/",
//   });

//   return response;
// }

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();

  cookieStore.set("fityou_auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0, // delete cookie
  });

  return NextResponse.json({ success: true });
}

