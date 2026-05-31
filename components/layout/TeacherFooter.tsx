import Image from "next/image";
import Link from "next/link";

export function TeacherFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="teacher-footer">
      <div className="teacher-footer-inner">
        <div className="teacher-footer-brand">
          <Image
            src="/brand/spu-se-logo.png"
            alt=""
            width={28}
            height={28}
            className="teacher-footer-logo"
          />
          <div>
            <p className="teacher-footer-title">Teacher Hub · SPU SE</p>
            <p className="teacher-footer-sub">
              คณะการสร้างเจ้าของธุรกิจ · มหาวิทยาลัยศรีปทุม
            </p>
          </div>
        </div>

        <div className="teacher-footer-links">
          <Link href="/teacher" className="teacher-footer-link">
            หน้าหลัก
          </Link>
          <a
            href="https://www.spu.ac.th"
            target="_blank"
            rel="noopener noreferrer"
            className="teacher-footer-link"
          >
            มหาวิทยาลัยศรีปทุม
          </a>
        </div>

        <p className="teacher-footer-copy">
          © {year} School of Entrepreneurship · Sripatum University
        </p>
      </div>
    </footer>
  );
}
