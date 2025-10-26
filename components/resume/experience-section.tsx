'use client';

import { useExperience } from '@/hooks/useResumeData';
import { SectionContainer } from '@/components/common/section-container';
import { TechBadgeList } from '@/components/ui/tech-badge';
import { formatDate } from '@/lib/utils/dateUtils';
import { COMMON_INLINE_STYLES, THEME_GRADIENTS } from '@/lib/constants/styles';
import { StaggerItem } from '@/components/animations/stagger-container';
import { HoverCard } from '@/components/animations/hover-card';
import { Building, MapPin, Calendar } from 'lucide-react';

const LoadingSkeleton = () => (
  <div className="space-y-6">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="pl-6 p-6 rounded-r-2xl animate-pulse"
        style={{
          borderLeft: '4px solid var(--color-primary)',
          background: THEME_GRADIENTS.card
        }}
      >
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4" style={{ opacity: 0.3 }}></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" style={{ opacity: 0.3 }}></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3" style={{ opacity: 0.3 }}></div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" style={{ opacity: 0.3 }}></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6" style={{ opacity: 0.3 }}></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-4/5" style={{ opacity: 0.3 }}></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((j) => (
            <div key={j} className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-20" style={{ opacity: 0.3 }}></div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export function ExperienceSection() {
  const { data: experience, loading, error } = useExperience();

  return (
    <SectionContainer loading={loading} error={error} loadingSkeleton={<LoadingSkeleton />} className="space-y-6">
      {experience?.map((exp, index) => (
        <StaggerItem key={exp.id} index={index}>
          <HoverCard element="text">
            <div
              className="pl-6 p-6 rounded-r-2xl card-hover"
              style={{
                borderLeft: `4px solid ${exp.current ? 'var(--color-primary)' : 'var(--color-secondary)'}`,
                background: THEME_GRADIENTS.card
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                {exp.current && (
                  <span className="inline-block w-3 h-3 rounded-full animate-pulse" style={{ background: 'var(--gradient-primary)' }}></span>
                )}
                {!exp.current && (
                  <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-secondary)' }}></span>
                )}
                <h3 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>{exp.position}</h3>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold flex items-center gap-2" style={{ color: exp.current ? 'var(--color-primary)' : 'var(--color-secondary)' }}>
                  <Building className="w-4 h-4" />
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-3 text-xs" style={COMMON_INLINE_STYLES.textMuted}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(exp.startDate, false)} - {formatDate(exp.endDate, exp.current)}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location} • {exp.workMode}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm leading-relaxed flex gap-2" style={COMMON_INLINE_STYLES.textMuted}>
                    <span style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <TechBadgeList technologies={exp.technologies} variant="secondary" />
            </div>
          </HoverCard>
        </StaggerItem>
      ))}
    </SectionContainer>
  );
}
