import { Separator } from "@/components/ui/separator"
import { Route as SettingsRoute } from "@/routes/_app/_auth/dashboard/_layout.settings.index"
import { Route as BillingSettingsRoute } from "@/routes/_app/_auth/dashboard/_layout.settings.billing"
import { CreditCard, Settings } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/ui/tooltip"

export default function SettingsWidget() {
    return (
        <TooltipProvider>
            <div className="flex gap-4 text-lg text-pipboy-green">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to={SettingsRoute.fullPath} className="flex items-center gap-3 rounded-none p-2 text-pipboy-green transition-colors hover:bg-pipboy-green/10 hover:text-glow">
                            <Settings className="h-6 w-6 flex-shrink-0 cursor-pointer" />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Settings</p>
                    </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to={BillingSettingsRoute.fullPath} className="flex items-center gap-3 rounded-none p-2 text-pipboy-green transition-colors hover:bg-pipboy-green/10 hover:text-glow">
                            <CreditCard className="h-6 w-6 flex-shrink-0 cursor-pointer" />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Billing</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    )
}