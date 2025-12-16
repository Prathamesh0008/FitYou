import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function POST(request) {
  try {
    await dbConnect();

    // 1️⃣ Get phone + role from cookies
    const phone = request.cookies.get("fityou_auth")?.value;
    const role = request.cookies.get("fityou_role")?.value || "user";

    console.log("📱 Cookie phone:", phone, " | Role:", role);

    if (!phone) {
      return NextResponse.json(
        { success: false, message: "Not logged in — missing cookie" },
        { status: 401 }
      );
    }

    // ❌ Doctors & Admin cannot place orders
    if (role === "doctor" || role === "admin") {
      return NextResponse.json(
        {
          success: false,
          message: "Only customers can create orders. Doctors/Admins cannot.",
        },
        { status: 403 }
      );
    }

    // 2️⃣ Find user by phone
    const user = await User.findOne({ phone });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // 3️⃣ Read incoming order data
    const body = await request.json();
    console.log("📥 Incoming Order Payload:", body);

    // 4️⃣ Generate unique orderId
    const orderId = "FTY-" + Math.floor(100000 + Math.random() * 900000);

    // 5️⃣ Dynamic Pricing
    let amount = 0;
    if (body.productType === "tablet") amount = 10999;
    if (body.productType === "injection") amount = 15999;

    // 6️⃣ Build FULL medical order object
    const newOrder = {
      orderId,
      productType: body.productType || "unknown",

      address: body.address || {},
      imageUploaded: body.imageUploaded || false,
      confirmations: body.confirmations || {},
      quizData: body.quizData || {},

      amount,
      riskLevel: "Medium",

      status: "Pending Doctor Review",
      notes: "",
      prescriptionUrl: "",

      // ⭐ DOCTOR REVIEW FIELDS — Default empty
      reviewedBy: "",
      reviewedRole: "",
      reviewedAt: null,

      createdAt: new Date(),
    };

    // 7️⃣ Save order
    user.orders.push(newOrder);
    await user.save();

    console.log("✅ ORDER SAVED:", newOrder);

    return NextResponse.json({
      success: true,
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (err) {
    console.error("❌ ORDER CREATE API ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
