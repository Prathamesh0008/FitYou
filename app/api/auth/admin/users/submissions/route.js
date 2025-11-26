import jwt from "jsonwebtoken";
import { localDB } from "@/lib/localDB";

function requireAdmin(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) throw new Error("No token");
  const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev-secret");
  const user = localDB.users.find((u) => u.id === decoded.id);
  if (!user || user.role !== "admin") throw new Error("Not admin");
  return user;
}

export async function GET(req) {
  try {
    requireAdmin(req);

    const submissions = localDB.quizSubmissions.map((s) => {
      const user = localDB.users.find((u) => u.id === s.userId);
      return {
        ...s,
        userName: user?.name || "Unknown",
        userEmail: user?.email || "",
      };
    });

    return Response.json({ submissions });
  } catch (e) {
    return Response.json({ error: "Not authorized" }, { status: 401 });
  }
}
