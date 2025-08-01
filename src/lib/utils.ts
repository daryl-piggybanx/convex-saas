import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS classnames with support for conditional classes.
 * Widely used for Radix components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}