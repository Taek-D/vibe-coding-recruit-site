# Vercel 배포 가이드

바이브코딩 채용 홈페이지를 Vercel로 배포하는 전체 가이드입니다.

## 📋 배포 준비 완료 사항

- ✅ GitHub 레포지토리: https://github.com/wjddus-code/vibe-coding-recruit-site
- ✅ 프로덕션 빌드 성공
- ✅ Supabase 연동 완료
- ✅ 환경변수 준비 완료

---

## 🚀 Vercel 배포 단계

### 1단계: Vercel 계정 생성 및 로그인

1. https://vercel.com 접속
2. "Sign Up" 클릭
3. **"Continue with GitHub"** 선택 (권장)
4. GitHub 계정으로 로그인 및 권한 승인

### 2단계: 새 프로젝트 생성

1. Vercel 대시보드에서 **"Add New..."** → **"Project"** 클릭
2. **"Import Git Repository"** 섹션에서 GitHub 레포지토리 찾기
3. `wjddus-code/vibe-coding-recruit-site` 레포지토리 선택
4. **"Import"** 버튼 클릭

### 3단계: 프로젝트 설정

**Framework Preset:** Next.js (자동 감지됨)

**Root Directory:** `.` (기본값)

**Build and Output Settings:** (기본값 사용)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**Environment Variables 설정 (중요!):**

아래 환경변수를 **정확히** 입력하세요:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://hwudwlaszvgltuwffqcx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3dWR3bGFzenZnbHR1d2ZmcWN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMjUwMzAsImV4cCI6MjA4NTgwMTAzMH0.u57p7fbGSN3LFhgWLV0gi7WLVoMHxxcr9vpVcxTjvjc` |

**환경변수 입력 방법:**
1. **"Environment Variables"** 섹션 펼치기
2. Name 필드에 `NEXT_PUBLIC_SUPABASE_URL` 입력
3. Value 필드에 위 값 입력
4. **"Add"** 버튼 클릭
5. Name 필드에 `NEXT_PUBLIC_SUPABASE_ANON_KEY` 입력
6. Value 필드에 위 값 입력
7. **"Add"** 버튼 클릭

### 4단계: 배포 시작

1. 모든 설정 확인 후 **"Deploy"** 버튼 클릭
2. 배포 진행 상황 확인 (보통 2-3분 소요)
3. 배포 완료 시 🎉 축하 메시지와 함께 배포 URL 표시

---

## 🌐 배포 완료 후

### 배포 URL 확인

배포가 완료되면 다음과 같은 URL을 받게 됩니다:
- **Production URL:** `https://vibe-coding-recruit-site.vercel.app`
- 또는 커스텀 도메인 설정 가능

### 자동 배포 설정

Vercel은 자동으로 다음 기능을 활성화합니다:
- ✅ **자동 배포**: GitHub main 브랜치에 push할 때마다 자동 배포
- ✅ **프리뷰 배포**: Pull Request마다 프리뷰 URL 생성
- ✅ **SSL 인증서**: 무료 HTTPS 자동 적용
- ✅ **글로벌 CDN**: 전 세계 빠른 로딩 속도

---

## ✅ 배포 후 테스트 체크리스트

배포가 완료되면 다음 항목들을 테스트하세요:

### 1. 기본 페이지 접속
- [ ] 홈페이지(/) 정상 로드
- [ ] /jobs 페이지 접속
- [ ] /about 페이지 접속
- [ ] /stories 페이지 접속

### 2. 채용 공고 기능
- [ ] 채용 공고 목록 표시
- [ ] 채용 공고 상세 페이지 접속
- [ ] 카테고리별 필터링

### 3. 지원하기 폼 (가장 중요!)
- [ ] 채용 공고에서 "지원하기" 버튼 클릭
- [ ] 지원 폼 페이지 접속 (/apply/[jobId])
- [ ] 지원서 작성:
  - 이름, 이메일, 전화번호 입력
  - 이력서 파일 업로드 (PDF/DOC)
  - 포트폴리오 파일 업로드 (선택)
  - 유입 경로 선택
  - 자기소개 입력
  - 개인정보 동의 체크
- [ ] "지원하기" 버튼 클릭
- [ ] 성공 메시지 확인

### 4. Supabase 연동 확인
지원서 제출 후 Supabase Dashboard에서 확인:

**DB 확인:**
```sql
SELECT * FROM public.applications
ORDER BY created_at DESC
LIMIT 5;
```

**Storage 확인:**
- Dashboard > Storage > applications 버킷
- 업로드된 파일 확인

### 5. 브라우저 콘솔 확인
- [ ] F12 개발자 도구 열기
- [ ] Console 탭에서 에러 없는지 확인
- [ ] Network 탭에서 API 요청 성공 확인 (200/201 상태)

---

## 🐛 문제 해결 가이드

### 1. 빌드 실패

**증상:** Vercel 배포 시 "Build failed" 에러

**원인:**
- TypeScript 타입 에러
- 환경변수 누락
- 의존성 설치 실패

**해결:**
1. Vercel 배포 로그 확인
2. 로컬에서 `npm run build` 실행해서 에러 확인
3. 에러 수정 후 GitHub에 push
4. Vercel이 자동으로 재배포

### 2. 환경변수 누락

**증상:**
- "Missing Supabase environment variables" 에러
- 지원서 제출 시 "Failed to fetch" 에러

**해결:**
1. Vercel Dashboard 접속
2. 프로젝트 선택 > Settings > Environment Variables
3. `NEXT_PUBLIC_SUPABASE_URL` 확인
4. `NEXT_PUBLIC_SUPABASE_ANON_KEY` 확인
5. 누락되었다면 추가
6. **Redeploy** 버튼 클릭 (중요!)

### 3. Supabase RLS 정책 에러

**증상:**
- "new row violates row-level security policy" 에러
- 지원서 제출 실패

**해결:**
1. [docs/supabase-setup.sql](supabase-setup.sql) 파일 확인
2. Supabase Dashboard > SQL Editor에서 SQL 스크립트 실행
3. RLS 정책이 제대로 설정되었는지 확인:
   ```sql
   SELECT * FROM pg_policies WHERE tablename = 'applications';
   ```

### 4. CORS 에러

**증상:**
- "CORS policy: No 'Access-Control-Allow-Origin'" 에러
- Supabase API 요청 차단

**해결:**
1. Supabase Dashboard > Settings > API
2. **"Site URL"** 항목에 Vercel 배포 URL 추가
3. 예: `https://vibe-coding-recruit-site.vercel.app`
4. 저장 후 테스트

### 5. 파일 업로드 실패

**증상:**
- "Bucket not found" 에러
- Storage 업로드 실패

**해결:**
1. Supabase Dashboard > Storage 확인
2. `applications` 버킷이 있는지 확인
3. 없다면 SQL로 생성:
   ```sql
   INSERT INTO storage.buckets (id, name, public)
   VALUES ('applications', 'applications', false);
   ```
4. Storage 정책 확인:
   ```sql
   SELECT * FROM pg_policies WHERE tablename = 'objects';
   ```

### 6. 404 Not Found (페이지 라우팅)

**증상:**
- 특정 페이지 접속 시 404 에러
- 새로고침 시 404

**해결:**
Next.js는 기본적으로 이 문제를 자동 처리합니다. 만약 발생한다면:
1. `vercel.json` 파일 생성:
   ```json
   {
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/"
       }
     ]
   }
   ```
2. GitHub에 커밋 및 push

---

## 📊 Vercel 대시보드 주요 기능

### Deployments
- 모든 배포 기록 확인
- 각 배포의 로그 및 에러 확인
- 롤백 기능 (이전 배포로 되돌리기)

### Analytics (Pro 플랜)
- 방문자 통계
- 페이지 성능 분석
- 실시간 트래픽 모니터링

### Domains
- 커스텀 도메인 연결
- DNS 설정
- SSL 인증서 자동 갱신

### Settings
- Environment Variables 관리
- Build & Development Settings
- Git 연동 설정

---

## 🔧 추가 최적화 (선택사항)

### 1. 커스텀 도메인 연결

1. Vercel Dashboard > 프로젝트 선택 > Domains
2. 도메인 입력 (예: `recruit.vibecoding.com`)
3. DNS 설정 안내에 따라 도메인 제공업체에서 설정
4. Vercel이 자동으로 SSL 인증서 발급

### 2. 성능 최적화

Next.js는 기본적으로 다음을 제공합니다:
- 이미지 자동 최적화
- 코드 스플리팅
- 서버사이드 렌더링
- 정적 페이지 생성

### 3. 환경별 설정

개발/스테이징/프로덕션 환경별로 다른 환경변수 사용:
1. Vercel Dashboard > Settings > Environment Variables
2. 각 변수에 대해 Environment 선택:
   - Production
   - Preview
   - Development

---

## 📝 배포 정보 요약

**GitHub 레포지토리:**
https://github.com/wjddus-code/vibe-coding-recruit-site

**배포 플랫폼:** Vercel

**배포 URL (예상):**
https://vibe-coding-recruit-site.vercel.app

**필수 환경변수:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Supabase Project:**
https://hwudwlaszvgltuwffqcx.supabase.co

---

## 🎯 다음 단계

1. ✅ Vercel 배포 완료
2. ✅ 배포 URL 테스트
3. ✅ Supabase 연동 확인
4. 🔄 커스텀 도메인 연결 (선택)
5. 🔄 Google Analytics 추가 (선택)
6. 🔄 SEO 메타태그 추가 (선택)

---

## 📞 지원

### 문제 발생 시
1. Vercel 배포 로그 확인
2. 브라우저 콘솔 에러 확인
3. [docs/SUPABASE_INTEGRATION.md](SUPABASE_INTEGRATION.md) 참고
4. GitHub Issues에 질문 등록

### 유용한 링크
- Vercel 문서: https://vercel.com/docs
- Next.js 문서: https://nextjs.org/docs
- Supabase 문서: https://supabase.com/docs

---

배포 성공을 기원합니다! 🚀
