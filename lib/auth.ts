import { jwtVerify, SignJWT } from "jose";
import crypto from "crypto";
import type { NextRequest } from "next/server";

const SESSION_COOKIE = "spubus_session";

export type Session = {
  sub: string;
  email: string;
  role: "teacher";
};

function getSecret() {
  const secret = process.env.AUTH_SECRET ?? "dev-secret-change-me";
  return new TextEncoder().encode(secret);
}

export function getSessionCookieName() {
  return SESSION_COOKIE;
}

export async function signSession(session: Session) {
  const now = Math.floor(Date.now() / 1000);
  return await new SignJWT({ email: session.email, role: session.role })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(session.sub)
    .setIssuedAt(now)
    .setExpirationTime(now + 60 * 60 * 24 * 7)
    .setJti(crypto.randomUUID())
    .sign(getSecret());
}

export async function readSessionFromRequest(req: NextRequest): Promise<Session | null> {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret(), { algorithms: ["HS256"] });
    const sub = payload.sub;
    const email = payload.email;
    const role = payload.role;
    if (typeof sub !== "string" || typeof email !== "string" || role !== "teacher") return null;
    return { sub, email, role };
  } catch {
    return null;
  }
}

