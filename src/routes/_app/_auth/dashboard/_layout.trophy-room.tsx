import { createFileRoute } from "@tanstack/react-router";
import siteConfig from "~/site.config";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrophyRoomPreview } from "@/components/trophy-room/preview";
import SettingsWidget from "@/components/widgets/settings";

export const Route = createFileRoute(
  "/_app/_auth/dashboard/_layout/trophy-room",
)({
  component: RouteComponent,
  beforeLoad: () => ({
    title: `${siteConfig.siteTitle} - Trophy Room`,
  }),
});

export default function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 text-lg text-pipboy-green w-full max-w-full bg-secondary bg-space-dark">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl uppercase text-glow">Trophy Room</h1>
          <p className="text-pipboy-green/70">In-game awards and achievements</p>
        </div>
        <SettingsWidget />
      </header>
      <Separator className="bg-pipboy-green/20" />

      <TrophyRoomPreview />
    </div>
  );
}
