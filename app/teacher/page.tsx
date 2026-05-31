import { CategoryCardGrid } from "@/components/dashboard/CategoryCardGrid";
import { DashboardHero } from "@/components/dashboard/DashboardHero";
import { QuickAccessRow } from "@/components/dashboard/QuickAccessRow";

export default function TeacherDashboardPage() {
  return (
    <div className="page-dashboard">
      <DashboardHero />
      <QuickAccessRow />
      <CategoryCardGrid />
    </div>
  );
}
