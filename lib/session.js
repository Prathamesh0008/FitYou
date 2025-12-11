import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { cookies } from "next/headers";

export async function GET() {
  try {
    await dbConnect();

    const cookieStore = cookies();
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
        phone: user.phone,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("auth/me error:", err);
    return NextResponse.json({ user: null });
  }
}
