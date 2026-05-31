"use client";

import { TeacherMobileDrawer } from "@/components/layout/TeacherMobileDrawer";
import { SidebarBrand, TeacherSidebar } from "@/components/layout/TeacherSidebar";
import { TeacherHeader } from "@/components/layout/TeacherHeader";
import { TOTAL_CATEGORIES, TOTAL_TOOLS } from "@/lib/tools-data";
import { Grid, Layout } from "antd";
import { useState } from "react";

const { Sider, Content } = Layout;
const { useBreakpoint } = Grid;

type TeacherLayoutProps = {
  children: React.ReactNode;
};

export function TeacherLayout({ children }: TeacherLayoutProps) {
  const screens = useBreakpoint();
  const isMobile = screens.md === false;
  const siderWidth = screens.lg === false && !isMobile ? 248 : 272;

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Layout className="teacher-shell">
      {!isMobile && (
        <Sider width={siderWidth} className="teacher-sider" theme="light">
          <div className="teacher-sider-inner">
            <SidebarBrand />
            <TeacherSidebar />
            <div className="sidebar-footer">
              {TOTAL_CATEGORIES} หมวด · {TOTAL_TOOLS} เครื่องมือ
            </div>
          </div>
        </Sider>
      )}

      {isMobile && (
        <TeacherMobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      )}

      <Layout className="teacher-main">
        <TeacherHeader
          isMobile={isMobile}
          onMenuClick={() => setDrawerOpen(true)}
        />
        <Content className="teacher-content">
          <div className="teacher-content-inner page-enter">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
