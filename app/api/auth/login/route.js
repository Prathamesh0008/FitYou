import { localDB } from "@/lib/localDB";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = localDB.users.find((u) => u.email === email);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "dev-secret",
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      message: "Logged in",
      user: { id: user.id, name: user.name, email: user.email },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
