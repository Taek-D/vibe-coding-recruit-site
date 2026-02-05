import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export function Hero() {
    return (
        <Section className="pt-32 pb-20 md:pt-48 md:pb-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-grey-900 mb-6 leading-[1.2]">
                금융의 모든 것 <br className="hidden md:block" />
                AIO에서 더 쉽게.
            </h1>
            <p className="text-lg md:text-xl text-grey-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                복잡하고 어려운 금융? AIO와 함께라면 다릅니다.<br className="hidden md:block" />
                가장 직관적인 금융 서비스를 만드는 여정에 합류하세요.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/jobs">
                    <Button size="lg" className="min-w-[200px] whitespace-nowrap px-8 shadow-lg shadow-brand-blue/20">
                        채용 중인 직무 보기
                    </Button>
                </Link>
                <Link href="/about">
                    <Button variant="secondary" size="lg" className="min-w-[200px] whitespace-nowrap px-8">
                        AIO 팀 더 알아보기
                    </Button>
                </Link>
            </div>
        </Section>
    );
}
