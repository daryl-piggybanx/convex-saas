import { createFileRoute } from "@tanstack/react-router";
import siteConfig from "~/site.config";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChatLogsContent } from "@/components/chatbot/logs";
import SettingsWidget from "@/components/widgets/settings";

export const Route = createFileRoute("/_app/_auth/dashboard/_layout/chat-logs")({
  component: RouteComponent,
  beforeLoad: () => ({
    title: `${siteConfig.siteTitle} - Chat Logs`,
  }),
});

export default function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 text-lg text-pipboy-green w-full max-w-full bg-secondary bg-space-dark">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl uppercase text-glow">B.A.N.X. Chat Logs</h1>
          <p className="text-pipboy-green/70">Complete conversation history</p>
        </div>
        <SettingsWidget />
      </header>
      <Separator className="bg-pipboy-green/20" />

      <ChatLogsContent />
    </div>
  );
}
