// app/api/debug-otp/route.js
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return Response.json({ 
        success: false, 
        error: "Email required" 
      }, { status: 400 });
    }

    await dbConnect();
    console.log("✅ Database connected");

    const user = await User.findOne({ email });
    
    if (!user) {
      return Response.json({
        success: false,
        message: "User not found",
        email: email
      });
    }

    return Response.json({
      success: true,
      user: {
        email: user.email,
        otpCode: user.otpCode,
        otpExpires: user.otpExpires ? new Date(user.otpExpires).toISOString() : null,
        now: new Date().toISOString(),
        isExpired: user.otpExpires ? user.otpExpires < Date.now() : null
      }
    });

  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}