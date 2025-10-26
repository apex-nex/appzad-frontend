import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LocaleParams } from '@/types';
import resumeData from '@/data/resume.json';

// Dynamic imports for animations
const FadeIn = dynamic(() => import('@/components/animations/fade-in').then(mod => ({ default: mod.FadeIn })));
const ScaleIn = dynamic(() => import('@/components/animations/scale-in').then(mod => ({ default: mod.ScaleIn })));
const StaggerItem = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerItem })));
const HoverCard = dynamic(() => import('@/components/animations/hover-card').then(mod => ({ default: mod.HoverCard })));

// Dynamic imports for icons
const User = dynamic(() => import('lucide-react').then(mod => ({ default: mod.User })));

// Dynamic imports for resume components
const ExperienceSection = dynamic(() => import('@/components/resume/experience-section').then(mod => ({ default: mod.ExperienceSection })));
const SkillsSection = dynamic(() => import('@/components/resume/skills-section').then(mod => ({ default: mod.SkillsSection })));

export default async function AboutPage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = await params;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <ScaleIn delay={0.4}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-soft" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}>
                <User className="w-4 h-4" />
                About Me
              </span>
            </ScaleIn>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: 'var(--color-text)' }}>
            {resumeData.personal.name.split(' ')[0]}{' '}
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              {resumeData.personal.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            {resumeData.summary}
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Skills Section */}
        <div>
          <HoverCard element="card">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>Technologies and tools I work with</CardDescription>
              </CardHeader>
              <CardContent>
                <SkillsSection />
              </CardContent>
            </Card>
          </HoverCard>
        </div>

        {/* Experience Section */}
        <div>
          <HoverCard element="card">
            <Card>
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
                <CardDescription>My journey in software development</CardDescription>
              </CardHeader>
              <CardContent>
                <ExperienceSection />
              </CardContent>
            </Card>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}