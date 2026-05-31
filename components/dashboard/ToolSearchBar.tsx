"use client";

import { searchTools } from "@/lib/navigation";
import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ToolSearchBarProps = {
  compact?: boolean;
};

export function ToolSearchBar({ compact }: ToolSearchBarProps) {
  const router = useRouter();
  const [value, setValue] = useState("");

  const options = useMemo(() => {
    if (!value.trim()) return [];
    return searchTools(value).map((r) => ({
      value: r.href,
      label: (
        <div className="search-option">
          <span className="search-option-name">{r.tool.name}</span>
          <span className="search-option-cat">{r.category.name}</span>
        </div>
      )
    }));
  }, [value]);

  return (
    <AutoComplete
      className={compact ? "tool-search tool-search-compact" : "tool-search"}
      options={options}
      value={value}
      onChange={setValue}
      onSelect={(href) => {
        router.push(String(href));
        setValue("");
      }}
    >
      <Input
        prefix={<SearchOutlined />}
        placeholder={compact ? "ค้นหาเครื่องมือ…" : "ค้นหาเครื่องมือทั้งหมด…"}
        allowClear
        aria-label="ค้นหาเครื่องมือ"
      />
    </AutoComplete>
  );
}
