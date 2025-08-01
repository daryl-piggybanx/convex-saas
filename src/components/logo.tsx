import { cn } from "@/lib/utils";
import PiggyVerseLogo from "@/assets/piggybanx-bolt_white.png";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  [key: string]: unknown | undefined;
}

export function Logo({ width, height, className, ...args }: LogoProps) {
  return (
    <img 
      src={PiggyVerseLogo} 
      alt="PiggyVerse Logo" 
      width={width ?? 20} 
      height={height ?? 20} 
      className={cn(`text-primary ${className}`)} 
      {...args}
    />
  );
}
