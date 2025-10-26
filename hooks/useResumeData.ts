'use client';

import { useApi } from './useApi';
import type { ResumeData, Experience, Project, TechnicalSkills, Certification } from '@/types/resume';

export function useResumeData() {
  return useApi<ResumeData>('/api/resume');
}

export function useExperience() {
  return useApi<Experience[]>('/api/resume/experience');
}

export function useProjects() {
  return useApi<Project[]>('/api/resume/projects');
}

export function useSkills() {
  return useApi<TechnicalSkills>('/api/resume/skills');
}

export function useCertifications() {
  return useApi<Certification[]>('/api/resume/certifications');
}
