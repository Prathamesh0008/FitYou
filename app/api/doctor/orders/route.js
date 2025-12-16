import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    await dbConnect();

    // 🔐 AUTH CHECK
    const cookieStore = await cookies();
    const role = cookieStore.get("fityou_role")?.value;

    if (role !== "doctor") {
      return NextResponse.json(
        { success: false, message: "Not authorised" },
        { status: 403 }
      );
    }

    // 👤 USERS WITH AT LEAST ONE ORDER
    const users = await User.find({ "orders.0": { $exists: true } }).lean();

    const orders = [];

    users.forEach((user) => {
      (user.orders || []).forEach((order) => {
        const q = order.quizData || {};

        // ---------------- BMI CALCULATION (FIXED) ----------------
        const weightKg = q.weightKg ? Number(q.weightKg) : null;

        let heightCm = q.heightCm ? Number(q.heightCm) : null;
        const heightFeet = q.heightFeet ? Number(q.heightFeet) : null;
        const heightInch = q.heightInch ? Number(q.heightInch) : 0;

        // fallback if heightCm missing
        if (!heightCm && heightFeet) {
          heightCm = heightFeet * 30.48 + heightInch * 2.54;
        }

        let bmi = null;
        if (
          heightCm &&
          weightKg &&
          !Number.isNaN(heightCm) &&
          !Number.isNaN(weightKg)
        ) {
          const heightM = heightCm / 100;
          bmi = Number((weightKg / (heightM * heightM)).toFixed(1));
        }

        // ---------------- PATIENT NAME (NO CHANGE) ----------------
        const patientName =
          q.fullName ||
          q.name ||
          `${q.firstName || ""} ${q.lastName || ""}`.trim() ||
          user.name ||
          "Patient";

        orders.push({
          // IDs
          id: order.orderId,
          orderId: order.orderId,

          // PRODUCT
          productType: order.productType,
          product:
            order.productType === "tablet"
              ? "FitYou GLP-1 Tablet Programme"
              : "FitYou GLP-1 Injection Programme",

          // ORDER DATA
          amount: order.amount,
          status: order.status || "Pending Doctor Review",
          riskLevel: order.riskLevel || "Medium",
          notes: order.notes || "",
          prescriptionUrl: order.prescriptionUrl || "",

          createdAt: order.createdAt,
          updatedAt: order.updatedAt || order.createdAt,

          // 👤 PATIENT INFO
          patientName,
          phone: user.phone,
          email: user.email || "",

          address: order.address || user.address || {},

          // 🧠 QUIZ DATA WITH BMI
          quizData: {
            ...q,
            bmi, // ✅ NOW ALWAYS CALCULATED IF DATA EXISTS
          },
        });
      });
    });

    // 🔽 SORT BY LATEST UPDATE
    orders.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
    );

    return NextResponse.json({ success: true, orders });
  } catch (err) {
    console.error("❌ doctor orders error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
