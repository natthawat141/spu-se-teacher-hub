import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  CheckSquare,
  CircleDot,
  ClipboardCheck,
  ClipboardList,
  Cloud,
  Dices,
  FileCheck,
  FileSpreadsheet,
  FileText,
  FolderKanban,
  Gamepad2,
  Gift,
  Globe,
  GraduationCap,
  Languages,
  LayoutGrid,
  Library,
  Link2,
  ListTodo,
  MapPin,
  Megaphone,
  MessageSquare,
  Palette,
  PenLine,
  Presentation,
  QrCode,
  ScanLine,
  Search,
  Share2,
  Shuffle,
  Sparkles,
  Ticket,
  TrendingUp,
  Trophy,
  Users,
  Video,
  Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  classroom: GraduationCap,
  attendance: MapPin,
  scores: BarChart3,
  documents: FileText,
  sharing: Share2,
  marketing: Megaphone,
  schedule: ClipboardCheck,
  project: FolderKanban,
  autograde: CheckCircle2,
  translate: Languages
};

const TOOL_ICONS: Record<string, LucideIcon> = {
  wordcloud: Cloud,
  livepoll: BarChart3,
  brainstorm: Brain,
  wheel: CircleDot,
  luckybox: Gift,
  groups: Users,
  teamboard: Trophy,
  quiz: ClipboardList,
  videoquiz: Video,
  prepost: TrendingUp,
  livegame: Gamepad2,
  bussanook: Dices,
  snakes: Shuffle,
  gps: MapPin,
  "qr-scan": QrCode,
  classpass: Ticket,
  todolist: ListTodo,
  scores: BarChart3,
  lessonplan: ClipboardList,
  letter: MessageSquare,
  slides: Presentation,
  ebook: BookOpen,
  cert: GraduationCap,
  forms: FileSpreadsheet,
  rubric: FileCheck,
  qrcode: QrCode,
  shortlink: Link2,
  ocr: ScanLine,
  pdf: FileText,
  templates: Library,
  content: Sparkles,
  poster: Palette,
  lessonplan2: ClipboardList,
  timetable: LayoutGrid,
  plagiarism: Search,
  "ai-detect": Bot,
  writing: PenLine,
  completeness: CheckSquare,
  grammar: Languages,
  events: Megaphone,
  budget: Wallet,
  ta: Users,
  stakeholder: Building2,
  meeting: MessageSquare,
  kpi: BarChart3,
  announce: Megaphone,
  autograde: CheckCircle2,
  translate: Globe
};

export function getCategoryIcon(id: string): LucideIcon {
  return CATEGORY_ICONS[id] ?? LayoutGrid;
}

export function getToolIcon(id: string): LucideIcon {
  return TOOL_ICONS[id] ?? FileText;
}

export function IconBadge({
  icon: Icon,
  className,
  size = 18
}: {
  icon: LucideIcon;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-primary",
        className
      )}
    >
      <Icon size={size} strokeWidth={1.75} aria-hidden />
    </span>
  );
}
