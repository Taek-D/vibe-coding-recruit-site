-- ========================================
-- 바이브코딩 채용 홈페이지 Supabase 설정
-- ========================================
-- 이 파일을 Supabase Dashboard > SQL Editor에서 실행하세요
-- URL: https://hwudwlaszvgltuwffqcx.supabase.co

-- ========================================
-- 1. applications 테이블 생성
-- ========================================
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id TEXT NOT NULL,
    job_title TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    source TEXT NOT NULL CHECK (
        source IN (
            '외부행사(컨퍼런스, 채용설명회 등)',
            '지인 추천',
            '채용담당자 연락',
            '채용 플랫폼(잡코리아, 원티드, 리멤버 등)',
            'SNS 채널',
            '포털 검색',
            '기타'
        )
    ),
    resume_path TEXT NOT NULL,
    portfolio_path TEXT,
    cover_letter TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 인덱스 생성 (조회 성능 향상)
CREATE INDEX IF NOT EXISTS idx_applications_job_id ON public.applications(job_id);
CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON public.applications(created_at DESC);

-- ========================================
-- 2. updated_at 자동 갱신 트리거
-- ========================================
-- 트리거 함수 생성
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- applications 테이블에 트리거 적용
DROP TRIGGER IF EXISTS update_applications_updated_at ON public.applications;
CREATE TRIGGER update_applications_updated_at
    BEFORE UPDATE ON public.applications
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- ========================================
-- 3. RLS (Row Level Security) 정책 설정
-- ========================================
-- RLS 활성화
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- 기존 정책 삭제 (재실행 시를 위해)
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.applications;
DROP POLICY IF EXISTS "Deny all select" ON public.applications;

-- INSERT 정책: 익명 사용자(anon)가 지원서 제출 가능
CREATE POLICY "Allow anonymous insert"
ON public.applications
FOR INSERT
TO anon
WITH CHECK (true);

-- SELECT 정책: 기본적으로 모든 조회 차단 (관리자만 조회 가능하도록)
-- 관리자 조회가 필요한 경우, 별도로 authenticated 사용자를 위한 정책 추가 필요
CREATE POLICY "Deny all select"
ON public.applications
FOR SELECT
TO anon
USING (false);

-- ========================================
-- 4. Storage 버킷 생성
-- ========================================
-- applications 버킷 생성 (이미 존재하면 무시)
INSERT INTO storage.buckets (id, name, public)
VALUES ('applications', 'applications', false)
ON CONFLICT (id) DO NOTHING;

-- ========================================
-- 5. Storage 정책 설정
-- ========================================
-- 기존 정책 삭제 (재실행 시를 위해)
DROP POLICY IF EXISTS "Allow anonymous upload" ON storage.objects;
DROP POLICY IF EXISTS "Deny all select on storage" ON storage.objects;

-- Storage INSERT 정책: 익명 사용자가 applications 버킷에 업로드 가능
CREATE POLICY "Allow anonymous upload"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (bucket_id = 'applications');

-- Storage SELECT 정책: 기본적으로 조회 차단
CREATE POLICY "Deny all select on storage"
ON storage.objects
FOR SELECT
TO anon
USING (false);

-- ========================================
-- 설정 완료!
-- ========================================
-- 다음 단계:
-- 1. 이 SQL을 Supabase Dashboard > SQL Editor에서 실행
-- 2. 실행 후 아래 쿼리로 테이블이 정상 생성되었는지 확인:
--    SELECT * FROM public.applications LIMIT 1;
-- 3. Storage 버킷 확인: Supabase Dashboard > Storage > applications
