"use client";

import { MenuOutlined } from "@ant-design/icons";
import { ToolSearchBar } from "@/components/dashboard/ToolSearchBar";
import { buildBreadcrumb } from "@/lib/navigation";
import { Breadcrumb, Button } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TeacherHeaderProps = {
  isMobile: boolean;
  onMenuClick: () => void;
};

export function TeacherHeader({ isMobile, onMenuClick }: TeacherHeaderProps) {
  const pathname = usePathname();
  const crumbs = buildBreadcrumb(pathname);
  const showBreadcrumb = crumbs.length > 1 && !isMobile;

  return (
    <header className="teacher-header">
      <div className="teacher-header-row">
        <div className="teacher-header-left">
          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={onMenuClick}
              aria-label="เปิดเมนู"
              className="mobile-menu-btn"
            />
          )}
          {showBreadcrumb ? (
            <Breadcrumb
              items={crumbs.map((c) => ({
                title: c.href ? <Link href={c.href}>{c.title}</Link> : c.title
              }))}
            />
          ) : (
            <div className="teacher-header-heading">
              <span className="teacher-header-eyebrow">SPU SE</span>
              <span className="teacher-header-title">
                {crumbs[crumbs.length - 1]?.title ?? "หน้าหลัก"}
              </span>
            </div>
          )}
        </div>
        <div className="teacher-header-right">
          {!isMobile && <ToolSearchBar compact />}
          <span className="dev-pill">Dev mode</span>
        </div>
      </div>
      {isMobile && (
        <div className="teacher-header-search-mobile">
          <ToolSearchBar />
        </div>
      )}
    </header>
  );
}
