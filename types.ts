
export interface CaseStudyContent {
  challenge: string;
  solution: string;
  results: string[];
  techDeepDive: string;
}

export interface Project {
  id: string;
  title: string;
  metric: string;
  metricLabel: string;
  metricColor: 'cyan' | 'orange' | 'purple' | 'green' | 'white';
  description: string;
  tags: string[];
  image: string;
  liveLink?: string;
  caseStudyLink?: string; // Kept for backward compatibility or external links
  caseStudyContent?: CaseStudyContent; // New internal content
  repoLink?: string;
}

export interface StoryChapter {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: 'cyan' | 'orange' | 'purple';
  rotation: string;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: 'cyan' | 'orange' | 'purple' | 'green';
  tags: string[];
}

export interface DualExpertiseItem {
  title: string;
  description: string;
  icon: string;
  color: 'cyan' | 'orange';
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
  type: 'project' | 'consulting' | 'hiring';
}
