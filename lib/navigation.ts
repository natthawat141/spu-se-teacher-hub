import { TOOL_CATEGORIES, type ToolCategory, type ToolItem } from "@/lib/tools-data";

export type BreadcrumbItem = {
  title: string;
  href?: string;
};

export type ToolSearchResult = {
  category: ToolCategory;
  tool: ToolItem;
  href: string;
};

export function categoryPath(categoryId: string): string {
  return `/teacher/${categoryId}`;
}

export function toolPath(categoryId: string, toolId: string): string {
  return `/teacher/${categoryId}/${toolId}`;
}

export function getCategoryById(categoryId: string): ToolCategory | undefined {
  return TOOL_CATEGORIES.find((c) => c.id === categoryId);
}

export function getToolByIds(
  categoryId: string,
  toolId: string
): { category: ToolCategory; tool: ToolItem } | undefined {
  const category = getCategoryById(categoryId);
  if (!category) return undefined;
  const tool = category.tools.find((t) => t.id === toolId);
  if (!tool) return undefined;
  return { category, tool };
}

export function getSelectedMenuKey(pathname: string): string {
  if (pathname === "/teacher" || pathname === "/teacher/") return "home";
  const parts = pathname.replace(/^\/teacher\/?/, "").split("/");
  return parts[0] || "home";
}

export function buildBreadcrumb(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ title: "หน้าหลัก", href: "/teacher" }];

  if (pathname === "/teacher" || pathname === "/teacher/") return items;

  const parts = pathname.replace(/^\/teacher\/?/, "").split("/").filter(Boolean);
  const [categoryId, toolId] = parts;

  const category = categoryId ? getCategoryById(categoryId) : undefined;
  if (category) {
    items.push({
      title: category.name,
      href: toolId ? categoryPath(category.id) : undefined
    });
  }

  if (category && toolId) {
    const tool = category.tools.find((t) => t.id === toolId);
    if (tool) items.push({ title: tool.name });
  }

  return items;
}

export function searchTools(query: string): ToolSearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: ToolSearchResult[] = [];
  for (const category of TOOL_CATEGORIES) {
    for (const tool of category.tools) {
      const haystack = `${tool.name} ${tool.description} ${category.name}`.toLowerCase();
      if (haystack.includes(q)) {
        results.push({
          category,
          tool,
          href: toolPath(category.id, tool.id)
        });
      }
    }
  }
  return results.slice(0, 12);
}

export const RECENT_TOOLS_KEY = "spu-se-recent-tools";
export const MAX_RECENT_TOOLS = 4;

export type RecentTool = {
  categoryId: string;
  toolId: string;
  name: string;
  href: string;
};

export function loadRecentTools(): RecentTool[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RECENT_TOOLS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as RecentTool[];
  } catch {
    return [];
  }
}

export function saveRecentTool(categoryId: string, toolId: string, name: string): void {
  if (typeof window === "undefined") return;
  const href = toolPath(categoryId, toolId);
  const entry: RecentTool = { categoryId, toolId, name, href };
  const existing = loadRecentTools().filter(
    (t) => !(t.categoryId === categoryId && t.toolId === toolId)
  );
  const next = [entry, ...existing].slice(0, MAX_RECENT_TOOLS);
  localStorage.setItem(RECENT_TOOLS_KEY, JSON.stringify(next));
}
