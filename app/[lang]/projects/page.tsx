import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { LocaleParams } from '@/types';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import caseStudiesData from '@/data/case-studies.json';

// Dynamic imports for animations
const FadeIn = dynamic(() => import('@/components/animations/fade-in').then(mod => ({ default: mod.FadeIn })));
const ScaleIn = dynamic(() => import('@/components/animations/scale-in').then(mod => ({ default: mod.ScaleIn })));
const StaggerContainer = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerContainer })));
const StaggerItem = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerItem })));
const HoverCard = dynamic(() => import('@/components/animations/hover-card').then(mod => ({ default: mod.HoverCard })));

// Dynamic imports for icons
const Briefcase = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Briefcase })));
const Building2 = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Building2 })));
const TrendingUp = dynamic(() => import('lucide-react').then(mod => ({ default: mod.TrendingUp })));
const ArrowRight = dynamic(() => import('lucide-react').then(mod => ({ default: mod.ArrowRight })));
const CheckCircle = dynamic(() => import('lucide-react').then(mod => ({ default: mod.CheckCircle })));

export default async function ProjectsPage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = await params;
  setRequestLocale(lang);
  const t = await getTranslations('projects');

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <ScaleIn delay={0.4}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-soft" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
                <Briefcase className="w-4 h-4" />
                {t('badge')}
              </span>
            </ScaleIn>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: 'var(--color-text)' }}>
            {t('title')}{' '}
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              {t('titleHighlight')}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto font-medium" style={{ color: 'var(--color-muted)' }}>
            {t('subtitle')}
          </p>
        </FadeIn>
      </div>

      {/* Case Studies Grid */}
      <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
        {caseStudiesData.caseStudies.map((caseStudy, index) => (
          <StaggerItem key={caseStudy.id} index={index}>
            <HoverCard scaleOnHover={1.03}>
              <Link href={`/${lang}/projects/${caseStudy.slug}`}>
                <div className="h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-strong" style={{ background: 'var(--gradient-card)' }}>
                  {/* Image placeholder */}
                  <div className="relative h-48 overflow-hidden" style={{ background: 'var(--gradient-primary)' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-white/30" />
                    </div>
                    {caseStudy.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm" style={{ color: 'var(--color-primary)' }}>
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Industry Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-primary)' }}>
                        {caseStudy.industry}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                      {caseStudy.title}
                    </h3>

                    {/* Client */}
                    <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-muted)' }}>
                      {t('client')}: {caseStudy.client}
                    </p>

                    {/* Tagline */}
                    <p className="text-sm mb-4" style={{ color: 'var(--color-muted)' }}>
                      {caseStudy.tagline}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 rounded text-xs font-medium" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-text)' }}>
                          {tech}
                        </span>
                      ))}
                      {caseStudy.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded text-xs font-medium" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-text)' }}>
                          +{caseStudy.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Results Preview */}
                    {caseStudy.results.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                          <TrendingUp className="w-4 h-4" />
                          Key Results
                        </div>
                        <div className="space-y-1">
                          {caseStudy.results.slice(0, 2).map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                              <span className="text-xs" style={{ color: 'var(--color-text)' }}>{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold group" style={{ color: 'var(--color-primary)' }}>
                      {t('view_project')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* CTA Section */}
      <FadeIn delay={1.0}>
        <div className="mt-20 text-center p-12 rounded-3xl" style={{ background: 'var(--gradient-hero)' }}>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create the next success story together
          </p>
          <HoverCard scaleOnHover={1.05}>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ color: 'var(--color-primary)' }}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </HoverCard>
        </div>
      </FadeIn>
    </div>
  );
}
