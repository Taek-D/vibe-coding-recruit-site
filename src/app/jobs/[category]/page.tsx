import { notFound } from "next/navigation";
import { JobCard } from "@/components/ui/JobCard";
import { StoryCard } from "@/components/ui/StoryCard";
import { CultureCard } from "@/components/ui/CultureCard";
import { Section } from "@/components/ui/Section";
import { JOBS, STORIES, CULTURE, CATEGORY_INFO } from "@/lib/mock-data";

type Props = {
    params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { category } = await params;
    const info = CATEGORY_INFO[category] || { title: "전체 공고", desc: "AIO의 모든 채용" };

    return {
        title: `${info.title} 채용 - AIO`,
        description: info.desc,
    };
}

export default async function JobHubPage({ params }: Props) {
    const { category } = await params;

    // Handle "all" case or specific category
    const info = category === 'all'
        ? { title: "전체 보기", desc: "AIO와 함께 세상을 바꿀 기회를 찾아보세요." }
        : CATEGORY_INFO[category];

    if (!info && category !== 'all' && !CATEGORY_INFO[category]) {
        // If not a valid category and not 'all', showing a default or 404
        // For MVP, if undefined, we can show 404 or just render generic.
        // Let's assume valid categories are passed or handled.
        if (!CATEGORY_INFO[category]) notFound();
    }

    // Filter data
    const jobs = JOBS.filter(j => j.category === category || category === 'all');
    const stories = STORIES.filter(s => s.category === category || category === 'all');
    // Culture is usually global, but could be filtered if needed. For now show all.
    const cultureItems = CULTURE;

    return (
        <>
            {/* 1. Intro Section */}
            <Section className="bg-grey-50 pt-32 pb-16 text-center">
                <h1 className="text-4xl font-bold text-grey-900 mb-4">{info?.title}</h1>
                <p className="text-xl text-grey-600 max-w-2xl mx-auto">{info?.desc}</p>
            </Section>

            {/* 2. Open Roles */}
            <Section>
                <h2 className="text-2xl font-bold text-grey-900 mb-8">모집 중인 공고</h2>
                {jobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {jobs.map((job) => (
                            <JobCard key={job.id} {...job} />
                        ))}
                    </div>
                ) : (
                    <p className="text-grey-500 py-10 text-center bg-grey-50 rounded-xl">현재 오픈된 공고가 없습니다.</p>
                )}
            </Section>

            {/* 3. Crew Stories */}
            {stories.length > 0 && (
                <Section className="bg-grey-50">
                    <h2 className="text-2xl font-bold text-grey-900 mb-8">동료들의 이야기</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stories.map((story) => (
                            <StoryCard key={story.id} {...story} />
                        ))}
                    </div>
                </Section>
            )}

            {/* 4. Inside Us (Culture) */}
            <Section>
                <h2 className="text-2xl font-bold text-grey-900 mb-8">AIO 생활</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cultureItems.map(item => (
                        <CultureCard key={item.id} {...item} />
                    ))}
                </div>
            </Section>
        </>
    );
}
