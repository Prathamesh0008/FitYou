import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";

export async function GET() {
  try {
    console.log("🔍 Testing database connection...");
    await dbConnect();
    console.log("✅ Database connected successfully");
    
    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      mongodbUri: process.env.MONGODB_URI ? "***" : "MISSING"
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    
    return NextResponse.json({
      success: false,
      error: error.message,
      mongodbUri: process.env.MONGODB_URI ? "***" : "MISSING"
    }, { status: 500 });
  }
}