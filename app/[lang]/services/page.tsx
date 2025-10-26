import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LocaleParams } from '@/types';

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
const Globe = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Globe })));
const ShoppingCart = dynamic(() => import('lucide-react').then(mod => ({ default: mod.ShoppingCart })));
const CheckCircle = dynamic(() => import('lucide-react').then(mod => ({ default: mod.CheckCircle })));

export default async function ServicesPage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = await params;

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive websites and web applications using cutting-edge technologies like React, Next.js, and TypeScript.',
      features: [
        'Custom Web Applications',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Performance Optimization',
      ],
      color: 'var(--color-primary)',
      gradient: 'var(--gradient-primary)',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement.',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Prototyping & Wireframing',
        'Design Systems',
      ],
      color: 'var(--color-accent)',
      gradient: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications that work seamlessly on iOS and Android devices.',
      features: [
        'React Native Development',
        'Responsive Mobile Design',
        'Native Performance',
        'App Store Deployment',
      ],
      color: 'var(--color-secondary)',
      gradient: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust, scalable backend systems with secure APIs and efficient database management.',
      features: [
        'RESTful API Design',
        'Database Architecture',
        'Authentication & Security',
        'Server-side Logic',
      ],
      color: 'var(--color-primary)',
      gradient: 'var(--gradient-primary)',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms with automated CI/CD pipelines.',
      features: [
        'AWS / Azure / GCP',
        'Docker & Kubernetes',
        'CI/CD Pipelines',
        'Infrastructure as Code',
      ],
      color: 'var(--color-accent)',
      gradient: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Creating powerful e-commerce platforms with secure payment processing and inventory management.',
      features: [
        'Shopping Cart Systems',
        'Payment Gateway Integration',
        'Product Management',
        'Order Processing',
      ],
      color: 'var(--color-secondary)',
      gradient: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)',
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
                Services
              </span>
            </ScaleIn>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: 'var(--color-text)' }}>
            What I{' '}
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Offer
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto font-medium" style={{ color: 'var(--color-muted)' }}>
            Comprehensive development services tailored to bring your ideas to life.
            From concept to deployment, I provide end-to-end solutions for your digital needs.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <StaggerItem key={service.title} index={index}>
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
                      {service.title}
                    </CardTitle>
                    <CardDescription className="font-medium" style={{ color: 'var(--color-muted)' }}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
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
        <div className="mt-20 text-center p-12 rounded-3xl shadow-strong" style={{ background: 'var(--gradient-card)', border: '2px solid var(--color-primary)' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 font-medium" style={{ color: 'var(--color-muted)' }}>
            Let&apos;s work together to bring your vision to life
          </p>
          <HoverCard scaleOnHover={1.08}>
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-medium hover:shadow-strong transition-all duration-300"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <Globe className="w-5 h-5" />
              Get In Touch
            </a>
          </HoverCard>
        </div>
      </FadeIn>
    </div>
  );
}
