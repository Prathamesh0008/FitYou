import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    await dbConnect();

    const cookieStore = await cookies(); // ✅ MUST AWAIT
    const phone = cookieStore.get("fityou_auth")?.value;

    if (!phone) {
      return NextResponse.json({ user: null });
    }

    const user = await User.findOne({ phone });

    if (!user) {
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({
      user: {
        email: user.email || "",
        phone: user.phone,
        name: user.name || "",
        dob: user.dob || "",
        address: user.address || {},
        quiz: user.quiz || {} ,
      },
    });
  } catch (err) {
    console.error("AUTH ME ERROR:", err);
    return NextResponse.json({ user: null });
  }
}
