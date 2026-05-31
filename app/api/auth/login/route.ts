/** AUTH API — ปิดใช้ชั่วคราว (UI ไม่เรียก endpoint นี้) เปิดเมื่อเปิด Authentication */
import { NextResponse } from "next/server";
import { LoginSchema } from "@/lib/validators";
import { getUserByEmail } from "@/lib/db";
import bcrypt from "bcryptjs";
import { getSessionCookieName, signSession } from "@/lib/auth";

function normalizeEmailOrUsername(v: string) {
  const trimmed = v.trim().toLowerCase();
  if (trimmed.includes("@")) return trimmed;
  return `${trimmed}@spu.ac.th`;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = LoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 });
  }

  const email = normalizeEmailOrUsername(parsed.data.emailOrUsername);
  if (!email.endsWith("@spu.ac.th")) {
    return NextResponse.json({ ok: false, message: "กรุณาใช้อีเมล @spu.ac.th" }, { status: 400 });
  }

  const user = getUserByEmail(email);
  if (!user) {
    return NextResponse.json({ ok: false, message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" }, { status: 401 });
  }

  const ok = await bcrypt.compare(parsed.data.password, user.password_hash);
  if (!ok) {
    return NextResponse.json({ ok: false, message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" }, { status: 401 });
  }

  const token = await signSession({ sub: user.id, email: user.email, role: "teacher" });
  const res = NextResponse.json({ ok: true, user: { id: user.id, email: user.email, role: user.role } });
  res.cookies.set(getSessionCookieName(), token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
  return res;
}

