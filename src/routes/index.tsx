import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/button-util";
import { Loader2, Star as _Star } from "lucide-react";
import { Button as _Button } from "@/components/button";
import _siteConfig from "~/site.config";
import RetroGalaxyBG from "@/assets/retro-galaxy-3.png";
import { useConvexAuth } from "@convex-dev/react-query";
import { Route as AuthLoginRoute } from "@/routes/_app/login/_layout.index";
import { Route as DashboardRoute } from "@/routes/_app/_auth/dashboard/_layout.index";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const theme = "dark";
  return (
    <div className="parallax-container relative">
      {/* Parallax Background Layer */}
      <div 
        className="parallax-layer parallax-background" 
        style={{
          backgroundImage: `url(${RetroGalaxyBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Parallax Midground Layer */}
      <div className="parallax-layer parallax-midground">
        <div className="base-grid fixed h-screen w-screen opacity-40" />
        <div className="fixed bottom-0 h-screen w-screen bg-gradient-to-t from-[hsl(var(--card))] to-transparent" />
      </div>

      {/* Main Content Layer */}
      <div className="parallax-layer parallax-foreground">
        <div className="relative flex h-full w-full flex-col bg-transparent">
          {/* Navigation */}
          <div className="sticky top-0 z-50 mx-auto flex w-full max-w-screen-lg items-center justify-between p-6 py-3">
            <Link to="/" className="flex h-10 items-center gap-1">
              <Logo />
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/get-convex/convex-saas/tree/main/docs"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "link", size: "sm" }),
                    "group flex gap-3 px-0 text-primary/80 hover:text-primary hover:no-underline",
                  )}
                >
                  Docs
                </a>
              </div>

              <Link
                to={
                  isAuthenticated
                    ? DashboardRoute.fullPath
                    : AuthLoginRoute.fullPath
                }
                className={buttonVariants({ size: "sm" })}
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="animate-spin w-16 h-4" />}
                {!isLoading && isAuthenticated && "Dashboard"}
                {!isLoading && !isAuthenticated && "Get Started"}
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="z-10 mx-auto flex w-full max-w-screen-lg flex-col gap-4 px-6">
            <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-12 md:p-24">

              <h1 className="text-center text-6xl font-bold leading-tight text-primary md:text-7xl lg:leading-tight">
                Into the PiggyVerse
              </h1>
              <p className="max-w-screen-md text-center text-lg !leading-normal text-muted-foreground md:text-xl">
                
              </p>
              <div className="mt-2 flex w-full items-center justify-center gap-2">
                <Link
                  to={AuthLoginRoute.fullPath}
                  className={cn(buttonVariants({ size: "sm" }), "hidden sm:flex")}
                >
                  Get Started
                </Link>
                <a
                  href="https://github.com/get-convex/convex-saas/tree/main/docs"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "sm", variant: "outline" }),
                    "hidden dark:bg-secondary dark:hover:opacity-80 sm:flex",
                  )}
                >
                  Explore
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <h2 className="text-center font-serif text-xl font-medium text-primary/60">
                Built for Collectors by Collectors
              </h2>
            </div>

          </div>

          {/* Footer */}
          <footer className="z-10 flex w-full flex-col items-center justify-center gap-8 py-6">
            <a
              href="https://piggybanx.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center hover:scale-110"
            >
              <Logo width={40} height={40} />
            </a>

          </footer>
        </div>
      </div>
    </div>
  );
}
