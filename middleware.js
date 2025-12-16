import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.pathname;

  // Read cookies
  const role = req.cookies.get("fityou_role")?.value || "user";

  // Protect ADMIN pages
  if (url.startsWith("/admin")) {
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  // Protect DOCTOR pages
  if (url.startsWith("/doctor")) {
    if (role !== "doctor" && role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  return NextResponse.next();
}

// Paths to match
export const config = {
  matcher: ["/admin/:path*", "/doctor/:path*"],
};
