export type CategoryTheme = {
  iconBg: string;
  iconColor: string;
};

/** Neutral icon treatment — no rainbow category stripes */
export const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  classroom: { iconBg: "#F5F5F4", iconColor: "#1C1917" },
  attendance: { iconBg: "#F5F5F4", iconColor: "#1C1917" },
  scores: { iconBg: "#F5F5F4", iconColor: "#1C1917" },
  documents: { iconBg: "#F5F5F4", iconColor: "#1C1917" },
  sharing: { iconBg: "#F5F5F4", iconColor: "#1C1917" },
  marketing: { iconBg: "#F5F5F4", iconColor: "#1C1917" },
  schedule: { iconBg: "#F5F5F4", iconColor: "#1C1917" },
  project: { iconBg: "#F5F5F4", iconColor: "#1C1917" },
  autograde: { iconBg: "#F5F5F4", iconColor: "#1C1917" },
  translate: { iconBg: "#F5F5F4", iconColor: "#1C1917" }
};

const DEFAULT_THEME: CategoryTheme = { iconBg: "#FFF1F2", iconColor: "#E60012" };

export function getCategoryTheme(categoryId: string): CategoryTheme {
  return CATEGORY_THEMES[categoryId] ?? DEFAULT_THEME;
}
