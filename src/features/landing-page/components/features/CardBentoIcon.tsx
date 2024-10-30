import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";


export const CardBentoIcon = ({
    icon: Icon,
    className
}: {
    icon: LucideIcon
    className?: string
}) => {
    return (
        <span className={cn("mb-4 block w-fit rounded bg-gradient-to-br from-slate-800 to-slate-950 p-3 text-3xl shadow-md", className)}>
            <Icon className="size-5" />
        </span>
    )
}