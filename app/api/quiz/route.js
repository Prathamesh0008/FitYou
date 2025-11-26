import jwt from "jsonwebtoken";
import { localDB } from "@/lib/localDB";

export async function POST(req) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return Response.json({ error: "Not logged in" }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev-secret");
    const userId = decoded.id;

    const { age, heightCm, weightKg, conditions = [], medications = [] } =
      await req.json();

    const bmi = Number((weightKg / ((heightCm / 100) ** 2)).toFixed(1));
    const eligible = age >= 18;
    const notes = eligible
      ? "Eligible for Fityou programme."
      : "Programme requires age 18+.";

    const submission = {
      id: Date.now().toString(),
      userId,
      age,
      heightCm,
      weightKg,
      conditions,
      medications,
      bmi,
      eligible,
      notes,
      createdAt: new Date(),
    };

    localDB.quizSubmissions.push(submission);

    return Response.json({ bmi, eligible, notes }, { status: 200 });
  } catch (err) {
    console.error("Quiz error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
