"use client";

import { Button } from "@/components/ui/Button";

interface ApplicationSuccessProps {
    jobTitle: string;
    onClose: () => void;
}

export function ApplicationSuccess({ jobTitle, onClose }: ApplicationSuccessProps) {
    return (
        <div className="p-8 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>

            {/* Message */}
            <h2 className="text-2xl font-bold text-grey-900 mb-3">지원이 완료되었습니다!</h2>
            <p className="text-grey-600 mb-2">
                <span className="font-semibold text-brand-blue">{jobTitle}</span> 포지션에 대한
            </p>
            <p className="text-grey-600 mb-8">
                지원서가 성공적으로 제출되었습니다.
            </p>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 text-left">
                <p className="text-sm text-grey-700 mb-2">
                    <span className="font-semibold">📧 다음 단계</span>
                </p>
                <ul className="text-sm text-grey-600 space-y-1 ml-4">
                    <li>• 영업일 기준 3-5일 내 서류 검토 결과를 이메일로 안내드립니다.</li>
                    <li>• 서류 합격 시 면접 일정을 개별 연락드립니다.</li>
                    <li>• 스팸 메일함도 확인해주세요.</li>
                </ul>
            </div>

            {/* Close Button */}
            <Button onClick={onClose} fullWidth size="lg">
                확인
            </Button>
        </div>
    );
}
