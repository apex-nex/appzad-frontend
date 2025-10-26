'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { ThemeSelector } from '@/components/theme-selector';
import { useTranslations } from 'next-intl';
import { NAV_ITEMS } from '@/lib/constants/navigation';
import { COMMON_INLINE_STYLES } from '@/lib/constants/styles';

interface MobileNavProps {
  lang: string;
}

export function MobileNav({ lang }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = NAV_ITEMS.map(item => ({
    href: item.href.replace('[lang]', lang),
    label: t(item.label)
  }));

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 transition-colors"
        style={COMMON_INLINE_STYLES.text}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-40">
          <nav
            className="px-6 py-4 space-y-3 backdrop-blur-md"
            style={{
              background: 'var(--color-surface)',
              borderTop: '1px solid var(--color-primary)'
            }}
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 font-medium rounded-lg transition-colors hover:bg-opacity-10"
                style={COMMON_INLINE_STYLES.text}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--color-primary)' }}>
              <div className="flex items-center space-x-3">
                {/* <GlassModeToggle /> */}
                <ThemeSelector />
              </div>
              <Link
                href={lang === 'en' ? '/fr' : '/en'}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300"
                style={COMMON_INLINE_STYLES.text}
                onClick={() => setIsOpen(false)}
                aria-label={`Switch to ${lang === 'en' ? 'French' : 'English'}`}
              >
                <Globe className="w-3 h-3" />
                {lang === 'en' ? 'FR' : 'EN'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}