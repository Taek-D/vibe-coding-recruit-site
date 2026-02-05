# Supabase 연동 가이드

바이브코딩 채용 홈페이지와 Supabase 연동 완료 문서입니다.

## 📋 연동 개요

지원자가 채용 공고에서 "지원하기" 폼을 제출하면:
1. 이력서/포트폴리오 파일이 **Supabase Storage**에 업로드되고
2. 지원 정보가 **Supabase DB** (applications 테이블)에 저장됩니다

**중요:** Supabase 클라이언트 변수명은 `sb`로 통일되어 있습니다 (window.supabase 충돌 방지)

---

## 🗄️ 생성된 데이터베이스 구조

### 1. applications 테이블

| 컬럼명 | 타입 | 설명 | 제약조건 |
|--------|------|------|----------|
| id | UUID | 고유 식별자 | PK, default gen_random_uuid() |
| job_id | TEXT | 공고 식별자 | NOT NULL |
| job_title | TEXT | 공고 제목 | NOT NULL |
| name | TEXT | 지원자 이름 | NOT NULL |
| email | TEXT | 이메일 | NOT NULL |
| phone | TEXT | 전화번호 | NOT NULL |
| source | TEXT | 유입 경로 | NOT NULL, CHECK 제약 |
| resume_path | TEXT | 이력서 파일 경로 | NOT NULL |
| portfolio_path | TEXT | 포트폴리오 경로 | NULL 허용 |
| cover_letter | TEXT | 자기소개 | NULL 허용 |
| created_at | TIMESTAMPTZ | 생성일시 | default NOW() |
| updated_at | TIMESTAMPTZ | 수정일시 | default NOW() |

**source 허용값 (7가지):**
- 외부행사(컨퍼런스, 채용설명회 등)
- 지인 추천
- 채용담당자 연락
- 채용 플랫폼(잡코리아, 원티드, 리멤버 등)
- SNS 채널
- 포털 검색
- 기타

**인덱스:**
- `idx_applications_job_id` (job_id)
- `idx_applications_email` (email)
- `idx_applications_created_at` (created_at DESC)

---

## 🔐 RLS (Row Level Security) 정책

### applications 테이블 정책

1. **INSERT 정책: "Allow anonymous insert"**
   - 익명 사용자(anon)가 지원서 제출 가능
   - `TO anon`, `WITH CHECK (true)`

2. **SELECT 정책: "Deny all select"**
   - 기본적으로 모든 조회 차단 (공개 노출 방지)
   - `TO anon`, `USING (false)`
   - 관리자 조회가 필요한 경우 별도 정책 추가 필요

---

## 📦 Storage 버킷

### applications 버킷

- **버킷 이름:** `applications`
- **공개 여부:** Private (false)
- **업로드 경로 형식:**
  ```
  applications/{job_id}/{timestamp}_{name}_resume.pdf
  applications/{job_id}/{timestamp}_{name}_portfolio.pdf
  ```

### Storage 정책

1. **INSERT 정책: "Allow anonymous upload"**
   - 익명 사용자가 applications 버킷에 파일 업로드 가능
   - `TO anon`, `WITH CHECK (bucket_id = 'applications')`

2. **SELECT 정책: "Deny all select on storage"**
   - 기본적으로 파일 조회 차단
   - `TO anon`, `USING (false)`

---

## ⚡ 트리거

### updated_at 자동 갱신 트리거

applications 테이블의 레코드가 UPDATE될 때 자동으로 `updated_at` 컬럼을 현재 시간으로 갱신합니다.

**트리거 함수:** `update_updated_at_column()`
**트리거 이름:** `update_applications_updated_at`

---

## 🚀 설정 방법

### 1단계: SQL 스크립트 실행

1. Supabase Dashboard 접속: https://hwudwlaszvgltuwffqcx.supabase.co
2. 좌측 메뉴에서 **SQL Editor** 선택
3. `docs/supabase-setup.sql` 파일 내용을 복사
4. SQL Editor에 붙여넣기
5. **Run** 버튼 클릭하여 실행

### 2단계: 실행 확인

SQL 실행 후 다음 명령어로 테이블 생성을 확인:

```sql
SELECT * FROM public.applications LIMIT 1;
```

Storage 버킷 확인:
- Supabase Dashboard > Storage > applications 버킷 확인

---

## 💻 코드 구조

### 수정/생성된 파일 목록

1. **환경변수 설정**
   - `.env.local` - Supabase URL 및 anon key 추가

2. **Supabase 클라이언트**
   - `src/lib/supabase.ts` - sb 클라이언트 생성 및 유틸리티 함수

3. **지원 폼 컴포넌트**
   - `src/components/ui/ApplicationForm.tsx` - 실제 제출 로직 구현

4. **문서**
   - `docs/supabase-setup.sql` - DB/Storage 설정 SQL 스크립트
   - `docs/SUPABASE_INTEGRATION.md` - 이 문서

### sb 클라이언트 사용 예시

```typescript
import { sb, uploadFile, submitApplication } from '@/lib/supabase';

// 파일 업로드
const { path, error } = await uploadFile(file, 'path/to/file.pdf');

// 지원서 제출
const { data, error } = await submitApplication({
  job_id: 'engineer-001',
  job_title: '백엔드 엔지니어',
  name: '홍길동',
  email: 'hong@example.com',
  phone: '010-1234-5678',
  source: '지인 추천',
  resume_path: 'applications/engineer-001/123456_홍길동_resume.pdf',
  portfolio_path: null,
  cover_letter: '안녕하세요...',
});
```

---

## ✅ 테스트 체크리스트

### 로컬 테스트 순서

1. **개발 서버 실행 확인**
   ```bash
   npm run dev -- -p 8000
   ```
   - URL: http://localhost:8000

2. **지원 페이지 접속**
   - 채용 공고 페이지에서 "지원하기" 버튼 클릭
   - 또는 직접 접속: http://localhost:8000/apply/{jobId}

3. **지원서 작성**
   - ✅ 이름 입력 (필수)
   - ✅ 이메일 입력 (필수)
   - ✅ 전화번호 입력 (필수)
   - ✅ 이력서 파일 업로드 (필수, PDF/DOC/DOCX)
   - ⬜ 포트폴리오 파일 업로드 (선택, PDF/ZIP/PPTX)
   - ✅ 채용 공고를 접한 경로 선택 (필수)
   - ⬜ 자기소개 입력 (선택, 최대 2000자)
   - ✅ 개인정보 수집 동의 체크 (필수)

4. **제출 및 확인**
   - "지원하기" 버튼 클릭
   - 로딩 상태 확인 ("제출 중..." 표시)
   - 성공 메시지 확인 ("지원이 완료되었습니다!")

5. **Supabase Dashboard 확인**
   - **DB 확인:**
     ```sql
     SELECT * FROM public.applications
     ORDER BY created_at DESC
     LIMIT 5;
     ```
   - **Storage 확인:**
     - Dashboard > Storage > applications 버킷
     - 업로드된 파일 확인

6. **브라우저 콘솔 확인**
   - F12 개발자 도구 열기
   - Console 탭에서 성공 로그 확인:
     ```
     Application submitted successfully: { id: '...', ... }
     ```
   - Network 탭에서 API 요청 확인

---

## 🐛 예상 에러 및 해결 방법

### 1. "Missing Supabase environment variables"

**원인:** 환경변수가 설정되지 않음

**해결:**
- `.env.local` 파일 확인
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` 존재 확인
- 개발 서버 재시작 (환경변수 적용을 위해)

### 2. "지원서 제출 실패: new row violates row-level security policy"

**원인:** RLS 정책 설정 오류

**해결:**
1. Supabase Dashboard > SQL Editor에서 정책 확인:
   ```sql
   SELECT * FROM pg_policies WHERE tablename = 'applications';
   ```
2. "Allow anonymous insert" 정책이 있는지 확인
3. 없다면 `docs/supabase-setup.sql` 재실행

### 3. "이력서 업로드 실패: new row violates row-level security policy for table 'objects'"

**원인:** Storage 정책 설정 오류

**해결:**
1. Supabase Dashboard > SQL Editor에서 Storage 정책 확인:
   ```sql
   SELECT * FROM pg_policies WHERE tablename = 'objects';
   ```
2. "Allow anonymous upload" 정책이 있는지 확인
3. 없다면 `docs/supabase-setup.sql` 재실행

### 4. "Bucket not found"

**원인:** applications 버킷이 생성되지 않음

**해결:**
1. Supabase Dashboard > Storage 확인
2. applications 버킷이 없다면 SQL로 생성:
   ```sql
   INSERT INTO storage.buckets (id, name, public)
   VALUES ('applications', 'applications', false);
   ```

### 5. 파일 업로드 후 경로가 잘못됨

**원인:** 파일 경로 생성 로직 오류

**해결:**
- `src/lib/supabase.ts`의 `uploadFile` 함수 확인
- 콘솔에서 업로드된 경로 확인
- Storage에서 실제 파일 위치 확인

### 6. source 값 오류 ("violates check constraint")

**원인:** 허용되지 않는 source 값 입력

**해결:**
- ApplicationForm.tsx의 REFERRAL_SOURCES 배열 확인
- SQL의 CHECK 제약조건과 일치하는지 확인
- 정확히 다음 7개 값 중 하나여야 함:
  - 외부행사(컨퍼런스, 채용설명회 등)
  - 지인 추천
  - 채용담당자 연락
  - 채용 플랫폼(잡코리아, 원티드, 리멤버 등)
  - SNS 채널
  - 포털 검색
  - 기타

---

## 🔍 디버깅 방법

### 1. 브라우저 콘솔 확인

개발자 도구(F12) > Console 탭:
- 모든 에러 메시지 표시
- Supabase API 응답 확인

### 2. 네트워크 탭 확인

개발자 도구(F12) > Network 탭:
- `/rest/v1/applications` 요청 확인 (DB INSERT)
- `/storage/v1/object/applications/...` 요청 확인 (파일 업로드)
- Status Code 확인 (201 = 성공, 4xx/5xx = 에러)

### 3. Supabase 로그 확인

Supabase Dashboard > Logs:
- API 요청 로그 확인
- 에러 스택 트레이스 확인

### 4. 직접 SQL 쿼리

Supabase Dashboard > SQL Editor:
```sql
-- 최근 지원서 확인
SELECT * FROM public.applications
ORDER BY created_at DESC
LIMIT 10;

-- 특정 이메일로 지원서 검색
SELECT * FROM public.applications
WHERE email = 'test@example.com';

-- Storage에 업로드된 파일 확인
SELECT * FROM storage.objects
WHERE bucket_id = 'applications'
ORDER BY created_at DESC
LIMIT 10;
```

---

## 📊 프로젝트 정보

- **프로젝트 경로:** `c:\Users\wjddu\OneDrive\Desktop\바이브코딩`
- **로컬 사이트:** http://localhost:8000
- **Supabase Project URL:** https://hwudwlaszvgltuwffqcx.supabase.co
- **Supabase Dashboard:** https://supabase.com/dashboard/project/hwudwlaszvgltuwffqcx

---

## 🎯 다음 단계 (선택사항)

### 관리자 페이지 추가

지원서를 조회하고 관리할 수 있는 관리자 페이지가 필요한 경우:

1. **Supabase Auth 설정**
   - 관리자 계정 생성
   - authenticated 사용자를 위한 RLS 정책 추가

2. **SELECT 정책 추가**
   ```sql
   CREATE POLICY "Allow authenticated select"
   ON public.applications
   FOR SELECT
   TO authenticated
   USING (true);
   ```

3. **관리자 페이지 구현**
   - `/admin/applications` 페이지 생성
   - 지원서 목록 조회
   - 필터링, 검색, 정렬 기능

### 이메일 알림 추가

지원서 제출 시 이메일 알림을 보내려면:

1. **Supabase Edge Functions 사용**
   - 지원서 INSERT 시 트리거되는 함수 생성
   - SendGrid, Resend 등 이메일 서비스 연동

2. **또는 Database Webhook 사용**
   - Supabase Dashboard > Database > Webhooks
   - INSERT 이벤트 시 외부 API 호출

---

## 📝 참고사항

1. **Supabase 클라이언트 변수명은 항상 `sb`**
   - 다른 변수명 사용 금지 (일관성 유지)

2. **데이터 저장은 프론트에서 직접**
   - 서버/백엔드 없이 클라이언트에서 직접 insert
   - Trigger는 updated_at 등 보조 자동화만 담당

3. **RLS 정책 중요**
   - 정책 없이는 insert/select 불가능
   - anon 권한으로 제출, 조회는 차단

4. **파일 업로드 제한**
   - Supabase Free Tier: 1GB Storage
   - 파일 크기 제한: 기본 50MB
   - 필요 시 크기 제한 설정 추가 권장

5. **에러는 브라우저 콘솔 최우선 확인**
   - 모든 에러 메시지가 콘솔에 출력됨
   - Network 탭에서 실제 API 요청/응답 확인

---

문서 작성일: 2026-02-05
작성자: Claude Code
