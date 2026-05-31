/**
 * =============================================================================
 * AUTHENTICATION — ปิดใช้งานชั่วคราว
 * =============================================================================
 * เปิดใช้เมื่อพร้อมพัฒนาระบบจริง:
 * 1. เปลี่ยน app/teacher/page.tsx ให้ใช้ TeacherAuthPage แทน AppShell (หรือ guard + redirect)
 * 2. เปิด middleware ใน middleware.ts
 * 3. เปิด API routes ใน app/api/auth/*
 * 4. แสดงปุ่มโปรไฟล์ / ออกจากระบบ ใน AppShell header
 * =============================================================================
 */

/*
"use client";

import { useMemo, useState } from "react";

type Mode = "login" | "register";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function TeacherAuthPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const title = useMemo(() => (mode === "login" ? "ยินดีต้อนรับ!" : "สร้างบัญชี"), [mode]);
  const subtitle = useMemo(
    () => (mode === "login" ? "สำหรับอาจารย์และบุคลากรที่มี @spu.ac.th" : "สำหรับอาจารย์และบุคลากรที่มี @spu.ac.th"),
    [mode]
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch(mode === "login" ? "/api/auth/login" : "/api/auth/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body:
          mode === "login"
            ? JSON.stringify({ emailOrUsername, password })
            : JSON.stringify({ email, password })
      });

      const data = (await res.json().catch(() => null)) as { message?: string } | null;
      if (!res.ok) {
        setMessage(data?.message ?? "เกิดข้อผิดพลาด กรุณาลองใหม่");
        return;
      }

      window.location.href = "/teacher/app";
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-dvh px-4 py-10">
      ... ฟอร์ม login/register เดิม ...
    </main>
  );
}
*/

export {};
