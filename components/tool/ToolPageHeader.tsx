"use client";

import { getCategoryTheme } from "@/lib/category-theme";
import type { ToolCategory, ToolItem } from "@/lib/tools-data";
import { Typography } from "antd";

const { Title, Text } = Typography;

type ToolPageHeaderProps = {
  category: ToolCategory;
  tool: ToolItem;
};

export function ToolPageHeader({ category, tool }: ToolPageHeaderProps) {
  const theme = getCategoryTheme(category.id);

  return (
    <header className="page-header page-header-minimal">
      <span className="page-header-stripe" style={{ background: theme.accent }} />
      <div>
        <Text type="secondary" className="page-header-eyebrow">
          {category.name}
        </Text>
        <Title level={3} className="page-header-title">
          {tool.name}
        </Title>
        <Text type="secondary">{tool.description}</Text>
      </div>
    </header>
  );
}
