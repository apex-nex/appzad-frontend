import React, { ReactNode } from 'react';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { COMMON_INLINE_STYLES } from '@/lib/constants/styles';

interface SectionContainerProps {
  loading: boolean;
  error: string | null;
  loadingSkeleton?: ReactNode;
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function SectionContainer({
  loading,
  error,
  loadingSkeleton,
  children,
  staggerDelay = 0.1,
  className = '',
}: SectionContainerProps) {
  if (loading) {
    return loadingSkeleton ? (
      <>{loadingSkeleton}</>
    ) : (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={COMMON_INLINE_STYLES.text} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8" style={COMMON_INLINE_STYLES.text}>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <StaggerContainer staggerDelay={staggerDelay} className={className}>
      {children}
    </StaggerContainer>
  );
}
