import dbConnect from "@/lib/db";
import User from "@/models/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("📌 QUIZ API HIT");

    await dbConnect();
    console.log("📌 DB Connected");

    // The cookie now stores PHONE, not email
    const cookieStore = await cookies();
    const phone = cookieStore.get("fityou_auth")?.value;

    console.log("📌 Cookie Phone:", phone);

    if (!phone) {
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

    // FIND USER BY PHONE, NOT EMAIL
    const user = await User.findOne({ phone });

    if (!user) {
      console.log("❌ No user found for phone:", phone);
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
