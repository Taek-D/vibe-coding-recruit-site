import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const CATEGORIES = [
    { id: "dev", label: "개발", desc: "금융의 심장을 만듭니다", icon: "💻" },
    { id: "design", label: "디자인", desc: "가장 쉬운 경험을 설계합니다", icon: "🎨" },
    { id: "marketing", label: "마케팅", desc: "가치를 전달합니다", icon: "🚀" },
    { id: "business", label: "비즈니스", desc: "성장의 기회를 찾습니다", icon: "💼" },
    { id: "hr", label: "HR", desc: "최고의 팀을 만듭니다", icon: "👥" },
];

export function JobCategory() {
    return (
        <Section className="py-16 bg-grey-50" fullWidth>
            <div className="mx-auto max-w-[1000px] xl:max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-grey-900 mb-4">현재 모집 중인 직군</h2>
                    <p className="text-grey-600">당신의 전문성을 발휘할 팀을 찾아보세요.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {CATEGORIES.map((cat) => (
                        <Link key={cat.id} href={`/jobs/${cat.id}`}>
                            <Card className="h-full hover:bg-white hover:border-brand-blue/30 transition-all text-center py-10 group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {cat.icon}
                                </div>
                                <h3 className="text-lg font-bold text-grey-900 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{cat.label}</h3>
                                <p className="text-sm text-grey-500 line-clamp-2">{cat.desc}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}
