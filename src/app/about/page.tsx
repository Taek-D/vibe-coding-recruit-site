import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CultureCard } from "@/components/ui/CultureCard";
import { CULTURE } from "@/lib/mock-data";

export const metadata = {
    title: "AIO 소개 - 금융을 더 쉽게",
    description: "AIO는 기술로 금융의 불합리함을 해결합니다.",
};

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20">

            {/* 1. Problem / Mission */}
            <Section className="text-center">
                <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4 block">Our Mission</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-grey-900 leading-tight">
                    금융을 더 쉽게,<br />
                    투명하게 만듭니다.
                </h1>
                <p className="text-xl md:text-2xl text-grey-700 max-w-3xl mx-auto leading-relaxed mb-12 text-pretty">
                    은행 앱을 켤 때마다 느껴지던 막막함을 기억하시나요?<br />
                    어려운 용어, 복잡한 절차, 불필요한 공인인증서.<br />
                    AIO는 이 모든 '금융의 장벽'을 기술로 허물고,<br />
                    누구나 직관적으로 내 돈을 관리하는 세상을 만듭니다.
                </p>
            </Section>

            {/* 2. Product Principles */}
            <Section className="bg-grey-50 rounded-3xl mx-5 my-10 max-w-[1240px] md:mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">우리는 이렇게 만듭니다</h2>
                    <p className="text-grey-600">AIO가 지키는 3가지 제품 원칙</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white rounded-2xl shadow-sm border border-grey-100/50 hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-2xl mb-6">🤝</div>
                        <h3 className="font-bold text-xl mb-3">광적인 신뢰 (Fanatic Trust)</h3>
                        <p className="text-grey-600 leading-relaxed">금융의 본질은 신뢰입니다. 0.0001%의 오차도 허용하지 않는 견고한 시스템 위에, 사용자가 마음 놓고 쓸 수 있는 서비스를 쌓아 올립니다.</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow-sm border border-grey-100/50 hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-2xl mb-6">⚡</div>
                        <h3 className="font-bold text-xl mb-3">압도적인 속도 (Extreme Speed)</h3>
                        <p className="text-grey-600 leading-relaxed">송금 10초, 대출 조회 1분. 사용자의 시간을 아껴주는 것이 최고의 가치입니다. 불필요한 로딩과 단계를 집요하게 제거합니다.</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow-sm border border-grey-100/50 hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-2xl mb-6">💎</div>
                        <h3 className="font-bold text-xl mb-3">투명한 명확성 (Radical Clarity)</h3>
                        <p className="text-grey-600 leading-relaxed">금융 상품의 숨겨진 수수료, 깨알 같은 약관을 가장 크게 보여줍니다. 사용자가 모든 정보를 명확히 알고 선택할 수 있게 돕습니다.</p>
                    </div>
                </div>
            </Section>

            {/* 3. How We Work */}
            <Section className="full-width">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-3xl font-bold mb-12">각자의 시선으로 하나의 목표를 향합니다</h2>
                    <div className="pl-6 border-l-2 border-grey-200 hover:border-brand-blue transition-colors space-y-12">
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-blue ring-4 ring-white" />
                            <h3 className="text-xl font-bold mb-2">Product & Design</h3>
                            <p className="text-grey-700">"이게 정말 사용자에게 최선인가요?"를 끊임없이 묻습니다. 예쁜 화면이 아니라 문제 해결을 위한 인터페이스를 설계합니다.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-grey-300 ring-4 ring-white" />
                            <h3 className="text-xl font-bold mb-2">Data & Engineering</h3>
                            <p className="text-grey-700">직감이 아닌 숫자로 증명합니다. 초당 수천 건의 트랜잭션을 안정적으로 처리하며, 데이터에서 인사이트를 발굴해 제품을 개선합니다.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-grey-300 ring-4 ring-white" />
                            <h3 className="text-xl font-bold mb-2">Operation & Risk</h3>
                            <p className="text-grey-700">혁신은 안전함 위에서 가능합니다. FDS(이상거래탐지)로 고객의 자산을 지키고, 친절하고 정확한 CS로 고객 만족을 책임집니다.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. Team Intro Grid */}
            <Section className="bg-grey-900 full-width text-white text-center">
                <div className="max-w-[1000px] mx-auto px-5">
                    <h2 className="text-3xl font-bold mb-12">최고의 동료들이 모였습니다</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
                        {[
                            { team: "Engineering", desc: "안정적인 금융 인프라와 기술을 만듭니다." },
                            { team: "Data", desc: "데이터로 비즈니스의 정답을 찾습니다." },
                            { team: "Product", desc: "고객의 문제를 정의하고 해결책을 제시합니다." },
                            { team: "Design", desc: "가장 쓰기 쉬운 금융 경험을 설계합니다." },
                            { team: "Marketing", desc: "AIO의 가치를 세상에 전달합니다." },
                            { team: "People", desc: "몰입할 수 있는 최고의 문화를 만듭니다." }
                        ].map((t, i) => (
                            <div key={i} className="p-6 bg-grey-800 rounded-xl hover:bg-grey-700 transition-colors">
                                <h3 className="text-xl font-bold text-brand-blue mb-2">{t.team}</h3>
                                <p className="text-grey-300 text-sm">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. Culture Preview */}
            <Section>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">AIO 라이프스타일</h2>
                    <Link href="/stories" className="text-brand-blue font-bold hover:underline">이야기 더보기 →</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CULTURE.map(item => (
                        <CultureCard key={item.id} {...item} />
                    ))}
                </div>
            </Section>

            {/* 6. Footer CTA */}
            <Section className="py-24 text-center">
                <div className="bg-gradient-to-br from-brand-blue to-brand-navy rounded-3xl p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
                    {/* Abstract Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/30 rounded-full blur-3xl transform -translate-x-20 translate-y-20" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">금융의 미래,<br />함께 만드시겠습니까?</h2>
                        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-xl mx-auto">지금 AIO에는 당신의 자리가 비어있습니다.<br />가슴 뛰는 도전을 함께 시작해보세요.</p>
                        <Link href="/jobs">
                            <Button size="lg" className="bg-white text-brand-blue hover:bg-grey-50 border-none shadow-lg px-10 py-6 text-lg h-auto">
                                지금 채용 중인 직무 보기
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
