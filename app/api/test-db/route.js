// app/api/test-db/route.js
import dbConnect from "@/lib/db";

export async function GET() {
  try {
    console.log("🔍 Testing database connection...");
    
    // Check if MONGODB_URI is set
    if (!process.env.MONGODB_URI) {
      return Response.json({
        success: false,
        error: "MONGODB_URI environment variable is not set",
        note: "Add MONGODB_URI to Vercel Environment Variables"
      }, { status: 500 });
    }

    console.log("MONGODB_URI present:", process.env.MONGODB_URI ? "Yes" : "No");
    
    // Try to connect
    await dbConnect();
    
    return Response.json({
      success: true,
      message: "✅ Database connected successfully",
      connection: "Active",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("❌ Database test failed:", error.message);
    
    return Response.json({
      success: false,
      error: error.message,
      connection: "Failed",
      timestamp: new Date().toISOString(),
      note: "Check your MongoDB Atlas IP whitelist and connection string"
    }, { status: 500 });
  }
}