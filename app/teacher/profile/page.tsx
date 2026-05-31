import { redirect } from "next/navigation";

/** โปรไฟล์ — เปิดเมื่อเปิด Authentication กลับ */
export default function TeacherProfileRedirect() {
  redirect("/teacher");
}
