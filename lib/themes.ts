import { LucideIcon, Heart, Waves, Sunrise, TreePine, Moon, Sparkles } from 'lucide-react';

export interface Theme {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    surface: string;
    background: string;
    text: string;
    muted: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    hero: string;
    card: string;
  };
}

export const themes: Theme[] = [
  {
    id: 'purple',
    name: 'Purple Dream',
    icon: Heart,
    description: 'Elegant purple with soft gradients',
    colors: {
      primary: 'rgb(168, 85, 247)', // purple-500
      secondary: 'rgb(100, 116, 139)', // slate-500
      accent: 'rgb(14, 165, 233)', // sky-500
      surface: 'rgb(252, 247, 255)', // purple-50
      background: 'rgb(248, 250, 252)', // slate-50
      text: 'rgb(15, 23, 42)', // slate-900
      muted: 'rgb(100, 116, 139)', // slate-500
    },
    gradients: {
      primary: 'linear-gradient(135deg, rgb(168, 85, 247), rgb(147, 51, 234))',
      secondary: 'linear-gradient(135deg, rgb(252, 247, 255), rgb(243, 232, 255))',
      hero: 'linear-gradient(135deg, rgb(250, 245, 255), rgb(243, 232, 255), rgb(168, 85, 247, 0.1))',
      card: 'linear-gradient(135deg, rgb(254, 251, 255), rgb(249, 240, 255))',
    },
  },
  {
    id: 'ocean',
    name: 'Ocean Breeze',
    icon: Waves,
    description: 'Cool blues and teals like the ocean',
    colors: {
      primary: 'rgb(6, 182, 212)', // cyan-500
      secondary: 'rgb(71, 85, 105)', // slate-600
      accent: 'rgb(59, 130, 246)', // blue-500
      surface: 'rgb(240, 249, 255)', // cyan-50
      background: 'rgb(248, 250, 252)', // slate-50
      text: 'rgb(15, 23, 42)', // slate-900
      muted: 'rgb(71, 85, 105)', // slate-600
    },
    gradients: {
      primary: 'linear-gradient(135deg, rgb(6, 182, 212), rgb(8, 145, 178))',
      secondary: 'linear-gradient(135deg, rgb(240, 249, 255), rgb(207, 250, 254))',
      hero: 'linear-gradient(135deg, rgb(240, 249, 255), rgb(207, 250, 254), rgb(6, 182, 212, 0.1))',
      card: 'linear-gradient(135deg, rgb(254, 254, 255), rgb(236, 254, 255))',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset Glow',
    icon: Sunrise,
    description: 'Warm oranges and pinks like sunset',
    colors: {
      primary: 'rgb(249, 115, 22)', // orange-500
      secondary: 'rgb(120, 113, 108)', // stone-500
      accent: 'rgb(236, 72, 153)', // pink-500
      surface: 'rgb(255, 247, 237)', // orange-50
      background: 'rgb(250, 250, 249)', // stone-50
      text: 'rgb(28, 25, 23)', // stone-900
      muted: 'rgb(120, 113, 108)', // stone-500
    },
    gradients: {
      primary: 'linear-gradient(135deg, rgb(249, 115, 22), rgb(234, 88, 12))',
      secondary: 'linear-gradient(135deg, rgb(255, 247, 237), rgb(254, 215, 170))',
      hero: 'linear-gradient(135deg, rgb(255, 247, 237), rgb(254, 215, 170), rgb(249, 115, 22, 0.1))',
      card: 'linear-gradient(135deg, rgb(255, 255, 255), rgb(255, 237, 213))',
    },
  },
  {
    id: 'forest',
    name: 'Forest Green',
    icon: TreePine,
    description: 'Natural greens and earth tones',
    colors: {
      primary: 'rgb(34, 197, 94)', // green-500
      secondary: 'rgb(87, 83, 78)', // stone-600
      accent: 'rgb(168, 162, 158)', // stone-400
      surface: 'rgb(240, 253, 244)', // green-50
      background: 'rgb(250, 250, 249)', // stone-50
      text: 'rgb(28, 25, 23)', // stone-900
      muted: 'rgb(87, 83, 78)', // stone-600
    },
    gradients: {
      primary: 'linear-gradient(135deg, rgb(34, 197, 94), rgb(21, 128, 61))',
      secondary: 'linear-gradient(135deg, rgb(240, 253, 244), rgb(187, 247, 208))',
      hero: 'linear-gradient(135deg, rgb(240, 253, 244), rgb(187, 247, 208), rgb(34, 197, 94, 0.1))',
      card: 'linear-gradient(135deg, rgb(255, 255, 255), rgb(220, 252, 231))',
    },
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    icon: Moon,
    description: 'Sleek dark theme with purple accents',
    colors: {
      primary: 'rgb(147, 51, 234)', // purple-600
      secondary: 'rgb(148, 163, 184)', // slate-400
      accent: 'rgb(14, 165, 233)', // sky-500
      surface: 'rgb(30, 41, 59)', // slate-800
      background: 'rgb(15, 23, 42)', // slate-900
      text: 'rgb(248, 250, 252)', // slate-50
      muted: 'rgb(148, 163, 184)', // slate-400
    },
    gradients: {
      primary: 'linear-gradient(135deg, rgb(147, 51, 234), rgb(126, 34, 206))',
      secondary: 'linear-gradient(135deg, rgb(30, 41, 59), rgb(51, 65, 85))',
      hero: 'linear-gradient(135deg, rgb(15, 23, 42), rgb(30, 41, 59), rgb(147, 51, 234, 0.2))',
      card: 'linear-gradient(135deg, rgb(30, 41, 59), rgb(51, 65, 85))',
    },
  },
];

export const getTheme = (themeId: string): Theme => {
  return themes.find(theme => theme.id === themeId) || themes[0];
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;

  // Apply CSS custom properties
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-secondary', theme.colors.secondary);
  root.style.setProperty('--color-accent', theme.colors.accent);
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-background', theme.colors.background);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-muted', theme.colors.muted);

  // Apply gradients
  root.style.setProperty('--gradient-primary', theme.gradients.primary);
  root.style.setProperty('--gradient-secondary', theme.gradients.secondary);
  root.style.setProperty('--gradient-hero', theme.gradients.hero);
  root.style.setProperty('--gradient-card', theme.gradients.card);

  // Apply transparent header and card colors based on theme
  const isDarkTheme = theme.id === 'dark';

  // Extract RGB values from primary color for card border
  const primaryColor = theme.colors.primary.match(/\d+/g);
  const cardBorderColor = primaryColor
    ? `rgba(${primaryColor[0]}, ${primaryColor[1]}, ${primaryColor[2]}, 0.15)`
    : 'rgba(168, 85, 247, 0.15)';

  if (isDarkTheme) {
    root.style.setProperty('--header-background', 'rgba(15, 23, 42, 0.02)');
    root.style.setProperty('--header-background-scrolled', 'rgba(15, 23, 42, 0.5)');
    root.style.setProperty('--header-border', 'rgba(255, 255, 255, 0.08)');
    root.style.setProperty('--card-background', 'rgba(30, 41, 59, 0.4)');
    root.style.setProperty('--card-border', cardBorderColor);
  } else {
    root.style.setProperty('--header-background', 'rgba(255, 255, 255, 0.02)');
    root.style.setProperty('--header-background-scrolled', 'rgba(255, 255, 255, 0.5)');
    root.style.setProperty('--header-border', 'rgba(0, 0, 0, 0.08)');
    root.style.setProperty('--card-background', 'rgba(255, 255, 255, 0.4)');
    root.style.setProperty('--card-border', cardBorderColor);
  }

  // Handle theme classes (only dark mode, glass mode is handled separately)
  root.classList.remove('dark');

  if (theme.id === 'dark') {
    root.classList.add('dark');
  }
};

export const applyGlassMode = (isGlassMode: boolean) => {
  const root = document.documentElement;
  
  if (isGlassMode) {
    root.classList.add('liquid-glass');
  } else {
    root.classList.remove('liquid-glass');
  }
};