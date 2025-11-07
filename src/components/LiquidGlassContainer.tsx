'use client';

import clsx from 'clsx';
import type { ReactNode } from 'react';

interface LiquidGlassContainerProps {
  children: ReactNode;
  className?: string;
  roundedClass?: string; // Tailwind rounded class, e.g. 'rounded-2xl' or 'rounded-[28px]' or 'rounded-full'
  intensity?: 'low' | 'medium' | 'high';
  border?: 'subtle' | 'normal';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export default function LiquidGlassContainer({
  children,
  className,
  roundedClass = 'rounded-2xl',
  intensity = 'medium',
  border = 'subtle',
  shadow = 'lg',
}: LiquidGlassContainerProps) {
  const intensityClasses =
    intensity === 'high'
      ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-3xl'
      : intensity === 'low'
      ? 'bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm'
      : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg';

  const borderClasses =
    border === 'subtle'
      ? 'border border-white/20 dark:border-gray-800/30'
      : 'border border-white/30 dark:border-gray-700/40';

  const shadowMap: Record<string, string> = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };

  const classes = clsx(
    roundedClass,
    intensityClasses,
    borderClasses,
    shadowMap[shadow],
    className,
  );

  return <div className={classes}>{children}</div>;
}