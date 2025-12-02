// app/api/chatbot/route.js
import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { saveChatToMongo } from "@/lib/chatStore";

export async function POST(req) {
  try {
    const body = await req.json();
    const { message, sessionId, history = [] } = body;

    if (!message || !sessionId) {
      return NextResponse.json(
        { error: "message and sessionId are required" },
        { status: 400 }
      );
    }

    // Build OpenAI chat messages
    const messages = [
      {
        role: "system",
        content:
          "You are FitYou Assistant, a friendly, concise GLP-1 / weight-management guide. Answer clearly, do not give medical diagnoses, always suggest talking to a doctor for personal medical decisions.",
      },
      ...history.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      { role: "user", content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages,
      temperature: 0.5,
    });

    const replyText =
      completion.choices?.[0]?.message?.content ||
      "Sorry, I couldn’t generate a response right now.";

    const aiMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: replyText,
      createdAt: new Date().toISOString(),
    };

    // Try saving to Mongo (optional)
    try {
      await saveChatToMongo(sessionId, [...history, aiMessage]);
    } catch (err) {
      console.error("Mongo save error (non-fatal):", err.message);
    }

    return NextResponse.json({ reply: aiMessage });
  } catch (err) {
    console.error("Chatbot API error:", err);
    return NextResponse.json(
      { error: "Internal error while generating reply." },
      { status: 500 }
    );
  }
}
