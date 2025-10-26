'use client';

import { useSkills } from '@/hooks/useResumeData';
import { SectionContainer } from '@/components/common/section-container';
import { COMMON_INLINE_STYLES, THEME_GRADIENTS } from '@/lib/constants/styles';
import { Chip, ChipGroup } from '@/components/ui/chip';
import { StaggerItem } from '@/components/animations/stagger-container';
import { HoverCard } from '@/components/animations/hover-card';

const LoadingSkeleton = () => {
  const badgeWidths = ['80px', '100px', '90px', '110px', '85px', '95px'];

  return (
    <div className="space-y-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="p-6 rounded-xl animate-pulse" style={{ background: THEME_GRADIENTS.card }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-gray-300 dark:bg-gray-700 rounded-full" style={{ opacity: 0.3 }}></div>
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/3" style={{ opacity: 0.3 }}></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {badgeWidths.map((width, j) => (
              <div key={j} className="h-8 bg-gray-300 dark:bg-gray-700 rounded-lg" style={{ opacity: 0.3, width }}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export function SkillsSection() {
  const { data: skills, loading, error } = useSkills();

  const skillCategories = [
    { title: 'Frontend Frameworks', skills: skills?.frontendFrameworks || [], color: 'var(--color-primary)' },
    { title: 'Languages', skills: skills?.languages || [], color: 'var(--color-accent)' },
    { title: 'Styling', skills: skills?.styling || [], color: 'var(--color-secondary)' },
    { title: 'State Management', skills: skills?.stateManagement || [], color: 'var(--color-primary)' },
    { title: 'Tools & DevOps', skills: skills?.tools || [], color: 'var(--color-accent)' },
    { title: 'Methodologies', skills: skills?.methodologies || [], color: 'var(--color-secondary)' },
  ];

  return (
    <SectionContainer loading={loading} error={error} loadingSkeleton={<LoadingSkeleton />} className="space-y-6">
      {skillCategories.map((category, catIndex) => (
        <StaggerItem key={category.title} index={catIndex}>
          <HoverCard element="text">
            <div className="p-6 rounded-xl card-hover" style={{ background: THEME_GRADIENTS.card }}>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={COMMON_INLINE_STYLES.text}>
                <span className="w-1 h-6 rounded-full" style={{ background: category.color }}></span>
                {category.title}
              </h3>
              <ChipGroup>
                {category.skills.map((skill, idx) => (
                  <Chip
                    key={idx}
                    variant="secondary"
                    size="md"
                    color={category.color}
                    animated={true}
                  >
                    {skill}
                  </Chip>
                ))}
              </ChipGroup>
            </div>
          </HoverCard>
        </StaggerItem>
      ))}
    </SectionContainer>
  );
}
