import {
  createFileRoute,
  Link,
  Outlet,
  useMatchRoute,
} from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@components/button-util";
import { Route as SettingsRoute } from "@/routes/_app/_auth/dashboard/_layout.settings.index";
import { Route as BillingSettingsRoute } from "@/routes/_app/_auth/dashboard/_layout.settings.billing";
import siteConfig from "~/site.config";
import { Separator } from "@/components/ui/separator";
import SettingsWidget from "@/components/widgets/settings";

export const Route = createFileRoute("/_app/_auth/dashboard/_layout/settings")({
  component: DashboardSettingsLayout,
  beforeLoad: () => ({
    title: `${siteConfig.siteTitle} - Settings`,
  }),
});

export default function DashboardSettingsLayout() {
  const matchRoute = useMatchRoute();
  const isSettingsPath = matchRoute({ to: SettingsRoute.fullPath });
  const isBillingPath = matchRoute({ to: BillingSettingsRoute.fullPath });
  
  return (
    <div className="flex flex-col gap-4 text-lg text-pipboy-green w-full max-w-full bg-secondary bg-space-dark">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl uppercase text-glow">Settings</h1>
          <p className="text-pipboy-green/70">Manage your account and preferences</p>
        </div>
        <SettingsWidget />
      </header>
      <Separator className="bg-pipboy-green/20" />

      <div className="flex h-full w-full px-6 py-8">
        <div className="mx-auto flex h-full w-full max-w-screen-xl gap-12">
          <div className="hidden w-full max-w-64 flex-col gap-0.5 lg:flex">
            <Link
              to={SettingsRoute.fullPath}
              className={cn(
                `${buttonVariants({ variant: "ghost" })} ${isSettingsPath && "bg-primary/5"}`,
                "justify-start rounded-md",
              )}
            >
              <span
                className={cn(
                  `text-sm text-primary/80 ${isSettingsPath && "font-medium text-primary"}`,
                )}
              >
                General
              </span>
            </Link>
            <Link
              to={BillingSettingsRoute.fullPath}
              className={cn(
                `${buttonVariants({ variant: "ghost" })} ${isBillingPath && "bg-primary/5"} justify-start rounded-md`,
              )}
            >
              <span
                className={cn(
                  `text-sm text-primary/80 ${isBillingPath && "font-medium text-primary"}`,
                )}
              >
                Billing
              </span>
            </Link>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
