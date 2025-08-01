import { createFileRoute } from '@tanstack/react-router'
import { TrophyRoomPreview } from '@components/trophy-room/preview'

export const Route = createFileRoute(
  '/_app/_auth/dashboard/_layout/trophy-room',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <TrophyRoomPreview />
  )
}
