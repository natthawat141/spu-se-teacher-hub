import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * AUTH DISABLED — ไม่บังคับ session ชั่วคราว
 * เปิดใช้เมื่อพร้อม: uncomment บล็อกด้านล่าง และ import readSessionFromRequest
 */
export async function middleware(_req: NextRequest) {
  return NextResponse.next();

  /*
  import { readSessionFromRequest } from "@/lib/auth";

  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/teacher/app") || pathname.startsWith("/teacher/profile")) {
    const session = await readSessionFromRequest(req);
    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/teacher";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
  */
}

export const config = {
  matcher: ["/teacher/app/:path*", "/teacher/profile/:path*"]
};
