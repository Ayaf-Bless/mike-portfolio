export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface TechItem {
  category: string;
  items: string[];
  advantage: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  description: string;
  geographicReach: string;
}

export interface CaseStudyItem {
  title: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { value: string; label: string }[];
  image: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}
