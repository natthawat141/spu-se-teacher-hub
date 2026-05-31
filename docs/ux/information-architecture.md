# Information Architecture

## โครงสร้าง 2 ชั้น

| ชั้น | ที่อยู่ | จำนวน | ตัวอย่าง |
|------|--------|------:|----------|
| 1 — หมวด | Sidebar / Drawer (flat) | 11 | หน้าหลัก + 10 หมวด |
| 2 — เครื่องมือ | Content area | 48 | Word Cloud, Live Poll, … |

## Routes

```
/teacher                         → Dashboard
/teacher/[categoryId]            → รายการเครื่องมือในหมวด
/teacher/[categoryId]/[toolId]   → หน้าเครื่องมือ
```

## กฎ Navigation

- Sidebar **ไม่มี SubMenu** — คลิกหมวด → ไปหน้าหมวด
- รายการเครื่องมือแสดงใน content เท่านั้น
- Breadcrumb: หน้าหลัก / หมวด / เครื่องมือ
- Global search ข้ามหมวดได้

## Responsive

| Viewport | Navigation |
|----------|------------|
| Mobile (<768px) | Drawer 280px |
| Tablet (768–1023px) | Sider 240px เปิดเตลอ — ห้าม collapse |
| Desktop (≥1024px) | Sider 280px — collapse เป็นไอคอนได้ |
