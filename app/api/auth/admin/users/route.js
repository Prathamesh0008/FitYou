// import { connectDB } from "@/lib/db";
import  dbConnect  from "@/lib/db";
// import Order from "@/models/Order";
// import { verifyToken } from "@/lib/auth";

export async function POST(req) {
  try {
    // await connectDB();
    await dbConnect()

    const token = req.cookies.get("fityou_token")?.value;
    if (!token) {
      return Response.json(
        { success: false, error: "Not authenticated" },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return Response.json(
        { success: false, error: "Invalid token" },
        { status: 401 }
      );
    }

    const { address, amount = 13125, planId, planName } = await req.json();

    if (!address) {
      return Response.json(
        { success: false, error: "Address required" },
        { status: 400 }
      );
    }

    const order = await Order.create({
      userId: decoded.id,
      email: decoded.email,
      address: {
        name: address.name || "",
        surname: address.surname || "",
        phone: address.phone || "",
        email: address.email || "",
        pincode: address.pincode || "",
        flat: address.flat || "",
        area: address.area || "",
        landmark: address.landmark || "",
        city: address.city || "",
        state: address.state || "",
        billingSame: address.billingSame !== false,
      },
      amount,
      planId,
      planName,
      status: "pending",
    });

    return Response.json({
      success: true,
      order: {
        id: order._id,
        amount: order.amount,
      },
    });
  } catch (err) {
    console.error("Order creation error:", err);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}