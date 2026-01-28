
export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  icon: string; // 'Server' | 'Database' | 'Map' | 'Home' | 'Cpu' etc.
}

export interface Skill {
  name: string;
  details: string;
}

export interface CompetencyCategory {
  title: string;
  skills: Skill[];
}

export interface SkillMetric {
  subject: string;
  A: number;
  fullMark: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  portfolio: string;
  location: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  sector: string;
  description: string;
  tech: string[];
}
