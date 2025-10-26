import dynamic from 'next/dynamic';
import { LocaleParams } from '@/types';

// Dynamic imports for animations
const FadeIn = dynamic(() => import('@/components/animations/fade-in').then(mod => ({ default: mod.FadeIn })));
const ScaleIn = dynamic(() => import('@/components/animations/scale-in').then(mod => ({ default: mod.ScaleIn })));

// Dynamic import for icon
const Briefcase = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Briefcase })));

// Dynamic import for projects section
const ProjectsSection = dynamic(() => import('@/components/resume/projects-section').then(mod => ({ default: mod.ProjectsSection })));

export default async function ProjectsPage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = await params;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <ScaleIn delay={0.4}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-soft" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
                <Briefcase className="w-4 h-4" />
                My Work
              </span>
            </ScaleIn>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: 'var(--color-text)' }}>
            Featured{' '}
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Projects
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            A collection of my recent work and personal projects. Each project represents
            a unique challenge and showcases different aspects of my development skills.
          </p>
        </FadeIn>
      </div>

      <ProjectsSection />
    </div>
  );
}