"use client";

import { getCategoryTheme } from "@/lib/category-theme";
import { getCategoryIcon } from "@/lib/icon-map";
import type { ToolCategory } from "@/lib/tools-data";
import { Typography } from "antd";

const { Title, Text } = Typography;

type CategoryPageHeaderProps = {
  category: ToolCategory;
};

export function CategoryPageHeader({ category }: CategoryPageHeaderProps) {
  const theme = getCategoryTheme(category.id);
  const Icon = getCategoryIcon(category.id);

  return (
    <header className="page-header page-header-minimal">
      <span
        className="page-header-icon"
        style={{ background: theme.iconBg, color: theme.iconColor }}
      >
        <Icon size={22} strokeWidth={1.75} aria-hidden />
      </span>
      <div>
        <Text className="page-header-eyebrow">หมวดเครื่องมือ</Text>
        <Title level={3} className="page-header-title">
          {category.name}
        </Title>
        {category.tagline && <Text className="page-header-desc">{category.tagline}</Text>}
        <Text className="page-header-meta">{category.tools.length} รายการ</Text>
      </div>
    </header>
  );
}
