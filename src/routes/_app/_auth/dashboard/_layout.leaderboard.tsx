import { createFileRoute } from '@tanstack/react-router'
import { LeaderboardPreview } from '@/components/leaderboard/preview'

export const Route = createFileRoute(
  '/_app/_auth/dashboard/_layout/leaderboard',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <LeaderboardPreview />
  )
}
