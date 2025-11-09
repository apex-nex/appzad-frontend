import dynamic from 'next/dynamic';
import Link from 'next/link';
import { LocaleParams } from '@/types';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import companyData from '@/data/company.json';
import teamData from '@/data/team.json';

// Dynamic imports for animations
const FadeIn = dynamic(() => import('@/components/animations/fade-in').then(mod => ({ default: mod.FadeIn })));
const ScaleIn = dynamic(() => import('@/components/animations/scale-in').then(mod => ({ default: mod.ScaleIn })));
const StaggerContainer = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerContainer })));
const StaggerItem = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerItem })));
const HoverCard = dynamic(() => import('@/components/animations/hover-card').then(mod => ({ default: mod.HoverCard })));

// Dynamic imports for icons
const Building2 = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Building2 })));
const Target = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Target })));
const Eye = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Eye })));
const Heart = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Heart })));
const Sparkles = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Sparkles })));
const Shield = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Shield })));
const Users = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Users })));
const Check = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Check })));

export default async function AboutPage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = await params;
  setRequestLocale(lang);
  const t = await getTranslations('about');

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <ScaleIn delay={0.4}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-soft" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}>
                <Building2 className="w-4 h-4" />
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
          <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            {t('description')}
          </p>
        </FadeIn>
      </div>

      {/* Mission & Vision */}
      <FadeIn delay={1.0} direction="up">
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          <HoverCard scaleOnHover={1.03}>
            <div className="p-8 rounded-2xl h-full" style={{ background: 'var(--gradient-card)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl" style={{ background: 'var(--gradient-primary)' }}>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                  {t('mission.title')}
                </h2>
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {t('mission.description')}
              </p>
            </div>
          </HoverCard>

          <HoverCard scaleOnHover={1.03}>
            <div className="p-8 rounded-2xl h-full" style={{ background: 'var(--gradient-card)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                  {t('vision.title')}
                </h2>
              </div>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {t('vision.description')}
              </p>
            </div>
          </HoverCard>
        </div>
      </FadeIn>

      {/* Core Values */}
      <FadeIn delay={1.2} direction="up">
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4" style={{ color: 'var(--color-text)' }}>
              {t('values.title')}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
              {t('values.description')}
            </p>
          </div>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            <StaggerItem>
              <HoverCard scaleOnHover={1.05}>
                <div className="p-6 rounded-2xl text-center h-full" style={{ background: 'var(--gradient-card)' }}>
                  <div className="mx-auto w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--gradient-primary)' }}>
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                    {t('values.list.clientCentric.title')}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    {t('values.list.clientCentric.description')}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard scaleOnHover={1.05}>
                <div className="p-6 rounded-2xl text-center h-full" style={{ background: 'var(--gradient-card)' }}>
                  <div className="mx-auto w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                    {t('values.list.innovation.title')}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    {t('values.list.innovation.description')}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard scaleOnHover={1.05}>
                <div className="p-6 rounded-2xl text-center h-full" style={{ background: 'var(--gradient-card)' }}>
                  <div className="mx-auto w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-secondary)' }}>
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                    {t('values.list.quality.title')}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    {t('values.list.quality.description')}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard scaleOnHover={1.05}>
                <div className="p-6 rounded-2xl text-center h-full" style={{ background: 'var(--gradient-card)' }}>
                  <div className="mx-auto w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}>
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                    {t('values.list.transparency.title')}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    {t('values.list.transparency.description')}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </FadeIn>

      {/* Why Choose Us */}
      <FadeIn delay={1.4} direction="up">
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4" style={{ color: 'var(--color-text)' }}>
              {t('whyChooseUs.title')}{' '}
              <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                {t('whyChooseUs.titleHighlight')}
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
              {t('whyChooseUs.description')}
            </p>
          </div>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {Object.entries(companyData.whyChooseUs).map(([key, reason], index) => (
              <StaggerItem key={index}>
                <HoverCard scaleOnHover={1.03}>
                  <div className="p-6 rounded-2xl h-full" style={{ background: 'var(--gradient-card)' }}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ background: 'var(--gradient-primary)' }}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                          {reason.title}
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeIn>

      {/* Team Preview */}
      <FadeIn delay={1.6} direction="up">
        <div className="text-center p-12 rounded-3xl" style={{ background: 'var(--gradient-hero)' }}>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            {t('team.title')}{' '}
            <span className="inline-block">
              {t('team.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t('team.description')}
          </p>
          <HoverCard scaleOnHover={1.05}>
            <Link
              href={`/${lang}/resume`}
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ color: 'var(--color-primary)' }}
            >
              Meet the Team
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
