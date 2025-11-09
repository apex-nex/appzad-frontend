import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LocaleParams } from '@/types';
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Dynamic imports for animations
const FadeIn = dynamic(() => import('@/components/animations/fade-in').then(mod => ({ default: mod.FadeIn })));
const ScaleIn = dynamic(() => import('@/components/animations/scale-in').then(mod => ({ default: mod.ScaleIn })));
const StaggerContainer = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerContainer })));
const StaggerItem = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerItem })));
const HoverCard = dynamic(() => import('@/components/animations/hover-card').then(mod => ({ default: mod.HoverCard })));

// Dynamic imports for icons
const Code = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Code })));
const Palette = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Palette })));
const Smartphone = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Smartphone })));
const Database = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Database })));
const Cloud = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Cloud })));
const Zap = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Zap })));
const ShoppingCart = dynamic(() => import('lucide-react').then(mod => ({ default: mod.ShoppingCart })));
const CheckCircle = dynamic(() => import('lucide-react').then(mod => ({ default: mod.CheckCircle })));
const Plane = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Plane })));
const Heart = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Heart })));
const Hotel = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Hotel })));

export default async function ServicesPage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = await params;
  setRequestLocale(lang);
  const t = await getTranslations('services');

  const services = [
    {
      icon: Code,
      key: 'webDevelopment',
      color: 'var(--color-primary)',
      gradient: 'var(--gradient-primary)',
    },
    {
      icon: Palette,
      key: 'uiux',
      color: 'var(--color-accent)',
      gradient: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)',
    },
    {
      icon: Smartphone,
      key: 'mobile',
      color: 'var(--color-secondary)',
      gradient: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
    },
    {
      icon: Database,
      key: 'backend',
      color: 'var(--color-primary)',
      gradient: 'var(--gradient-primary)',
    },
    {
      icon: Cloud,
      key: 'cloud',
      color: 'var(--color-accent)',
      gradient: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)',
    },
    {
      icon: ShoppingCart,
      key: 'ecommerce',
      color: 'var(--color-secondary)',
      gradient: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)',
    },
    {
      icon: Plane,
      key: 'travel',
      color: 'var(--color-primary)',
      gradient: 'var(--gradient-primary)',
    },
    {
      icon: Heart,
      key: 'health',
      color: 'var(--color-accent)',
      gradient: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)',
    },
    {
      icon: Hotel,
      key: 'hotel',
      color: 'var(--color-secondary)',
      gradient: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <ScaleIn delay={0.4}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-soft" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
                <Zap className="w-4 h-4" />
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
            {t('description')}
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
        {services.map((service, index) => {
          const Icon = service.icon;
          const features = [
            t(`list.${service.key}.features.custom` as any),
            t(`list.${service.key}.features.pwa` as any),
            t(`list.${service.key}.features.api` as any),
            t(`list.${service.key}.features.optimization` as any),
          ].filter(Boolean);

          return (
            <StaggerItem key={service.key} index={index}>
              <HoverCard scaleOnHover={1.05} rotateOnHover={1}>
                <Card className="h-full hover:shadow-strong transition-all duration-300" style={{ background: 'var(--gradient-card)' }}>
                  <CardHeader>
                    <div className="mb-4">
                      <ScaleIn delay={0.2 * index}>
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-medium" style={{ background: service.gradient }}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                      </ScaleIn>
                    </div>
                    <CardTitle className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
                      {t(`list.${service.key}.title` as any)}
                    </CardTitle>
                    <CardDescription className="font-medium" style={{ color: 'var(--color-muted)' }}>
                      {t(`list.${service.key}.description` as any)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                          <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </HoverCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Call to Action */}
      <FadeIn delay={1.2}>
        <div className="mt-20 text-center p-12 rounded-3xl" style={{ background: 'var(--gradient-hero)' }}>
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-8 font-medium">
            {t('cta.description')}
          </p>
          <HoverCard scaleOnHover={1.08}>
            <Link
              href={`/${lang}/schedule`}
              className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-lg font-bold bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ color: 'var(--color-primary)' }}
            >
              {t('cta.button')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </HoverCard>
        </div>
      </FadeIn>
    </div>
  );
}
