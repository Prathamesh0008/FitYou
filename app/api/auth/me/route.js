import dbConnect from "@/lib/db";
import User from "@/models/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("👤 /api/auth/me called");

  try {
    // -------- GET COOKIES --------
    const cookieStore = cookies();

    const email = cookieStore.get("fityou_auth")?.value || null;
    const token = cookieStore.get("token")?.value || null;

    console.log("Cookie email:", email);
    console.log("Cookie token:", token);

    // If no cookies → user not logged in
    if (!email && !token) {
      console.log("❌ No auth cookie found");
      return NextResponse.json({ user: null });
    }

    // -------- CONNECT DB --------
    await dbConnect();
    console.log("✅ Database connected");

    let user = null;

    // -------- FIND BY EMAIL --------
    if (email) {
      user = await User.findOne({ email }).lean();
    }

    // -------- FIND BY TOKEN --------
    if (!user && token) {
      user = await User.findOne({ token }).lean();
    }

    // -------- USER NOT FOUND --------
    if (!user) {
      console.log("❌ User not found in DB");

      const res = NextResponse.json({ user: null });

      // Clear both cookies (in case either is invalid)
      res.cookies.set("fityou_auth", "", { expires: new Date(0) });
      res.cookies.set("token", "", { expires: new Date(0) });

      return res;
    }

    // -------- USER FOUND --------
    console.log("✅ User found:", user.email || user.name);

    return NextResponse.json({
      user: {
        id: user._id?.toString(),
        email: user.email || null,
        name: user.fullName || user.name || "User",
        phone: user.phone || null,
        dob: user.dob || null,
        address: user.address || null,
        quiz: user.quiz || {},
      },
    });

  } catch (err) {
    console.error("💥 /api/auth/me ERROR:", err);

    return NextResponse.json({
      user: null,
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
}


















// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/db";
// import User from "@/models/User"; // your user model

// export async function GET(req) {
//   await dbConnect();

//   const token = req.cookies.get("token")?.value;

//   if (!token) {
//     return NextResponse.json({ user: null });
//   }

//   const user = await User.findOne({ token }).lean();

//   if (!user) {
//     return NextResponse.json({ user: null });
//   }

//   return NextResponse.json({
//     user: {
//       id: user._id.toString(),
//       email: user.email,
//       name: user.fullName || user.name || "User",
//     },
//   });
// }
























// import dbConnect from "@/lib/db";
// import User from "@/models/User";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export async function GET() {
//   console.log("👤 /api/auth/me called");
  
//   try {
//     const cookieStore = await cookies();
//     const email = cookieStore.get("fityou_auth")?.value || null;
    
//     console.log("Cookie email:", email);

//     if (!email) {
//       console.log("❌ No auth cookie found");
//       return NextResponse.json({ user: null });
//     }

//     await dbConnect();
//     console.log("✅ Database connected");

//     const user = await User.findOne({ email });

//     if (!user) {
//       console.log("❌ User not found in database for email:", email);
      
//       // Clear invalid cookie
//       const response = NextResponse.json({ user: null });
//       response.cookies.delete("fityou_auth");
//       return response;
//     }

//     console.log("✅ User found:", user.email);
//     return NextResponse.json({
//       user: {
//         email: user.email,
//         name: user.name,
//         phone: user.phone,
//         dob: user.dob,
//         address: user.address,
//         quiz: user.quiz || {},
//       },
//     });
    
//   } catch (err) {
//     console.error("💥 /api/auth/me ERROR:", err);
    
//     // Return null user on error (don't crash the frontend)
//     return NextResponse.json({ 
//       user: null,
//       error: process.env.NODE_ENV === 'development' ? err.message : undefined
//     });
//   }
// }