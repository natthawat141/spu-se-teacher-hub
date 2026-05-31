---
version: alpha
project: SPU SE Teacher Platform
organization: Sripatum University — School of Entrepreneurship
visualTone: Institutional Modern
colors:
  primary: "#FFFFFF"
  brand: "#E60012"
  brandSoft: "#FFF1F2"
  surface: "#FFFFFF"
  surfaceMuted: "#F8F9FA"
  background: "#F8F9FA"
  foreground: "#1C1E21"
  textSecondary: "#5F6368"
  border: "#E8EAED"
typography:
  fontFamily:
    sans: "Noto Sans Thai, Segoe UI, Sarabun, system-ui, sans-serif"
  fontSize:
    display: 32px
    h1: 24px
    h2: 18px
    body: 14px
    caption: 12px
  lineHeight:
    body: 1.6
    heading: 1.3
layout:
  sidebarWidth: 280px
  sidebarTabletWidth: 240px
  sidebarCollapsedWidth: 72px
  contentMaxWidth: 1152px
  spacingUnit: 4px
breakpoints:
  mobile: 767
  tablet: 1023
  desktop: 1024
navigation:
  sidebarDepth: 1
  contentDepth: 2
  routes: /teacher/[categoryId]/[toolId]
  noSubMenuInSidebar: true
motion:
  fast: 150ms
  normal: 200ms
  easing: cubic-bezier(0.4, 0, 0.2, 1)
categoryAccents:
  classroom: "#1E40AF"
  attendance: "#0F766E"
  scores: "#B45309"
  documents: "#7C3AED"
  sharing: "#0369A1"
  marketing: "#BE185D"
  schedule: "#4F46E5"
  project: "#0D9488"
  autograde: "#15803D"
  translate: "#9333EA"
components:
  library: Ant Design (antd)
  icons: lucide-react in content, @ant-design/icons in nav
  layout: Layout, Sider, Drawer, Menu from antd
---

# SPU SE — Design System

## Overview

แพลตฟอร์มเครื่องมืออาจารย์ **คณะการสร้างเจ้าของธุรกิจ** มหาวิทยาลัยศรีปทุม — โทน **Institutional Modern**: เป็นทางการ น่าเชื่อถือ แต่มี depth, accent สีต่อหมวด และ micro-interaction นุ่ม ๆ

อ้างอิง [DESIGN.md spec (Google Labs)](https://github.com/google-labs-code/design.md)

**Stack:** Ant Design + Lucide + Noto Sans Thai + Next.js App Router

---

## Colors

| Token | Hex | ใช้ |
|-------|-----|-----|
| `{colors.primary}` | `#FFFFFF` | sidebar, header, cards — พื้นหลักขาว |
| `{colors.brand}` | `#E60012` | CTA, ลิงก์, active indicator, eyebrow |
| `{colors.brandSoft}` | `#FFF1F2` | highlight อ่อน |
| `{colors.surface}` | `#FFFFFF` | cards, sidebar, header |
| `{colors.surfaceMuted}` | `#F8F9FA` | page background |
| `{colors.foreground}` | `#1C1E21` | headings |
| `{colors.textSecondary}` | `#5F6368` | descriptions |
| `{colors.border}` | `#E8EAED` | dividers |

**Category accents** — icon badge ต่อหมวด (ดู YAML `categoryAccents`)

**หลัก:** primary = ขาว `#FFFFFF` (เท่ากับ header); แดง = brand accent เท่านั้น

---

## Typography

| ระดับ | ขนาด | ใช้กับ |
|-------|------|--------|
| Display | 32px | hero title |
| H1 | 24px | page title |
| H2 | 18px | section title |
| Body | 14px | เนื้อหา |
| Caption | 12px | meta, badge |

ฟอนต์: Noto Sans Thai (primary), fallback Sarabun

---

## Layout & Responsive Behavior

| Viewport | Sidebar | Collapse | Grid |
|----------|---------|----------|------|
| Mobile (<768px) | Drawer 280px | ไม่มี | 1 col |
| Tablet (768–1023px) | Sider 240px | **ห้าม** | 2 col |
| Desktop (≥1024px) | Sider 280px | ไอคอนได้ | 3 col |

- Sidebar: **11 รายการ flat** (หน้าหลัก + 10 หมวด)
- Content max-width: 1152px, centered

---

## Navigation Rules

1. Sidebar ไม่มี SubMenu 48 รายการ
2. Routes: `/teacher`, `/teacher/[categoryId]`, `/teacher/[categoryId]/[toolId]`
3. Breadcrumb ทุกหน้ายกเว้น dashboard
4. Global search ใน header

---

## Page Templates

### Dashboard
- Hero (primarySoft + pattern) + stat strip
- Quick access row (4 slots)
- Category card grid

### Category Page
- Page header (icon + title + tagline)
- Tool list grid

### Tool Page
- Page header + placeholder workspace

---

## Depth & Motion

**Cards:** border 1px + shadow `0 1px 2px rgba(0,0,0,0.04)`; hover lift `-2px` + `0 4px 12px rgba(0,0,0,0.06)`

**Menu active:** แถบแดง 3px ซ้าย + bg primarySoft

**Page content:** fade-in 200ms

**ห้าม:** gradient รุ้ง, emoji, animation >300ms, parallax

---

## Accessibility

- Contrast ≥ 4.5:1 สำหรับ body text
- aria-label ปุ่มเมนู mobile
- keyboard navigation ใน search
- focus ring จาก Ant Design token

---

## Related docs

- [docs/ux/personas.md](docs/ux/personas.md)
- [docs/ux/information-architecture.md](docs/ux/information-architecture.md)
- [docs/ux/user-flows.md](docs/ux/user-flows.md)
- [docs/frontend-plan.md](docs/frontend-plan.md)
