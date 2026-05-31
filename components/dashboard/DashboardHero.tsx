"use client";

import { Typography } from "antd";
import { TOTAL_CATEGORIES, TOTAL_TOOLS } from "@/lib/tools-data";
import { ToolSearchBar } from "@/components/dashboard/ToolSearchBar";

const { Title, Paragraph } = Typography;

export function DashboardHero() {
  return (
    <section className="dashboard-hero">
      <div className="dashboard-hero-glow" aria-hidden="true" />
      <div className="dashboard-hero-inner">
        <p className="dashboard-hero-eyebrow">School of Entrepreneurship · SPU</p>
        <Title level={1} className="dashboard-hero-title">
          เครื่องมือสำหรับอาจารย์
        </Title>
        <Paragraph className="dashboard-hero-desc">
          แพลตฟอร์มรวมเครื่องมือการสอนและบริหารจัดการ
          คณะการสร้างเจ้าของธุรกิจ มหาวิทยาลัยศรีปทุม
        </Paragraph>

        <div className="dashboard-hero-stats">
          <div className="dashboard-stat">
            <span className="dashboard-stat-value">{TOTAL_TOOLS}</span>
            <span className="dashboard-stat-label">เครื่องมือ</span>
          </div>
          <span className="dashboard-stat-divider" aria-hidden="true" />
          <div className="dashboard-stat">
            <span className="dashboard-stat-value">{TOTAL_CATEGORIES}</span>
            <span className="dashboard-stat-label">หมวดงาน</span>
          </div>
        </div>

        <div className="dashboard-hero-search">
          <ToolSearchBar />
        </div>
      </div>
    </section>
  );
}
