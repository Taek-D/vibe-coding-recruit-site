interface CultureCoverProps {
    type: 'remote' | 'workshop' | 'education';
    className?: string;
}

export function CultureCover({ type, className = '' }: CultureCoverProps) {
    const renderSVG = () => {
        switch (type) {
            case 'remote':
                return (
                    <svg className="w-full h-full absolute inset-0 opacity-50 mix-blend-overlay" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradRemote" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#1D4ED8", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="200" fill="url(#gradRemote)" opacity="0.1" />
                        <g fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                            {/* Globe/World */}
                            <circle cx="200" cy="100" r="60" strokeDasharray="4 4" opacity="0.4" />
                            <ellipse cx="200" cy="100" rx="60" ry="30" opacity="0.4" />
                            <line x1="200" y1="40" x2="200" y2="160" opacity="0.4" />

                            {/* Location pins */}
                            <path d="M 100 80 L 100 90 M 100 80 Q 100 70 110 70 Q 120 70 120 80 Q 120 90 110 100 Q 100 90 100 80 Z" fill="currentColor" opacity="0.7" />
                            <path d="M 280 120 L 280 130 M 280 120 Q 280 110 290 110 Q 300 110 300 120 Q 300 130 290 140 Q 280 130 280 120 Z" fill="currentColor" opacity="0.7" />

                            {/* Connecting lines */}
                            <path d="M 110 85 Q 150 60 200 70" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeDasharray="3 3" />
                            <path d="M 200 110 Q 240 100 290 125" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeDasharray="3 3" />
                        </g>
                    </svg>
                );

            case 'workshop':
                return (
                    <svg className="w-full h-full absolute inset-0 opacity-50 mix-blend-overlay" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradWorkshop" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="200" fill="url(#gradWorkshop)" opacity="0.1" />
                        <g fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                            {/* People icons in circle */}
                            <circle cx="200" cy="100" r="70" strokeDasharray="4 4" opacity="0.3" />

                            {/* Person 1 */}
                            <circle cx="150" cy="90" r="12" fill="currentColor" opacity="0.6" />
                            <path d="M 140 110 Q 150 105 160 110" stroke="currentColor" strokeWidth="2" opacity="0.6" />

                            {/* Person 2 */}
                            <circle cx="200" cy="80" r="12" fill="currentColor" opacity="0.7" />
                            <path d="M 190 100 Q 200 95 210 100" stroke="currentColor" strokeWidth="2" opacity="0.7" />

                            {/* Person 3 */}
                            <circle cx="250" cy="90" r="12" fill="currentColor" opacity="0.6" />
                            <path d="M 240 110 Q 250 105 260 110" stroke="currentColor" strokeWidth="2" opacity="0.6" />

                            {/* Person 4 */}
                            <circle cx="200" cy="130" r="12" fill="currentColor" opacity="0.6" />
                            <path d="M 190 150 Q 200 145 210 150" stroke="currentColor" strokeWidth="2" opacity="0.6" />

                            {/* Connection lines */}
                            <line x1="162" y1="95" x2="188" y2="85" opacity="0.3" />
                            <line x1="212" y1="85" x2="238" y2="95" opacity="0.3" />
                            <line x1="200" y1="92" x2="200" y2="118" opacity="0.3" />
                        </g>
                    </svg>
                );

            case 'education':
                return (
                    <svg className="w-full h-full absolute inset-0 opacity-50 mix-blend-overlay" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradEducation" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#10B981", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#059669", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <rect width="400" height="200" fill="url(#gradEducation)" opacity="0.1" />
                        <g fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                            {/* Book */}
                            <rect x="150" y="80" width="100" height="60" rx="4" opacity="0.4" />
                            <line x1="200" y1="80" x2="200" y2="140" opacity="0.4" />
                            <line x1="160" y1="95" x2="190" y2="95" opacity="0.3" strokeWidth="1" />
                            <line x1="160" y1="105" x2="190" y2="105" opacity="0.3" strokeWidth="1" />
                            <line x1="160" y1="115" x2="190" y2="115" opacity="0.3" strokeWidth="1" />
                            <line x1="210" y1="95" x2="240" y2="95" opacity="0.3" strokeWidth="1" />
                            <line x1="210" y1="105" x2="240" y2="105" opacity="0.3" strokeWidth="1" />
                            <line x1="210" y1="115" x2="240" y2="115" opacity="0.3" strokeWidth="1" />

                            {/* Graduation cap */}
                            <path d="M 200 50 L 260 65 L 200 80 L 140 65 Z" fill="currentColor" opacity="0.6" />
                            <rect x="195" y="80" width="10" height="20" fill="currentColor" opacity="0.6" />

                            {/* Sparkles */}
                            <circle cx="120" cy="60" r="3" fill="currentColor" opacity="0.7" />
                            <circle cx="280" cy="70" r="3" fill="currentColor" opacity="0.7" />
                            <circle cx="100" cy="120" r="2" fill="currentColor" opacity="0.5" />
                            <circle cx="300" cy="130" r="2" fill="currentColor" opacity="0.5" />
                        </g>
                    </svg>
                );
        }
    };

    const bgColors: Record<string, string> = {
        remote: "bg-blue-600",
        workshop: "bg-purple-600",
        education: "bg-green-600",
    };

    return (
        <div className={`relative overflow-hidden w-full h-full ${bgColors[type] || "bg-grey-900"} ${className}`}>
            {renderSVG()}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
    );
}
