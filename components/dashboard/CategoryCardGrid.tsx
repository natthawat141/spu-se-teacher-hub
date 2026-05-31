"use client";

import Link from "next/link";
import { Col, Row, Typography } from "antd";
import { getCategoryTheme } from "@/lib/category-theme";
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
        <Text type="secondary" className="section-subtitle">
          เลือกหมวดเพื่อดูรายการทั้งหมด
        </Text>
      </div>
      <Row gutter={[12, 12]} className="category-grid">
        {TOOL_CATEGORIES.map((cat, index) => {
          const theme = getCategoryTheme(cat.id);
          return (
            <Col xs={24} sm={12} lg={8} key={cat.id}>
              <Link href={categoryPath(cat.id)} className="category-tile">
                <span className="category-tile-accent" style={{ background: theme.accent }} />
                <div className="category-tile-body">
                  <span className="category-tile-index">{String(index + 1).padStart(2, "0")}</span>
                  <Text strong className="category-tile-title">
                    {cat.name}
                  </Text>
                  <Text type="secondary" className="category-tile-meta">
                    {cat.tools.length} เครื่องมือ
                  </Text>
                  {cat.tagline && (
                    <Text type="secondary" className="category-tile-tagline">
                      {cat.tagline}
                    </Text>
                  )}
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
