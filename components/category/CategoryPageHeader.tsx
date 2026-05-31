"use client";

import { getCategoryTheme } from "@/lib/category-theme";
import type { ToolCategory } from "@/lib/tools-data";
import { Typography } from "antd";

const { Title, Text } = Typography;

type CategoryPageHeaderProps = {
  category: ToolCategory;
};

export function CategoryPageHeader({ category }: CategoryPageHeaderProps) {
  const theme = getCategoryTheme(category.id);

  return (
    <header className="page-header page-header-minimal">
      <span className="page-header-stripe" style={{ background: theme.accent }} />
      <div>
        <Text type="secondary" className="page-header-eyebrow">
          หมวดเครื่องมือ
        </Text>
        <Title level={3} className="page-header-title">
          {category.name}
        </Title>
        {category.tagline && <Text type="secondary">{category.tagline}</Text>}
        <Text type="secondary" className="page-header-meta">
          {category.tools.length} รายการ
        </Text>
      </div>
    </header>
  );
}
