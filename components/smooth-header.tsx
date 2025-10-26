'use client';

import { useEffect, useState } from 'react';

export function SmoothHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500 ease-out"
      style={{
        background: scrolled
          ? 'var(--header-background-scrolled)'
          : 'var(--header-background)',
        backdropFilter: scrolled ? 'blur(40px)' : 'blur(32px)',
        WebkitBackdropFilter: scrolled ? 'blur(40px)' : 'blur(32px)',
        borderBottom: scrolled ? '1px solid var(--header-border)' : 'none',
        boxShadow: scrolled ? '0 2px 8px rgba(0, 0, 0, 0.06)' : 'none',
      }}
    >
      {children}
    </header>
  );
}
