import React from 'react';
import { Chip, ChipGroup } from './chip';

interface TechBadgeProps {
  tech: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function TechBadge({ tech, variant = 'secondary', size = 'sm', className = '' }: TechBadgeProps) {
  return (
    <Chip variant={variant} size={size} className={className}>
      {tech}
    </Chip>
  );
}

interface TechBadgeListProps {
  technologies: string[];
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function TechBadgeList({ technologies, variant = 'secondary', size = 'sm', className = '' }: TechBadgeListProps) {
  return (
    <ChipGroup className={className}>
      {technologies.map((tech) => (
        <TechBadge key={tech} tech={tech} variant={variant} size={size} />
      ))}
    </ChipGroup>
  );
}
