import { useAuthActions } from "@convex-dev/auth/react";
import { CURRENCIES } from "@cvx/schema";
import { useNavigate, useRouter } from "@tanstack/react-router";

/**
 * Returns a function that calls all of its arguments.
 */
export function callAll<Args extends unknown[]>(
  ...fns: (((...args: Args) => unknown) | undefined)[]
) {
  return (...args: Args) => fns.forEach((fn) => fn?.(...args));
}

/**
 * Locales.
 */
export function getLocaleCurrency() {
  return navigator.languages.includes("en-US")
    ? CURRENCIES.USD
    : CURRENCIES.EUR;
}

export const useSignOut = () => {
  const router = useRouter();
  const navigate = useNavigate();
  const { signOut } = useAuthActions();

  return async () => {
    await signOut();
    router.invalidate();
    navigate({ to: "/login" });
  };
};
