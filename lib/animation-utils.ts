'use client';

// Animation utility functions for device-specific optimizations
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') return { isHighPerformance: true, isMobile: false, prefersReducedMotion: false };
  
  const isHighPerformance = window.navigator.hardwareConcurrency >= 4;
  const isMobile = window.innerWidth < 768;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return { isHighPerformance, isMobile, prefersReducedMotion };
};

export const getScreenData = () => {
  if (typeof window === 'undefined') return { width: 1920, height: 1080, ratio: 16/9 };
  
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    ratio: window.innerWidth / window.innerHeight
  };
};

// Dynamic animation variants based on screen size and performance
export const getAnimationConfig = () => {
  const { isHighPerformance, isMobile, prefersReducedMotion } = getDeviceCapabilities();
  const { width } = getScreenData();
  
  if (prefersReducedMotion) {
    return {
      duration: 0.1,
      type: 'tween',
      ease: 'linear',
      stagger: 0.02
    };
  }
  
  if (isMobile) {
    return {
      duration: 0.4,
      type: 'spring',
      stiffness: 300,
      damping: 25,
      stagger: 0.08
    };
  }
  
  if (isHighPerformance) {
    return {
      duration: 0.6,
      type: 'spring',
      stiffness: 400,
      damping: 30,
      stagger: 0.1
    };
  }
  
  return {
    duration: 0.5,
    type: 'tween',
    ease: [0.4, 0, 0.2, 1],
    stagger: 0.1
  };
};

// Varied entrance animation types
export const getEntranceVariant = (index: number, screenWidth: number) => {
  const variants = [
    'slideUp',
    'slideLeft',
    'slideRight',
    'scale',
    'rotate',
    'flip',
    'bounce',
    'elastic'
  ];
  
  // Use different variants based on screen width and element index
  if (screenWidth < 640) {
    // Mobile: simpler animations
    return variants[index % 4]; // slideUp, slideLeft, slideRight, scale
  } else if (screenWidth < 1024) {
    // Tablet: moderate complexity
    return variants[index % 6];
  } else {
    // Desktop: full variety
    return variants[index % variants.length];
  }
};

// Interactive hover variants with modern effects
export const getHoverVariant = (element: string, isHighPerformance: boolean) => {
  const baseVariants = {
    card: {
      scale: 1.02,
      y: -8,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    },
    button: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
    },
    icon: {
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
    },
    text: {
      scale: 1.01,
      x: 4,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const enhancedVariants = {
    card: {
      scale: 1.03,
      y: -12,
      rotateX: 2,
      rotateY: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    button: {
      scale: 1.06,
      y: -3,
      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25
      }
    },
    icon: {
      scale: 1.25,
      rotate: 12,
      y: -3,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 15
      }
    },
    text: {
      scale: 1.02,
      x: 6,
      textShadow: '0 2px 8px rgba(0,0,0,0.08)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20
      }
    }
  };

  return isHighPerformance ? enhancedVariants[element as keyof typeof enhancedVariants] || enhancedVariants.card
                           : baseVariants[element as keyof typeof baseVariants] || baseVariants.card;
};