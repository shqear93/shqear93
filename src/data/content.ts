export const profile = {
  name: 'Khaled AbuShqear',
  title: 'Platform & AI Infrastructure Engineer',
  location: 'Amman, Jordan',
  email: 'qmax93@gmail.com',
  github: 'https://github.com/shqear93',
  linkedin: 'https://linkedin.com/in/khaled-abushqear',
  stackoverflow: 'https://stackoverflow.com/users/2073339/shqear',
  resumeSre: 'https://resume.ai.shqear.online/shqear/khaled-abushqear-sre',
  resumeMain: 'https://resume.ai.shqear.online/shqear/khaled-abushqear-main',
};

export const heroStats = [
  { value: '8M+', label: 'daily rides & payments served' },
  { value: '99.5%', label: 'API uptime restored from daily crashes' },
  { value: '30+', label: 'AI agents in daily use by 300+ engineers' },
  { value: '500K/s', label: 'messages streamed through Kafka' },
];

export const bio = `I build and operate systems that survive scale, failures, and real production
pressure. I started in health tech, writing patient-facing platforms and API
layers for hospitals and clinics — then moved through DevOps, site
reliability, platform engineering, and most recently AI infrastructure. My
work spans Rails monoliths, Kubernetes and Kafka at scale, and LLM agent
platforms used by hundreds of engineers every day.

I lead by building: reducing friction, improving reliability, and helping
teams ship faster with less operational noise. I care about infrastructure
that is simple, observable, and boring in production — and lately, about
making AI infrastructure actually useful instead of just demo-ware.`;

export type ExperienceRole = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceRole[] = [
  {
    role: 'Senior Platform & AI Infrastructure Engineer',
    company: 'Careem — Everything App',
    companyUrl: 'https://careem.com',
    period: 'Feb 2023 — Present',
    bullets: [
      'Designed the data layer for 30+ TB of RDS/Redis powering 8M+ daily rides/payments, cutting p99 latency 22% and CPU 18% through query optimization and JIT access patterns.',
      'Architected multi-tenant Strimzi Kafka clusters handling 500K+ messages/sec; built a zero-downtime CDC migration (Kafka Connect + custom Debezium adapter) streaming MySQL into ClickHouse, replacing RDS read replicas and saving 50% of their cost.',
      'Built the DevX Agent (GPT-4 + RAG), cutting deployment fix time from hours to minutes and automating 50% of support requests. Owns technical strategy for the Careem CLI and Gopher, an internal Go module proxy with S3-backed caching that cut transit costs 60%.',
      'Rolled out ArgoCD, Argo Rollouts and Flagger for progressive delivery, integrated Backstage, and defined SRE/SLOs for the DevX platform. Contributed KServe, PydanticAI and LangSmith to Careem’s internal AI platform, now powering 30+ agents for 300+ employees.',
    ],
  },
  {
    role: 'Technical Lead',
    company: 'Careem — Everything App',
    companyUrl: 'https://careem.com',
    period: 'Oct 2021 — Feb 2023',
    bullets: [
      'Led a 5-person remote team while staying hands-on. Inherited a platform with daily crashes, stabilized it and restored API reliability to 99.5%, and mentored 3 junior engineers to mid-level within 18 months.',
      'Shipped a full Stripe integration for corporate billing in 5 days, and OneSignal push notifications spanning customers, restaurants, and drivers.',
      'Established engineering rituals that cut sprint spillover from 70% to 10%, and shipped batching pipeline improvements supporting 600+ restaurant partners across NYC and the Bay Area.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Club Feast — Corporate Lunch & Catering',
    companyUrl: 'https://clubfeast.com',
    period: 'Jan 2021 — Oct 2021',
    bullets: [
      'Refactored core order and inventory modules of a 6-year-old Rails monolith, cutting production bugs 90%, and reworked pre-order batching to cut processing errors 60% during peak rushes.',
      'Migrated production from Heroku to AWS ECS (−20% infra cost), and introduced scrum and mandatory code review, catching 80% of issues before deployment.',
    ],
  },
  {
    role: 'Senior Site Reliability Engineer',
    company: 'ZenHR Solutions — HR & Payroll for MENA',
    companyUrl: 'https://zenhr.com',
    period: 'Jan 2020 — Jan 2021',
    bullets: [
      'Provisioned and ran cloud infrastructure for Darsak.gov.jo, the Jordanian Ministry of Education’s remote-learning platform, alongside several other government services.',
      'Built modular IaC pipelines with AWS CloudFormation and CodePipeline, cutting environment setup time 60%, while enforcing security, compliance and data-sovereignty requirements across government contracts.',
    ],
  },
  {
    role: 'DevOps Engineer | Software Engineer',
    company: 'Mawdoo3 — Arabic Content Platform',
    companyUrl: 'https://mawdoo3.com',
    period: 'Apr 2019 — Jan 2020',
    bullets: [
      'Dockerized the test suite and tooling, then optimized parallel execution, cutting CI runtime from over an hour to 20–30 minutes, and migrated the pipeline from Semaphore to Drone.io.',
      'Supported the move from DigitalOcean to AWS, added a CDN for static assets, and improved monitoring/alerting, cutting infrastructure incidents 50% during rapid early-stage growth.',
    ],
  },
  {
    role: 'Software Engineer | DevOps',
    company: 'Nabed — Health Education Platform',
    companyUrl: 'https://nabed.net',
    period: 'Oct 2015 — Apr 2019',
    bullets: [
      'Built NabedCare on Yii2, a patient-facing platform integrating health systems and wearables, and the Zend Framework API layer supporting integrations with hospitals and clinics region-wide.',
      'Helped containerize the stack with Docker, supported a RabbitMQ-based microservices architecture, and built a fully automated GitLab CI/CD pipeline — cutting release time from hours to minutes and enabling 3 deploys a week instead of monthly.',
    ],
  },
];

export type Project = {
  name: string;
  period: string;
  tagline: string;
  problem: string;
  architecture: string;
  role: string;
  outcome: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: 'Athar EMS',
    period: '2024 — 2026',
    tagline: 'Integrated case-management platform for a Jordanian NGO serving refugees and GBV survivors.',
    problem:
      'Athar Association needed one system to manage mental-health casework, HR/payroll, and procurement across multiple partner organizations — replacing fragmented spreadsheets with a UN GBVIMS-compliant, bilingual (Arabic/English) platform.',
    architecture:
      'Four independent Rails services behind a shared gRPC layer: AtharCore (auth, permissions, sessions), AtharCM (mental-health case management with LiveKit/WebRTC telehealth and GBV & child-protection forms), AtharPeople (HRMS with biometric attendance via ZKTeco SDK and Jordanian payroll law), and AtharProcure (multi-level procurement approvals). Next.js frontend with full RTL i18n, deployed on Contabo VPS via Docker Compose, Traefik and Ansible.',
    role: 'Architected and built the full system end-to-end, from service boundaries to production deployment and hardware integration.',
    outcome: 'Live in production across 6 partner organizations, handling sensitive casework and telehealth for a vulnerable population.',
    stack: ['Ruby on Rails', 'Next.js', 'PostgreSQL', 'gRPC', 'LiveKit/WebRTC', 'Docker', 'Traefik', 'Ansible', 'ZKTeco SDK'],
  },
  {
    name: 'Beacon — TrekMedics',
    period: '2022 — 2023',
    tagline: 'HIPAA/SOC2-certified emergency dispatch platform used across 20+ countries.',
    problem:
      'Emergency responders in low-infrastructure regions needed a dispatch system that works on any phone, with or without internet — for EMS, mental-health crisis, and disaster response.',
    architecture:
      'Real-time WebSocket dispatch backed by multi-carrier SMS routing so the system degrades gracefully without data connectivity, with New Relic observability across the stack.',
    role: 'Improved real-time dispatch reliability, SMS routing across carriers, and observability as the platform scaled.',
    outcome: 'Contributed to 9x incident growth and 6x device scale, helping achieve a 35% reduction in urban response times across 65,000+ emergencies/year.',
    stack: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'WebSocket', 'Twilio', 'New Relic', 'AWS'],
  },
  {
    name: 'Careem Platform & AI Infra',
    period: '2023 — Present',
    tagline: 'Internal developer platform: CLI, module proxy, and AI agents used by hundreds of engineers daily.',
    problem:
      'Careem’s engineers needed a single entry point across a large, fragmented internal stack — faster deploy troubleshooting, less manual DBA work, and safer, faster module management.',
    architecture:
      'Careem CLI: a modular plugin architecture where domain teams own their own command namespaces, with AI-assisted suggestions built in. Gopher: an S3-backed internal Go module proxy. DevX Agent: GPT-4 + RAG over internal docs and runbooks, wired into Slack.',
    role: 'Owns technical strategy and hands-on development across the CLI, Gopher, and the DevX Agent.',
    outcome: 'DevX Agent automates 50% of support requests and cuts fix time from hours to minutes; Gopher cut module transit costs 60%; 30+ AI agents now used daily by 300+ employees.',
    stack: ['Go', 'Kubernetes', 'Kafka/Strimzi', 'GPT-4', 'RAG', 'PydanticAI', 'KServe', 'ArgoCD'],
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: 'languages', items: ['Go', 'Python', 'Ruby', 'TypeScript', 'PHP', 'Java'] },
  {
    category: 'infrastructure',
    items: ['AWS', 'Kubernetes', 'EKS', 'KEDA', 'Istio', 'Terraform', 'Docker', 'Ansible', 'Helm', 'Traefik'],
  },
  {
    category: 'ai_and_agents',
    items: ['LangChain', 'PydanticAI', 'AWS Bedrock', 'LangSmith', 'Langfuse', 'KServe', 'Hugging Face', 'RAG'],
  },
  {
    category: 'data_and_messaging',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'ClickHouse', 'MongoDB', 'Kafka', 'Kafka Connect', 'RabbitMQ', 'Debezium'],
  },
  {
    category: 'observability',
    items: ['Prometheus', 'Grafana', 'OpenTelemetry', 'New Relic', 'SLOs', 'Error Budgets'],
  },
  {
    category: 'ci_cd_and_delivery',
    items: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Argo Rollouts', 'Flagger', 'SonarQube'],
  },
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Professional', year: '2024', issuer: 'AWS' },
  { name: 'AWS Certified Solutions Architect – Associate', year: '2023', issuer: 'AWS' },
  { name: 'AWS Certified Cloud Practitioner', year: '2023', issuer: 'AWS' },
  { name: 'Oracle Certified Professional (OCP)', year: '2015', issuer: 'SDK Training Center' },
  { name: 'Oracle Database Administrator (DBA)', year: '2015', issuer: 'SDK Training Center' },
  { name: 'Oracle Certified Associate (OCA)', year: '2015', issuer: 'SDK Training Center' },
];

export const awards = [
  { name: 'Top GitHub Active User in Jordan', year: '2022', note: 'GitHub community ranking' },
];
