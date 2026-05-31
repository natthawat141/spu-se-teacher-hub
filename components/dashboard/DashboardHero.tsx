"use client";

import { Typography } from "antd";
import { TOTAL_CATEGORIES, TOTAL_TOOLS } from "@/lib/tools-data";
import { ToolSearchBar } from "@/components/dashboard/ToolSearchBar";

const { Title, Paragraph } = Typography;

export function DashboardHero() {
  return (
    <section className="dashboard-hero">
      <div className="dashboard-hero-inner">
        <p className="dashboard-hero-eyebrow">Teacher Hub · SPU SE</p>
        <Title level={2} className="dashboard-hero-title">
          เครื่องมือสำหรับอาจารย์
        </Title>
        <Paragraph className="dashboard-hero-desc">
          ค้นหาหรือเลือกหมวดงานด้านล่าง — รวม {TOTAL_TOOLS} เครื่องมือใน {TOTAL_CATEGORIES} หมวด
          สำหรับการจัดการเรียนการสอน คณะการสร้างเจ้าของธุรกิจ
        </Paragraph>
        <div className="dashboard-hero-search">
          <ToolSearchBar />
        </div>
      </div>
    </section>
  );
}
