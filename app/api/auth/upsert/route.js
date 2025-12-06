
// import { connectDB } from "@/lib/db";
// import User from "@/models/User";
// import { verifyToken } from "@/lib/auth";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const token = req.cookies.get("fityou_token")?.value;
//     if (!token) {
//       return Response.json(
//         { success: false, error: "Not authenticated" },
//         { status: 401 }
//       );
//     }

//     const decoded = verifyToken(token);
//     if (!decoded) {
//       return Response.json(
//         { success: false, error: "Invalid token" },
//         { status: 401 }
//       );
//     }

//     const { name, phone, dob, address } = await req.json();

//     const user = await User.findByIdAndUpdate(
//       decoded.id,
//       {
//         name,
//         phone,
//         dob,
//         address,
//       },
//       { new: true }
//     ).select("-password");

//     return Response.json({ success: true, user });
//   } catch (err) {
//     console.error("User upsert error:", err);
//     return Response.json(
//       { success: false, error: "Server error" },
//       { status: 500 }
//     );
//   }
// }