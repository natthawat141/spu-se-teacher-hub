"use client";

import Link from "next/link";
import { Typography } from "antd";
import { getCategoryTheme } from "@/lib/category-theme";
import { loadRecentTools } from "@/lib/navigation";
import { useEffect, useState } from "react";

const { Text } = Typography;

export function QuickAccessRow() {
  const [recent, setRecent] = useState<ReturnType<typeof loadRecentTools>>([]);

  useEffect(() => {
    setRecent(loadRecentTools());
  }, []);

  if (recent.length === 0) return null;

  return (
    <section className="quick-access">
      <Text strong className="section-title">
        เปิดล่าสุด
      </Text>
      <div className="quick-access-list">
        {recent.map((item) => {
          const theme = getCategoryTheme(item.categoryId);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="quick-access-chip"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
