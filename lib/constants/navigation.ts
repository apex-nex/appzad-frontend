export const NAV_ITEMS = [
  { href: '/[lang]', label: 'home' },
  { href: '/[lang]/services', label: 'services' },
  { href: '/[lang]/projects', label: 'projects' },
  { href: '/[lang]/about', label: 'about' },
  { href: '/[lang]/contact', label: 'contact' },
] as const;

export type NavItem = typeof NAV_ITEMS[number];
