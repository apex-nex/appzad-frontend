'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { applyGlassMode } from '@/lib/themes';
import { Sparkles, Sun } from 'lucide-react';

export function GlassModeToggle() {
  const [isGlassMode, setIsGlassMode] = useState(false);

  useEffect(() => {
    const savedGlassMode = localStorage.getItem('glass-mode') === 'true';
    setIsGlassMode(savedGlassMode);
    applyGlassMode(savedGlassMode);
  }, []);

  const toggleGlassMode = () => {
    const newGlassMode = !isGlassMode;
    setIsGlassMode(newGlassMode);
    applyGlassMode(newGlassMode);
    localStorage.setItem('glass-mode', newGlassMode.toString());
    
    // Trigger storage event to update other components
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'glass-mode',
      newValue: newGlassMode.toString()
    }));
  };

  return (
    <motion.button
      onClick={toggleGlassMode}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden rounded-full p-2 transition-all duration-300
        ${isGlassMode 
          ? 'bg-white/20 border border-white/30 backdrop-blur-md shadow-lg' 
          : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'
        }
      `}
      style={{
        backdropFilter: isGlassMode ? 'blur(20px)' : 'none',
        color: isGlassMode ? 'rgba(255,255,255,0.9)' : 'var(--color-text)'
      }}
      title={isGlassMode ? 'Switch to Normal Mode' : 'Switch to Glass Mode'}
    >
      <motion.div
        animate={{ rotate: isGlassMode ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-6 h-6 flex items-center justify-center"
      >
        {isGlassMode ? (
          <Sparkles className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </motion.div>
      
      {/* Glass effect overlay */}
      {isGlassMode && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(255,255,255,0.1)'
          }}
        />
      )}
    </motion.button>
  );
}