import { redirect } from "next/navigation";

/** เดิมเป็นหน้าแดชบอร์ดหลังล็อกอิน — รวมเข้า /teacher แล้ว */
export default function TeacherAppRedirect() {
  redirect("/teacher");
}
