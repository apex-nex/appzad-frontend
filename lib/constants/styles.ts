// Theme color variables
export const THEME_COLORS = {
  text: 'var(--color-text)',
  textSecondary: 'var(--color-text-secondary)',
  muted: 'var(--color-muted)',
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  accent: 'var(--color-accent)',
  surface: 'var(--color-surface)',
  background: 'var(--color-background)',
  border: 'var(--color-border)',
} as const;

// Theme gradient variables
export const THEME_GRADIENTS = {
  primary: 'var(--gradient-primary)',
  secondary: 'var(--gradient-secondary)',
  card: 'var(--gradient-card)',
  hero: 'var(--gradient-hero)',
} as const;

// Common inline styles (for use with style prop)
export const COMMON_INLINE_STYLES = {
  text: { color: THEME_COLORS.text },
  textSecondary: { color: THEME_COLORS.textSecondary },
  textMuted: { color: THEME_COLORS.muted },
  primaryGradient: { background: THEME_GRADIENTS.primary },
  secondaryGradient: { background: THEME_GRADIENTS.secondary },
  cardGradient: { background: THEME_GRADIENTS.card },
} as const;

// Common Tailwind class combinations
export const TAILWIND_PATTERNS = {
  card: 'rounded-xl shadow-medium hover:shadow-strong transition-all duration-300',
  cardHover: 'hover:scale-[1.02]',
  flexCenter: 'flex items-center justify-center',
  badge: 'px-3 py-1 rounded-full text-sm',
  hoverScale: 'hover:scale-105 transition-transform duration-300',
  gradientText: 'bg-clip-text text-transparent',
} as const;
