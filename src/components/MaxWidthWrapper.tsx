import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
    className?: string;
    children: React.ReactNode;
}

// This is a component that wraps its children in a container with a maximum width and it is used to center content on the page.

export const MaxWidthWrapper = ({ children, className = "" }: MaxWidthWrapperProps) => {
    return (
        <div className={cn("mx-auto max-w-7xl px-4 md:px-8", className)}>
            {children}
        </div>
    );
};