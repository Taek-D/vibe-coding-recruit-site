"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { StoryListCard } from "@/components/ui/StoryListCard";
import { STORIES } from "@/lib/mock-data";

// Category maps
const CATEGORY_MAP: Record<string, string> = {
    "전체": "all",
    "개발": "dev",
    "디자인": "design",
    "마케팅": "marketing",
    "비즈니스": "business",
    "HR": "hr",
    "문화": "culture",
};
const CATEGORY_LABELS = Object.keys(CATEGORY_MAP);

export default function StoriesPage() {
    const [selectedCategory, setSelectedCategory] = React.useState("전체");

    // Filter Logic
    const filteredStories = STORIES.filter(story => {
        if (selectedCategory === "전체") return true;
        return story.category === CATEGORY_MAP[selectedCategory];
    });

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">

            {/* 1. Header */}
            <Section className="text-center pt-10 pb-16">
                <h1 className="text-4xl font-bold text-grey-900 mb-6">AIO 팀 이야기</h1>
                <p className="text-xl text-grey-600 max-w-2xl mx-auto">
                    치열하게 고민하고, 즐겁게 몰입하는 동료들의 진짜 목소리를 들어보세요.
                </p>
            </Section>

            {/* 2. Filter */}
            <Section className="pb-12">
                <div className="flex justify-center gap-2 flex-wrap">
                    {CATEGORY_LABELS.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${selectedCategory === cat
                                ? 'bg-grey-900 text-white shadow-lg scale-105'
                                : 'bg-grey-100 text-grey-600 hover:bg-grey-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </Section>

            {/* 3. Story Grid */}
            <Section>
                <div className="mb-8 text-sm text-grey-500 font-medium">
                    총 <span className="text-black font-bold">{filteredStories.length}</span>개의 이야기가 있습니다.
                </div>

                {filteredStories.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredStories.map((story) => (
                            <StoryListCard key={story.id} {...story} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-grey-50 rounded-xl border border-dashed border-grey-200">
                        <div className="text-4xl mb-3">📝</div>
                        <p className="text-grey-900 font-bold mb-1">아직 등록된 이야기가 없습니다.</p>
                        <p className="text-grey-500 text-sm">다른 카테고리를 선택해보세요.</p>
                    </div>
                )}
            </Section>
        </div>
    );
}
