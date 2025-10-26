'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 1.2,
  className = ''
}: ScaleInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: 'blur(4px)',
        scale: 0.98
      }}
      animate={{
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}