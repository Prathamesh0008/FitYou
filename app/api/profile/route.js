import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await dbConnect();

const cookieStore = await cookies();
const phone = cookieStore.get("fityou_auth")?.value;


    if (!phone) {
      return NextResponse.json({ success: false, error: "Not authenticated" });
    }

    const user = await User.findOne({ phone });

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" });
    }

    const body = await req.json();

    user.name = body.name ?? user.name;
    user.phone = body.phone ?? user.phone;
    user.dob = body.dob ?? user.dob;
    user.address = body.address ?? user.address;

    await user.save();

    return NextResponse.json({
      success: true,
      user: {
        email: user.email || "",
        phone: user.phone,
        name: user.name,
        dob: user.dob,
        address: user.address,
      },
    });
  } catch (err) {
    console.error("PROFILE UPDATE ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
