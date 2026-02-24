import type { DualExpertiseItem, NavItem, Project, Skill, StoryChapter } from './types';

export const BRAND_COLORS = {
  cyan: '#00f3ff',
  orange: '#FF3D00',
  purple: '#7e22ce',
  dark: '#050505',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'DNA', href: '#story' },
  { label: 'ARSENAL', href: '#expertise' },
  { label: 'IMPACT', href: '#projects' },
  { label: 'MODELS', href: '#services' },
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 1,
    subtitle: 'THE MUD',
    title: 'Born Into Efficiency',
    description: "Born in rural Bangladesh — no electricity, cycled 6 miles through monsoon mud to school daily. No CS degree. No shortcuts. Just an Operator mindset forged in survival: every wasted second costs something. 11 years in F&B operations across KL's most demanding environments. P&L accountability for $1M+ venues. I didn't just learn business — I lived it at ground level.",
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1600',
    color: 'orange',
    rotation: '-2deg'
  },
  {
    id: 2,
    subtitle: 'THE MIRACLE',
    title: 'AI Saved My Mother',
    description: "2023. Doctors gave my mother 3 days to live — terminal cancer. I fed her medical records into AI systems and found a treatment pathway the doctors had missed. I liquidated 170x crypto gains to fund robotic Whipple surgery abroad. Today she is 100% cancer-free. Zero chemotherapy. That moment didn't just change my life — it proved that AI solves impossible problems. That's why every line of code I write matters.",
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600',
    color: 'cyan',
    rotation: '2deg'
  },
  {
    id: 3,
    subtitle: 'THE REBIRTH',
    title: 'Solo Founder. Autonomous Empire.',
    description: "That moment built W3J LLC. Transitioned from F&B ops to elite AI engineering. 16 production systems shipped solo. 15,000+ daily active users. $3M+ enterprise cost avoidance. 400% dev velocity via autonomous agent orchestration. Running a 16-hour work week through AI-powered systems. Mantra: Automation is the only way to scale the underdog.",
    image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1600',
    color: 'purple',
    rotation: '-1deg'
  }
];

export const DUAL_EXPERTISE: DualExpertiseItem[] = [
  {
    title: 'Operator DNA',
    description: '11 years on the floor mastering F&B operations, P&L management, and high-pressure environments. I build systems for problems I have personally lived — not theoretical demos.',
    icon: 'restaurant',
    color: 'orange',
    features: ['P&L Management', 'Workflow Optimization', 'Cost Control', 'Crisis Management']
  },
  {
    title: 'AI Architect',
    description: 'Self-taught mastery from zero CS background to enterprise AI engineering. TRACE Framework, 9-agent dev systems, RAG pipelines, and autonomous deployment loops.',
    icon: 'terminal',
    color: 'cyan',
    features: ['Agentic Systems', 'RAG & Vector DBs', 'Full-Stack SaaS', 'Cloud DevOps']
  }
];

export const EXPERTISE_SKILLS: Skill[] = [
  {
    id: 'ai-arch',
    title: 'AI Agent Architecture',
    description: 'Designing autonomous multi-agent systems using the proprietary TRACE Framework. 9-agent dev orchestration running at 400% industry velocity.',
    icon: 'psychology',
    color: 'cyan',
    tags: ['TRACE Framework', 'OpenClaw', 'LangChain', 'CrewAI']
  },
  {
    id: 'gen-ai',
    title: 'Conversational & WhatsApp AI',
    description: 'Production WhatsApp Business SaaS with Manglish cultural intelligence. GOWA Bridge v8.1.2 powering 15,000+ daily users.',
    icon: 'record_voice_over',
    color: 'purple',
    tags: ['Bijou AI', 'GOWA Bridge', 'Gemini 2.5', 'ElevenLabs']
  },
  {
    id: 'fullstack',
    title: 'Modern Full Stack',
    description: 'High-performance SaaS platforms — React 19, Next.js, FastAPI, TypeScript. 40k+ LOC production systems with enterprise-grade testing.',
    icon: 'layers',
    color: 'orange',
    tags: ['Next.js', 'FastAPI', 'React 19', 'TypeScript']
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure across GCP, Azure, Fly.io, Vercel, Cloudflare. Docker, Kubernetes, GitHub Actions CI/CD pipelines.',
    icon: 'cloud',
    color: 'green',
    tags: ['GCP', 'Azure', 'Kubernetes', 'Fly.io']
  },
  {
    id: 'rag',
    title: 'RAG & Vector Systems',
    description: 'Enterprise retrieval-augmented generation pipelines. 5TB+ monthly data processed. pgvector, Supabase, MongoDB at scale.',
    icon: 'account_tree',
    color: 'cyan',
    tags: ['RAG', 'pgvector', 'Supabase', 'MongoDB']
  },
  {
    id: 'web3',
    title: 'DeFi & Web3',
    description: 'Human-centered DeFi tools for unbanked SEA+MENA. Solana tokens, 3,500+ on-chain txns. 170x crypto gains via Arbitrum arbitrage.',
    icon: 'token',
    color: 'purple',
    tags: ['Solana', 'DeFi', 'Arbitrum', 'Smart Contracts']
  }
];

export const TECH_STACK = [
  { name: 'Python', color: '#3776AB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'TypeScript', color: '#3178C6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'React', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', color: '#FFFFFF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'FastAPI', color: '#009688', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
  { name: 'Node.js', color: '#339933', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', color: '#4169E1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', color: '#2496ED', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Google Cloud', color: '#4285F4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Tailwind', color: '#06B6D4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
];

export const PROJECTS: Project[] = [
  {
    id: 'bijou-ai',
    title: 'BIJOU AI',
    metric: '15K+',
    metricLabel: 'Daily Users',
    metricColor: 'cyan',
    description: 'WhatsApp Business SaaS v3.0.0 — AI digital employee with Manglish cultural intelligence, TRACE Framework (4-agent pipeline), magic link auth, Stripe + FPX + DuitNow payments. 40k+ LOC, 108/110 tests passing. Production live.',
    tags: ['FastAPI', 'Supabase', 'GOWA Bridge', 'TRACE'],
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1200',
    liveLink: 'https://mybijou.xyz',
    repoLink: '#'
  },
  {
    id: 'punch-clock',
    title: 'PUNCHCLOCK',
    metric: '95%',
    metricLabel: 'Time Saved',
    metricColor: 'orange',
    description: 'LHDN 2025-compliant HR OS v2.5 serving 15,000+ daily active users. Biometric attendance via face-api.js, automated EPF/SOCSO payroll, React 19 + Gemini Flash. Reduced payroll from 40hrs → 2hrs/month.',
    tags: ['React 19', 'Gemini Flash', 'face-api.js', 'LHDN 2025'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: 'https://github.com/W3JDev/punchclock-demo'
  },
  {
    id: 'suarakira',
    title: 'SUARAKIRA',
    metric: '90+',
    metricLabel: 'Lighthouse Score',
    metricColor: 'green',
    description: 'Voice-to-ledger PWA for Malaysian hawkers. Manglish + 5 languages, Gemini 2.5 AI, $0 running cost, MIT open source. React + Vite + Supabase. Cursor Hackathon winner. Ready for Product Hunt.',
    tags: ['PWA', 'Gemini 2.5', 'Manglish', 'Voice AI'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: 'https://github.com/W3JDev/SuaraKira'
  },
  {
    id: 'artisan-ai',
    title: 'ARTISANAI',
    metric: '85%',
    metricLabel: 'ATS Pass Rate',
    metricColor: 'purple',
    description: 'AI resume builder with 85% ATS pass rate. 500+ resumes generated. STAR method optimization, Gemini AI, one-pager format. Serving job seekers across SEA markets.',
    tags: ['Next.js', 'Gemini', 'ATS', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: 'https://github.com/W3JDev/ArtisanAi.v2-ATS-friendly-one-pager-resume-builder-demo'
  },
  {
    id: 'interviewos',
    title: 'INTERVIEWOS',
    metric: '3x',
    metricLabel: 'Interview Rate',
    metricColor: 'cyan',
    description: 'STAR method AI interview coach. Real-time feedback, Stripe $19-39/mo live, React + Supabase + Gemini. Trains candidates on behavioral questions with structured AI analysis.',
    tags: ['React', 'Supabase', 'Gemini', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: '#'
  },
  {
    id: 'flair-ai',
    title: 'FLAIR AI',
    metric: '605%',
    metricLabel: 'Training Coverage',
    metricColor: 'orange',
    description: 'AI training co-pilot for 200+ Malaysian restaurants. 40% reduction in new-hire training time, 605% increase in scenario coverage. Multilingual voice AI with real-time feedback. GCP production.',
    tags: ['React', 'TypeScript', 'GCP', 'Voice AI'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    caseStudyLink: '#',
    caseStudyContent: {
      challenge: "High staff turnover in hospitality creates a perpetual training bottleneck. Managers spend 40% of their time retraining on basic SOPs, menu knowledge, and conflict resolution.",
      solution: "Built FlairAI — voice-activated training simulator using Gemini 2.5 for dynamic scenarios and ElevenLabs for realistic voice. New hires practice verbal interactions in real-time across 4 languages.",
      results: ["40% reduction in management training hours", "605% increase in training scenario coverage", "Deployed across 200+ Malaysian restaurants"],
      techDeepDive: "React + TypeScript frontend on GCP. Real-time multilingual voice AI. Vector database for SOP RAG accuracy checks."
    },
    repoLink: 'https://github.com/W3JDev/FlairAi'
  },
  {
    id: 'vine-ai',
    title: 'VINE AI',
    metric: '300%',
    metricLabel: 'ROI',
    metricColor: 'purple',
    description: 'AI wine sommelier serving 50 restaurants. 300% ROI, +35% average ticket size via semantic wine pairing recommendations. Python + OpenAI + LangChain vector search. Production consulting revenue.',
    tags: ['Python', 'LangChain', 'OpenAI', 'Vector DB'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    caseStudyContent: {
      challenge: "Waitstaff lack deep oenological knowledge to confidently sell premium wines, resulting in missed revenue and dependency on a single sommelier.",
      solution: "Vector Search recommendation engine — staff input guest preferences, system retrieves perfect bottle with tasting notes and upsell scripts from full inventory.",
      results: ["300% ROI within 3 months", "+35% Average Order Value for wine", "Zero dependency on head sommelier for floor recommendations", "Deployed across 50 restaurants"],
      techDeepDive: "Vector DB for semantic search. Python + LangChain for query parsing. OpenAI embeddings on full wine inventory."
    },
    repoLink: '#',
    caseStudyLink: '#'
  },
  {
    id: 'gitlaunch-ai',
    title: 'GITLAUNCH AI',
    metric: '60s',
    metricLabel: 'Repo → Landing Page',
    metricColor: 'green',
    description: 'AI-powered landing page generator. Analyzes any GitHub repo and generates a high-converting landing page in 60 seconds. Stripe $9/mo SaaS wrapper in progress.',
    tags: ['React', 'GitHub API', 'Gemini', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: 'https://github.com/W3JDev/GitLaunch-AI-demo'
  },
  {
    id: 'menumuze',
    title: 'MENUMUZE',
    metric: '6',
    metricLabel: 'MCP Agents',
    metricColor: 'cyan',
    description: 'Luxury restaurant AaaS platform. 6 MCP agents, voice-first ordering, React + Express + Gemini 2.5 + PostgreSQL + Firestore. Premium dining intelligence layer.',
    tags: ['MCP', 'Gemini 2.5', 'Voice AI', 'Express'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: 'https://github.com/W3JDev/MenuMuze_The_WaiterAi-demo'
  },
  {
    id: 'whatsorder',
    title: 'WHATSORDER MY',
    metric: '5-tier',
    metricLabel: 'RBAC System',
    metricColor: 'orange',
    description: 'WhatsApp AI ordering platform for Malaysian F&B. 5-tier RBAC, 4 languages including Manglish, React + Supabase + Bijou/GOWA Bridge integration.',
    tags: ['WhatsApp', 'Supabase', 'RBAC', 'Manglish'],
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: '#'
  },
];

export const SERVICES = [
  {
    title: 'Bijou AI — Digital Employee',
    price: 'RM159–299/mo',
    description: 'Your AI-powered WhatsApp business assistant. Handles customer queries, qualifies leads, books appointments, and follows up — 24/7, in Manglish or English.',
    features: ['WhatsApp Business API', 'TRACE AI Brain', 'Stripe + FPX + DuitNow', 'Custom Knowledge Base'],
    icon: 'smart_toy',
    color: 'cyan'
  },
  {
    title: 'F&B AI Transformation',
    price: 'RM3,500–5,000',
    description: 'Sprint packages for F&B operators. Deploy AI training, ordering, and analytics systems that deliver measurable ROI. Built by someone who ran the floor.',
    features: ['Ops Audit', 'Custom AI Build', 'Staff Training', 'ROI Guarantee'],
    icon: 'restaurant',
    color: 'orange'
  },
  {
    title: 'Enterprise AI Engineering',
    price: 'Custom',
    description: 'Full-stack AI systems for enterprise. RAG pipelines, autonomous agent frameworks, cloud DevOps. $3M+ cost avoidance delivered for Fortune 500 clients.',
    features: ['Agent Architecture', 'RAG Systems', 'K8s Deployment', 'Azure / GCP'],
    icon: 'code',
    color: 'purple'
  }
];

export const TESTIMONIALS = [
  {
    name: "Enterprise Impact",
    role: "$3M+ Cost Avoidance",
    quote: "Azure OpenAI + Kubernetes deployment reduced review cycle time by 75% and processed 5TB+ monthly data for a global logistics leader. Completed Dec 2025.",
  },
  {
    name: "HR Automation",
    role: "15,000+ Daily Users",
    quote: "PUNCHCLOCK reduced payroll processing from 40 hours to 2 hours per month with 97% biometric accuracy. LHDN 2025 compliant. Live in production.",
  },
  {
    name: "Revenue Generation",
    role: "300% ROI Delivered",
    quote: "VineAI boosted premium wine sales by 35% average order value across 50 restaurants. 300% return on investment within 3 months of deployment.",
  }
];

export const CLIENTS = [
  { name: 'CMA CGM', logo: 'https://placehold.co/180x60/050505/00f3ff/png?text=CMA+CGM' },
  { name: 'Neurones IT', logo: 'https://placehold.co/180x60/050505/00f3ff/png?text=NEURONES+IT' },
  { name: 'Muze Cafe', logo: 'https://placehold.co/180x60/050505/FF3D00/png?text=MUZE+CAFE' },
  { name: 'W3J LLC', logo: 'https://placehold.co/180x60/050505/7e22ce/png?text=W3J+LLC' },
  { name: 'Flair Network', logo: 'https://placehold.co/180x60/050505/FF3D00/png?text=FLAIR+200%2B' },
  { name: 'Bijou AI', logo: 'https://placehold.co/180x60/050505/00f3ff/png?text=BIJOU+AI' }
];

export const FAQS = [
  {
    q: "What is the TRACE Framework?",
    a: "TRACE is my proprietary AI pipeline — 4 agents working in sequence: Affective State Identifier, Cultural Adaptation Engine, Semantic Reasoning & Precision, and Empathetic Response Synthesizer. It's what makes Bijou AI feel human, not robotic."
  },
  {
    q: "What makes you different from other AI developers?",
    a: "11 years on the F&B floor before writing a single line of production code. I build for problems I've personally bled through — payroll nightmares, training chaos, revenue leaks. Every system has operational DNA baked in."
  },
  {
    q: "Do you only work with F&B?",
    a: "No. F&B is my origin, but the systems I build serve HR tech, fintech, enterprise AI, DeFi, and SaaS. If it's a high-pressure, human-facing problem — I'm your architect."
  },
  {
    q: "How do you handle data privacy?",
    a: "Privacy by design. Your data never trains public models. I use private RAG pipelines, LDAP/OAuth2 secured systems, and NDA-protected deployments. Enterprise-grade from day one."
  },
  {
    q: "Can I try Bijou AI?",
    a: "Yes. Live at app.mybijou.xyz. Starter plan RM159/mo, Pro RM299/mo. FPX, DuitNow QR, Google Pay, and international cards accepted."
  }
];

export const HOBBIES = [
  { icon: 'coffee', label: 'Cafe Hopping', color: 'text-yellow-400' },
  { icon: 'flight', label: 'Traveling', color: 'text-blue-400' },
  { icon: 'headphones', label: 'Focus & EDM', color: 'text-purple-400' },
  { icon: 'movie', label: 'Anime', color: 'text-orange-500' },
];
