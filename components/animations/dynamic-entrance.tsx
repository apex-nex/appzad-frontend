'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { getAnimationConfig, getEntranceVariant, getScreenData, getDeviceCapabilities } from '@/lib/animation-utils';

interface DynamicEntranceProps {
  children: ReactNode;
  index?: number;
  delay?: number;
  className?: string;
}

export function DynamicEntrance({ children, index = 0, delay = 0, className }: DynamicEntranceProps) {
  const [animationConfig, setAnimationConfig] = useState(getAnimationConfig());
  const [screenData, setScreenData] = useState(getScreenData());
  const [variant, setVariant] = useState('slideUp');

  useEffect(() => {
    const updateAnimations = () => {
      setAnimationConfig(getAnimationConfig());
      setScreenData(getScreenData());
      setVariant(getEntranceVariant(index, window.innerWidth));
    };

    updateAnimations();
    window.addEventListener('resize', updateAnimations);
    return () => window.removeEventListener('resize', updateAnimations);
  }, [index]);

  const variants = {
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { ...animationConfig, delay: delay + (index * animationConfig.stagger) }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { ...animationConfig, delay: delay + (index * animationConfig.stagger) }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { ...animationConfig, delay: delay + (index * animationConfig.stagger) }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { ...animationConfig, delay: delay + (index * animationConfig.stagger) }
      }
    },
    rotate: {
      hidden: { opacity: 0, rotate: -15, scale: 0.9 },
      visible: { 
        opacity: 1, 
        rotate: 0, 
        scale: 1,
        transition: { ...animationConfig, delay: delay + (index * animationConfig.stagger) }
      }
    },
    flip: {
      hidden: { opacity: 0, rotateY: -90 },
      visible: { 
        opacity: 1, 
        rotateY: 0,
        transition: { ...animationConfig, delay: delay + (index * animationConfig.stagger) }
      }
    },
    bounce: {
      hidden: { opacity: 0, y: -50, scale: 0.3 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          ...animationConfig, 
          type: 'spring',
          stiffness: 500,
          damping: 15,
          delay: delay + (index * animationConfig.stagger) 
        }
      }
    },
    elastic: {
      hidden: { opacity: 0, scale: 0, rotate: 180 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        transition: { 
          ...animationConfig, 
          type: 'spring',
          stiffness: 300,
          damping: 10,
          delay: delay + (index * animationConfig.stagger) 
        }
      }
    }
  };

  const selectedVariant = variants[variant as keyof typeof variants];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      // @ts-expect-error - framer-motion types are incompatible with transition union types
      variants={selectedVariant}
    >
      {children}
    </motion.div>
  );
}