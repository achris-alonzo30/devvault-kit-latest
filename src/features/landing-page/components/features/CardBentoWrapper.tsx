import { cn } from "@/lib/utils";

export const CardBentoWrapper = ({
    className,
    children,

}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className={cn(
            "relative h-full w-full overflow-hidden  border-b-8 border-r-8 rounded-2xl border-neutral-900 p-6",
            className
        )}
        >
            {children}
        </div>
    );
};
