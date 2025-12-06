import { cookies } from "next/headers";

/**
 * Set authentication cookie
 */
export async function setAuthCookie(email) {
  const cookieStore = await cookies();

  cookieStore.set("fityou_auth", email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

/**
 * Clear authentication cookie
 */
export async function clearAuthCookie() {
  const cookieStore = await cookies();

response.cookies.set("fityou_auth", user.email, {
  httpOnly: true,
  secure: false,        // 🔥 required for localhost
  sameSite: "strict",   // 🔥 prevents cookie rejection
  path: "/",
  maxAge: 60 * 60 * 24 * 30,
});

}
