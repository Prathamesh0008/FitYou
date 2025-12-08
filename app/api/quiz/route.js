import dbConnect from "@/lib/db";
import User from "@/models/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("📌 QUIZ API HIT");

    await dbConnect();
    console.log("📌 DB Connected");

    // NEW correct cookie parsing
    const cookieStore = await cookies();
    const email = cookieStore.get("fityou_auth")?.value;

    console.log("📌 Cookie Email:", email);

    if (!email) {
      console.log("❌ User not logged in");
      return NextResponse.json(
        { success: false, error: "Not logged in" },
        { status: 401 }
      );
    }

    const body = await req.json();
    console.log("📌 Received body:", body);

    const { quiz } = body;

    if (!quiz) {
      console.log("❌ Quiz data missing");
      return NextResponse.json(
        { success: false, error: "Quiz missing" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ No user found for email:", email);
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    user.quiz = quiz;
    await user.save();

    console.log("✅ QUIZ SAVED SUCCESSFULLY");

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("❌ QUIZ API ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 }
    );
  }
}
