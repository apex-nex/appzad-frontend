import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LocaleParams } from '@/types';
import resumeData from '@/data/resume.json';

// Dynamic imports for animations
const FadeIn = dynamic(() => import('@/components/animations/fade-in').then(mod => ({ default: mod.FadeIn })));
const ScaleIn = dynamic(() => import('@/components/animations/scale-in').then(mod => ({ default: mod.ScaleIn })));
const StaggerContainer = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerContainer })));
const StaggerItem = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerItem })));
const HoverCard = dynamic(() => import('@/components/animations/hover-card').then(mod => ({ default: mod.HoverCard })));

// Dynamic imports for icons
const Mail = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Mail })));
const MapPin = dynamic(() => import('lucide-react').then(mod => ({ default: mod.MapPin })));
const Phone = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Phone })));
const Send = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Send })));
const Linkedin = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Linkedin })));
const Github = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Github })));
const Twitter = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Twitter })));
const MessageSquare = dynamic(() => import('lucide-react').then(mod => ({ default: mod.MessageSquare })));
const Calendar = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Calendar })));

export default async function ContactPage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = await params;

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: resumeData.personal.email,
      href: `mailto:${resumeData.personal.email}`,
      color: 'var(--color-primary)',
      gradient: 'var(--gradient-primary)',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: resumeData.personal.phone,
      href: `tel:${resumeData.personal.phone.replace(/\s+/g, '')}`,
      color: 'var(--color-accent)',
      gradient: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: resumeData.personal.location,
      href: '#',
      color: 'var(--color-secondary)',
      gradient: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: resumeData.personal.github,
      color: 'var(--color-text)',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: resumeData.personal.linkedin,
      color: '#0077B5',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <ScaleIn delay={0.4}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-soft" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
                <MessageSquare className="w-4 h-4" />
                Contact
              </span>
            </ScaleIn>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: 'var(--color-text)' }}>
            Get In{' '}
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Touch
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto font-medium" style={{ color: 'var(--color-muted)' }}>
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
            Feel free to reach out through any of the channels below.
          </p>
        </FadeIn>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div>
          <FadeIn delay={1.0}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Contact Information
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-6" staggerDelay={0.15}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <StaggerItem key={info.title} index={index}>
                  <HoverCard scaleOnHover={1.03} element="card">
                    <a
                      href={info.href}
                      className="block p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
                      style={{ background: 'var(--gradient-card)' }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-xl flex items-center justify-center shadow-medium" style={{ background: info.gradient }}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm" style={{ color: 'var(--color-muted)' }}>
                            {info.title}
                          </h3>
                          <p className="mt-1 font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Social Links */}
          <FadeIn delay={1.4}>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <HoverCard key={social.name} scaleOnHover={1.1}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-12 w-12 rounded-xl shadow-medium hover:shadow-strong transition-all duration-300"
                        style={{ background: 'var(--gradient-card)' }}
                        title={social.name}
                      >
                        <Icon className="h-6 w-6" style={{ color: 'var(--color-text)' }} />
                      </a>
                    </HoverCard>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Book Meeting Card */}
          <FadeIn delay={1.6}>
            <div className="mt-8">
              <HoverCard scaleOnHover={1.02}>
                <div
                  className="p-6 rounded-2xl shadow-soft border-2 transition-all duration-300"
                  style={{
                    background: 'var(--gradient-card)',
                    borderColor: 'var(--color-primary)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center shadow-medium"
                      style={{ background: 'var(--gradient-primary)' }}
                    >
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                        Schedule a Meeting
                      </h3>
                      <p className="text-sm mb-4" style={{ color: 'var(--color-muted)' }}>
                        Prefer a one-on-one conversation? Book a time slot that works for you.
                      </p>
                      <Link
                        href={`/${lang}/schedule`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
                        style={{ background: 'var(--gradient-primary)' }}
                      >
                        <Calendar className="w-4 h-4" />
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <FadeIn delay={1.2}>
          <Card style={{ background: 'var(--gradient-card)' }}>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-text)',
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-text)',
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-text)',
                    }}
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-text)',
                    }}
                    placeholder="Your message..."
                  />
                </div>

                <HoverCard scaleOnHover={1.05}>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white rounded-xl shadow-medium hover:shadow-strong transition-all duration-300"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </HoverCard>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
