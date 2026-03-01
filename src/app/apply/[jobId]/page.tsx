import { notFound } from "next/navigation";
import { getJobById } from "@/lib/mock-data";
import { ApplicationForm } from "@/components/ui/ApplicationForm";

type Props = {
    params: Promise<{ jobId: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { jobId } = await params;
    const job = getJobById(jobId);
    if (!job) return { title: "지원하기 - AIO" };
    return {
        title: `${job.title} 지원하기 - AIO 채용`,
    };
}

export default async function ApplyPage({ params }: Props) {
    const { jobId } = await params;
    const job = getJobById(jobId);

    if (!job) notFound();

    return (
        <div className="min-h-screen bg-grey-50 pt-24 pb-20 px-5">
            <ApplicationForm
                jobTitle={job.title}
                jobId={job.id}
            />
        </div>
    );
}
