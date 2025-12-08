import dbConnect from "@/lib/db";
import User from "@/models/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const cookieStore = await cookies();
  const email = cookieStore.get("fityou_auth")?.value || null;

  if (!email) {
    return NextResponse.json({ user: null });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: {
      email: user.email,
      name: user.name,
      phone: user.phone,
      dob: user.dob,
      address: user.address,
      quiz: user.quiz || {},
    },
  });
}
