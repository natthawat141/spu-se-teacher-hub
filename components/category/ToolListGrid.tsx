"use client";

import Link from "next/link";
import { Typography } from "antd";
import { getCategoryTheme } from "@/lib/category-theme";
import { toolPath } from "@/lib/navigation";
import type { ToolCategory } from "@/lib/tools-data";

const { Text } = Typography;

type ToolListGridProps = {
  category: ToolCategory;
};

export function ToolListGrid({ category }: ToolListGridProps) {
  const theme = getCategoryTheme(category.id);

  return (
    <ul className="tool-list">
      {category.tools.map((tool, index) => (
        <li key={tool.id}>
          <Link href={toolPath(category.id, tool.id)} className="tool-list-item">
            <span className="tool-list-index" style={{ color: theme.accent }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="tool-list-content">
              <Text strong className="tool-list-name">
                {tool.name}
              </Text>
              <Text type="secondary" className="tool-list-desc">
                {tool.description}
              </Text>
            </div>
            <span className="tool-list-arrow" aria-hidden>
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
