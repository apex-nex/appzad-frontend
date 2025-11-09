import Link from 'next/link';
import dynamic from 'next/dynamic';
import { LocaleParams } from '@/types';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import companyData from '@/data/company.json';

// Dynamic imports for animation components
const FadeIn = dynamic(() => import('@/components/animations/fade-in').then(mod => ({ default: mod.FadeIn })));
const ScaleIn = dynamic(() => import('@/components/animations/scale-in').then(mod => ({ default: mod.ScaleIn })));
const StaggerContainer = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerContainer })));
const StaggerItem = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerItem })));
const FloatingElement = dynamic(() => import('@/components/animations/floating-element').then(mod => ({ default: mod.FloatingElement })));
const HoverCard = dynamic(() => import('@/components/animations/hover-card').then(mod => ({ default: mod.HoverCard })));

// Dynamic imports for icons
const Rocket = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Rocket })));
const Globe = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Globe })));
const Briefcase = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Briefcase })));
const Zap = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Zap })));
const Smartphone = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Smartphone })));
const Sparkles = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Sparkles })));
const FileText = dynamic(() => import('lucide-react').then(mod => ({ default: mod.FileText })));
const Plane = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Plane })));
const Heart = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Heart })));
const Hotel = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Hotel })));
const Users = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Users })));
const Award = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Award })));
const Headphones = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Headphones })));

export default async function HomePage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = await params;
  setRequestLocale(lang);
  const t = await getTranslations('home');

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center relative">
        {/* Floating decorative elements */}
        <FloatingElement 
          className="absolute -top-4 left-1/4 w-16 h-16 rounded-full opacity-20" 
          intensity="gentle" 
          delay={0}
        >
          <div style={{ background: 'var(--gradient-primary)' }} className="w-full h-full rounded-full"></div>
        </FloatingElement>
        <FloatingElement 
          className="absolute top-8 right-1/4 w-12 h-12 rounded-full opacity-30" 
          intensity="medium" 
          delay={1}
        >
          <div style={{ background: 'var(--gradient-primary)' }} className="w-full h-full rounded-full"></div>
        </FloatingElement>
        
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <ScaleIn delay={0.4}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-soft" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
                <Rocket className="w-4 h-4" />
                {t('badge')}
              </span>
            </ScaleIn>
          </div>
        </FadeIn>
        <FadeIn delay={0.6} direction="up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl relative" style={{ color: 'var(--color-text)' }}>
            {t('title')}{' '}
            <span className="animate-pulse" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              {t('titleHighlight')}
            </span>
            <div className="absolute -inset-1 rounded-lg blur-xl -z-10" style={{ background: 'var(--gradient-primary)', opacity: 0.3 }}></div>
          </h1>
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto font-medium" style={{ color: 'var(--color-muted)' }}>
            {t('subtitle')}
          </p>
        </FadeIn>

        <ScaleIn delay={1.0}>
          <p className="mt-4 text-sm font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2" style={{ color: 'var(--color-primary)', background: 'var(--gradient-secondary)', borderColor: 'var(--color-primary)' }}>
            <Globe className="w-4 h-4" />
            {t('languageLabel')} {lang.toUpperCase()}
          </p>
        </ScaleIn>
        <StaggerContainer className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <StaggerItem>
            <HoverCard scaleOnHover={1.05}>
              <Link
                href={`/${lang}/about`}
                className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-2">
                  {t('cta.learnMore')}
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 border-2 border-white opacity-0 rounded-full group-hover:opacity-30 transition-opacity duration-500"></span>
              </Link>
            </HoverCard>
          </StaggerItem>
          <StaggerItem>
            <HoverCard scaleOnHover={1.05}>
              <Link
                href={`/${lang}/projects`}
                className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 border-2"
                style={{
                  borderColor: 'var(--color-primary)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'var(--color-text)'
                }}
              >
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'var(--gradient-primary)' }}></span>
                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                  <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  {t('cta.viewProjects')}
                </span>
              </Link>
            </HoverCard>
          </StaggerItem>
          <StaggerItem>
            <HoverCard scaleOnHover={1.05}>
              <Link
                href={`/${lang}/schedule`}
                className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 border-2"
                style={{
                  borderColor: 'var(--color-accent)',
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                  color: 'white'
                }}
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-2">
                  <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  {t('cta.downloadResume')}
                </span>
              </Link>
            </HoverCard>
          </StaggerItem>
        </StaggerContainer>
      </div>
      
      {/* Feature highlights */}
      <StaggerContainer className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
        <StaggerItem>
          <HoverCard scaleOnHover={1.08} rotateOnHover={2}>
            <div className="group text-center p-6 rounded-2xl hover:shadow-medium transition-all duration-300" style={{ background: 'var(--gradient-card)', borderColor: 'var(--color-primary)' }}>
              <ScaleIn delay={1.4}>
                <div className="mx-auto h-16 w-16 rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:rotate-3" style={{ background: 'var(--gradient-primary)' }}>
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="mt-6 text-xl font-bold flex items-center justify-center gap-2" style={{ color: 'var(--color-text)' }}>
                <Zap className="w-5 h-5" />
                {t('features.performance.title')}
              </h3>
              <p className="mt-3 font-medium" style={{ color: 'var(--color-muted)' }}>{t('features.performance.description')}</p>
            </div>
          </HoverCard>
        </StaggerItem>
        
        <StaggerItem>
          <HoverCard scaleOnHover={1.08} rotateOnHover={-2}>
            <div className="group text-center p-6 rounded-2xl hover:shadow-medium transition-all duration-300" style={{ background: 'var(--gradient-card)', borderColor: 'var(--color-accent)' }}>
              <ScaleIn delay={1.6}>
                <div className="mx-auto h-16 w-16 rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:rotate-3" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="mt-6 text-xl font-bold flex items-center justify-center gap-2" style={{ color: 'var(--color-text)' }}>
                <Smartphone className="w-5 h-5" />
                {t('features.responsive.title')}
              </h3>
              <p className="mt-3 font-medium" style={{ color: 'var(--color-muted)' }}>{t('features.responsive.description')}</p>
            </div>
          </HoverCard>
        </StaggerItem>
        
        <StaggerItem>
          <HoverCard scaleOnHover={1.08} rotateOnHover={2}>
            <div className="group text-center p-6 rounded-2xl hover:shadow-medium transition-all duration-300" style={{ background: 'var(--gradient-card)', borderColor: 'var(--color-secondary)' }}>
              <ScaleIn delay={1.8}>
                <div className="mx-auto h-16 w-16 rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:rotate-3" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="mt-6 text-xl font-bold flex items-center justify-center gap-2" style={{ color: 'var(--color-text)' }}>
                <Sparkles className="w-5 h-5" />
                {t('features.quality.title')}
              </h3>
              <p className="mt-3 font-medium" style={{ color: 'var(--color-muted)' }}>{t('features.quality.description')}</p>
            </div>
          </HoverCard>
        </StaggerItem>
      </StaggerContainer>

      {/* Company Stats */}
      <FadeIn delay={2.0} direction="up">
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: 'var(--color-text)' }}>
              {companyData.name} <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>in Numbers</span>
            </h2>
          </div>
          <StaggerContainer className="grid grid-cols-2 gap-8 sm:grid-cols-4" staggerDelay={0.1}>
            {companyData.stats.map((stat, index) => (
              <StaggerItem key={index}>
                <HoverCard scaleOnHover={1.05}>
                  <div className="text-center p-6 rounded-2xl" style={{ background: 'var(--gradient-card)' }}>
                    <div className="text-4xl font-bold mb-2" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium" style={{ color: 'var(--color-muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeIn>

      {/* Industries We Serve */}
      <FadeIn delay={2.2} direction="up">
        <div className="mt-32">
          <div className="text-center mb-4">
            <ScaleIn delay={2.3}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-soft" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-primary)' }}>
                <Briefcase className="w-4 h-4" />
                {t('industries.badge')}
              </span>
            </ScaleIn>
          </div>
          <h2 className="text-center text-3xl font-bold sm:text-4xl mb-16" style={{ color: 'var(--color-text)' }}>
            {t('industries.title')}{' '}
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              {t('industries.titleHighlight')}
            </span>
          </h2>

          <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-3" staggerDelay={0.15}>
            <StaggerItem>
              <HoverCard scaleOnHover={1.05} rotateOnHover={2}>
                <div className="group h-full p-8 rounded-2xl transition-all duration-300 hover:shadow-strong" style={{ background: 'var(--gradient-card)' }}>
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300" style={{ background: 'var(--gradient-primary)' }}>
                      <Plane className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4" style={{ color: 'var(--color-text)' }}>
                    {t('industries.travel.title')}
                  </h3>
                  <p className="text-center font-medium" style={{ color: 'var(--color-muted)' }}>
                    {t('industries.travel.description')}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard scaleOnHover={1.05} rotateOnHover={-2}>
                <div className="group h-full p-8 rounded-2xl transition-all duration-300 hover:shadow-strong" style={{ background: 'var(--gradient-card)' }}>
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4" style={{ color: 'var(--color-text)' }}>
                    {t('industries.health.title')}
                  </h3>
                  <p className="text-center font-medium" style={{ color: 'var(--color-muted)' }}>
                    {t('industries.health.description')}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard scaleOnHover={1.05} rotateOnHover={2}>
                <div className="group h-full p-8 rounded-2xl transition-all duration-300 hover:shadow-strong" style={{ background: 'var(--gradient-card)' }}>
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'var(--color-secondary)' }}>
                      <Hotel className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4" style={{ color: 'var(--color-text)' }}>
                    {t('industries.hotel.title')}
                  </h3>
                  <p className="text-center font-medium" style={{ color: 'var(--color-muted)' }}>
                    {t('industries.hotel.description')}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn delay={2.6} direction="up">
        <div className="mt-32 text-center p-12 rounded-3xl" style={{ background: 'var(--gradient-hero)' }}>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your business succeed online
          </p>
          <HoverCard scaleOnHover={1.05}>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ color: 'var(--color-primary)' }}
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </HoverCard>
        </div>
      </FadeIn>
    </div>
  );
}