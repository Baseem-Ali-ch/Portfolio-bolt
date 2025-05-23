import React from 'react';

interface RetroCardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'terminal';
  className?: string;
  hoverEffect?: boolean;
}

const RetroCard: React.FC<RetroCardProps> = ({
  children,
  variant = 'primary',
  className = '',
  hoverEffect = false,
}) => {
  // Base styles for all card variants
  const baseClasses = `
    border-2 p-4 relative overflow-hidden
    ${hoverEffect ? 'transition-all duration-300 transform hover:-translate-y-2' : ''}
  `;

  // Variant-specific styles
  const variantClasses = {
    primary: `
      bg-amber-50 dark:bg-zinc-900
      border-amber-800 dark:border-amber-700
      shadow-retro
    `,
    secondary: `
      bg-zinc-100 dark:bg-zinc-800
      border-zinc-600 dark:border-zinc-600
      shadow-retro-zinc
    `,
    terminal: `
      bg-black text-lime-400 
      border-lime-500
      font-mono shadow-neon
    `,
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Scanline effect for terminal variant */}
      {variant === 'terminal' && (
        <div className="absolute inset-0 pointer-events-none scanline-effect opacity-20"></div>
      )}
      {children}
    </div>
  );
};

export default RetroCard;