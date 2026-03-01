# Development Workflow

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4 + clsx + tailwind-merge
- **Icons**: Lucide React
- **Database**: Supabase (Storage + Database)
- **Lint**: ESLint 9 (flat config, core-web-vitals + typescript)

## Package Management
- **항상 `npm` 사용**
- `npm install` / `npm run <script>`

## Development Commands
```bash
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드
npm run lint       # ESLint 실행
npm start          # 프로덕션 서버
```

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # 회사 소개 페이지
│   ├── api/env-check/      # API route
│   ├── apply/[jobId]/      # 지원서 작성 (동적 라우트)
│   ├── jobs/               # 채용 공고 목록
│   │   └── [category]/[id]/ # 채용 공고 상세
│   ├── stories/[id]/       # 구성원 이야기 상세
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 홈 페이지
├── components/
│   ├── home/               # 홈 페이지 전용 컴포넌트
│   ├── layout/             # Header 등 레이아웃 컴포넌트
│   ├── search/             # 검색 오버레이
│   └── ui/                 # 공용 UI 컴포넌트 (Button, Card, Dialog 등)
├── lib/                    # 유틸리티 및 데이터
│   ├── mock-data.ts        # 목업 데이터
│   ├── supabase.ts         # Supabase 클라이언트 및 API
│   └── utils.ts            # 공용 유틸리티 (cn 함수 등)
└── types/                  # TypeScript 타입 정의
```

## Path Alias
- `@/*` → `./src/*`

## Coding Conventions
- `type` 선호, `interface`는 Supabase 데이터 모델 등 명확한 경우에만 사용
- `enum` 사용 금지 → 문자열 리터럴 유니온 사용
- 컴포넌트는 `export default function` 패턴
- Tailwind 클래스 조합 시 `cn()` 유틸리티 사용 (`clsx` + `tailwind-merge`)
- Supabase 클라이언트는 `sb`로 참조 (`src/lib/supabase.ts`)
- 환경변수: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Restrictions
- console.log는 디버깅 완료 후 제거
- `any` 타입 사용 금지
- `'use client'`는 필요한 컴포넌트에만 최소한으로 사용
- 서버 컴포넌트가 기본, 클라이언트 컴포넌트는 상호작용이 필요할 때만
