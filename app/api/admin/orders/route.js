import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    await dbConnect();

    // 🔐 AUTH
    const cookieStore = await cookies();
    const role = cookieStore.get("fityou_role")?.value;

    if (role !== "admin") {
      return NextResponse.json(
        { success: false, message: "Not authorised" },
        { status: 403 }
      );
    }

    // 👥 USERS WITH ORDERS
    const users = await User.find({
      "orders.0": { $exists: true },
    }).lean();

    const orders = [];

    users.forEach((user) => {
      (user.orders || []).forEach((order) => {
        const q = order.quizData || {};

        // ✅ PATIENT NAME – quiz > user > phone
        const patientName =
          q.fullName ||
          q.name ||
          `${q.firstName || ""} ${q.lastName || ""}`.trim() ||
          user.name ||
          user.phone ||
          "FitYou Patient";

        orders.push({
          // IDs
          id: order.orderId,
          orderId: order.orderId,

          // Patient
          patientName,
          phone: user.phone || "",
          email: user.email || "",

          // Product
          productType: order.productType,
          product:
            order.productType === "tablet"
              ? "FitYou GLP-1 Tablet Programme"
              : "FitYou GLP-1 Injection Programme",

          // Pricing
          amount: typeof order.amount === "number" ? order.amount : 0,

          // 🔥 CRITICAL FIELDS (ADMIN UI USES THESE)
          status: order.status || "Pending Doctor Review",
          riskLevel: order.riskLevel || "Medium",
          notes: order.notes || "",
          prescriptionUrl: order.prescriptionUrl || "",

          // 🔥 DATES (THIS FIXES “NOT SHOWING” ISSUE)
          createdAt: order.createdAt || user.createdAt,
          updatedAt:
            order.updatedAt || order.createdAt || user.createdAt,

          // Extra
          address: order.address || {},
          quizData: q,
        });
      });
    });

    // 🔽 LATEST UPDATED FIRST (Rx uploads float to top)
    orders.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
    );

    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (err) {
    console.error("❌ ADMIN ORDERS ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
