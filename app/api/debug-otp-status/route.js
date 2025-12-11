// app/api/debug-otp-status/route.js
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
    
    const user = await User.findOne({ phone });

    
    if (!user) {
      return Response.json({
        success: false,
        message: "User not found in database",
        email: email
      });
    }

    const currentTime = Date.now();
    const isExpired = user.otpExpires ? user.otpExpires < currentTime : true;
    const timeLeft = user.otpExpires ? Math.max(0, user.otpExpires - currentTime) : 0;
    
    return Response.json({
      success: true,
      user: {
        email: user.email,
        otpCode: user.otpCode || "NULL",
        otpExpires: user.otpExpires,
        otpExpiresHuman: user.otpExpires ? new Date(user.otpExpires).toISOString() : null,
        currentTime: currentTime,
        currentTimeHuman: new Date(currentTime).toISOString(),
        isExpired: isExpired,
        timeLeftSeconds: Math.floor(timeLeft / 1000),
        timeLeftMinutes: (timeLeft / 60000).toFixed(2),
        hasOtp: !!user.otpCode,
        otpLength: user.otpCode ? user.otpCode.length : 0
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