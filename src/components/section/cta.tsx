import { Separator } from "@/components/ui/separator"
import { callToActions } from "@/lib/data"

export function CtaSection() {
  return (
    <div className="w-full">
      <Separator className="my-4 bg-pipboy-green/20" />
      <div className="flex flex-col gap-2">
        {callToActions.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-none p-2 text-pipboy-green transition-colors hover:bg-pipboy-green/10 hover:text-glow"
          >
            <item.icon className="h-6 w-6 flex-shrink-0" />
            <span className="hidden sm:inline">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
