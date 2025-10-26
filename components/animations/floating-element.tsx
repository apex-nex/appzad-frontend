'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  intensity?: 'gentle' | 'medium' | 'strong';
  delay?: number;
}

export function FloatingElement({ 
  children, 
  className = '',
  intensity = 'gentle',
  delay = 0
}: FloatingElementProps) {
  const intensityConfig = {
    gentle: { y: [-5, 5], duration: 4 },
    medium: { y: [-10, 10], duration: 3 },
    strong: { y: [-15, 15], duration: 2.5 }
  };

  const config = intensityConfig[intensity];

  return (
    <motion.div
      animate={{
        y: config.y,
        rotate: [-2, 2],
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}