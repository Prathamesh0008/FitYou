import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import cloudinary from "@/lib/cloudinary";
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
    if (role !== "doctor") {
      return NextResponse.json(
        { success: false, message: "Not authorised" },
        { status: 403 }
      );
    }

    const { orderId, fileBase64 } = await req.json();

    if (!orderId || !fileBase64) {
      return NextResponse.json(
        { success: false, message: "orderId and fileBase64 required" },
        { status: 400 }
      );
    }

    // ✅ upload to cloudinary (image/pdf supported)
    const uploaded = await cloudinary.uploader.upload(fileBase64, {
      folder: "fityou/prescriptions",
      resource_type: "auto",
    });

    const prescriptionUrl = uploaded.secure_url;

    // ✅ save in DB
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
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    order.prescriptionUrl = prescriptionUrl;
    order.imageUploaded = true;
    order.status = "Approved";
    order.updatedAt = new Date();
    await user.save();

    // ✅ email patient
    if (user.email) {
      const transporter = makeTransporter();
      await transporter.sendMail({
        from: process.env.OTP_FROM || `"FitYou Medical" <${process.env.SMTP_USER}>`,
        to: user.email,
        subject: "Your FitYou Prescription",
        html: `
          <p>Hello ${user.name || "Patient"},</p>
          <p>Your prescription is ready.</p>
          <p><a href="${prescriptionUrl}" target="_blank">Download Prescription</a></p>
          <p>– FitYou</p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Uploaded + saved + emailed",
      prescriptionUrl,
    });
  } catch (err) {
    console.error("❌ upload-prescription error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
