import { Project, Skill, Experience } from '@/types';
import { promises as fs } from 'fs';
import path from 'path';

// Mock data for development - replace with actual database calls
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js and Stripe',
    longDescription: 'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart, and secure payment processing.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    imageUrl: undefined,
    featured: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    longDescription: 'A modern task management solution with drag-and-drop functionality, real-time collaboration, and team management features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
    imageUrl: undefined,
    featured: true,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10')
  }
];

export async function getAllProjects(): Promise<Project[]> {
  // In a real app, this would fetch from your database
  return mockProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  // Convert slug back to find project (in real app, store slug in DB)
  const project = mockProjects.find(p => 
    p.title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-') === slug
  );
  return project || null;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return mockProjects.filter(project => project.featured);
}

export async function getProjectById(id: string): Promise<Project | null> {
  return mockProjects.find(project => project.id === id) || null;
}

// Content management for MDX files
export async function getProjectContent(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'projects', `${slug}.mdx`);
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    return null;
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'projects');
    const files = await fs.readdir(contentDir);
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace('.mdx', ''));
  } catch (error) {
    return [];
  }
}