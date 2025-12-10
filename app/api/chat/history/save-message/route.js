import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import ChatMessage from "@/models/ChatMessage";

export async function POST(req) {
  try {
    await dbConnect();

    const { userId, userName, sender, text } = await req.json();

    if (!userId || !text || !sender) {
      return NextResponse.json({ success: false, error: "Missing fields" });
    }

    await ChatMessage.create({
      userId,
      userName,
      sender,
      text,
      time: new Date(),
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("save-message ERROR:", err);
    return NextResponse.json({ success: false, error: "Server error" });
  }
}