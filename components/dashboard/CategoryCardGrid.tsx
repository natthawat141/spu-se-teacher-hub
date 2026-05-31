"use client";

import Link from "next/link";
import { Col, Row, Typography } from "antd";
import { ArrowUpRight } from "lucide-react";
import { getCategoryTheme } from "@/lib/category-theme";
import { getCategoryIcon } from "@/lib/icon-map";
import { categoryPath } from "@/lib/navigation";
import { TOOL_CATEGORIES } from "@/lib/tools-data";

const { Text } = Typography;

export function CategoryCardGrid() {
  return (
    <section className="category-section">
      <div className="section-head">
        <Text strong className="section-title">
          หมวดเครื่องมือ
        </Text>
        <Text className="section-subtitle">
          เลือกหมวดเพื่อดูรายการทั้งหมด
        </Text>
      </div>
      <Row gutter={[16, 16]} className="category-grid">
        {TOOL_CATEGORIES.map((cat) => {
          const theme = getCategoryTheme(cat.id);
          const Icon = getCategoryIcon(cat.id);
          return (
            <Col xs={24} sm={12} lg={8} key={cat.id}>
              <Link href={categoryPath(cat.id)} className="category-card">
                <span
                  className="category-card-icon"
                  style={{ background: theme.iconBg, color: theme.iconColor }}
                >
                  <Icon size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <div className="category-card-body">
                  <Text strong className="category-card-title">
                    {cat.name}
                  </Text>
                  <Text className="category-card-meta">
                    {cat.tools.length} เครื่องมือ
                  </Text>
                  {cat.tagline && (
                    <Text className="category-card-tagline">{cat.tagline}</Text>
                  )}
                </div>
                <ArrowUpRight className="category-card-arrow" size={18} aria-hidden />
              </Link>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
