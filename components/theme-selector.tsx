'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { themes, getTheme, applyTheme, type Theme } from '@/lib/themes';
import { Button } from '@/components/ui/button';

export function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isGlassMode, setIsGlassMode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedThemeId = localStorage.getItem('theme-id') || 'purple';
    const theme = getTheme(savedThemeId);
    setCurrentTheme(theme);
    applyTheme(theme);
    
    // Check glass mode
    const savedGlassMode = localStorage.getItem('glass-mode') === 'true';
    setIsGlassMode(savedGlassMode);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme-id') {
        const newTheme = getTheme(e.newValue || 'purple');
        setCurrentTheme(newTheme);
      } else if (e.key === 'glass-mode') {
        setIsGlassMode(e.newValue === 'true');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem('theme-id', theme.id);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-2 sm:px-4"
          style={{ color: 'var(--color-text)' }}
        >
          <motion.div 
            className="w-5 h-5 flex items-center justify-center"
            animate={{ rotate: isOpen ? 360 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <currentTheme.icon className="w-4 h-4" />
          </motion.div>
          <span className="hidden sm:inline text-sm font-medium">{currentTheme.name}</span>
          <motion.svg
            className="h-4 w-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={dropdownRef}
              data-theme-dropdown
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`
                ${isMobile ? 'fixed top-20 left-4 right-4' : 'absolute right-0 mt-2'} 
                w-auto ${isMobile ? '' : 'w-64 max-w-[90vw]'} 
                rounded-xl shadow-2xl overflow-hidden z-[101]
              `}
              style={{
                maxHeight: '70vh',
                overflowY: 'auto',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-primary)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="p-2">
                <motion.div 
                  className="text-sm font-medium px-3 py-2 mb-1"
                  style={{ color: 'var(--color-muted)' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Choose Theme
                </motion.div>
                {themes.map((theme, index) => (
                  <motion.button
                    key={theme.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    whileHover={{ x: isMobile ? 0 : 4, scale: isMobile ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleThemeChange(theme)}
                    className="w-full flex items-center gap-3 px-3 py-3 sm:py-2.5 rounded-lg text-left transition-colors touch-manipulation"
                    style={{
                      background: currentTheme.id === theme.id 
                        ? 'var(--color-primary)' 
                        : 'transparent',
                      border: currentTheme.id === theme.id 
                        ? '2px solid var(--color-accent)' 
                        : '2px solid transparent',
                      color: currentTheme.id === theme.id ? 'white' : 'var(--color-text)'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="w-5 h-5 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: isMobile ? 1 : 1.2, rotate: isMobile ? 0 : 10 }}
                      >
                        <theme.icon className="w-4 h-4" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">
                          {theme.name}
                        </div>
                        <div 
                          className="text-xs truncate"
                          style={{ color: currentTheme.id === theme.id ? 'rgba(255, 255, 255, 0.8)' : 'var(--color-muted)' }}
                        >
                          {theme.description}
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto flex gap-1 flex-shrink-0">
                      <motion.div
                        className="w-3 h-3 rounded-full border border-white/30"
                        style={{ background: theme.colors.primary }}
                        whileHover={{ scale: isMobile ? 1 : 1.3 }}
                      />
                      <motion.div
                        className="w-3 h-3 rounded-full border border-white/30"
                        style={{ background: theme.colors.accent }}
                        whileHover={{ scale: isMobile ? 1 : 1.3 }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}