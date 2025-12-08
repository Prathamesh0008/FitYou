import  dbConnect  from "@/lib/db";
// import Plan from "@/models/Plan";

export async function GET() {
  try {
    await dbConnect();

    const plans = await Plan.find({ active: true });

    return Response.json({ plans });
  } catch (err) {
    console.error("Plans fetch error:", err);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}