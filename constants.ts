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
    subtitle: 'THE FOUNDATION',
    title: 'Operational DNA',
    description: "My journey began with 10,000+ hours on the floor of Kuala Lumpur's finest F&B establishments. I learned that in high-pressure environments, a system that isn't intuitive is a system that fails. Efficiency isn't a metric; it's survival.",
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1600',
    color: 'cyan',
    rotation: '-2deg'
  },
  {
    id: 2,
    subtitle: 'THE PIVOT',
    title: 'The Crisis',
    description: "Faced with critical operational bottlenecks, I didn't hire a consultant—I became the engineer. I taught myself Python and AI to solve specific, ground-level business challenges, transforming champagne problems into prosecco-budget fixes.",
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600',
    color: 'orange',
    rotation: '2deg'
  },
  {
    id: 3,
    subtitle: 'CURRENT STATE',
    title: 'Enterprise Architect',
    description: "Now at Neurones IT Asia, I bridge the gap between culinary craft and cutting-edge tech. I build full-stack AI solutions that respect the human element while relentlessly automating the robotic one.",
    image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1600',
    color: 'purple',
    rotation: '-1deg'
  }
];

export const DUAL_EXPERTISE: DualExpertiseItem[] = [
  {
    title: 'Operational DNA',
    description: '10,000+ hours on the floor mastering the realities of service. I understand Guest Psychology, POS Systems, and High-Pressure environments better than any pure technologist.',
    icon: 'restaurant',
    color: 'orange',
    features: ['Guest Psychology', 'Workflow Optimization', 'Cost Control', 'Crisis Management']
  },
  {
    title: 'Tech Fluency',
    description: 'Self-taught mastery of the tools to build practical, effective solutions. From Conversational AI (Gemini/GPT-4) to scalable Cloud DevOps on GCP.',
    icon: 'terminal',
    color: 'cyan',
    features: ['Full-Stack AI', 'NLP & LLMs', 'Business Automation', 'Modern Frontend']
  }
];

export const EXPERTISE_SKILLS: Skill[] = [
  {
    id: 'ai-arch',
    title: 'AI Agent Architecture',
    description: 'Designing autonomous agents that handle complex workflows using CrewAI & LangChain.',
    icon: 'psychology',
    color: 'cyan',
    tags: ['Python', 'CrewAI', 'LangChain', 'n8n']
  },
  {
    id: 'gen-ai',
    title: 'Conversational AI',
    description: 'Engineering natural voice and text interactions for high-touch service industries.',
    icon: 'record_voice_over',
    color: 'purple',
    tags: ['Gemini 1.5', 'OpenAI Realtime', 'ElevenLabs', 'WebSockets']
  },
  {
    id: 'fullstack',
    title: 'Modern Full Stack',
    description: 'High-performance applications built with React, Next.js, and TypeScript.',
    icon: 'layers',
    color: 'orange',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript']
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure deployment and database management.',
    icon: 'cloud',
    color: 'green',
    tags: ['GCP', 'Docker', 'Firebase', 'Supabase']
  },
  {
    id: 'ops',
    title: 'Business Logic',
    description: 'Translating complex operational needs into clean, maintainable code.',
    icon: 'account_tree',
    color: 'orange',
    tags: ['System Design', 'Process Audit', 'Training Modules']
  },
  {
    id: 'web3',
    title: 'Web3 & Identity',
    description: 'Exploring the future of digital ownership and decentralized experiences.',
    icon: 'token',
    color: 'cyan',
    tags: ['Smart Contracts', 'Wallet Integration', 'Token Gate']
  }
];

export const TECH_STACK = [
  'Python', 'CrewAI', 'Gemini', 'LangChain', 'TypeScript', 'React', 'Next.js', 'n8n', 'Supabase', 'Docker', 'GCP', 'OpenAI', 'PostgreSQL', 'Tailwind', 'Three.js'
];

export const PROJECTS: Project[] = [
  {
    id: 'punch-clock',
    title: 'PUNCH-CLOCK',
    metric: '95%',
    metricLabel: 'Time Saved',
    metricColor: 'cyan',
    description: 'Automated HR & Payroll System. Slashed processing time from 40 hours/month to just 2 hours with 97% data accuracy using Node.js and Google APIs.',
    tags: ['Node.js', 'Google Workspace', 'Automation'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: '#'
  },
  {
    id: 'flair-ai',
    title: 'FlairAI',
    metric: '605%',
    metricLabel: 'Coverage',
    metricColor: 'orange',
    description: 'The AI Training Co-Pilot. Achieved 40% reduction in new-hire training time and a 605% increase in scenario coverage via multilingual voice AI.',
    tags: ['WebSockets', 'Gemini', 'ElevenLabs'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: '#'
  },
  {
    id: 'vine-ai',
    title: 'Vine_AI',
    metric: '300%',
    metricLabel: 'ROI',
    metricColor: 'purple',
    description: 'AI Revenue Engine. Delivers 300% ROI by equipping staff with an expert-level wine pairing recommendation engine via NLP and Vector Search.',
    tags: ['Python', 'NLP', 'Vector DB'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: '#'
  },
  {
    id: 'artisan-ai',
    title: 'ArtisanAI',
    metric: '50%',
    metricLabel: 'More Interviews',
    metricColor: 'green',
    description: 'Intelligent Resume SaaS. Users reported a 50% increase in interview requests by using the "Smart Editor" to tailor experience for ATS systems.',
    tags: ['Next.js', 'SaaS', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: '#'
  },
  {
    id: 'waiter-ai',
    title: 'Waiter_AI',
    metric: '35%',
    metricLabel: 'Higher AOV',
    metricColor: 'cyan',
    description: 'Digital Menu Platform. Resulted in a 35% higher average order value (AOV) through optimized menu presentation and allergen filtering.',
    tags: ['React', 'UX Design', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: '#'
  },
  {
    id: 'shop-ai',
    title: 'Shop AI',
    metric: '82%',
    metricLabel: 'Conversion',
    metricColor: 'orange',
    description: 'Conversational Commerce. Achieved an 82% conversion rate improvement by streamlining the purchasing funnel with intelligent assistance.',
    tags: ['E-commerce', 'AI Chatbot', 'Funnel Opt.'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200',
    liveLink: '#',
    repoLink: '#'
  }
];

export const SERVICES = [
  {
    title: 'F&B Tech Consultancy',
    price: 'Strategic',
    description: 'Leveraging deep industry knowledge to advise on technology strategy. I identify the "Champagne Problems" that are draining your budget.',
    features: ['Tech Stack Audit', 'Operational Review', 'Vendor Selection', 'ROI Analysis'],
    icon: 'compass_calibration',
    color: 'orange'
  },
  {
    title: 'Digital Transformation',
    price: 'Execution',
    description: 'Leading initiatives to automate processes and enhance guest experiences. From "PUNCH-CLOCK" efficiency to "FlairAI" training systems.',
    features: ['Custom Automation', 'Workflow Design', 'Implementation', 'Staff Training'],
    icon: 'transform',
    color: 'cyan'
  },
  {
    title: 'Full-Stack AI Development',
    price: 'Build',
    description: 'Architecting and building the next generation of intelligent applications. Enterprise-grade code with operational soul.',
    features: ['Agent Development', 'SaaS Architecture', 'API Integration', 'Secure Deployment'],
    icon: 'code',
    color: 'purple'
  }
];

export const TESTIMONIALS = [
  {
    name: "HR Automation",
    role: "Operational Impact",
    quote: "Slashed payroll processing time from 40 hours to just 2 hours per month, achieving 97% accuracy and eliminating costly administrative drag.",
  },
  {
    name: "Revenue Generation",
    role: "Financial Impact",
    quote: "Directly achieved 300% ROI by boosting premium wine sales and increasing average order value by 35% through AI-driven recommendations.",
  },
  {
    name: "Training Efficiency",
    role: "Human Impact",
    quote: "Reduced new-hire training time by 40% while expanding training scenario coverage by 605%, ensuring consistent service standards.",
  }
];

export const FAQS = [
  {
    q: "What does 'From Floor to Full Stack' mean?",
    a: "It means I don't just write code in a vacuum. I have 10 years of operational experience. I build software that solves the messy, real-world problems I faced on the floor."
  },
  {
    q: "Do you only work with F&B?",
    a: "No, but my 'Operational DNA' is best suited for high-pressure, service-oriented industries (Retail, Hospitality, Wellness) where human-AI interaction is critical."
  },
  {
    q: "How do you handle data privacy?",
    a: "I build systems with 'Privacy by Design'. Your operational data (recipes, guest lists, staff details) never trains public models. I use private instances and secure RAG pipelines."
  },
  {
    q: "Are your AI agents autonomous?",
    a: "Yes. I use frameworks like CrewAI to build agents that can plan, execute, and critique their own work, rather than just waiting for your next prompt."
  }
];

export const HOBBIES = [
  { icon: 'coffee', label: 'Cafe Hopping', color: 'text-yellow-400' },
  { icon: 'flight', label: 'Traveling', color: 'text-blue-400' },
  { icon: 'headphones', label: 'Focus & EDM', color: 'text-purple-400' },
  { icon: 'movie', label: 'Anime', color: 'text-orange-500' },
];