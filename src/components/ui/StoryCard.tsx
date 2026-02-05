import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { StoryCover } from "@/components/ui/StoryCover";

interface StoryCardProps {
    id: string;
    name: string;
    role: string;
    quote: string;
    image: string;
    category: string;
}

export function StoryCard({ id, name, role, quote, image, category }: StoryCardProps) {
    return (
        <Link href={`/stories/${id}`}>
            <Card className="flex flex-col p-0 overflow-hidden h-full group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-full h-48 relative overflow-hidden">
                    <StoryCover category={category} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <p className="text-lg font-medium text-grey-900 italic mb-4 flex-1">"{quote}"</p>
                    <div>
                        <p className="font-bold text-grey-900">{name}</p>
                        <p className="text-sm text-grey-500">{role}</p>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
