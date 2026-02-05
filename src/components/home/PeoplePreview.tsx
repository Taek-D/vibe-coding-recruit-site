import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

import { STORIES } from "@/lib/mock-data";

export function PeoplePreview() {
    return (
        <Section className="bg-grey-50">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-grey-900 mb-2">AIO 사람들</h2>
                    <p className="text-grey-600">최고의 동료들과 함께 일하는 즐거움.</p>
                </div>
                <Link href="/stories">
                    <span className="text-brand-blue font-semibold hover:underline hidden sm:inline-block">동료들의 이야기 더 보기 →</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {STORIES.slice(0, 4).map((story) => (
                    <Link key={story.id} href={`/stories/${story.id}`}>
                        <Card className="flex flex-col justify-between p-8 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group bg-white border border-grey-200">
                            <div>
                                <div className="text-4xl text-brand-blue font-serif mb-4">“</div>
                                <p className="text-lg font-medium text-grey-900 leading-relaxed mb-8 line-clamp-3">
                                    {story.quote}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-6 border-t border-grey-100">
                                <div>
                                    <p className="font-bold text-grey-900">{story.name}</p>
                                    <p className="text-sm text-grey-500">{story.role}</p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
