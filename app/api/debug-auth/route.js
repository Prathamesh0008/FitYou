// app/api/debug-auth/route.js
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("fityou_auth");
  
  return NextResponse.json({
    hasCookie: !!authCookie,
    cookieValue: authCookie?.value || null,
    allCookies: Object.fromEntries(cookieStore.getAll().map(c => [c.name, c.value])),
    nodeEnv: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production'
  });
}