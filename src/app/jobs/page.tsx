"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { JobCard } from "@/components/ui/JobCard";
import { JOBS } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";

// Unique values for filters
const TYPE_OPTIONS = ["정규직", "계약직", "인턴"];
// Category maps to id: dev, design, etc.
const CATEGORY_MAP: Record<string, string> = {
    "개발": "dev",
    "디자인": "design",
    "마케팅": "marketing",
    "비즈니스": "business",
    "People/HR": "hr",
};
const CATEGORY_LABELS = Object.keys(CATEGORY_MAP);

export default function JobsPage() {
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
    const [selectedCareer, setSelectedCareer] = React.useState<string | null>(null);
    const [selectedType, setSelectedType] = React.useState<string | null>(null);

    // Filter Logic
    const filteredJobs = JOBS.filter(job => {
        // Category Filter (Label -> ID)
        const matchCategory = selectedCategory
            ? job.category === CATEGORY_MAP[selectedCategory]
            : true;

        // Career Filter (Simple string includes)
        const matchCareer = selectedCareer
            ? job.career.includes(selectedCareer.replace(" 이상", "")) // "경력 3년+" checks for "경력"
            : true;

        // Type Filter
        const matchType = selectedType ? job.type === selectedType : true;

        return matchCategory && matchCareer && matchType;
    });

    // Handler to clear all
    const clearFilters = () => {
        setSelectedCategory(null);
        setSelectedCareer(null);
        setSelectedType(null);
    };

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">

            {/* 1. Page Header & Process */}
            <Section className="text-center pt-10 pb-16">
                <h1 className="text-4xl font-bold text-grey-900 mb-6">모집 중인 공고</h1>
                <p className="text-xl text-grey-600 mb-12 max-w-2xl mx-auto">
                    AIO와 함께 금융의 미래를 바꿀 동료를 찾습니다.
                </p>

                {/* Simple Process Steps */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {["서류 전형", "직무 인터뷰", "문화 인터뷰", "최종 합격"].map((step, i) => (
                        <div key={i} className="bg-grey-50 rounded-xl p-4 border border-grey-100">
                            <span className="block text-brand-blue font-bold text-lg mb-1">Step 0{i + 1}</span>
                            <span className="font-medium text-grey-700">{step}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 2. Filters */}
            <Section className="py-8 bg-white sticky top-16 z-40 border-b border-grey-100">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                    <div className="flex flex-wrap gap-3">
                        {/* Category Filter */}
                        <Dropdown
                            label="직군"
                            options={CATEGORY_LABELS}
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                        />
                        {/* Career Filter */}
                        <Dropdown
                            label="경력"
                            options={["신입", "경력", "무관"]}
                            value={selectedCareer}
                            onChange={setSelectedCareer}
                        />
                        {/* Type Filter */}
                        <Dropdown
                            label="고용형태"
                            options={TYPE_OPTIONS}
                            value={selectedType}
                            onChange={setSelectedType}
                        />
                    </div>

                    {(selectedCategory || selectedCareer || selectedType) && (
                        <button
                            onClick={clearFilters}
                            className="text-sm text-grey-500 hover:text-brand-blue underline"
                        >
                            필터 초기화
                        </button>
                    )}
                </div>
            </Section>

            {/* 3. Job List */}
            <Section className="py-12">
                <div className="mb-6 text-grey-500 text-sm font-medium">
                    총 <span className="text-brand-blue font-bold">{filteredJobs.length}</span>개의 공고가 있습니다.
                </div>

                {filteredJobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredJobs.map((job) => (
                            <JobCard key={job.id} {...job} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 bg-grey-50 rounded-2xl border border-dashed border-grey-200">
                        <div className="text-4xl mb-4">🤔</div>
                        <h3 className="text-xl font-bold text-grey-900 mb-2">조건에 맞는 공고가 없어요</h3>
                        <p className="text-grey-500 mb-8">다른 검색 조건을 선택해보시겠어요?</p>
                        <Button onClick={clearFilters} variant="outline">
                            전체 공고 보기
                        </Button>
                    </div>
                )}
            </Section>
        </div>
    );
}

// Simple internal Dropdown component for MVP
function Dropdown({ label, options, value, onChange }: {
    label: string;
    options: string[];
    value: string | null;
    onChange: (val: string | null) => void;
}) {
    // Toggle logic would require more state or headless UI, 
    // for MVP using a simple select-like styled wrapper or native select for accessbility/speed.
    // Let's use native select for 100% robust functionality in MVP.
    return (
        <div className="relative inline-block">
            <select
                className={`appearance-none pl-4 pr-10 py-2.5 rounded-full border text-sm font-medium focus:outline-none focus:border-brand-blue transition-colors cursor-pointer
                    ${value ? 'bg-brand-blue/5 border-brand-blue text-brand-blue' : 'bg-white border-grey-200 text-grey-700 hover:bg-grey-50'}
                `}
                value={value || ""}
                onChange={(e) => onChange(e.target.value || null)}
            >
                <option value="">{label} 전체</option>
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-grey-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}
