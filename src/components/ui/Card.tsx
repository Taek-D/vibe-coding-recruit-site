import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-[24px] bg-surface p-6 shadow-sm border border-grey-100 transition-all duration-300",
                    hoverEffect && "hover:translate-y-[-4px] hover:shadow-md cursor-pointer",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";
