import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { message } = await req.json();

    const result = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
      max_tokens: 120,
    });

    return NextResponse.json({ reply: result.choices[0].message.content });
  } catch (err) {
    return NextResponse.json({ reply: "⚠️ Please try again later." });
  }
}
