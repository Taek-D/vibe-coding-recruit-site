import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { JobCard } from "@/components/ui/JobCard";
import { Button } from "@/components/ui/Button";

import { JOBS } from "@/lib/mock-data";

export function FeaturedJobs() {
    return (
        <Section>
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-grey-900">지금 채용 중</h2>
                <Link href="/jobs">
                    <span className="text-brand-blue font-semibold hover:underline hidden sm:inline-block">전체 공고 보기 →</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {JOBS.slice(0, 4).map((job) => (
                    <JobCard key={job.id} {...job} />
                ))}
            </div>

            <div className="mt-10 text-center sm:hidden">
                <Link href="/jobs">
                    <Button variant="secondary" fullWidth>전체 공고 보기</Button>
                </Link>
            </div>
        </Section>
    );
}
