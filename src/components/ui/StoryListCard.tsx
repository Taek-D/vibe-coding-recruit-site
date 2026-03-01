import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Story } from "@/lib/mock-data";
import { StoryCover } from "@/components/ui/StoryCover";

export function StoryListCard({ id, title, lead, tags, date, readTime, role, name, category }: Story) {
    return (
        <Link href={`/stories/${id}`} className="block h-full">
            <Card className="h-full p-0 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col group">
                <div className="h-56 relative group-hover:opacity-95 transition-opacity">
                    <StoryCover category={category} />

                    <div className="absolute top-4 left-4 flex gap-2">
                        {tags?.slice(0, 1).map(tag => (
                            <span key={tag} className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-white border border-white/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-grey-900 mb-2 leading-tight group-hover:text-brand-blue transition-colors">
                            {title}
                        </h3>
                        <p className="text-grey-600 text-sm line-clamp-2 leading-relaxed">
                            {lead}
                        </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-grey-100 flex items-center justify-between text-xs text-grey-500 font-medium">
                        <div className="flex items-center gap-2">
                            <span>{name} · {role}</span>
                        </div>
                        <div>
                            <span>{date}</span>
                            <span className="mx-1">•</span>
                            <span>{readTime}</span>
                        </div>
                    </div>

                    <div className="mt-4 text-brand-blue text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        인터뷰 읽기
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
