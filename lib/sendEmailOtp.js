import nodemailer from "nodemailer";

export async function sendEmailOtp(email) {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Nodemailer transporter — using your ENV variables EXACTLY
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.OTP_FROM,
      to: email,
      subject: "FitYou Email Verification",
      text: `Your OTP is: ${otp}`,
    });

    // save otp in memory (for testing)
    global.emailOtps = global.emailOtps || {};
    global.emailOtps[email] = otp;

    // expire OTP
    setTimeout(() => delete global.emailOtps[email], 5 * 60 * 1000);

    return { success: true };
  } catch (err) {
    console.error("Email OTP send error:", err);
    return { success: false, error: err.message };
  }
}
