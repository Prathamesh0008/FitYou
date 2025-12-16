import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await dbConnect();

    // ✅ AUTH CHECK (MANDATORY)
    const cookieStore = await cookies();
    const role = cookieStore.get("fityou_role")?.value;

    if (role !== "admin") {
      return NextResponse.json(
        { success: false, message: "Not authorised" },
        { status: 403 }
      );
    }

    const { orderId, status, notes } = await req.json();

    if (!orderId || !status) {
      return NextResponse.json(
        { success: false, message: "orderId and status required" },
        { status: 400 }
      );
    }

    // 🔍 Find user having this order
    const user = await User.findOne({ "orders.orderId": orderId });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    // ✅ FIND ORDER SUBDOCUMENT
    const order = user.orders.find((o) => o.orderId === orderId);
    if (!order) {
      return NextResponse.json(
        { success: false, message: "Order not found inside user" },
        { status: 404 }
      );
    }

    // ✅ UPDATE (SINGLE SOURCE OF TRUTH)
    order.status = status;
    order.updatedAt = new Date();

    if (typeof notes === "string") {
      order.notes = notes;
    }

    await user.save();

    return NextResponse.json({
      success: true,
      message: "Admin order update successful",
    });
  } catch (err) {
    console.error("❌ admin update error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
