import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StoryCard } from "@/components/ui/StoryCard";
import { getJobById, STORIES, CATEGORY_INFO } from "@/lib/mock-data";

type Props = {
    params: Promise<{ category: string; id: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const job = getJobById(id);
    if (!job) return { title: "공고를 찾을 수 없습니다" };
    return {
        title: `${job.title} - AIO 채용`,
    };
}

export default async function JobDetailPage({ params }: Props) {
    const { id, category } = await params;
    const job = getJobById(id);

    if (!job) notFound();

    // Related Stories (Just take first 2 for demo)
    // Map relatedStoryIds to actual Story objects
    const relatedStoryIds = job.relatedStoryIds || ["1", "2"]; // Fallback to first 2
    const relatedStories = relatedStoryIds
        .map(id => STORIES.find(s => s.id === id))
        .filter((s): s is typeof STORIES[0] => !!s);

    const categoryTitle = CATEGORY_INFO[category]?.title || category;

    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-[1000px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 text-grey-900">

                {/* LEFT COLUMN: Main Content */}
                <div>
                    {/* Header (Internal) */}
                    <div className="mb-10">
                        <Link href={`/jobs/${category}`} className="text-sm font-semibold text-grey-500 hover:text-brand-blue mb-4 inline-block">
                            ← {categoryTitle} 직무 전체보기
                        </Link>
                        <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
                        <p className="text-xl text-grey-600">{job.team} 팀</p>
                    </div>

                    {/* 1. Context (Problem we solve) */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">어떤 문제를 해결하나요?</h2>
                        <p className="text-lg text-grey-700 leading-relaxed text-pretty">
                            {job.description}
                        </p>
                    </section>

                    {/* 2. Responsibilities */}
                    {job.responsibilities && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">주요 업무</h2>
                            <p className="text-grey-600 mb-4">입사 후 이런 일을 하게 됩니다.</p>
                            <ul className="list-disc pl-5 space-y-2 text-grey-700 leading-relaxed">
                                {job.responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* 3. Collaboration */}
                    {job.collaboration && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">협업 방식</h2>
                            <ul className="list-disc pl-5 space-y-2 text-grey-700 leading-relaxed">
                                {job.collaboration.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* 4. Requirements */}
                    <section className="mb-12 p-8 bg-grey-50 rounded-2xl border border-grey-100">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4 text-grey-900">이런 분 찾아요</h3>
                            <ul className="space-y-3">
                                {job.requirements?.must.map((req, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                                        <span className="text-grey-700 font-medium">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-grey-900">이런 경험이 있다면 더 좋아요</h3>
                            <ul className="space-y-3">
                                {job.requirements?.nice.map((req, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-grey-400 shrink-0" />
                                        <span className="text-grey-600">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 5. Tech Stack (If applicable) */}
                    {job.techStack && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">기술 및 도구</h2>
                            <div className="flex flex-wrap gap-2">
                                {job.techStack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white border border-grey-200 rounded-lg text-sm text-grey-700 font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 6. Process */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-6">채용 프로세스</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                            {job.process?.map((step, i) => (
                                <div key={i} className="relative group">
                                    <div className="h-full p-5 bg-white border border-grey-200 rounded-xl relative z-10 hover:border-brand-blue hover:shadow-md transition-all">
                                        <span className="block text-sm font-bold text-brand-blue mb-1">Step 0{i + 1}</span>
                                        <span className="font-semibold text-grey-800 text-sm leading-tight block break-keep">{step}</span>
                                    </div>
                                    {/* Connector line (desktop only) */}
                                    {i < (job.process?.length || 0) - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 w-6 h-[1px] bg-grey-300 -z-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-sm text-grey-500 text-center lg:text-left">
                            * 전형 절차는 직무에 따라 유연하게 변경될 수 있습니다.
                        </p>
                    </section>

                    {/* 7. Related Content */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">함께할 동료들</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedStories.map(story => (
                                <StoryCard key={story.id} {...story} />
                            ))}
                        </div>
                    </section>
                </div>

                {/* RIGHT Column: Sticky Summary */}
                <div className="relative hidden lg:block">
                    <div className="sticky top-24">
                        <Card className="p-8 border-brand-blue/20 bg-white/50 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                            <p className="text-grey-500 mb-6">{job.team} 팀</p>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between py-2 border-b border-grey-100">
                                    <span className="text-grey-500">경력</span>
                                    <span className="font-medium">{job.career}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-grey-100">
                                    <span className="text-grey-500">고용 형태</span>
                                    <span className="font-medium">{job.type}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-grey-100">
                                    <span className="text-grey-500">근무지</span>
                                    <span className="font-medium">{job.location}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-grey-100">
                                    <span className="text-grey-500">근무 방식</span>
                                    <span className="font-medium">{job.workStyle}</span>
                                </div>
                            </div>

                            <Link href={`/apply/${job.id}`}>
                                <Button fullWidth size="lg" className="shadow-lg shadow-brand-blue/30 mb-3">
                                    지원하기
                                </Button>
                            </Link>
                            <p className="text-xs text-center text-grey-400">
                                지원 완료까지 약 2분 소요
                            </p>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-grey-200 z-50 flex items-center justify-between gap-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <div className="hidden sm:block">
                    <div className="font-bold text-sm">{job.title}</div>
                    <div className="text-xs text-grey-500">{job.team} 팀</div>
                </div>
                <Link href={`/apply/${job.id}`} className="flex-1">
                    <Button fullWidth size="md">
                        지원하기
                    </Button>
                </Link>
            </div>
        </div>
    );
}
