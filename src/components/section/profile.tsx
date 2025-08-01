import logo from "@/assets/piggybanx-bolt_white.png"
import { useQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "@cvx/_generated/api";
import { User } from "~/types";

export function ProfileSection() {
    const { data: user } = useQuery(convexQuery(api.app.getCurrentUser, {}));

    if (!user) {
        return null;
    }

  return (
    <div className="flex w-full flex-col items-center gap-2 text-pipboy-green sm:items-start">
      <div className="flex items-center gap-3">
      {user.avatarUrl ? (
            <img
                className="rounded-full border-2 border-pipboy-green/50 bg-black"
                width={40}
                height={40}
                alt={user.username ?? user.email}
                src={user.avatarUrl}
            />
        ) : (
            <img
                src={logo}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full border-2 border-pipboy-green/50 bg-black"
            />
        )}
        <div className="hidden sm:block">
          <p className="font-bold uppercase text-glow">The Collector</p>
          <p className="text-sm text-pipboy-green/70">Level 27</p>
        </div>
      </div>
    </div>
  )
}
