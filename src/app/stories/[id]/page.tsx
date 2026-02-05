import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { JobCard } from "@/components/ui/JobCard";
import { getStoryById, JOBS } from "@/lib/mock-data";
import { StoryCover } from "@/components/ui/StoryCover";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const story = getStoryById(id);
    if (!story) return { title: "이야기를 찾을 수 없습니다" };
    return {
        title: `${story.name}님의 이야기 - AIO 팀`,
    };
}

export default async function StoryDetailPage({ params }: Props) {
    const { id } = await params;
    const story = getStoryById(id);

    if (!story) notFound();

    // Find related jobs
    const relatedJobs = JOBS.filter(j =>
        story.relatedJobCategory === 'all'
            ? true
            : j.category === story.relatedJobCategory
    ).slice(0, 2);

    return (
        <article className="bg-white min-h-screen pb-20">
            {/* 1. Header with Image */}
            <div className="relative pt-32 pb-20 bg-grey-900 overflow-hidden">
                <StoryCover category={story.category} className="absolute inset-0 opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-grey-900 via-grey-900/40 to-transparent" />

                <div className="relative max-w-[800px] mx-auto px-5 text-center">
                    <div className="flex justify-center gap-2 mb-8">
                        {story.tags?.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold text-blue-200 uppercase tracking-wider border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white word-keep">
                        "{story.title}"
                    </h1>

                    <div className="flex items-center justify-center gap-4 text-sm md:text-base font-medium text-grey-300">
                        {/* Avatar for Header */}
                        <div className="w-10 h-10 rounded-full bg-white text-brand-navy flex items-center justify-center font-bold text-lg">
                            {story.name.slice(0, 1)}
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-white">{story.name} · {story.role}</span>
                            <span className="text-xs opacity-70">{story.date} · {story.readTime} 읽기</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[720px] mx-auto px-5 py-12 md:py-20">

                {/* Lead Paragraph */}
                <div className="text-xl md:text-2xl font-medium text-grey-900 leading-relaxed mb-16 border-l-4 border-brand-blue pl-6 py-2">
                    {story.lead}
                </div>

                {/* 2. Main Content (Rich Text) */}
                <div className="space-y-12 text-lg text-grey-800 leading-relaxed mb-20">
                    {story.content?.map((block, i) => (
                        <div key={i}>
                            {block.type === 'h' && (
                                <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mt-16 mb-6">
                                    {block.text}
                                </h2>
                            )}
                            {block.type === 'q' && (
                                <h3 className="font-bold text-xl text-brand-blue mb-4">
                                    Q. {block.text}
                                </h3>
                            )}
                            {block.type === 'a' && (
                                <p className="text-grey-700 whitespace-pre-line">
                                    {block.text}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* 3. Key Takeaway Card */}
                {story.summary && (
                    <Card className="bg-grey-50 border-grey-200 p-8 md:p-10 mb-20">
                        <div className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-6">Summary</div>
                        <h3 className="text-xl font-bold text-grey-900 mb-6">3줄 요약</h3>
                        <ul className="space-y-4">
                            {story.summary.map((item, i) => (
                                <li key={i} className="flex gap-4 text-lg text-grey-700">
                                    <span className="text-brand-blue font-bold">✔</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                )}

                {/* 4. Conversion CTA */}
                <div className="border-t border-grey-100 pt-16 text-center">
                    <h2 className="text-3xl font-bold text-grey-900 mb-4">{story.name}님과 함께 금융을 바꿀까요?</h2>
                    <p className="text-grey-600 mb-10 text-lg">AIO는 지금 전 직군 적극 채용 중입니다.</p>


                    {relatedJobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {relatedJobs.map(job => (
                                <JobCard key={job.id} {...job} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <Link href="/jobs">
                                <Button size="lg">전체 공고 보기</Button>
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </article>
    );
}
