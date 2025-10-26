'use client';

import { use } from 'react';
import { LocaleParams } from '@/types';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import resumeData from '@/data/resume.json';

const FadeIn = dynamic(() => import('@/components/animations/fade-in').then(mod => ({ default: mod.FadeIn })));
const ScaleIn = dynamic(() => import('@/components/animations/scale-in').then(mod => ({ default: mod.ScaleIn })));
const Calendar = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Calendar })));
const MeetingScheduler = dynamic(() => import('@/components/scheduler/meeting-scheduler').then(mod => ({ default: mod.MeetingScheduler })), { ssr: false });

export default function SchedulePage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = use(params);
  const t = useTranslations('schedule');

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <ScaleIn delay={0.4}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-soft" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
                <Calendar className="w-4 h-4" />
                {t('badge')}
              </span>
            </ScaleIn>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: 'var(--color-text)' }}>
            Coming{' '}
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Soon
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto font-medium" style={{ color: 'var(--color-muted)' }}>
            The meeting scheduler is currently under construction. Check back soon for the ability to schedule meetings directly!
          </p>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto">
        <FadeIn delay={1.0}>
          <div
            className="rounded-2xl shadow-strong overflow-hidden backdrop-blur-sm p-8 text-center"
            style={{ background: 'var(--gradient-card)', borderColor: 'var(--color-primary)' }}
          >
            <div className="py-12">
              <Calendar className="w-24 h-24 mx-auto mb-6 opacity-50" style={{ color: 'var(--color-primary)' }} />
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                Meeting Scheduler Coming Soon
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--color-muted)' }}>
                We&apos;re working on bringing you an easy way to schedule meetings. In the meantime, feel free to reach out directly!
              </p>
            </div>

            {/* Alternative Contact Section */}
            <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--card-border)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                Get in Touch
              </h3>
              <div className="space-y-3">
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  <strong style={{ color: 'var(--color-text)' }}>Email:</strong>{' '}
                  <a href={`mailto:${resumeData.personal.email}`} className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                    {resumeData.personal.email}
                  </a>
                </p>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  <strong style={{ color: 'var(--color-text)' }}>LinkedIn:</strong>{' '}
                  <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--color-primary)' }}>
                    Connect on LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
