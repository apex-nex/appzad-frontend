'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 1.2,
  direction = 'up',
  className = ''
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: 'blur(4px)',
        y: 10
      }}
      animate={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth, elegant easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}