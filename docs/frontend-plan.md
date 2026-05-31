# Frontend Implementation Plan

อ้างอิง [DESIGN.md](../DESIGN.md) และ [docs/ux/](./ux/)

## Stack

- Next.js 16 App Router
- Ant Design (Layout, Menu, Drawer, Card, AutoComplete, Breadcrumb)
- Lucide React (icons ใน content)
- Noto Sans Thai (Google Font)

## Component Tree

```
app/teacher/layout.tsx          → TeacherLayout
app/teacher/page.tsx            → Dashboard
app/teacher/[categoryId]/page.tsx
app/teacher/[categoryId]/[toolId]/page.tsx

components/layout/
  TeacherLayout.tsx
  TeacherSidebar.tsx
  TeacherHeader.tsx
  TeacherMobileDrawer.tsx

components/dashboard/
  DashboardHero.tsx
  CategoryCardGrid.tsx
  ToolSearchBar.tsx
  QuickAccessRow.tsx

components/category/
  CategoryPageHeader.tsx
  ToolListGrid.tsx

components/tool/
  ToolPageHeader.tsx
  ToolPlaceholder.tsx

lib/
  navigation.ts
  category-theme.ts
  tools-data.ts
```

## Phases

| Phase | สถานะ | รายการ |
|-------|--------|--------|
| 0 | Done | UX docs + DESIGN.md |
| 1 | Done | Layout + routes |
| 2 | Done | Dashboard, category, tool pages |
| 3 | Done | Search, breadcrumb, fonts, cleanup |
| 4 | Done | Build + responsive QA |

## Definition of Done

- [ ] Sidebar flat 11 items, no SubMenu popup
- [ ] Routes shareable
- [ ] Global search works
- [ ] Institutional Modern visual (accents, hero, hover)
- [ ] `npm run build` passes
