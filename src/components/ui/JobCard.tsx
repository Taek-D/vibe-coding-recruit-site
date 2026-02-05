import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface JobCardProps {
    id: string;
    title: string;
    team: string;
    type: string;
    category: string;
    career?: string;
    workStyle?: string;
    location?: string;
}

export function JobCard({ id, title, team, type, category, career, workStyle, location }: JobCardProps) {
    return (
        <Link href={`/jobs/${category}/${id}`}>
            <Card className="flex flex-col h-full justify-between group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div>
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="inline-block px-2.5 py-1 rounded-md bg-grey-100 text-[11px] font-bold text-grey-600">
                                {team}
                            </span>
                            {career && (
                                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-[11px] font-bold text-blue-600">
                                    {career}
                                </span>
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-blue transition-colors duration-200 leading-tight">
                            {title}
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-grey-500 mb-6">
                        <span>{type}</span>
                        {workStyle && <span className="before:content-['•'] before:mr-3 before:text-grey-300">{workStyle}</span>}
                        {location && <span className="before:content-['•'] before:mr-3 before:text-grey-300">{location}</span>}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-medium text-grey-400 group-hover:text-grey-600 transition-colors">
                        공고 보기
                    </span>
                    <div className="w-8 h-8 rounded-full bg-grey-100 flex items-center justify-center text-grey-400 group-hover:bg-brand-blue group-hover:text-white transition-all duration-200">
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
