import { Separator } from "@/components/ui/separator"
import { menuItems } from "@/lib/data"
import { ProfileSection } from "./section/profile"
import { CtaSection } from "./section/cta"
import { Link, useMatchRoute } from "@tanstack/react-router"
import { cn } from "@/lib/utils"
import { Route as DashboardRoute } from "@/routes/_app/_auth/dashboard/_layout.index"
import { Route as ChatLogsRoute } from "@/routes/_app/_auth/dashboard/_layout.chat-logs"
import { Route as LeaderboardRoute } from "@/routes/_app/_auth/dashboard/_layout.leaderboard"
import { Route as TrophyRoomRoute } from "@/routes/_app/_auth/dashboard/_layout.trophy-room"
import { Route as SettingsRoute } from "@/routes/_app/_auth/dashboard/_layout.settings.index"
import { Route as BillingSettingsRoute } from "@/routes/_app/_auth/dashboard/_layout.settings.billing"
import { CreditCard, Settings } from "lucide-react"
import { User } from "~/types"

export default function Sidebar({ user }: { user: User }) {
  const matchRoute = useMatchRoute()
  
  const getRoutePath = (href: string) => {
    switch (href) {
      case "/":
        return DashboardRoute.fullPath
      case "/chat-logs":
        return ChatLogsRoute.fullPath
      case "/leaderboard":
        return LeaderboardRoute.fullPath
      case "/trophy-room":
        return TrophyRoomRoute.fullPath
      default:
        return href
    }
  }
  
  const isActiveRoute = (href: string) => {
    switch (href) {
      case "/":
        return matchRoute({ to: DashboardRoute.fullPath, fuzzy: false })
      case "/chat-logs":
        return matchRoute({ to: ChatLogsRoute.fullPath, fuzzy: false })
      case "/leaderboard":
        return matchRoute({ to: LeaderboardRoute.fullPath, fuzzy: false })
      case "/trophy-room":
        return matchRoute({ to: TrophyRoomRoute.fullPath, fuzzy: false })
      default:
        return false
    }
  }

  return (
    <aside className="flex h-screen w-16 flex-col items-center border-r border-pipboy-green/20 bg-black/30 p-2 sm:w-56 sm:items-start sm:p-4">
      <ProfileSection/>
      <Separator className="my-4 bg-pipboy-green/20" />
      <nav className="flex flex-1 flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = isActiveRoute(item.href)
          return (
            <Link
              key={item.label}
              to={getRoutePath(item.href)}
              className={cn(
                "flex items-center gap-3 rounded-none p-2 text-pipboy-green transition-colors hover:bg-pipboy-green/10 hover:text-glow",
                isActive && "bg-pipboy-green/20 text-glow border-l-2 border-pipboy-green"
              )}
            >
              <item.icon className="h-6 w-6 flex-shrink-0" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <CtaSection />
      <nav className="flex flex-col gap-2">
        <Link to={SettingsRoute.fullPath} className="flex items-center gap-3 rounded-none p-2 text-pipboy-green transition-colors hover:bg-pipboy-green/10 hover:text-glow">
          <Settings className="h-6 w-6 flex-shrink-0" />
          <span className="hidden sm:inline">Settings</span>
        </Link>
        <Link to={BillingSettingsRoute.fullPath} className="flex items-center gap-3 rounded-none p-2 text-pipboy-green transition-colors hover:bg-pipboy-green/10 hover:text-glow">
          <CreditCard className="h-6 w-6 flex-shrink-0" />
          <span className="hidden sm:inline">Billing</span>
        </Link>
      </nav>
    </aside >
  )
}
