import { createFileRoute } from "@tanstack/react-router";
import siteConfig from "~/site.config";
import Sidebar from "@components/sidebar";
import DashboardContent from "@components/dashboard/content";
import { Separator } from "@/components/ui/separator";
import SettingsWidget from "@/components/widgets/settings";

export const Route = createFileRoute("/_app/_auth/dashboard/_layout/")({
  component: RouteComponent,
  beforeLoad: () => ({
    title: `${siteConfig.siteTitle} - Dashboard`,
    // headerTitle: "Collector Portal",
    // headerDescription: "Manage your dashboard and view your usage.",
  }),
});

export default function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 text-lg text-pipboy-green w-full max-w-full bg-secondary bg-space-dark">
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl uppercase text-glow">Piggy Command</h1>
        <p className="text-pipboy-green/70">Welcome back, Collector.</p>
      </div>
      <SettingsWidget />
    </header>
    <Separator className="bg-pipboy-green/20" />

    <DashboardContent />
    </div>
  );
}
