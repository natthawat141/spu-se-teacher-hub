"use client";

import { TeacherSidebar, SidebarBrand } from "@/components/layout/TeacherSidebar";
import { TOTAL_CATEGORIES, TOTAL_TOOLS } from "@/lib/tools-data";
import { Drawer } from "antd";

type TeacherMobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function TeacherMobileDrawer({ open, onClose }: TeacherMobileDrawerProps) {
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
      width={288}
      styles={{ body: { padding: 0 } }}
      className="teacher-drawer"
    >
      <div className="teacher-sider-inner">
        <SidebarBrand />
        <TeacherSidebar onNavigate={onClose} />
        <div className="sidebar-footer">
          {TOTAL_CATEGORIES} หมวด · {TOTAL_TOOLS} เครื่องมือ
        </div>
      </div>
    </Drawer>
  );
}
