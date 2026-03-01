// Types
export interface Job {
    id: string;
    title: string;
    team: string;
    type: string; // employment type: 정규직, 계약직, 인턴
    category: string;
    career: string; // 신입, 경력, 무관
    workStyle: string; // 재택, 하이브리드, 오피스
    location: string; // 판교, 강남, 재택
    description: string; // "어떤 문제를 해결하나요?" (Context)
    responsibilities?: string[]; // "주요 업무"
    collaboration?: string[]; // "협업 방식"
    techStack?: string[]; // "기술/도구"
    requirements?: {
        must: string[];
        nice: string[];
    };
    process: string[];
    relatedStoryIds?: string[]; // IDs of colleagues to show
}

export interface Story {
    id: string;
    name: string;
    role: string;
    category: string;
    title: string;
    lead: string;
    date: string;
    readTime: string;
    quote: string;
    image: string;
    tags?: string[];
    content?: { type: 'h' | 'q' | 'a'; text: string }[];
    summary?: string[];
    relatedJobCategory: string;
}

export interface CultureItem {
    id: string;
    title: string;
    category: string;
    image: string;
    desc: string;
}

export const JOBS: Job[] = [
    {
        id: "1",
        title: "Frontend Tech Lead",
        team: "Platform",
        type: "정규직",
        category: "dev",
        career: "경력 5년+",
        workStyle: "하이브리드",
        location: "판교",
        description: "AIO의 첫인상을 책임지는 홈 화면부터 송금, 결제까지 모든 경험을 기술적으로 설계합니다. 수백만 명이 사용하는 금융 앱의 복잡한 데이터를 직관적인 UI로 풀어내고, 60fps의 부드러운 사용성을 보장하는 것이 핵심입니다.",
        responsibilities: [
            "AIO 웹/앱 서비스의 프론트엔드 아키텍처 설계 및 고도화",
            "디자인 시스템(Core UI) 구축 및 전사 배포 관리",
            "성능 최적화 (Core Web Vitals 개선, 번들 사이즈 감축)",
            "주니어 개발자 멘토링 및 코드 리뷰 문화 주도",
            "Next.js 기반의 SSR/ISR 환경 구축 및 운영"
        ],
        collaboration: [
            "Product Designer와 1픽셀의 디테일과 인터랙션을 논의합니다.",
            "Backend 개발자와 API 스키마(GraphQL/REST)를 함께 설계합니다.",
            "PO와 함께 기술적 제약을 넘어선 사용자 가치를 고민합니다."
        ],
        techStack: ["React", "TypeScript", "Next.js", "Recoil/Jotai", "Framer Motion", "Jest/Cypress"],
        requirements: {
            must: [
                "React & TypeScript 기반 웹 프론트엔드 개발 경력 5년 이상",
                "웹 브라우저 렌더링 원리 및 최적화에 대한 깊은 이해",
                "3명 이상의 팀을 리딩하거나 기술적 의사결정을 주도한 경험",
                "복잡한 상태 관리(State Management) 설계 경험"
            ],
            nice: [
                "대규모 트래픽을 처리하는 B2C 서비스 운영 경험",
                "모노레포(Monorepo) 환경 구축 및 운영 경험",
                "웹 접근성(a11y) 개선 경험"
            ]
        },
        process: ["서류 전형", "과제 또는 라이브 코딩", "기술 인터뷰", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["7", "2"] // iOS Dev, Product Designer
    },
    {
        id: "2",
        title: "Product Designer",
        team: "UX",
        type: "정규직",
        category: "design",
        career: "경력 3년+",
        workStyle: "오피스",
        location: "강남",
        description: "AIO는 '예쁜 디자인'보다 '문제 해결'을 우선합니다. 금융의 불편함을 찾아내고, 사용자가 생각할 필요 없이 직관적으로 행동할 수 있는 흐름을 설계합니다. 데이터에 기반한 논리적인 디자인을 추구합니다.",
        responsibilities: [
            "AIO 모바일 앱/웹 프로덕트의 UX/UI 설계",
            "사용자 데이터 분석을 통한 문제 정의 및 가설 검증",
            "프로토타이핑(Prototyping)을 통한 빠른 아이디어 구체화",
            "디자인 시스템 유지 보수 및 확장",
            "사용성 테스트(UT) 설계 및 수행"
        ],
        collaboration: [
            "PO와 함께 제품의 로드맵과 MVP 범위를 정의합니다.",
            "개발자와 구현 가능성을 논의하며 최선의 퀄리티를 타협합니다.",
            "Data Analyst와 함께 A/B 테스트 결과를 분석하고 개선안을 도출합니다."
        ],
        techStack: ["Figma", "ProtoPie", "Lottie", "Principle"],
        requirements: {
            must: [
                "모바일 앱/웹 프로덕트 디자인 경력 3년 이상",
                "Figma 활용이 능숙하고 Auto Layout 등 기능을 잘 다루시는 분",
                "데이터와 논리에 기반해 디자인 결정을 내릴 수 있는 분",
                "개발자와의 원활한 커뮤니케이션 능력"
            ],
            nice: [
                "HTML/CSS에 대한 기본적인 이해",
                "복잡한 금융/핀테크 도메인 경험",
                "모션 그래픽 제작 능력"
            ]
        },
        process: ["서류 전형 (포트폴리오 필수)", "직무 인터뷰 (포트폴리오 리뷰)", "화이트보딩 또는 과제", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["1", "9"] // Frontend Lead, Brand Designer
    },
    {
        id: "3",
        title: "Growth Marketer",
        team: "Brand",
        type: "정규직",
        category: "marketing",
        career: "경력 2년+",
        workStyle: "재택",
        location: "리모트",
        description: "마케팅은 돈을 쓰는 것이 아니라 버는 구조를 만드는 일입니다. AIO의 그로스 마케터는 감이 아닌 데이터로 의사결정하며, 고객 획득(Acquisition)부터 유지(Retention)까지의 전체 퍼널을 최적화합니다.",
        responsibilities: [
            "Paid 매체(Meta, Google, TikTok 등) 광고 운영 및 성과 최적화",
            "CRM 마케팅(Push, Kakao, Email) 시나리오 설계 및 자동화",
            "A/B 테스트 기획 및 성과 분석",
            "신규 사용자 획득 비용(CAC) 최적화 및 LTV 증대 전략 수립"
        ],
        collaboration: [
            "Product Maker와 함께 제품 내 바이럴 루프(Viral Loop)를 설계합니다.",
            "Data Analyst와 함께 코호트 분석을 통해 인사이트를 발굴합니다.",
            "Content Marketer와 협업하여 소재 효율을 극대화합니다."
        ],
        techStack: ["AppsFlyer/Branch", "Amplitude/Mixpanel", "Braze", "Google Ads/Meta Ads Manager"],
        requirements: {
            must: [
                "디지털 퍼포먼스 마케팅 또는 그로스 마케팅 경력 2년 이상",
                "SQL을 활용한 데이터 추출 및 분석 능력",
                "마케팅 툴(Attribution, CRM, Analytics) 활용 능숙",
                "논리적인 가설 설정 및 실험 설계 능력"
            ],
            nice: [
                "핀테크 또는 커머스 앱 마케팅 경험",
                "Python/R을 활용한 데이터 분석 경험",
                "콘텐츠 기획 및 카피라이팅 능력"
            ]
        },
        process: ["서류 전형", "직무 인터뷰 (케이스 스터디)", "데이터 분석 과제", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["4", "10"] // Data Analyst, Biz Dev
    },
    {
        id: "4",
        title: "Core Server Developer",
        team: "Banking",
        type: "정규직",
        category: "dev",
        career: "경력 3년+",
        workStyle: "하이브리드",
        location: "판교",
        description: "금융 트랜잭션의 신뢰성과 속도를 책임집니다. 1원이라도 오차가 발생하면 안 되는 원장 시스템부터, 초당 수천 건의 트래픽을 처리하는 게이트웨이까지 견고한 백엔드 시스템을 구축합니다.",
        responsibilities: [
            "대규모 트래픽 처리를 위한 분산 시스템 설계 및 개발",
            "금융 코어 뱅킹 연동 및 원장 관리 시스템 구축",
            "MSA(Microservices Architecture) 기반의 서비스 운영",
            "장애 대응 및 시스템 안정성 확보 (Circuit Breaker, Rate Limiting 등)",
            "레거시 시스템 리팩토링 및 기술 부채 관리"
        ],
        collaboration: [
            "DevOps 엔지니어와 함께 인프라 아키텍처를 논의합니다.",
            "보안팀과 함께 금융 보안 컴플라이언스를 준수하는 시스템을 만듭니다.",
            "Frontend 개발자에게 안정적이고 효율적인 API를 제공합니다."
        ],
        techStack: ["Java/Kotlin (Spring Boot)", "MySQL/PostgreSQL", "Redis", "Kafka", "Docker/Kubernetes", "AWS"],
        requirements: {
            must: [
                "Java 또는 Kotlin 기반의 서버 개발 경력 3년 이상",
                "RDBMS 및 NoSQL에 대한 깊은 이해 및 트랜잭션 처리 경험",
                "대용량 트래픽 처리 및 분산 환경 시스템 설계 경험",
                "자료구조, 알고리즘, OS 등 CS 기초 지식"
            ],
            nice: [
                "금융/결제 시스템 개발 경험",
                "MSA 환경에서의 개발 및 운영 경험",
                "오픈소스 프로젝트 기여 또는 기술 블로그 운영 경험"
            ]
        },
        process: ["서류 전형", "온라인 코딩 테스트", "시스템 디자인 인터뷰", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["8", "1"] // DevOps, FE Leader
    },
    {
        id: "5",
        title: "Data Analyst",
        team: "Data",
        type: "정규직",
        category: "business",
        career: "신입",
        workStyle: "하이브리드",
        location: "판교",
        description: "AIO의 모든 의사결정은 데이터에서 시작됩니다. 단순히 숫자를 추출하는 것을 넘어, 데이터 속에서 비즈니스 임팩트를 창출할 수 있는 인사이트를 발굴하고 액션 아이템을 제안합니다.",
        responsibilities: [
            "제품 및 비즈니스 지표(KPI) 정의 및 대시보드 구축",
            "사용자 행동 로그 설계 및 데이터 정합성 검증",
            "A/B 테스트 설계, 결과 분석 및 의사결정 지원",
            "FDS(이상거래탐지) 룰 베이스 및 모델링 지원",
            "전사 데이터 리터러시(Data Literacy) 향상 교육"
        ],
        collaboration: [
            "PO/PM이 올바른 가설을 세울 수 있도록 데이터를 제공합니다.",
            "Developer와 함께 로그 수집 파이프라인을 논의합니다.",
            "C-Level의 전략적 의사결정을 위한 데이터를 시각화합니다."
        ],
        techStack: ["SQL (Advanced)", "Python/R", "Tableau/Superset/Metabase", "Airflow", "Amplitude"],
        requirements: {
            must: [
                "SQL을 자유자재로 사용하여 복잡한 쿼리를 작성할 수 있는 분",
                "통계적 지식을 바탕으로 실험(A/B Test) 결과를 해석할 수 있는 분",
                "논리적인 사고와 명확한 커뮤니케이션 능력",
                "비즈니스 문제 해결에 대한 열정"
            ],
            nice: [
                "데이터 파이프라인 구축 또는 엔지니어링 경험",
                "머신러닝/딥러닝 모델링 경험",
                "관련 전공(통계학, 컴퓨터공학, 산업공학 등) 석사 이상"
            ]
        },
        process: ["서류 전형", "SQL 코딩 테스트", "데이터 분석 과제/케이스 스터디", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["3", "5"] // Marketer, PO
    },
    {
        id: "6",
        title: "DevOps Engineer",
        team: "Infra",
        type: "정규직",
        category: "dev",
        career: "경력 5년+",
        workStyle: "재택",
        location: "리모트",
        description: "금융 서비스는 24시간 365일 멈추지 않아야 합니다. 급증하는 트래픽을 유연하게 처리하고, 고객의 자산을 안전하게 지키는 견고한 인프라를 구축합니다. 우리는 수동 운영을 죄악으로 여기며, 모든 인프라를 코드로 관리(IaC)하여 운영 효율과 안정성을 극대화합니다.",
        responsibilities: [
            "AWS 기반의 대규모 클라우드 인프라 설계, 구축 및 운영",
            "Terraform/Ansible을 활용한 Infrastructure as Code (IaC) 구현",
            "Kubernetes(EKS) 기반의 컨테이너 오케스트레이션 환경 운영",
            "CI/CD 파이프라인 고도화 및 배포 자동화 (GitLab CI, ArgoCD)",
            "금융 보안 규제(ISMS-P/전자금융감독규정) 준수를 위한 보안 인프라 구성",
            "Prometheus/Grafana/ELK Stack을 활용한 모니터링 및 로깅 시스템 구축"
        ],
        collaboration: [
            "Backend 개발자와 서비스 아키텍처 및 배포 전략을 논의합니다.",
            "Security 팀과 협업하여 망 분리 및 접근 제어 정책을 수립합니다.",
            "QA 팀과 함께 테스트 환경 자동화를 구축합니다."
        ],
        techStack: ["AWS", "Terraform", "Kubernetes", "Docker", "Python/Go", "FGP"],
        requirements: {
            must: [
                "AWS 등 Public Cloud 환경에서의 대규모 서비스 운영 경험 5년 이상",
                "IaC (Terraform, CloudFormation 등) 도구 활용 능숙",
                "Kubernetes 운영 및 트러블슈팅 경험",
                "CI/CD 파이프라인 구축 및 운영 경험",
                "네트워크(VPC, DNS, LB 등) 및 리눅스 시스템에 대한 깊은 이해"
            ],
            nice: [
                "금융권 또는 핀테크 기업에서의 인프라 운영 경험",
                "ISMS-P 등 정보보호 인증 심사 대응 경험",
                "Service Mesh (Istio 등) 도입 및 운영 경험",
                "Chaos Engineering 적용 경험"
            ]
        },
        process: ["서류 전형", "기술 과제 (인프라 구성)", "기술 인터뷰", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["8", "1"] // DevOps Lead, Backend Lead
    },
    {
        id: "7",
        title: "UX Researcher",
        team: "UX",
        type: "계약직",
        category: "design",
        career: "무관",
        workStyle: "오피스",
        location: "강남",
        description: "데이터가 알려주지 않는 'Why'를 찾습니다. 정량적 데이터 너머에 있는 사용자의 진짜 맥락과 고충을 발굴하여, 제품 팀이 올바른 방향으로 나아갈 수 있도록 나침반 역할을 합니다. 금융이라는 어려운 주제를 사용자가 어떻게 인식하는지 탐구합니다.",
        responsibilities: [
            "정성적/정량적 사용자 리서치 설계 및 수행 (IDI, UT, Survey, FGI 등)",
            "리서치 결과 분석 및 인사이트 도출, 액션 아이템 제안",
            "사용자 여정 지도(User Journey Map) 및 페르소나(Persona) 수립",
            "신규 기능 출시 전/후 사용성 테스트 진행 및 개선안 도출",
            "전사적인 사용자 중심 사고(User-Centric Thinking) 전파"
        ],
        collaboration: [
            "Product Designer와 함께 프로토타입을 테스트하고 사용성을 개선합니다.",
            "PO와 함께 제품의 가설을 검증하고 방향성을 설정합니다.",
            "Data Analyst와 함께 정성/정량 데이터를 교차 분석합니다."
        ],
        techStack: ["Figma", "Maze", "Typeform", "Amplitude", "Notion"],
        requirements: {
            must: [
                "다양한 리서치 방법론을 목적에 맞게 설계하고 수행할 수 있는 분",
                "사용자의 행동과 말 속에 숨겨진 의도를 파악하는 통찰력",
                "리서치 결과를 논리적으로 정리하여 타 직군을 설득할 수 있는 커뮤니케이션 능력",
                "모바일 서비스 및 IT 트렌드에 대한 높은 관심"
            ],
            nice: [
                "심리학, 인지공학, HCI 등 관련 전공자",
                "핀테크 분야 리서치 경험",
                "SQL을 활용한 기본적인 데이터 추출 능력"
            ]
        },
        process: ["서류 전형 (포트폴리오)", "직무 인터뷰 (리서치 케이스)", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["2", "10"] // Product Designer, Brand Designer
    },
    {
        id: "8",
        title: "Customer Success Manager",
        team: "Operation",
        type: "정규직",
        category: "business",
        career: "경력 1년+",
        workStyle: "오피스",
        location: "강남",
        description: "단순한 문의 응대를 넘어, 고객의 성공적인 금융 생활을 지원합니다. 고객이 겪는 문제를 가장 가까이서 듣고, 반복되는 불편함을 시스템적으로 해결하기 위해 프로덕트 팀과 치열하게 소통합니다. 고객의 목소리(VOC)는 AIO 혁신의 원동력입니다.",
        responsibilities: [
            "주요 고객 문의 및 불만 사항 응대 (채팅, 이메일, 유선)",
            "VOC(Voice of Customer) 분석 및 정기 리포팅",
            "자주 묻는 질문(FAQ) 및 헬프 센터 콘텐츠 기획/제작",
            "서비스 장애 등 이슈 발생 시 대고객 커뮤니케이션 및 상황 전파",
            "상담 품질(QA) 관리 및 운영 프로세스 효율화"
        ],
        collaboration: [
            "Product Maker들에게 생생한 고객 피드백을 전달하여 제품 개선을 이끌어냅니다.",
            "Risk 팀과 협업하여 금융 사기 피해 예방 및 대응을 진행합니다.",
            "Marketing 팀과 함께 고객 경험 향상을 위한 이벤트를 지원합니다."
        ],
        techStack: ["Zendesk", "Jira", "Slack", "Salesforce"],
        requirements: {
            must: [
                "IT 플랫폼 또는 금융권 CS 업무 경력 1년 이상",
                "고객 지향적인 마인드와 뛰어난 문제 해결 능력",
                "논리적인 글쓰기 및 말하기 능력",
                "데이터를 기반으로 현상을 분석하고 개선점을 도출할 수 있는 분"
            ],
            nice: [
                "금융 관련 자격증 보유자",
                "CS 운영 기획 또는 QA 경험",
                "비대면 금융 거래 프로세스에 대한 이해"
            ]
        },
        process: ["서류 전형", "직무 인터뷰 (롤플레잉 포함)", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["5", "3"] // PO, Marketer
    },
    {
        id: "9",
        title: "Mobile App Developer (iOS)",
        team: "Platform",
        type: "정규직",
        category: "dev",
        career: "경력 3년+",
        workStyle: "하이브리드",
        location: "판교",
        description: "내 손 안의 금융 비서로서 가장 빠르고 직관적인 경험을 제공합니다. 복잡한 금융 데이터를 모바일 환경에 최적화하여 렌더링하고, OS의 최신 기능(Widget, Live Activity 등)을 적극 도입하여 사용성과 보안을 동시에 잡습니다. AIO 앱의 60fps 부드러움을 책임집니다.",
        responsibilities: [
            "AIO iOS 앱 신규 기능 개발 및 유지보수",
            "SwiftUI 기반의 모던 UI/UX 구현 및 디자인 시스템 적용",
            "Tuist/Bazel을 활용한 모듈화 및 빌드 환경 최적화",
            "앱 성능(실행 속도, 메모리, 배터리) 최적화 및 크래시 대응",
            "Unit Test 및 UI Test 작성으로 안정적인 코드베이스 유지"
        ],
        collaboration: [
            "Product Designer와 함께 최상의 인터랙션을 구현하기 위해 프로토타이핑 단계부터 협업합니다.",
            "Android 개발자와 모바일 공통 아키텍처 및 기술 부채 해결을 논의합니다.",
            "Server 개발자와 효율적인 API 설계를 위해 협업합니다."
        ],
        techStack: ["Swift", "SwiftUI", "Combine", "Tuist", "Fastlane", "GitHub Actions"],
        requirements: {
            must: [
                "iOS 앱 개발 경력 3년 이상 (Swift 능숙)",
                "SwiftUI 및 Combine을 활용한 반응형 프로그래밍 경험",
                "Design Pattern (MVVM, Clean Architecture 등)에 대한 이해",
                "앱 배포 및 App Store 심사 프로세스 경험"
            ],
            nice: [
                "대규모 트래픽을 처리하는 앱 서비스 운영 경험",
                "CI/CD 환경 구축 및 자동화 경험",
                "오픈소스 라이브러리 제작 또는 기여 경험",
                "Widget, Watch App 등 Apple 플랫폼 확장 기능 개발 경험"
            ]
        },
        process: ["서류 전형", "온라인 코딩 테스트", "기술 인터뷰 (iOS 지식)", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["7", "1"] // iOS Lead, Tech Lead
    },
    {
        id: "10",
        title: "Brand Designer",
        team: "Brand",
        type: "인턴",
        category: "design",
        career: "신입",
        workStyle: "오피스",
        location: "강남",
        description: "딱딱하고 어려운 금융의 이미지를 AIO만의 친근하고 세련된 브랜드로 재정의합니다. 앱 내의 작은 아이콘부터 옥외 광고, 웰컴 키트까지 고객이 마주하는 모든 접점에서 일관된 브랜드 메시지와 시각적 경험(Visual Identity)을 전달합니다.",
        responsibilities: [
            "AIO 브랜드 아이덴티티(BI) 개발 및 가이드라인 고도화",
            "온/오프라인 마케팅 콘텐츠(SNS, 배너, 포스터 등) 디자인",
            "인터널 브랜딩을 위한 사내 굿즈, 행사 그래픽 디자인",
            "브랜드 그래픽 에셋(일러스트, 아이콘, 타이포그래피) 제작",
            "영상 및 모션 그래픽 소스 제작 지원"
        ],
        collaboration: [
            "Marketer와 함께 캠페인의 핵심 메시지를 시각화합니다.",
            "Product Designer와 함께 앱과 마케팅의 톤앤매너를 일치시킵니다.",
            "BX(Brand Experience) 팀원들과 브랜드 전략을 논의합니다."
        ],
        techStack: ["Adobe Illustrator", "Photoshop", "After Effects", "Figma", "Cinema 4D (Optional)"],
        requirements: {
            must: [
                "시각 디자인 또는 관련 전공 졸업(예정)자",
                "Adobe Creative Cloud (Ai, Ps) 및 Figma 활용 능숙",
                "타이포그래피, 레이아웃, 컬러에 대한 탄탄한 기본기",
                "논리적으로 디자인 의도를 설명할 수 있는 커뮤니케이션 능력"
            ],
            nice: [
                "모션 그래픽 또는 3D 툴 활용 능력",
                "브랜딩 프로젝트의 A to Z를 주도적으로 진행해본 경험",
                "IT/스타트업 업계에 대한 높은 관심"
            ]
        },
        process: ["서류 전형 (포트폴리오 필수)", "직무 인터뷰 (포트폴리오 리뷰)", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["9", "2"] // Brand Designer Lead, Product Designer
    },
    {
        id: "11",
        title: "Talent Acquisition Manager",
        team: "People",
        type: "정규직",
        category: "hr",
        career: "경력 5년+",
        workStyle: "오피스",
        location: "강남",
        description: "AIO의 성장을 견인할 최고의 동료를 모십니다. 단순히 채용 공고를 올리는 운영자가 아니라, 인재 시장을 분석하고 AIO만의 채용 브랜드를 구축하는 '채용 전략가'를 찾습니다.",
        responsibilities: [
            "기술직군(Tech) 및 비즈니스 직군 인재 영입 전략 수립 및 실행",
            "Direct Sourcing(다이렉트 소싱)을 통한 잠재 후보자 파이프라인 구축",
            "채용 프로세스 고도화 및 지원자 경험(Candidate Experience) 개선",
            "채용 브랜딩 콘텐츠 기획 및 온/오프라인 행사 운영",
            "채용 데이터 분석 및 리포팅"
        ],
        collaboration: [
            "Hiring Manager(현업 리더)와 채용 니즈를 정의하고 인재상을 조율합니다.",
            "Interviewer들과 면접 평가 기준을 논의하고 피드백을 관리합니다.",
            "Brand Design 팀과 협업하여 채용 콘텐츠를 제작합니다."
        ],
        techStack: ["Greenhouse/Lever (ATS)", "LinkedIn Recruiter", "Wanted/Remember", "Slack/Notion"],
        requirements: {
            must: [
                "인하우스 채용 담당 또는 서치펌 컨설턴트 경력 5년 이상",
                "개발자/기획자 등 IT 인재 소싱 경험 보유",
                "채용 데이터 관리 및 ATS 활용 능력",
                "적극적인 실행력과 뛰어난 커뮤니케이션 스킬"
            ],
            nice: [
                "스타트업 또는 IT 기업에서의 폭발적인 채용 경험(Hyper-growth)",
                "테크 블로그/채용 설명회 등 채용 브랜딩 프로젝트 리딩 경험",
                "영어 커뮤니케이션 가능자"
            ]
        },
        process: ["서류 전형", "직무 인터뷰", "케이스 인터뷰 (실무 시나리오)", "문화 인터뷰", "처우 협의"],
        relatedStoryIds: ["6", "5"] // HR, PO
    }
];

export const STORIES: Story[] = [
    {
        id: "1",
        name: "강민우",
        role: "Core Backend Developer",
        category: "dev",
        title: "100만 건의 결제를 1초에 처리하는 법",
        lead: "금융 트래픽은 거짓말을 하지 않습니다. 매 순간 쏟아지는 결제 요청을 안정적으로 처리하기 위해 AIO 백엔드 팀이 어떤 아키텍처를 설계했는지 이야기 나눴습니다.",
        date: "2026.01.28",
        readTime: "5분",
        quote: "금융의 신뢰는 99%가 아니라 100%여야 합니다.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        tags: ["Backend", "Java", "High Traffic"],
        relatedJobCategory: "dev",
        content: [
            { type: "h", text: "타협할 수 없는 무결성" },
            { type: "q", text: "AIO의 결제 시스템은 무엇이 다른가요?" },
            { type: "a", text: "우리는 '결과적 일관성(Eventual Consistency)'에 의존하지 않습니다. 돈이 오가는 문제는 즉시성이 생명입니다. 그래서 우리는 분산 트랜잭션을 최소화하고, 코어 뱅킹 시스템과의 직접적인 동기화 파이프라인을 자체 구축했습니다." },
            { type: "q", text: "어려운 점은 없었나요?" },
            { type: "a", text: "레거시 금융망과의 연동이 가장 큰 산이었습니다. 응답 속도가 느린 외부 시스템을 기다리면서도, 우리 서비스 전체의 지연을 막기 위해 Circuit Breaker 패턴과 비동기 큐잉 시스템을 적극적으로 도입했습니다." },
            { type: "q", text: "기술적 부채는 어떻게 관리하나요?" },
            { type: "a", text: "부채가 쌓이면 이자가 붙습니다. 우리는 매주 금요일을 'Refactoring Friday'로 정해, 기능 개발을 멈추고 코드 구조를 개선하는 데 집중합니다. 덕분에 3년 된 코드베이스도 어제 짠 코드처럼 신선하게 유지하고 있습니다." },
            { type: "h", text: "동료를 향한 신뢰" },
            { type: "q", text: "백엔드 팀의 분위기가 궁금합니다." },
            { type: "a", text: "치열하게 토론하되, 결정되면 헌신합니다(Disagree and Commit). 코드 리뷰에서는 직급을 막론하고 '왜?'를 묻습니다. 시니어가 짠 코드라도 주니어가 더 나은 로직을 제안하면 바로 반영됩니다. 이것이 우리가 성장하는 방식입니다." },
            { type: "q", text: "어떤 개발자가 AIO에 어울릴까요?" },
            { type: "a", text: "기술을 위한 기술이 아니라, 비즈니스 문제를 해결하기 위해 기술을 쓰는 분입니다. 화려한 아키텍처보다 견고한 코드를 사랑하는 분이라면 환영합니다." }
        ],
        summary: ["트래픽이 폭주해도 끄떡없는 견고함", "레거시를 두려워하지 않는 대담함", "직급보다 논리가 우선하는 코드 리뷰 문화"]
    },
    {
        id: "2",
        name: "이수진",
        role: "Product Designer",
        category: "design",
        title: "금융 앱이 꼭 딱딱해야 하나요?",
        lead: "여백의 미학을 넘어, 사용자의 불안감까지 비워내는 디자인. AIO의 디자인 팀이 복잡한 송금 화면을 단 하나의 버튼으로 줄이기까지의 치열한 고민 과정을 공개합니다.",
        date: "2026.01.20",
        readTime: "4분",
        quote: "설명이 필요 없는 UI가 최고의 디자인입니다.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        tags: ["UX", "Simplicity", "Data-Design"],
        relatedJobCategory: "design",
        content: [
            { type: "h", text: "빼기의 미학" },
            { type: "q", text: "최근 개편한 송금 화면이 화제입니다." },
            { type: "a", text: "이전 화면에는 7개의 입력 필드가 있었어요. 은행, 계좌번호, 금액, 예금주명... 사용자에게는 숙제 같았죠. 우리는 데이터를 활용해 '자주 보낸 계좌'를 예측하고, 필드를 하나씩 노출하는 방식으로 바꿨습니다. 결과적으로 송금 실패율이 40% 감소했습니다." },
            { type: "q", text: "디자이너도 데이터를 보나요?" },
            { type: "a", text: "물론입니다. AIO의 디자이너는 SQL을 할 줄 압니다. '이 버튼이 예뻐서'가 아니라 '이 위치의 클릭률(CTR)이 낮아서'라고 말합니다. 데이터가 뒷받침되지 않는 디자인은 예술일 뿐, 프로덕트가 아니니까요." },
            { type: "h", text: "사용자의 불안을 다루는 법" },
            { type: "q", text: "금융 디자인에서 가장 중요한 것은 무엇인가요?" },
            { type: "a", text: "신뢰감입니다. 송금 버튼을 눌렀을 때 0.1초의 딜레이라도 생기면 사용자는 불안해합니다. 그래서 우리는 로딩 애니메이션 하나에도 심리학적인 요소를 담아 '안전하게 처리되고 있음'을 시각적으로 전달합니다." },
            { type: "q", text: "개발팀과는 어떻게 협업하시나요?" },
            { type: "a", text: "피그마 코멘트로만 대화하지 않습니다. 제 자리는 백엔드 개발자 바로 옆자리예요. 기획 단계부터 함께 앉아 '이 인터랙션 구현하려면 API가 어떻게 바뀌어야 할까요?'를 논의합니다." }
        ],
        summary: ["디자인의 근거는 항상 데이터", "사용자의 입력을 최소화하는 집요함", "금융의 무게감과 IT의 경쾌함 사이의 균형"]
    },
    {
        id: "3",
        name: "박준영",
        role: "Growth Marketer",
        category: "marketing",
        title: "100원을 쓰더라도 가설이 필요하다",
        lead: "마케팅은 돈을 쓰는 부서가 아니라, 돈을 버는 구조를 만드는 부서입니다. AIO 마케팅 팀이 어떻게 10배 성장을 만들어냈는지, 그 실험의 기록들을 공유합니다.",
        date: "2026.01.15",
        readTime: "6분",
        quote: "실패한 실험은 없습니다. 검증된 가설만 있을 뿐.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        tags: ["Growth", "Experiment", "CRM"],
        relatedJobCategory: "marketing",
        content: [
            { type: "h", text: "실험, 실험, 그리고 실험" },
            { type: "q", text: "하루에 몇 개의 실험을 하시나요?" },
            { type: "a", text: "팀 전체적으로 하루 평균 15개의 A/B 테스트가 돌아갑니다. 회원가입 문구부터 푸시 알림 시간까지, 우리의 뇌피셜(직감)은 철저히 배제됩니다. '고객이 좋아할 거야'라는 추측 대신 'A안의 전환율이 3% 더 높았어'라는 팩트만 남깁니다." },
            { type: "h", text: "리텐션이 전부다" },
            { type: "q", text: "가장 기억에 남는 캠페인은?" },
            { type: "a", text: "'소비 MBTI' 캠페인입니다. 단순히 가입을 유도하는 게 아니라, 기존 고객이 자신의 소비 패턴을 분석하고 친구에게 공유하게 만들었죠. 획득 비용(CAC)은 절반으로 줄고, 리텐션은 20% 올랐습니다. 바이럴 루프를 만드는 것이 그로스의 핵심입니다." },
            { type: "q", text: "실패했을 때는 어떻게 하나요?" },
            { type: "a", text: "샴페인을 터뜨립니다. 실패를 통해 '이 방법은 안 된다'는 귀중한 데이터를 얻었으니까요. 우리는 실수한 사람을 비난하지 않습니다. 다만, 실패에서 아무것도 배우지 못했을 때를 경계합니다." },
            { type: "q", text: "어떤 툴을 주로 쓰나요?" },
            { type: "a", text: "Amplitude와 Braze를 숨 쉬듯이 씁니다. 하지만 툴보다 중요한 건 'Why'를 묻는 습관입니다. 데이터의 함정에 빠지지 않기 위해 정성적 데이터(VOC)도 꼼꼼히 봅니다." }
        ],
        summary: ["모든 액션에는 가설이 선행되어야 한다", "획득보다 중요한 것은 유지(Retention)", "팀의 성과는 숫자로 증명한다"]
    },
    {
        id: "4",
        name: "최유리",
        role: "Data Analyst",
        category: "business",
        title: "사기 거래, 0.5초 안에 잡아냅니다",
        lead: "AIO의 이상거래탐지시스템(FDS)은 매일 진화합니다. 머신러닝 모델이 어떻게 보이스피싱을 예방하고 사용자의 자산을 지키는지, 데이터 분석팀의 하루를 엿보았습니다.",
        date: "2026.01.10",
        readTime: "5분",
        quote: "데이터 뒤에 사람이 있습니다. 우리는 숫자가 아닌 삶을 보호합니다.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
        tags: ["Data", "Security", "AI"],
        relatedJobCategory: "business",
        content: [
            { type: "h", text: "보이지 않는 방패" },
            { type: "q", text: "FDS(이상거래탐지) 개발의 어려움은 무엇인가요?" },
            { type: "a", text: "정탐률과 오탐률 사이의 줄타기입니다. 너무 엄격하게 막으면 정상적인 사용자가 불편하고, 너무 느슨하면 사고가 터지죠. 우리는 딥러닝을 활용해 사용자의 평소 패턴(위치, 기기, 송금 시간 등)을 학습하고, 이상 징후가 보이면 0.5초 내에 거래를 차단합니다." },
            { type: "q", text: "데이터 분석가로서 가장 보람찬 순간은?" },
            { type: "a", text: "실제 보이스피싱 피해를 막았을 때입니다. '고객님, 방금 이상한 송금이 감지되어 차단했습니다'라고 알렸을 때, 안도하는 고객의 목소리를 들으면 이 일을 사랑할 수밖에 없죠." },
            { type: "q", text: "비즈니스 팀과는 어떻게 일하나요?" },
            { type: "a", text: "우리는 '요청받은 데이터를 뽑아주는' 팀이 아닙니다. 비즈니스 미팅에 참석해 '이 지표를 개선하려면 이런 데이터가 더 필요해요'라고 역제안합니다. 데이터 팀이 비즈니스의 조타수 역할을 합니다." },
            { type: "q", text: "가장 많이 쓰는 기술 스택은?" },
            { type: "a", text: "Python과 SQL이 기본이고, Airflow로 파이프라인을 관리합니다. 최근에는 실시간 유입 데이터를 처리하기 위해 Flink와 Kafka 스트림즈도 도입하고 있습니다." }
        ],
        summary: ["기술로 사회적 가치를 실현한다", "모델의 성능이 곧 고객의 안전이다", "데이터 윤리를 최우선으로 생각한다"]
    },
    {
        id: "5",
        name: "정재훈",
        role: "Product Owner",
        category: "business",
        title: "우리는 기능이 아니라 흐름을 만듭니다",
        lead: "AIO의 PO는 '미니 CEO'라고 불립니다. 하나의 기능을 런칭하기 위해 개발자, 디자이너, 마케터와 어떻게 격렬하게 협업하고, 결국 하나의 목표로 달려가는지 이야기합니다.",
        date: "2026.01.05",
        readTime: "6분",
        quote: "PO의 일은 '안 된다'는 말을 '되게 하는' 방법을 찾는 것입니다.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        tags: ["PO", "Strategy", "Leadership"],
        relatedJobCategory: "business",
        content: [
            { type: "h", text: "Why에서 시작하기" },
            { type: "q", text: "PO의 가장 중요한 역량은 무엇인가요?" },
            { type: "a", text: "'Why'를 집요하게 묻는 것입니다. 사용자가 '대출 조회가 불편해요'라고 하면, 바로 조회 버튼을 크게 만드는 게 아니라 '왜 조회하려고 하지?'를 파고듭니다. 알고 보니 '내 신용점수가 떨어졌을까 봐'가 근본 원인이었다면, 신용점수 변동 알림을 주는 게 맞죠." },
            { type: "q", text: "다양한 직군과 협업하는 노하우는?" },
            { type: "a", text: "그들의 언어로 말하는 것입니다. 개발자에게는 리소스 효율성을, 디자이너에게는 사용자 경험을, 사업부에는 매출 임팩트를 이야기합니다. 하지만 결론은 항상 하나입니다. '그래서 고객에게 뭐가 좋은데?'" },
            { type: "q", text: "힘들 땐 언제인가요?" },
            { type: "a", text: "모두를 만족시킬 수 없을 때입니다. 일정은 촉박하고, 리소스는 한정적이죠. 그때 우선순위를 정하고 'No'라고 말하는 용기가 필요합니다. 팀원들에게 미움을 받더라도, 프로덕트를 위해 옳은 결정을 내려야 하니까요." },
            { type: "q", text: "PO를 꿈꾸는 분들에게 한마디." },
            { type: "a", text: "문제를 사랑하세요. 해결책에 집착하지 말고, 사용자가 겪는 고통에 집중하면 답은 자연스럽게 나옵니다. 우리는 코드를 짜는 사람이 아니라, 가치를 만드는 사람입니다." }
        ],
        summary: ["고객의 문제(Problem)를 정의하는 능력", "이해관계자를 설득하고 조율하는 리더십", "끝까지 책임을 지는 오너십"]
    },
    {
        id: "6",
        name: "한지민",
        role: "Head of People",
        category: "hr",
        title: "최고의 복지는 최고의 동료입니다",
        lead: "AIO는 왜 채용에 그토록 집착할까요? 뛰어난 한 명이 평범한 열 명보다 낫다는 믿음. AIO의 채용 철학과 우리가 그리는 조직 문화에 대해 솔직하게 털어놓았습니다.",
        date: "2026.01.02",
        readTime: "4분",
        quote: "우리는 지원자를 평가하는 게 아니라, 함께할 미래를 그립니다.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
        tags: ["HR", "Culture", "Recruiting"],
        relatedJobCategory: "hr",
        content: [
            { type: "h", text: "기준을 낮추지 않는다" },
            { type: "q", text: "AIO의 면접은 어렵기로 소문났습니다." },
            { type: "a", text: "어렵게 뽑아서, 쉽게 일하게 하자는 주의입니다. 실력이 검증된 동료들과 일할 때 커뮤니케이션 비용이 가장 낮거든요. 하지만 압박 면접은 아닙니다. 우리는 지원자가 가진 최고의 모습을 이끌어내기 위해, 가장 편안한 분위기에서 깊이 있는 대화를 나눕니다." },
            { type: "q", text: "People 팀의 목표는 무엇인가요?" },
            { type: "a", text: "구성원들이 '일' 외에는 아무것도 신경 쓰지 않게 하는 것입니다. 최고의 장비, 맛있는 밥, 투명한 보상. 이 모든 건 수단일 뿐입니다. 목적은 단 하나, '몰입'이죠." },
            { type: "q", text: "채용 시 가장 중요하게 보는 것은?" },
            { type: "a", text: "성장 가능성(Growth Mindset)입니다. 지금 아는 것이 많은 사람보다, 모르는 것을 인정하고 빠르게 배우는 사람을 선호합니다. 금융의 트렌드는 매일 바뀌니까요." },
            { type: "q", text: "어떤 조직문화를 지향하나요?" },
            { type: "a", text: "'솔직함'입니다. 문제가 있으면 숨기지 않고 드러내야 해결할 수 있습니다. 우리는 뒷담화보다 앞담화를 장려합니다. 건강한 충돌이 있어야 혁신이 나온다고 믿습니다." }
        ],
        summary: ["높은 채용 밀도(Talent Density) 유지", "투명하고 합리적인 보상 체계", "성장에만 집중할 수 있는 환경 제공"]
    },
    {
        id: "7",
        name: "김하늘",
        role: "iOS Developer",
        category: "dev",
        title: "작은 화면 속에 담긴 거대한 우주",
        lead: "모바일 화면은 사용자와 AIO가 만나는 최전선입니다. 수백 개의 기능이 담긴 앱이, 어떻게 50MB라는 가벼운 용량과 매끄러운 제스처를 유지할 수 있는지 iOS 팀의 비밀을 공개합니다.",
        date: "2026.02.01",
        readTime: "5분",
        quote: "터치 한 번의 감각까지 설계합니다. 그게 디테일의 차이니까요.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
        tags: ["iOS", "SwiftUI", "Mobile"],
        relatedJobCategory: "dev",
        content: [
            { type: "h", text: "네이티브를 고집하는 이유" },
            { type: "q", text: "크로스 플랫폼(Flutter 등)을 쓰지 않는 이유가 있나요?" },
            { type: "a", text: "금융 앱은 보안과 성능이 최우선입니다. Face ID 연동, 위젯, 실시간 알림 등 OS의 최신 기능을 가장 빠르고 안정적으로 제공하기 위해 네이티브 개발을 고집합니다. 사용자 경험(UX) 측면에서도 네이티브만의 '쫀쫀한' 느낌은 대체 불가능하죠." },
            { type: "q", text: "가장 까다로운 작업은 무엇인가요?" },
            { type: "a", text: "앱의 '무게' 관리입니다. 기능이 추가될수록 앱 용량이 커지고 실행 속도가 느려지기 쉽습니다. 우리는 모듈화(Modularization)를 통해 필요한 기능만 로드하고, 이미지 리소스를 벡터 기반으로 최적화해 가벼움을 유지합니다." },
            { type: "h", text: "디자인팀과의 협업" },
            { type: "q", text: "디자이너의 요구사항이 구현하기 어려울 땐?" },
            { type: "a", text: "'안 돼요'라고 하지 않고 '이건 어때요?'라고 합니다. 예를 들어 복잡한 3D 애니메이션이 성능을 저하시킨다면, Lottie를 활용하거나 OS 기본 애니메이션을 조합해 비슷한 느낌을 내는 대안을 제시하죠. 함께 답을 찾는 과정이 즐겁습니다." },
            { type: "q", text: "자랑하고 싶은 문화가 있다면?" },
            { type: "a", text: "WWDC 워치 파티입니다. 매년 6월이면 팀원들이 모여 새벽까지 애플의 신기술 발표를 봅니다. '저 기능 우리 앱에 바로 넣어보자!' 하며 가슴 뛰는 순간이죠." }
        ],
        summary: ["사용자 경험을 위한 기술적 타협 금지", "최적화에 대한 집착", "신기술을 즐기는 너드(Nerd) 문화"]
    },
    {
        id: "8",
        name: "데이비드 킴",
        role: "DevOps Engineer",
        category: "dev",
        title: "잠들지 않는 인프라를 짓다",
        lead: "AIO 서비스는 24시간 멈추지 않습니다. 서버 장애, 디도스 공격, 트래픽 폭주... 보이지 않는 곳에서 시스템의 안정을 지키는 인프라 팀의 치열한 사투와 철학.",
        date: "2026.01.25",
        readTime: "6분",
        quote: "엔지니어의 편안한 잠자리는 우리가 지킵니다.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        tags: ["DevOps", "AWS", "Infrastructure"],
        relatedJobCategory: "dev",
        content: [
            { type: "h", text: "자동화 아니면 죽음을" },
            { type: "q", text: "DevOps 팀의 모토가 뭔가요?" },
            { type: "a", text: "'내가 없어도 돌아가는 시스템'입니다. 서버 배포, 스케일링, 로깅, 알림까지 모든 과정을 코드로 관리(IaC)합니다. 반복적인 작업은 죄악이라고 생각하죠. 덕분에 개발자들은 인프라 걱정 없이 코드 작성에만 집중할 수 있습니다." },
            { type: "q", text: "가장 아찔했던 순간은?" },
            { type: "a", text: "작년 연말 정산 기간 트래픽이 평소의 10배로 뛰었을 때입니다. 다행히 미리 설계해둔 오토스케일링 정책이 작동해 서버가 자동으로 50대에서 500대로 늘어났죠. 모니터링 대시보드에서 그래프가 치솟는 걸 보며 팀원들과 하이파이브를 했습니다." },
            { type: "h", text: "보안은 타협하지 않는다" },
            { type: "q", text: "금융 인프라에서 보안은 어떻게 챙기나요?" },
            { type: "a", text: "망 분리는 기본이고, 모든 데이터는 암호화됩니다. 하지만 가장 중요한 건 '사람'입니다. 아무리 시스템이 좋아도 사람이 실수하면 뚫립니다. 그래서 접근 권한을 최소화하고, 모든 명령어를 감사(Audit) 기록으로 남기는 Zero Trust 모델을 운영합니다." },
            { type: "q", text: "어떤 분을 찾고 있나요?" },
            { type: "a", text: "게으른 사람이요. 귀찮은 걸 싫어해서 어떻게든 자동화하려는 사람, 문제가 생기면 땜질 처방이 아니라 근본 원인을 파헤치는 집요한 분을 기다립니다." }
        ],
        summary: ["반복 업무의 100% 자동화 추구", "트래픽 예측 및 유연한 대응 체계", "철통 같은 보안 마인드셋"]
    },
    {
        id: "9",
        name: "송아름",
        role: "Brand Designer",
        category: "design",
        title: "금융에 '색'을 입히는 일",
        lead: "AIO 카드는 왜 파란색일까요? 로고의 폰트는 왜 둥글까요? 사용자가 무의식중에 느끼는 AIO만의 'Aura'. 브랜드 디자이너가 말하는 시각적 언어의 힘에 대해 들어봤습니다.",
        date: "2026.01.18",
        readTime: "4분",
        quote: "좋은 브랜드는 설명하는 게 아니라, 느껴지는 것입니다.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
        tags: ["Brand", "Visual", "Identity"],
        relatedJobCategory: "design",
        content: [
            { type: "h", text: "일관성의 힘" },
            { type: "q", text: "브랜드 디자인에서 가장 신경 쓰는 부분은?" },
            { type: "a", text: "일관성(Consistency)입니다. 앱 아이콘, 광고 배너, 굿즈, 심지어 사원증까지 AIO라는 브랜드가 동일한 목소리를 내야 합니다. 사용자가 어디서 우리를 만나든 '아, 이건 AIO답다'고 느끼게 하는 게 목표죠." },
            { type: "q", text: "마케터와 충돌하진 않나요?" },
            { type: "a", text: "자주 싸우죠(웃음). 마케터는 '눈에 띄게 빨간색으로 해주세요'라고 하고, 저는 '우리 톤앤매너랑 안 맞아요'라고 하니까요. 그럴 땐 '우리의 페르소나라면 어떻게 말할까?'를 기준으로 조율합니다. 결국 브랜드 자산을 지키는 게 장기적으로 이득이니까요." },
            { type: "h", text: "오프라인 경험까지" },
            { type: "q", text: "가장 재미있었던 프로젝트는?" },
            { type: "a", text: "웰컴 키트 리뉴얼입니다. 입사자가 처음 받는 선물인 만큼, 박스를 여는 순간부터 설렘을 주고 싶었어요. 패키지 재질부터 문구 하나까지 신경 썼고, 받은 분들이 인스타에 올리는 걸 보며 뿌듯했죠." },
            { type: "q", text: "영감은 어디서 얻나요?" },
            { type: "a", text: "금융 앱은 안 봅니다. 오히려 호텔, 패션 브랜드, 갤러리에서 영감을 얻어요. '돈'이 아니라 '라이프스타일'을 다루는 서비스가 되고 싶으니까요." }
        ],
        summary: ["온/오프라인을 관통하는 브랜드 경험 설계", "마케팅 효율보다 브랜드 가치를 지키는 고집", "이종 산업에서 배우는 크리에이티브"]
    },
    {
        id: "10",
        name: "김민재",
        role: "Business Developer",
        category: "business",
        title: "세상에 없던 금융 상품을 팝니다",
        lead: "AIO가 기존 금융사와 손잡고 내놓은 파격적인 대출 상품들. 그 뒤에는 보수적인 은행을 설득하고 사용자에게 혜택을 가져오기 위해 발로 뛴 비즈니스 디벨로퍼의 땀이 있었습니다.",
        date: "2026.01.12",
        readTime: "5분",
        quote: "우리의 협상 테이블에는 항상 '고객'이 앉아 있습니다.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
        tags: ["BizDev", "Sales", "Strategy"],
        relatedJobCategory: "business",
        content: [
            { type: "h", text: "문을 여는 사람들" },
            { type: "q", text: "Business 팀은 무슨 일을 하나요?" },
            { type: "a", text: "AIO 혼자서는 할 수 없는 일들을 파트너와 함께 만들어냅니다. 카드사, 은행, 보험사를 찾아가 '우리 플랫폼에서 당신들의 상품을 팝시다'라고 제안하죠. 처음엔 문전박대를 당했지만, 지금은 그들이 먼저 찾아옵니다. 우리의 트래픽과 기술력을 증명했으니까요." },
            { type: "q", text: "협상의 비결이 있나요?" },
            { type: "a", text: "Win-Win 시나리오를 제시하는 겁니다. '수수료 좀 깎아주세요'라고 떼쓰는 게 아니라, '우리가 데이터 분석으로 타겟팅을 정교하게 해줄 테니, 마케팅 비용을 아껴서 금리를 낮추자'고 설득합니다. 논리가 완벽하면 거절할 수 없죠." },
            { type: "h", text: "숫자 너머의 가치" },
            { type: "q", text: "가장 기억에 남는 파트너십은?" },
            { type: "a", text: "청년 전용 대출 상품 런칭입니다. 신용 기록이 부족해 고금리를 쓰던 사회초년생들에게 1금융권 대출 기회를 열어줬을 때, 단순히 매출을 넘어 사회적 문제를 해결했다는 자부심을 느꼈습니다." },
            { type: "q", text: "어떤 동료를 원하시나요?" },
            { type: "a", text: "거절을 두려워하지 않는 분입니다. 10번 제안해서 9번 거절당해도, 마지막 1번의 'Yes'를 위해 다시 제안서를 쓰는 끈기가 필요합니다." }
        ],
        summary: ["불가능을 가능으로 만드는 제휴 전략", "데이터에 기반한 정교한 협상 스킬", "사회적 임팩트를 고려하는 비즈니스 마인드"]
    },
    {
        id: "11",
        name: "AIO Culture",
        role: "Team Culture",
        category: "culture",
        title: "우리는 왜 매주 금요일, 일을 멈출까?",
        lead: "AIO의 금요일 오후는 조금 특별합니다. 모든 기능 개발을 멈추고, 오직 '개선'과 '학습'을 위해 시간을 쓰는 'Refresh & Refactor Day'. 그 시간에 우리는 무엇을 할까요?",
        date: "2026.02.03",
        readTime: "4분",
        quote: "오늘의 급한 불을 끄느라 내일의 숲을 태우지 않습니다.",
        image: "https://images.unsplash.com/photo-1531498677079-05a3e1bff304?q=80&w=1000&auto=format&fit=crop",
        tags: ["Culture", "Productivity", "Growth"],
        relatedJobCategory: "all",
        content: [
            { type: "h", text: "속도보다 중요한 방향" },
            { type: "q", text: "바쁜 스타트업이 개발을 멈춘다는 게 가능한가요?" },
            { type: "a", text: "처음에는 다들 불안해했습니다. '배포할 게 산더미인데...' 하지만 강제적으로 멈추는 시간을 가지자, 놀라운 일이 벌어졌습니다. 평소라면 '나중에 고쳐야지' 하고 미뤄뒀던 기술 부채가 해결되고, 반복되는 비효율적인 업무가 자동화되기 시작했죠." },
            { type: "h", text: "무엇을 하나요?" },
            { type: "q", text: "구체적으로 어떤 활동을 하나요?" },
            { type: "a", text: "엔지니어는 레거시 코드를 리팩토링하고, 디자이너는 디자인 시스템의 위계를 정리합니다. 마케터는 지난 캠페인의 회고(Post-mortem)를 깊게 진행하죠. 누구의 간섭도 없이, 스스로 중요하다고 생각하는 '중요하지만 급하지 않은 일'에 몰입합니다." },
            { type: "q", text: "그 결과는?" },
            { type: "a", text: "아이러니하게도 전체 개발 속도가 빨라졌습니다. 매주 톱날을 가는 시간을 가지니, 나무를 베는 속도가 빨라진 셈이죠." }
        ],
        summary: ["장기적인 성장을 위한 의도적인 멈춤", "기술 부채와 운영 부채의 주기적 청산", "자율적인 문제 해결 문화"]
    },
    {
        id: "12",
        name: "AIO Culture",
        role: "Work Rules",
        category: "culture",
        title: "회의는 30분, 기록은 영원히",
        lead: "AIO에는 회의실 예약 전쟁이 없습니다. 대부분의 논의는 문서로 이루어지고, 꼭 필요한 대화만 만나서 하기 때문이죠. AIO가 아마존의 '6-page memo' 문화를 우리만의 방식으로 재해석한 이야기.",
        date: "2026.01.29",
        readTime: "5분",
        quote: "가장 훌륭한 회의는 열리지 않은 회의입니다.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
        tags: ["Async", "Documentation", "Efficiency"],
        relatedJobCategory: "all",
        content: [
            { type: "h", text: "말보다 글" },
            { type: "q", text: "왜 문서를 강조하나요?" },
            { type: "a", text: "말은 휘발되지만 글은 남으니까요. 말로 회의하면 목소리 큰 사람의 의견이 채택되기 쉽습니다. 하지만 글로 쓰면 논리의 허점이 보입니다. 우리는 회의 전에 반드시 1페이지 내외의 'Discussion Doc'을 작성하고, 참석자들은 그걸 미리 읽고 댓글로 의견을 남깁니다." },
            { type: "q", text: "그러면 만나서 뭘 하나요?" },
            { type: "a", text: "만나서는 '결정'만 합니다. 정보 공유나 브레인스토밍은 이미 온라인에서 끝났으니까요. 덕분에 1시간 걸리던 회의가 15분이면 끝납니다." },
            { type: "h", text: "투명한 정보 공유" },
            { type: "q", text: "정보 공유의 범위는 어디까지인가요?" },
            { type: "a", text: "개인적인 연봉 정보를 제외한 모든 문서가 전사에 공개됩니다. 신입사원도 CEO가 쓴 전략 기획서를 볼 수 있고, 댓글을 달아 질문할 수 있습니다. 정보가 투명해야 자율적인 의사결정이 가능하다고 믿기 때문입니다." }
        ],
        summary: ["구두 보고 없는 철저한 문서 기반 커뮤니케이션", "정보의 비대칭을 없애는 투명한 공유", "회의 시간 최소화를 통한 몰입 시간 확보"]
    },
    {
        id: "13",
        name: "AIO Culture",
        role: "Core Value",
        category: "culture",
        title: "실패를 축하하는 파티를 엽니다",
        lead: "AIO에서는 프로젝트가 망하면 케이크를 자릅니다. 왜냐고요? 시도하지 않아서 얻은 성공보다, 도전해서 얻은 실패가 더 가치 있다고 믿기 때문입니다. 우리의 'Fuck-up Night' 문화를 소개합니다.",
        date: "2026.01.22",
        readTime: "4분",
        quote: "우리는 실패하지 않았습니다. 안 되는 방법 100가지를 찾았을 뿐입니다.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
        tags: ["Failure", "Challenge", "Psychological Safety"],
        relatedJobCategory: "all",
        content: [
            { type: "h", text: "비난 대신 회고" },
            { type: "q", text: "실패하면 문책하지 않나요?" },
            { type: "a", text: "전혀요. 사람이 아니라 시스템을 탓합니다. '왜 실수했어?'가 아니라 '어떤 프로세스가 있었으면 이 실수를 막을 수 있었을까?'를 묻습니다. 실수를 솔직하게 드러내야 개선할 수 있으니까요." },
            { type: "h", text: "도전의 증거" },
            { type: "q", text: "실패 파티(Fuck-up Night)는 어떤 분위기인가요?" },
            { type: "a", text: "축제 같습니다. 각자 자신이 저지른 거한 삽질(?)을 발표하고, 동료들은 박수와 환호를 보냅니다. '서버를 30분 다운시켰습니다!'라고 고백하면, '덕분에 모니터링 시스템을 고쳤네!'라고 칭찬해주는 식이죠." },
            { type: "q", text: "이 문화가 가져온 변화는?" },
            { type: "a", text: "모두가 더 대담해졌습니다. 실패에 대한 두려움이 사라지니, 남들이 안 된다고 하는 미친 아이디어들이 쏟아져 나옵니다. AIO의 혁신적인 기능들은 대부분 그런 '미친 시도'에서 시작되었습니다." }
        ],
        summary: ["심리적 안전감(Psychological Safety) 구축", "실패 비용을 학습 비용으로 전환", "대담한 도전을 장려하는 안전장치"]
    }
];

export const CULTURE: CultureItem[] = [
    {
        id: "1",
        title: "자율과 책임의 리모트 워크",
        category: "all",
        image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1000&auto=format&fit=crop",
        desc: "어디서 일하느냐보다 어떤 결과를 내느냐가 중요합니다."
    },
    {
        id: "2",
        title: "1년에 두 번, 전사 워크샵",
        category: "all",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
        desc: "업무를 떠나 서로의 인간적인 면을 알아가는 시간입니다."
    },
    {
        id: "3",
        title: "무제한 도서/교육비 지원",
        category: "all",
        image: "https://images.unsplash.com/photo-1513475303680-154329542e59?q=80&w=1000&auto=format&fit=crop",
        desc: "성장에 필요한 비용은 회사가 전액 투자합니다."
    }
];

export const CATEGORY_INFO: Record<string, { title: string; desc: string }> = {
    dev: { title: "개발", desc: "금융의 미래를 움직이는 엔진을 만듭니다." },
    design: { title: "디자인", desc: "복잡한 숫자를 가장 직관적인 경험으로 바꿉니다." },
    marketing: { title: "마케팅", desc: "AIO의 가치를 세상에 가장 효과적으로 전달합니다." },
    business: { title: "비즈니스", desc: "지속 가능한 성장을 위한 전략을 그립니다." },
    hr: { title: "HR", desc: "최고의 동료들이 몰입할 수 있는 환경을 만듭니다." },
    culture: { title: "문화", desc: "자율과 책임, 그리고 성장을 지향하는 AIO의 일하는 방식입니다." },
};

// Helper to get job by ID
export function getJobById(id: string): Job | undefined {
    return JOBS.find(j => j.id === id);
}

export function getStoryById(id: string): Story | undefined {
    return STORIES.find(s => s.id === id);
}
