import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.log("⚠ No MONGO_URI found — using local fallback.");
  }

  try {
    await mongoose.connect(uri || "mongodb://localhost:27017/fityou_fallback");
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
  }
}
