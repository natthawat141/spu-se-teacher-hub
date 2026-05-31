import Link from "next/link";
import { CategoryPageHeader } from "@/components/category/CategoryPageHeader";
import { ToolListGrid } from "@/components/category/ToolListGrid";
import { getCategoryById } from "@/lib/navigation";
import { Button } from "antd";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ categoryId: string }>;
};

export default async function CategoryPage({ params }: PageProps) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) notFound();

  return (
    <div className="page-category">
      <Link href="/teacher">
        <Button type="link" className="back-link">
          ← กลับหน้าหลัก
        </Button>
      </Link>
      <CategoryPageHeader category={category} />
      <ToolListGrid category={category} />
    </div>
  );
}
