import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import nodemailer from "nodemailer";

function makeTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(req) {
  try {
    await dbConnect();

    const cookieStore = await cookies();
    const role = cookieStore.get("fityou_role")?.value;

    if (role !== "doctor" && role !== "admin") {
      return NextResponse.json(
        { success: false, message: "Not authorised" },
        { status: 403 }
      );
    }

    const { orderId, status, notes, prescriptionUrl, sendEmail } = await req.json();

    if (!orderId || !status) {
      return NextResponse.json(
        { success: false, message: "orderId and status required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ "orders.orderId": orderId });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    const order = user.orders.find((o) => o.orderId === orderId);
    if (!order) {
      return NextResponse.json(
        { success: false, message: "Order not found in user" },
        { status: 404 }
      );
    }

    // ✅ UPDATE
    order.status = status;
    if (typeof notes === "string") order.notes = notes;

    // ✅ THIS IS THE KEY FIX: save prescriptionUrl if provided
    if (typeof prescriptionUrl === "string" && prescriptionUrl.trim().length > 0) {
      order.prescriptionUrl = prescriptionUrl.trim();
      order.imageUploaded = true;
    }

    order.updatedAt = new Date();
    await user.save();

    // ✅ OPTIONAL: if you want email from this endpoint ALSO
    // sendEmail=true only when you want to mail
    if (
      sendEmail === true &&
      user.email &&
      order.prescriptionUrl &&
      order.prescriptionUrl.trim().length > 0
    ) {
      const transporter = makeTransporter();
      await transporter.sendMail({
        from: process.env.OTP_FROM || `"FitYou Medical" <${process.env.SMTP_USER}>`,
        to: user.email,
        subject: "Your FitYou Prescription",
        html: `
          <p>Hello ${user.name || "Patient"},</p>
          <p>Your prescription is ready.</p>
          <p><a href="${order.prescriptionUrl}" target="_blank">Download Prescription</a></p>
          <p>– FitYou</p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Doctor decision saved",
      prescriptionUrl: order.prescriptionUrl || "",
    });
  } catch (err) {
    console.error("❌ doctor update error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
