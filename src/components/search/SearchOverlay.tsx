"use client";

import * as React from "react";
import Link from "next/link";
import { JOBS, STORIES } from "@/lib/mock-data";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = React.useState("");
    const [roleFilter, setRoleFilter] = React.useState<string | null>(null);

    // Lock body scroll when open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    // Filter Logic
    const filteredJobs = JOBS.filter(job => {
        const matchesQuery = job.title.toLowerCase().includes(query.toLowerCase()) ||
            job.team.toLowerCase().includes(query.toLowerCase());
        const matchesRole = roleFilter ? job.category === roleFilter : true;
        return matchesQuery && matchesRole;
    });

    const filteredStories = STORIES.filter(story => {
        const matchesQuery = story.name.toLowerCase().includes(query.toLowerCase()) ||
            story.quote.toLowerCase().includes(query.toLowerCase());
        const matchesRole = roleFilter ? story.category === roleFilter : true;
        return matchesQuery && matchesRole;
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="max-w-[800px] mx-auto px-5 pt-24 h-full flex flex-col">

                {/* Header: Close & Input */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="직무, 팀, 동료 이야기를 검색해보세요..."
                            className="w-full text-3xl font-bold bg-transparent border-b-2 border-grey-200 py-4 focus:outline-none focus:border-brand-blue placeholder:text-grey-300 transition-colors"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-grey-100 transition-colors"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Filters */}
                <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
                    {['dev', 'design', 'marketing'].map((role) => (
                        <button
                            key={role}
                            onClick={() => setRoleFilter(roleFilter === role ? null : role)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${roleFilter === role
                                    ? 'bg-brand-blue text-white shadow-md'
                                    : 'bg-grey-100 text-grey-600 hover:bg-grey-200'
                                }`}
                        >
                            {role === 'dev' ? '개발' : role === 'design' ? '디자인' : '마케팅'}
                        </button>
                    ))}
                </div>

                {/* Results */}
                <div className="flex-1 overflow-y-auto pb-20">
                    {query.length === 0 && !roleFilter ? (
                        <div className="text-center text-grey-400 mt-20">
                            <p>검색어를 입력하여 AIO에서의 커리어를 찾아보세요.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Jobs Column */}
                            <div>
                                <h3 className="text-xs font-bold text-grey-500 uppercase tracking-widest mb-4">채용 공고 ({filteredJobs.length})</h3>
                                <div className="space-y-3">
                                    {filteredJobs.map(job => (
                                        <Link key={job.id} href={`/jobs/${job.category}/${job.id}`} onClick={onClose}>
                                            <div className="p-4 rounded-xl hover:bg-grey-50 transition-colors border border-transparent hover:border-grey-200 group">
                                                <div className="font-bold text-grey-900 group-hover:text-brand-blue">{job.title}</div>
                                                <div className="text-sm text-grey-500">{job.team}</div>
                                            </div>
                                        </Link>
                                    ))}
                                    {filteredJobs.length === 0 && <p className="text-grey-400 text-sm">해당하는 공고가 없습니다.</p>}
                                </div>
                            </div>

                            {/* Stories Column */}
                            <div>
                                <h3 className="text-xs font-bold text-grey-500 uppercase tracking-widest mb-4">팀 이야기 ({filteredStories.length})</h3>
                                <div className="space-y-4">
                                    {filteredStories.map(story => (
                                        <Link key={story.id} href={`/stories/${story.id}`} onClick={onClose}>
                                            <div className="flex gap-4 p-4 rounded-xl hover:bg-grey-50 transition-colors border border-transparent hover:border-grey-200 group">
                                                <div className="w-16 h-16 rounded-lg bg-grey-200 overflow-hidden shrink-0">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-grey-900 group-hover:text-brand-blue">&quot;{story.quote}&quot;</div>
                                                    <div className="text-sm text-grey-500">{story.name} · {story.role}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                    {filteredStories.length === 0 && <p className="text-grey-400 text-sm">해당하는 이야기가 없습니다.</p>}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
