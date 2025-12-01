import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { AlertsSection } from "@/components/dashboard/alerts-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <StatsCards />
      <AlertsSection />
      <RecentActivity />
    </div>
  )
}