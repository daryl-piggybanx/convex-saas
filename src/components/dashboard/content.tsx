import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { LeaderboardPreview } from "@/components/leaderboard/preview"
import { WeeklyCalendar } from "@/components/calendar/weekly-calendar"
import { Chatbot } from "@/components/chatbot/bot"
import { TrophyRoomPreview } from "@/components/trophy-room/preview"

const StatusIndicator = ({
  label,
  status,
}: {
  label: string
  status: "nominal" | "warning" | "critical"
}) => {
  const colorClass = {
    nominal: "bg-pipboy-green/10 border-pipboy-green/50 text-pipboy-green",
    warning: "bg-pipboy-green/20 border-pipboy-green/80 text-pipboy-green animate-pulse",
    critical: "bg-pipboy-green/20 border-pipboy-green text-pipboy-green animate-fast-pulse",
  }
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <Badge variant="outline" className={`uppercase ${colorClass[status]} rounded-none`}>
        {status}
      </Badge>
    </div>
  )
}

export default function DashboardContent() {
  return (

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <LeaderboardPreview />
          <Chatbot />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-3">
          <WeeklyCalendar />
          <TrophyRoomPreview />
        </div>
      </div>

  )
}
