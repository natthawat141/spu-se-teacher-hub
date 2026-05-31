export type CategoryTheme = {
  accent: string;
  soft: string;
};

export const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  classroom: { accent: "#1E40AF", soft: "#EFF6FF" },
  attendance: { accent: "#0F766E", soft: "#F0FDFA" },
  scores: { accent: "#B45309", soft: "#FFFBEB" },
  documents: { accent: "#7C3AED", soft: "#F5F3FF" },
  sharing: { accent: "#0369A1", soft: "#F0F9FF" },
  marketing: { accent: "#BE185D", soft: "#FDF2F8" },
  schedule: { accent: "#4F46E5", soft: "#EEF2FF" },
  project: { accent: "#0D9488", soft: "#F0FDFA" },
  autograde: { accent: "#15803D", soft: "#F0FDF4" },
  translate: { accent: "#9333EA", soft: "#FAF5FF" }
};

const DEFAULT_THEME: CategoryTheme = { accent: "#E60012", soft: "#FFF1F2" };

export function getCategoryTheme(categoryId: string): CategoryTheme {
  return CATEGORY_THEMES[categoryId] ?? DEFAULT_THEME;
}
