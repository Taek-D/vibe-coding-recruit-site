import * as React from "react";
import { cn } from "@/lib/utils";

interface StoryCoverProps extends React.HTMLAttributes<HTMLDivElement> {
    category: string; // dev, design, marketing, business, hr
    className?: string; // Additional classes
}

export function StoryCover({ category, className, ...props }: StoryCoverProps) {
    // Generate SVGs based on category
    const renderSVG = () => {
        switch (category) {
            case "dev":
                return (
                    <svg className="w-full h-full absolute inset-0 opacity-40 mix-blend-overlay" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradDev" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: "#2563EB", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#0F172A", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path fill="url(#gradDev)" d="M0 0h400v200H0z" opacity="0.1" />
                        <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" className="text-white">
                            <path d="M40 100 L80 140 L40 180" />
                            <path d="M120 180 L80 140 L120 100" />
                            <rect x="180" y="80" width="160" height="100" rx="8" />
                            <line x1="200" y1="110" x2="320" y2="110" />
                            <line x1="200" y1="140" x2="280" y2="140" />
                            <circle cx="360" cy="50" r="20" strokeDasharray="4 4" />
                            <circle cx="50" cy="50" r="10" />
                            <line x1="60" y1="50" x2="340" y2="50" strokeDasharray="4 4" />
                        </g>
                    </svg>
                );
            case "design":
                return (
                    <svg className="w-full h-full absolute inset-0 opacity-50 mix-blend-overlay" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradDesign" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#EC4899", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="200" fill="url(#gradDesign)" opacity="0.1" />
                        <g fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                            <circle cx="100" cy="100" r="60" opacity="0.6" />
                            <rect x="220" y="60" width="100" height="100" transform="rotate(15 270 110)" opacity="0.6" />
                            <path d="M50 180 Q 200 80 350 180" strokeDasharray="8 8" />
                            <path d="M320 40 L340 60 L320 80 L300 60 Z" fill="currentColor" opacity="0.4" />
                        </g>
                    </svg>
                );
            case "marketing":
                return (
                    <svg className="w-full h-full absolute inset-0 opacity-50 mix-blend-overlay" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradMark" x1="100%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#F97316", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#EA580C", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="200" fill="url(#gradMark)" opacity="0.1" />
                        <g fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                            <path d="M50 150 L120 100 L180 130 L280 50" strokeWidth="3" />
                            <path d="M280 50 L280 90 M280 50 L240 50" strokeWidth="3" />
                            <circle cx="280" cy="50" r="4" fill="currentColor" />
                            <circle cx="180" cy="130" r="4" fill="currentColor" />
                            <circle cx="120" cy="100" r="4" fill="currentColor" />
                            <circle cx="50" cy="150" r="4" fill="currentColor" />
                            <path d="M330 140 L360 110 L380 130 L350 160 Z" />
                            <line x1="330" y1="140" x2="310" y2="160" />
                            <line x1="345" y1="125" x2="300" y2="180" strokeDasharray="4 4" />
                        </g>
                    </svg>
                );
            case "business":
                return (
                    <svg className="w-full h-full absolute inset-0 opacity-40 mix-blend-overlay" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradBiz" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#10B981", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#059669", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="200" fill="url(#gradBiz)" opacity="0.1" />
                        <g fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                            <rect x="60" y="60" width="80" height="100" rx="4" />
                            <line x1="80" y1="80" x2="120" y2="80" />
                            <line x1="80" y1="100" x2="120" y2="100" />
                            <line x1="80" y1="120" x2="100" y2="120" />
                            <circle cx="260" cy="100" r="50" strokeWidth="8" strokeOpacity="0.5" />
                            <path d="M260 50 A 50 50 0 0 1 310 100" strokeWidth="8" />
                            <path d="M300 160 L340 160 L340 120" />
                            <path d="M340 160 L380 180" />
                        </g>
                    </svg>
                );
            case "hr":
                return (
                    <svg className="w-full h-full absolute inset-0 opacity-50 mix-blend-overlay" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradHR" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: "#F59E0B", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#FBBF24", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="200" fill="url(#gradHR)" opacity="0.1" />
                        <g fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                            <circle cx="200" cy="80" r="20" />
                            <path d="M160 140 Q 200 180 240 140" />
                            <path d="M100 100 Q 120 60 140 100" />
                            <circle cx="120" cy="80" r="10" />
                            <path d="M260 100 Q 280 60 300 100" />
                            <circle cx="280" cy="80" r="10" />
                            <path d="M40 40 L60 60 L40 80" />
                            <path d="M360 40 L340 60 L360 80" />
                            <circle cx="50" cy="150" r="30" strokeDasharray="4 4" opacity="0.5" />
                            <circle cx="350" cy="150" r="30" strokeDasharray="4 4" opacity="0.5" />
                        </g>
                    </svg>
                );
            case "culture":
                return (
                    <svg className="w-full h-full absolute inset-0 opacity-50 mix-blend-overlay" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradCulture" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="200" fill="url(#gradCulture)" opacity="0.1" />
                        <g fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                            {/* Connected Nodes / Network */}
                            <circle cx="100" cy="100" r="60" strokeDasharray="4 4" opacity="0.3" />
                            <circle cx="300" cy="100" r="60" strokeDasharray="4 4" opacity="0.3" />
                            <circle cx="200" cy="150" r="40" strokeDasharray="4 4" opacity="0.3" />

                            <line x1="100" y1="100" x2="300" y2="100" opacity="0.5" />
                            <line x1="100" y1="100" x2="200" y2="150" opacity="0.5" />
                            <line x1="300" y1="100" x2="200" y2="150" opacity="0.5" />

                            <circle cx="200" cy="100" r="10" fill="currentColor" />
                            <circle cx="150" cy="125" r="6" fill="currentColor" />
                            <circle cx="250" cy="125" r="6" fill="currentColor" />

                            {/* Floating particles */}
                            <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.6" />
                            <circle cx="350" cy="50" r="4" fill="currentColor" opacity="0.6" />
                            <circle cx="50" cy="180" r="4" fill="currentColor" opacity="0.6" />
                            <circle cx="350" cy="180" r="4" fill="currentColor" opacity="0.6" />
                        </g>
                    </svg>
                );
            default: // Abstract fallback
                return (
                    <svg className="w-full h-full absolute inset-0 opacity-30" viewBox="0 0 400 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="200" fill="#94A3B8" />
                        <circle cx="200" cy="100" r="150" fill="white" fillOpacity="0.1" />
                    </svg>
                );
        }
    };

    // Background base color map
    const bgColors: Record<string, string> = {
        dev: "bg-slate-900",
        design: "bg-pink-900",
        marketing: "bg-orange-900",
        business: "bg-emerald-900",
        hr: "bg-amber-900",
        culture: "bg-violet-900",
    };

    return (
        <div className={cn("relative overflow-hidden w-full h-full", bgColors[category] || "bg-grey-900", className)} {...props}>
            {renderSVG()}
            {/* Overlay Gradient for text readability if needed, though card has its own overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
    );
}
