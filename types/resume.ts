export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface CoreCompetencies {
  frontend: string[];
  languages: string[];
  stateManagement: string[];
  tools: string[];
  skills: string[];
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  workMode: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  name: string;
  company: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  imageUrl: string;
  demoUrl: string | null;
  githubUrl: string | null;
}

export interface TechnicalSkills {
  frontendFrameworks: string[];
  languages: string[];
  styling: string[];
  stateManagement: string[];
  webTechnologies: string[];
  performance: string[];
  tools: string[];
  methodologies: string[];
  backendFoundation: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string | null;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  grade: string | null;
  location: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  summary: string;
  coreCompetencies: CoreCompetencies;
  experience: Experience[];
  projects: Project[];
  technicalSkills: TechnicalSkills;
  certifications: Certification[];
  education: Education[];
}
