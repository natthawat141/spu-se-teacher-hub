/** AUTH API — ปิดใช้ชั่วคราว เปิดเมื่อเปิด Authentication */
import { NextResponse } from "next/server";
import { RegisterSchema } from "@/lib/validators";
import { createUser, getUserByEmail } from "@/lib/db";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { getSessionCookieName, signSession } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = RegisterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 });
  }

  const { email, password } = parsed.data;
  const existing = getUserByEmail(email);
  if (existing) {
    return NextResponse.json({ ok: false, message: "อีเมลนี้ถูกใช้งานแล้ว" }, { status: 409 });
  }

  const password_hash = await bcrypt.hash(password, 10);
  const user = createUser({ id: randomUUID(), email, password_hash });

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

