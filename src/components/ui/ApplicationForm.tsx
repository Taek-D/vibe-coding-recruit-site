"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { uploadFile, submitApplication } from "@/lib/supabase";

interface ApplicationFormProps {
    jobTitle: string;
    jobId?: string;
    jobCategory?: string;
    onSuccess?: () => void;
    onCancel?: () => void;
}

const REFERRAL_SOURCES = [
    "외부행사(컨퍼런스, 채용설명회 등)",
    "지인 추천",
    "채용담당자 연락",
    "채용 플랫폼(잡코리아, 원티드, 리멤버 등)",
    "SNS 채널",
    "포털 검색",
    "기타"
];

export function ApplicationForm({ jobTitle, jobId = 'default', jobCategory, onSuccess, onCancel }: ApplicationFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        resume: null as File | null,
        portfolio: null as File | null,
        introduction: "",
        referralSource: "",
        agreePrivacy: false,
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.name || !formData.email || !formData.phone || !formData.resume || !formData.agreePrivacy) {
            alert("필수 항목을 모두 입력해주세요.");
            return;
        }

        if (!formData.referralSource) {
            alert("채용 공고를 접한 경로를 선택해주세요.");
            return;
        }

        setIsSubmitting(true);

        try {
            // 1. 파일명 생성 (타임스탬프 + 이름)
            const timestamp = Date.now();
            const sanitizedName = formData.name.replace(/[^a-zA-Z0-9가-힣]/g, '_');

            // 2. 이력서 업로드 (필수)
            const resumeExt = formData.resume.name.split('.').pop();
            const resumePath = `${jobId}/${timestamp}_${sanitizedName}_resume.${resumeExt}`;
            const { path: uploadedResumePath, error: resumeError } = await uploadFile(
                formData.resume,
                resumePath
            );

            if (resumeError) {
                alert(`이력서 업로드 실패: ${resumeError.message}`);
                setIsSubmitting(false);
                return;
            }

            // 3. 포트폴리오 업로드 (선택)
            let uploadedPortfolioPath: string | null = null;
            if (formData.portfolio) {
                const portfolioExt = formData.portfolio.name.split('.').pop();
                const portfolioPath = `${jobId}/${timestamp}_${sanitizedName}_portfolio.${portfolioExt}`;
                const { path, error: portfolioError } = await uploadFile(
                    formData.portfolio,
                    portfolioPath
                );

                if (portfolioError) {
                    alert(`포트폴리오 업로드 실패: ${portfolioError.message}`);
                    setIsSubmitting(false);
                    return;
                }

                uploadedPortfolioPath = path;
            }

            // 4. DB에 지원 정보 저장
            const { data, error: dbError } = await submitApplication({
                job_id: jobId,
                job_title: jobTitle,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                source: formData.referralSource,
                resume_path: uploadedResumePath,
                portfolio_path: uploadedPortfolioPath,
                cover_letter: formData.introduction || null,
            });

            if (dbError) {
                alert(`지원서 제출 실패: ${dbError.message}\n\n브라우저 콘솔을 확인해주세요.`);
                setIsSubmitting(false);
                return;
            }

            // 5. 성공
            console.log('Application submitted successfully:', data);
            setIsSubmitting(false);
            setIsSuccess(true);

            // Scroll to top to show success message
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            console.error('Unexpected error during submission:', err);
            alert(`예상치 못한 오류가 발생했습니다: ${err instanceof Error ? err.message : '알 수 없는 오류'}`);
            setIsSubmitting(false);
        }
    };

    const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData({ ...formData, resume: file });
    };

    const handlePortfolioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData({ ...formData, portfolio: file });
    };

    const handleBack = () => {
        router.back();
    };

    const remainingChars = 2000 - formData.introduction.length;

    if (isSuccess) {
        return (
            <div className="max-w-2xl mx-auto">
                {/* Success State */}
                <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border border-grey-100">
                    {/* Success Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mb-3">지원이 완료되었습니다!</h2>
                    <p className="text-grey-600 mb-2">
                        <span className="font-semibold text-brand-blue">{jobTitle}</span> 포지션에 대한
                    </p>
                    <p className="text-grey-600 mb-8">
                        지원서가 성공적으로 제출되었습니다.
                    </p>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8 text-left">
                        <p className="text-sm font-semibold text-grey-900 mb-3">📧 다음 단계</p>
                        <ul className="text-sm text-grey-600 space-y-2">
                            <li>• 영업일 기준 3-5일 내 서류 검토 결과를 이메일로 안내드립니다.</li>
                            <li>• 서류 합격 시 면접 일정을 개별 연락드립니다.</li>
                            <li>• 스팸 메일함도 확인해주세요.</li>
                        </ul>
                    </div>

                    <div className="flex gap-3">
                        <Button onClick={handleBack} className="flex-1 bg-grey-100 text-grey-700 hover:bg-grey-200">
                            채용공고로 돌아가기
                        </Button>
                        <Button onClick={() => router.push('/jobs')} className="flex-1">
                            전체 공고 보기
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-grey-100">
                {/* Header */}
                <div className="mb-6 pb-6 border-b border-grey-100">
                    <button
                        onClick={handleBack}
                        className="text-grey-500 hover:text-grey-900 mb-4 flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        뒤로 가기
                    </button>
                    <h1 className="text-2xl md:text-3xl font-bold text-grey-900 mb-2">지원하기</h1>
                    <p className="text-grey-600">
                        <span className="font-semibold text-brand-blue">{jobTitle}</span> 포지션에 지원합니다
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-grey-900 mb-2">
                            이름 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-grey-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            placeholder="홍길동"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-grey-900 mb-2">
                            이메일 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-grey-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            placeholder="example@email.com"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-grey-900 mb-2">
                            전화번호 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-grey-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            placeholder="010-1234-5678"
                        />
                    </div>

                    {/* Resume Upload */}
                    <div>
                        <label htmlFor="resume" className="block text-sm font-semibold text-grey-900 mb-2">
                            이력서 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="file"
                            id="resume"
                            required
                            onChange={handleResumeChange}
                            accept=".pdf,.doc,.docx"
                            className="w-full px-4 py-3 border border-grey-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-blue file:text-white hover:file:bg-brand-blue-hover file:cursor-pointer"
                        />
                        <p className="mt-1 text-xs text-grey-500">PDF, DOC, DOCX 파일만 업로드 가능합니다.</p>
                    </div>

                    {/* Portfolio Upload */}
                    <div>
                        <label htmlFor="portfolio" className="block text-sm font-semibold text-grey-900 mb-2">
                            포트폴리오 파일 <span className="text-grey-400">(선택)</span>
                        </label>
                        <input
                            type="file"
                            id="portfolio"
                            onChange={handlePortfolioChange}
                            accept=".pdf,.zip,.pptx"
                            className="w-full px-4 py-3 border border-grey-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-grey-100 file:text-grey-700 hover:file:bg-grey-200 file:cursor-pointer"
                        />
                        <p className="mt-1 text-xs text-grey-500">PDF, ZIP, PPTX 파일을 업로드할 수 있습니다.</p>
                    </div>

                    {/* Referral Source */}
                    <div>
                        <label htmlFor="referralSource" className="block text-sm font-semibold text-grey-900 mb-2">
                            채용 공고를 접한 경로 <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="referralSource"
                            required
                            value={formData.referralSource}
                            onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                            className="w-full px-4 py-3 border border-grey-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                        >
                            <option value="">선택해주세요</option>
                            {REFERRAL_SOURCES.map((source) => (
                                <option key={source} value={source}>
                                    {source}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Introduction */}
                    <div>
                        <label htmlFor="introduction" className="block text-sm font-semibold text-grey-900 mb-2">
                            자기소개 <span className="text-grey-400">(선택, 최대 2000자)</span>
                        </label>
                        <textarea
                            id="introduction"
                            value={formData.introduction}
                            onChange={(e) => {
                                if (e.target.value.length <= 2000) {
                                    setFormData({ ...formData, introduction: e.target.value });
                                }
                            }}
                            rows={6}
                            className="w-full px-4 py-3 border border-grey-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                            placeholder="간단한 자기소개를 작성해주세요."
                        />
                        <p className={`mt-1 text-xs text-right ${remainingChars < 100 ? 'text-red-500' : 'text-grey-500'}`}>
                            {remainingChars.toLocaleString()}자 남음
                        </p>
                    </div>

                    {/* Privacy Agreement */}
                    <div className="flex items-start gap-3 p-4 bg-grey-50 rounded-lg">
                        <input
                            type="checkbox"
                            id="agreePrivacy"
                            required
                            checked={formData.agreePrivacy}
                            onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                            className="mt-1 w-4 h-4 text-brand-blue border-grey-300 rounded focus:ring-brand-blue"
                        />
                        <label htmlFor="agreePrivacy" className="text-sm text-grey-700">
                            <span className="font-semibold text-grey-900">개인정보 수집 및 이용에 동의합니다.</span>
                            <span className="text-red-500"> *</span>
                            <br />
                            <span className="text-xs text-grey-500">
                                수집된 개인정보는 채용 목적으로만 사용되며, 채용 종료 후 파기됩니다.
                            </span>
                        </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            type="button"
                            onClick={handleBack}
                            className="flex-1 bg-grey-100 text-grey-700 hover:bg-grey-200"
                            disabled={isSubmitting}
                        >
                            취소
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "제출 중..." : "지원하기"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
