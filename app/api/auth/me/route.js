// import jwt from "jsonwebtoken";
// import { localDB } from "@/lib/localDB";

// export async function GET(req) {
//   try {
//     const token = req.cookies.get("token")?.value;
//     if (!token) return Response.json({ user: null });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev-secret");

//     const user = localDB.users.find((u) => u.id === decoded.id);
//     if (!user) return Response.json({ user: null });

//     return Response.json({
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch {
//     return Response.json({ user: null });
//   }
// }
// ************************************************************************************************
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const email = cookies().get("token")?.value || null;

//   return NextResponse.json({
//     user: email ? { email } : null,
//   });
// }

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    const cookie = req.cookies.get("fityou_token")?.value;

    if (!cookie) {
      return NextResponse.json({ user: null });
    }

    const decoded = jwt.verify(cookie, "MY_SECRET_KEY");

    return NextResponse.json({ user: { email: decoded.email } });
  } catch (err) {
    return NextResponse.json({ user: null });
  }
}

