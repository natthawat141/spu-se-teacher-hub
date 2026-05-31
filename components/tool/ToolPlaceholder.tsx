"use client";

import Link from "next/link";
import { Button, Result } from "antd";
import { categoryPath } from "@/lib/navigation";
import type { ToolCategory } from "@/lib/tools-data";

type ToolPlaceholderProps = {
  category: ToolCategory;
};

export function ToolPlaceholder({ category }: ToolPlaceholderProps) {
  return (
    <div className="tool-placeholder">
      <Result
        status="info"
        title="เครื่องมือนี้อยู่ระหว่างพัฒนา"
        subTitle="โครงสร้าง UI พร้อมแล้ว — จะเชื่อมฟังก์ชันตามเอกสารใน docs/"
        extra={
          <Link href={categoryPath(category.id)}>
            <Button type="primary">กลับหมวด {category.name}</Button>
          </Link>
        }
      />
    </div>
  );
}
