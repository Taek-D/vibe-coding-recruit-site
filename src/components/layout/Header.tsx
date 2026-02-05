"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SearchOverlay } from "@/components/search/SearchOverlay";

export function Header() {
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-grey-100">
                <div className="mx-auto max-w-[1000px] h-16 px-5 flex items-center justify-between">
                    {/* Logo / Brand */}
                    <Link href="/" className="text-xl font-bold tracking-tight text-grey-900">
                        AIO<span className="text-brand-blue">.</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/jobs" className="text-[15px] font-medium text-grey-700 hover:text-grey-900 transition-colors">
                            채용공고
                        </Link>
                        <Link href="/stories" className="text-[15px] font-medium text-grey-700 hover:text-grey-900 transition-colors">
                            팀 이야기
                        </Link>
                        <Link href="/about" className="text-[15px] font-medium text-grey-700 hover:text-grey-900 transition-colors">
                            회사 소개
                        </Link>
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 text-grey-500 hover:text-grey-900 transition-colors"
                            aria-label="검색"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                        <Link href="/jobs">
                            <Button size="sm" variant="primary">
                                채용공고 보기
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
