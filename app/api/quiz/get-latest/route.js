import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function GET(req) {
  await dbConnect();

  const email = req.nextUrl.searchParams.get("email");
  if (!email) return Response.json({ quiz: null });

  const user = await User.findOne({ email }).lean();

  return Response.json({ quiz: user?.quiz ?? null });
}
