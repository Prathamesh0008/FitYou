
import  dbConnect  from "@/lib/db";
import User from "@/models/User";
// import { verifyToken } from "@/lib/auth";

function requireAdmin(req) {
  const token = req.cookies.get("fityou_token")?.value;
  if (!token) throw new Error("No token");

  const decoded = verifyToken(token);
  if (!decoded) throw new Error("Invalid token");

  return decoded;
}

export async function GET(req) {
  try {
    await dbConnect();

    const decoded = requireAdmin(req);

    // Check if user is admin
    const adminUser = await User.findById(decoded.id);
    if (!adminUser || adminUser.role !== "admin") {
      throw new Error("Not admin");
    }

    // Get all users with quiz completed
    const submissions = await User.find({
      quizCompleted: true,
    }).select("-password");

    return Response.json({ submissions });
  } catch (e) {
    return Response.json({ error: "Not authorized" }, { status: 401 });
  }
}