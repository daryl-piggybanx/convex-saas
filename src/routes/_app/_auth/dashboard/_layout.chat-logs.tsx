import { createFileRoute } from '@tanstack/react-router'
import { ChatLogsContent } from '@components/chatbot/logs'

export const Route = createFileRoute('/_app/_auth/dashboard/_layout/chat-logs')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return (
    <ChatLogsContent />
  )
}
