// import { NextResponse } from "next/server";

// export async function POST() {
//   const res = NextResponse.json({ message: "Logged out" });
//   res.cookies.set("token", "", { path: "/", maxAge: 0 });
//   return res;
// }

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set("token", "", {
    expires: new Date(0),
    path: "/",
  });

  return response;
}
