import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    fullWidth?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, fullWidth = false, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-16 md:py-24", className)}
                {...props}
            >
                <div className={cn("mx-auto px-5", !fullWidth && "max-w-[1000px]")}>
                    {children}
                </div>
            </section>
        );
    }
);
Section.displayName = "Section";
