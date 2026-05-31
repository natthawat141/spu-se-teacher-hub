"use client";

import { getCategoryTheme } from "@/lib/category-theme";
import { getToolIcon } from "@/lib/icon-map";
import type { ToolCategory, ToolItem } from "@/lib/tools-data";
import { Typography } from "antd";

const { Title, Text } = Typography;

type ToolPageHeaderProps = {
  category: ToolCategory;
  tool: ToolItem;
};

export function ToolPageHeader({ category, tool }: ToolPageHeaderProps) {
  const theme = getCategoryTheme(category.id);
  const Icon = getToolIcon(tool.id);

  return (
    <header className="page-header page-header-minimal">
      <span
        className="page-header-icon"
        style={{ background: theme.iconBg, color: theme.iconColor }}
      >
        <Icon size={22} strokeWidth={1.75} aria-hidden />
      </span>
      <div>
        <Text className="page-header-eyebrow">{category.name}</Text>
        <Title level={3} className="page-header-title">
          {tool.name}
        </Title>
        <Text className="page-header-desc">{tool.description}</Text>
      </div>
    </header>
  );
}
