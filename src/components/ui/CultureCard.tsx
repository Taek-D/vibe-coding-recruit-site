import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { CultureCover } from "@/components/ui/CultureCover";

interface CultureCardProps {
    id: string;
    title: string;
    desc: string;
    image: string;
}

const getCoverType = (id: string): 'remote' | 'workshop' | 'education' => {
    if (id === '1') return 'remote';
    if (id === '2') return 'workshop';
    return 'education';
};

export function CultureCard({ id, title, desc }: CultureCardProps) {
    return (
        <Link href={`/about`}>
            {/* Usually points to a specific culture post or anchor, for MVP linking to About */}
            <Card className="flex flex-col p-0 overflow-hidden h-full group">
                <div className="h-48 relative overflow-hidden">
                    <CultureCover type={getCoverType(id)} />
                </div>
                <div className="p-6">
                    <h3 className="text-lg font-bold text-grey-900 mb-2 group-hover:text-brand-blue transition-colors">{title}</h3>
                    <p className="text-sm text-grey-600">{desc}</p>
                </div>
            </Card>
        </Link>
    );
}
