import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import ChatMessage from "@/models/ChatMessage";

export async function GET(req) {
  try {
    await dbConnect();

    const userId = req.nextUrl.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ success: false, history: [] });
    }

    const history = await ChatMessage.find({ userId }).sort({ time: 1 });

    return NextResponse.json({ success: true, history });
  } catch (err) {
    console.error("History API error:", err);
    return NextResponse.json({ success: false, history: [] });
  }
}