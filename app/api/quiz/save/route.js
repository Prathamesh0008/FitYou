// // app/api/quiz/save/route.js
// import { connectDB } from "@/lib/db";
// import User from "@/models/User";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const { email, answers } = await req.json();

//     if (!email) {
//       return Response.json(
//         { success: false, error: "Email is required" },
//         { status: 400 }
//       );
//     }

//     if (!answers || typeof answers !== "object") {
//       return Response.json(
//         { success: false, error: "Answers object is required" },
//         { status: 400 }
//       );
//     }

//     const heightCm = Number(answers.heightCm || 0);
//     const weightKg = Number(answers.weightKg || 0);
//     const bmi =
//       heightCm > 0 && weightKg > 0
//         ? Number((weightKg / ((heightCm / 100) ** 2)).toFixed(1))
//         : null;

//     await User.findOneAndUpdate(
//       { email },
//       {
//         email,
//         quizAnswers: answers,
//         quizCompleted: true,
//         quizCompletedAt: new Date(),
//         heightCm: heightCm || undefined,
//         weightKg: weightKg || undefined,
//         bmi: bmi || undefined,
//       },
//       { upsert: true, new: true }
//     );

//     return Response.json({ success: true });
//   } catch (err) {
//     console.error("Quiz save error:", err);
//     return Response.json(
//       { success: false, error: "Server error" },
//       { status: 500 }
//     );
//   }
// }

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

//     const { answers } = await req.json();

//     if (!answers || typeof answers !== "object") {
//       return Response.json(
//         { success: false, error: "Answers object is required" },
//         { status: 400 }
//       );
//     }

//     const heightCm = Number(answers.heightCm || 0);
//     const weightKg = Number(answers.weightKg || 0);
//     const bmi =
//       heightCm > 0 && weightKg > 0
//         ? Number((weightKg / ((heightCm / 100) ** 2)).toFixed(1))
//         : null;

//     await User.findByIdAndUpdate(
//       decoded.id,
//       {
//         quizAnswers: answers,
//         quizCompleted: true,
//         quizCompletedAt: new Date(),
//         heightCm: heightCm || undefined,
//         weightKg: weightKg || undefined,
//         bmi: bmi || undefined,
//       },
//       { new: true }
//     );

//     return Response.json({ success: true });
//   } catch (err) {
//     console.error("Quiz save error:", err);
//     return Response.json(
//       { success: false, error: "Server error" },
//       { status: 500 }
//     );
//   }
// }