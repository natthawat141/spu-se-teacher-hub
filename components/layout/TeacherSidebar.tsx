"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSelectedMenuKey } from "@/lib/navigation";
import { TOOL_CATEGORIES } from "@/lib/tools-data";

type TeacherSidebarProps = {
  onNavigate?: () => void;
};

export function TeacherSidebar({ onNavigate }: TeacherSidebarProps) {
  const pathname = usePathname();
  const selectedKey = getSelectedMenuKey(pathname);

  return (
    <nav className="sidebar-nav" aria-label="เมนูหลัก">
      <div className="sidebar-nav-section">
        <span className="sidebar-nav-label">ภาพรวม</span>
        <SidebarLink
          href="/teacher"
          active={selectedKey === "home"}
          onNavigate={onNavigate}
        >
          หน้าหลัก
        </SidebarLink>
      </div>

      <div className="sidebar-nav-section">
        <span className="sidebar-nav-label">หมวดงาน</span>
        <ul className="sidebar-nav-list">
          {TOOL_CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <SidebarLink
                  href={`/teacher/${cat.id}`}
                  active={selectedKey === cat.id}
                  onNavigate={onNavigate}
                >
                  <span className="sidebar-link-text">{cat.name}</span>
                  <span className="sidebar-link-count">{cat.tools.length}</span>
                </SidebarLink>
              </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function SidebarLink({
  href,
  active,
  onNavigate,
  children
}: {
  href: string;
  active: boolean;
  onNavigate?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`sidebar-link${active ? " sidebar-link-active" : ""}`}
      onClick={() => onNavigate?.()}
    >
      {children}
    </Link>
  );
}

export function SidebarBrand() {
  return (
    <div className="sidebar-brand">
      <Image
        src="/brand/spu-se-logo.png"
        alt="SPU School of Entrepreneurship"
        width={36}
        height={36}
        className="sidebar-brand-logo"
        priority
      />
      <div className="sidebar-brand-text">
        <span className="sidebar-brand-title">Teacher Hub</span>
        <span className="sidebar-brand-sub">SPU SE · มหาวิทยาลัยศรีปทุม</span>
      </div>
    </div>
  );
}
