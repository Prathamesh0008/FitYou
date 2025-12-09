// app/api/send-otp-simple/route.js
export async function POST(req) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return Response.json({ success: false, error: "Email required" }, { status: 400 });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    
    // Store in memory (temporary for testing)
    // In production, use a proper store like Redis
    global.otpStore = global.otpStore || {};
    global.otpStore[email] = {
      otp,
      expires: Date.now() + 5 * 60 * 1000
    };

    console.log(`OTP for ${email}: ${otp}`);
    
    return Response.json({
      success: true,
      message: "OTP generated",
      otp: process.env.NODE_ENV === 'development' ? otp : undefined,
      email: email,
      note: "Using memory store - not persistent"
    });
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}