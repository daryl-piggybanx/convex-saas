import { createFileRoute } from "@tanstack/react-router";
import siteConfig from "~/site.config";
import Sidebar from "@components/sidebar";
import DashboardContent from "@components/dashboard/content";

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
    <DashboardContent />
  );
}
