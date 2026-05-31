export type ToolItem = {
  id: string;
  name: string;
  description: string;
};

export type ToolCategory = {
  id: string;
  name: string;
  tagline?: string;
  tools: ToolItem[];
};

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: "classroom",
    name: "กิจกรรมในชั้นเรียน",
    tagline: "Interactive · Live Quiz · Smart Quiz · Video Quiz",
    tools: [
      { id: "wordcloud", name: "Word Cloud", description: "รวมคำจากนักศึกษาแบบเรียลไทม์" },
      { id: "livepoll", name: "Live Poll", description: "โหวตคำถามแบบสด" },
      { id: "brainstorm", name: "Brainstorm Board", description: "กระดานระดมความคิด" },
      { id: "wheel", name: "วงล้อสุ่ม", description: "สุ่มชื่อหรือหัวข้อด้วยวงล้อ" },
      { id: "luckybox", name: "กล่องสุ่ม", description: "สุ่มรางวัลหรือภารกิจ" },
      { id: "groups", name: "สุ่มกลุ่มนักเรียน", description: "จัดกลุ่มอัตโนมัติ" },
      { id: "teamboard", name: "กระดานคะแนนทีม", description: "ติดตามคะแนนทีม" },
      { id: "quiz", name: "สร้างแบบทดสอบ", description: "สร้างและแจกแบบทดสอบ" },
      { id: "videoquiz", name: "สร้างแบบทดสอบวิดีโอ", description: "แบบทดสอบแนบวิดีโอ" },
      { id: "prepost", name: "ทดสอบก่อน-หลังเรียน", description: "วัดผลก่อนและหลังเรียน" },
      { id: "livegame", name: "เกมตอบคำถามสด", description: "เกมถามตอบแบบแข่งขัน" },
      { id: "bussanook", name: "BUS-SANOOK", description: "กิจกรรมเกมในชั้นเรียน" },
      { id: "snakes", name: "งูและบันได", description: "เกมงูและบันไดเพื่อการเรียนรู้" }
    ]
  },
  {
    id: "attendance",
    name: "เช็กชื่อเข้าเรียน",
    tools: [
      { id: "gps", name: "เช็กชื่อ GPS", description: "ยืนยันตำแหน่งเมื่อเช็กชื่อ" },
      { id: "qr-scan", name: "สแกน QR นักศึกษา", description: "เช็กชื่อด้วย QR" },
      { id: "classpass", name: "Class Pass+ การ์ดสะสม", description: "การ์ดสะสมและแต้ม" },
      { id: "todolist", name: "Student Todolist", description: "รายการงานนักศึกษา" }
    ]
  },
  {
    id: "scores",
    name: "คะแนนเก็บ",
    tools: [{ id: "scores", name: "คะแนนเก็บ", description: "บันทึกและสรุปคะแนน" }]
  },
  {
    id: "documents",
    name: "เครื่องมือเอกสาร",
    tagline: "แผนสอน · Slide · จดหมาย · E-book · ใบประกาศ",
    tools: [
      { id: "lessonplan", name: "วางแผนการสอน", description: "จัดทำแผนการสอน" },
      { id: "letter", name: "เขียนจดหมายราชการ", description: "ร่างหนังสือราชการ" },
      { id: "slides", name: "สร้างสไลด์นำเสนอ", description: "สไลด์และ outline" },
      { id: "ebook", name: "สร้างหนังสืออิเล็กทรอนิกส์", description: "E-book ประกอบการสอน" },
      { id: "cert", name: "ออกใบประกาศนียบัตร", description: "ใบประกาศนียบัตร" },
      { id: "forms", name: "สร้างฟอร์มและแบบสำรวจ", description: "ฟอร์มและ survey" },
      { id: "rubric", name: "สร้างเกณฑ์การให้คะแนน", description: "Rubric / เกณฑ์คะแนน" }
    ]
  },
  {
    id: "sharing",
    name: "การจัดการและแบ่งปัน",
    tools: [
      { id: "qrcode", name: "สร้างคิวอาร์โค้ด", description: "สร้าง QR จากลิงก์หรือข้อความ" },
      { id: "shortlink", name: "ย่อลิงก์", description: "Short URL" },
      { id: "ocr", name: "อ่านข้อมูลจากรูปภาพ", description: "OCR จากรูป" },
      { id: "pdf", name: "จัดการไฟล์ PDF", description: "รวม/แยก/จัดการ PDF" },
      { id: "templates", name: "คลังแม่แบบเอกสาร", description: "Template เอกสาร" }
    ]
  },
  {
    id: "marketing",
    name: "ด้านสื่อสารการตลาด",
    tools: [
      { id: "content", name: "สร้างคอนเทนต์การตลาด", description: "คอนเทนต์และแคปชัน" },
      { id: "poster", name: "สร้างโปสเตอร์อัตโนมัติ", description: "ออกแบบโปสเตอร์" }
    ]
  },
  {
    id: "schedule",
    name: "ตรวจสอบตารางสอน",
    tools: [
      { id: "lessonplan2", name: "วางแผนการสอน", description: "วางแผนและติดตาม" },
      { id: "timetable", name: "จัดตารางสอน", description: "จัดตารางเรียน" },
      { id: "plagiarism", name: "ตรวจการคัดลอกผลงาน", description: "ตรวจ plagiarism" },
      { id: "ai-detect", name: "ตรวจจับงานจาก AI", description: "ตรวจงาน AI-generated" },
      { id: "writing", name: "ตรวจคุณภาพการเขียน", description: "วิเคราะห์คุณภาพงานเขียน" },
      { id: "completeness", name: "ตรวจความครบถ้วน", description: "Checklist งาน" },
      { id: "grammar", name: "ตรวจไวยากรณ์", description: "Grammar check" }
    ]
  },
  {
    id: "project",
    name: "การทำโครงการ",
    tools: [
      { id: "events", name: "จัดการกิจกรรม", description: "วางแผนกิจกรรม" },
      { id: "budget", name: "ติดตามงบประมาณ", description: "ติดตามงบ" },
      { id: "ta", name: "ประสานงานผู้ช่วยสอน", description: "งาน TA" },
      { id: "stakeholder", name: "รายงานผู้มีส่วนได้เสีย", description: "Stakeholder report" },
      { id: "meeting", name: "สรุปการประชุม", description: "สรุปการประชุม" },
      { id: "kpi", name: "แดชบอร์ดตัวชี้วัด", description: "KPI dashboard" },
      { id: "announce", name: "ส่งประกาศถึงนักศึกษา", description: "ประกาศถึงนักศึกษา" }
    ]
  },
  {
    id: "autograde",
    name: "ตรวจงานอัตโนมัติ",
    tools: [{ id: "autograde", name: "ตรวจงานอัตโนมัติ", description: "ตรวจและให้คะแนนอัตโนมัติ" }]
  },
  {
    id: "translate",
    name: "แปลภาษา",
    tools: [{ id: "translate", name: "แปลภาษาอัจฉริยะ", description: "แปลข้อความหลายภาษา" }]
  }
];

export const TOTAL_CATEGORIES = TOOL_CATEGORIES.length;
export const TOTAL_TOOLS = TOOL_CATEGORIES.reduce((n, c) => n + c.tools.length, 0);
