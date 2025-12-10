import dbConnect from "@/lib/db";
import User from "@/models/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("👤 /api/auth/me called");
  
  try {
    const cookieStore = await cookies();
    const email = cookieStore.get("fityou_auth")?.value || null;
    
    console.log("Cookie email:", email);

    if (!email) {
      console.log("❌ No auth cookie found");
      return NextResponse.json({ user: null });
    }

    await dbConnect();
    console.log("✅ Database connected");

    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User not found in database for email:", email);
      
      // Clear invalid cookie
      const response = NextResponse.json({ user: null });
      response.cookies.delete("fityou_auth");
      return response;
    }

    console.log("✅ User found:", user.email);
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
    
  } catch (err) {
    console.error("💥 /api/auth/me ERROR:", err);
    
    // Return null user on error (don't crash the frontend)
    return NextResponse.json({ 
      user: null,
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
}