import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navigation } from "./-ui.navigation";
import { Header } from "@components/header";
import { useQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "@cvx/_generated/api";
import Sidebar from "@/components/sidebar";

export const Route = createFileRoute("/_app/_auth/dashboard/_layout")({
  component: DashboardLayout,
});

function DashboardLayout() {
  const { data: user } = useQuery(convexQuery(api.app.getCurrentUser, {}));
  if (!user) {
    return null;
  }
  return (
    <div className="flex min-h-[100vh] w-full flex-col bg-secondary bg-space-dark">
      {/* <Navigation user={user} /> */}
      <div className="z-10 mx-auto flex gap-12">
      <Sidebar user={user}  />
      {/* <Header /> */}
      <Outlet />
      </div>
    </div>
  );
}
