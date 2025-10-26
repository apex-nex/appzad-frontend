'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';
import { getHoverVariant, getDeviceCapabilities } from '@/lib/animation-utils';

interface HoverCardProps {
  children: ReactNode;
  element?: 'card' | 'button' | 'icon' | 'text';
  scaleOnHover?: number;
  rotateOnHover?: number;
  className?: string;
}

export function HoverCard({ 
  children, 
  element = 'card',
  scaleOnHover, 
  rotateOnHover, 
  className = ''
}: HoverCardProps) {
  const [deviceCapabilities, setDeviceCapabilities] = useState(getDeviceCapabilities());
  
  useEffect(() => {
    const updateCapabilities = () => setDeviceCapabilities(getDeviceCapabilities());
    window.addEventListener('resize', updateCapabilities);
    return () => window.removeEventListener('resize', updateCapabilities);
  }, []);
  
  // Get device-specific hover variant
  const hoverVariant = getHoverVariant(element, deviceCapabilities.isHighPerformance);
  
  // Override with custom values if provided
  const finalHoverVariant = {
    ...hoverVariant,
    ...(scaleOnHover !== undefined && { scale: scaleOnHover }),
    ...(rotateOnHover !== undefined && { rotate: rotateOnHover })
  };
  
  // Respect user preference for reduced motion
  if (deviceCapabilities.prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }
  
  const tapVariant = deviceCapabilities.isMobile 
    ? { scale: 0.95 } 
    : { scale: 0.98 };
  
  return (
    <motion.div
      // @ts-expect-error - framer-motion type incompatibility with custom transition variants
      whileHover={finalHoverVariant}
      whileTap={tapVariant}
      transition={{
        duration: deviceCapabilities.isMobile ? 0.15 : 0.25,
        ease: [0.4, 0, 0.2, 1],
        type: deviceCapabilities.isHighPerformance ? 'spring' : 'tween',
        stiffness: 300,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}