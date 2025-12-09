// app/api/health/route.js
export async function GET() {
  return Response.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION || "local",
    nodeEnv: process.env.NODE_ENV,
    timeout: false
  });
}