# SPU SE — แพลตฟอร์มเครื่องมืออาจารย์

School of Entrepreneurship (คณะการสร้างเจ้าของธุรกิจ) · มหาวิทยาลัยศรีปทุม

โลโก้: `public/brand/spu-se-logo.png`

**Authentication ปิดชั่วคราว** — เข้า `/teacher` ได้เลย ฟอร์มล็อกอินอยู่ที่ `components/_disabled/TeacherAuthForm.tsx`

**Design system:** [DESIGN.md](./DESIGN.md) (รูปแบบ Google Labs DESIGN.md + ธีมมหาวิทยาลัย SPU SE)

**UI:** Ant Design (`Layout`, `Menu`, `Drawer`) + Lucide icons · **10 หมวด · 48 เครื่องมือ** (ไม่มีหมวดปฏิทิน)

---

# SPUBUS MAGIC (rebuild spec — อ้างอิงระบบต้นฉบบ)

## Setup

1) Install dependencies

```bash
npm install
```

2) Create env file

Copy `.env.example` to `.env` and set `AUTH_SECRET`.

3) Run dev server

```bash
npm run dev
```

## Routes

- `/teacher` — Dashboard (hero + การ์ดหมวด + ค้นหา)
- `/teacher/[categoryId]` — รายการเครื่องมือในหมวด
- `/teacher/[categoryId]/[toolId]` — หน้าเครื่องมือ
- `/teacher/app` → redirect ไป `/teacher`
- `/teacher/profile` → redirect ไป `/teacher`

## UX / Front-end docs

- [DESIGN.md](./DESIGN.md) — design tokens
- [docs/frontend-plan.md](docs/frontend-plan.md) — component tree
- [docs/ux/](docs/ux/) — personas, IA, user flows
## API

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/teacher/bussanook?room=__PING__`

## เอกสารสำรวจระบบต้นฉบับ (SPUBUS MAGIC)

- [รายการ 49 เครื่องมือ + รายละเอียด](docs/spubus-magic-function-list.md)
- [สรุปสำหรับโคลน: จำนวนฟังก์ชัน / endpoint / checklist](docs/spubus-magic-clone-summary.md)

