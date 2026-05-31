import Link from "next/link";
import { ToolPageHeader } from "@/components/tool/ToolPageHeader";
import { ToolPlaceholder } from "@/components/tool/ToolPlaceholder";
import { ToolRecentTracker } from "@/components/tool/ToolRecentTracker";
import { categoryPath, getToolByIds } from "@/lib/navigation";
import { Button } from "antd";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ categoryId: string; toolId: string }>;
};

export default async function ToolPage({ params }: PageProps) {
  const { categoryId, toolId } = await params;
  const result = getToolByIds(categoryId, toolId);
  if (!result) notFound();

  const { category, tool } = result;

  return (
    <div className="page-tool">
      <Link href={categoryPath(category.id)}>
        <Button type="link" className="back-link">
          ← {category.name}
        </Button>
      </Link>
      <ToolRecentTracker categoryId={category.id} toolId={tool.id} name={tool.name} />
      <ToolPageHeader category={category} tool={tool} />
      <ToolPlaceholder category={category} />
    </div>
  );
}
