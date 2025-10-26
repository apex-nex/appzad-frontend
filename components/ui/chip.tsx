import React from 'react';
import { cn } from '@/lib/utils';
import { THEME_GRADIENTS } from '@/lib/constants/styles';

export type ChipVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'outline' | 'ghost';
export type ChipSize = 'sm' | 'md' | 'lg';

interface ChipProps {
  children: React.ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  color?: string;
  icon?: React.ReactNode;
  onRemove?: () => void;
  clickable?: boolean;
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles: Record<ChipVariant, string> = {
  primary: 'chip-primary',
  secondary: 'chip-secondary',
  accent: 'chip-accent',
  success: 'chip-success',
  warning: 'chip-warning',
  info: 'chip-info',
  outline: 'chip-outline',
  ghost: 'chip-ghost',
};

const sizeStyles: Record<ChipSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export function Chip({
  children,
  variant = 'primary',
  size = 'md',
  color,
  icon,
  onRemove,
  clickable = false,
  animated = true,
  className = '',
  style,
}: ChipProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-300';
  const hoverStyles = animated ? 'hover:scale-105 hover:shadow-md' : '';
  const cursorStyle = clickable || onRemove ? 'cursor-pointer' : '';

  const customStyle = color
    ? {
        background: THEME_GRADIENTS.secondary,
        color: color,
        border: `1px solid ${color}`,
        ...style,
      }
    : style;

  return (
    <span
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        hoverStyles,
        cursorStyle,
        className
      )}
      style={customStyle}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
          aria-label="Remove"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
}

// Chip Group component for displaying multiple chips
interface ChipGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function ChipGroup({ children, className = '' }: ChipGroupProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {children}
    </div>
  );
}
