import * as React from "react";
import { cn } from "@/lib/utils";


// Note: cva is not installed, so I will implement a manual variant logic or simpler approach 
// to avoid extra deps if not needed, BUT cva is standard for this. 
// I'll install cva or write a simple switch. Let's write a simple component first to save a step.
// Actually, standard modern react is cva. I'll stick to manual cn for now to avoid installing another package unless I requested it.
// Wait, I can install cva. `npm install class-variance-authority`
// Let's implement without CVA for now to speed up, or just use cn logic.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "minimal" | "outline";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", fullWidth, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

        const variants = {
            primary: "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm",
            secondary: "bg-grey-200 text-grey-800 hover:bg-grey-300",
            outline: "border border-grey-300 bg-white text-grey-800 hover:bg-grey-50",
            minimal: "text-grey-700 hover:bg-grey-100 hover:text-grey-900",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-12 px-5 text-[15px]",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth && "w-full",
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
