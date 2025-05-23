import React from 'react';
import { Link } from 'react-router-dom';

interface RetroButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const RetroButton: React.FC<RetroButtonProps> = ({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  // Base classes for all button types
  const baseClasses = `
    font-mono inline-flex items-center justify-center transition-all duration-200
    border-2 shadow-retro active:translate-y-1 active:shadow-inner
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;

  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  // Variant classes
  const variantClasses = {
    primary: `
      bg-amber-100 dark:bg-zinc-800
      text-amber-900 dark:text-amber-400
      border-amber-800 dark:border-amber-600
      hover:bg-amber-800 hover:text-amber-100
      dark:hover:bg-amber-700 dark:hover:text-amber-100
    `,
    secondary: `
      bg-zinc-100 dark:bg-zinc-800
      text-zinc-800 dark:text-zinc-300
      border-zinc-600 dark:border-zinc-600
      hover:bg-zinc-700 hover:text-zinc-100
      dark:hover:bg-zinc-600 dark:hover:text-zinc-100
    `,
    neon: `
      bg-black dark:bg-black
      text-lime-400 dark:text-lime-400
      border-lime-500 dark:border-lime-500
      hover:bg-lime-900 hover:text-lime-300
      dark:hover:bg-lime-900 dark:hover:text-lime-300
      shadow-neon
    `,
  };

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  // Render as Link if 'to' prop is provided (internal link)
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  // Render as anchor if 'href' prop is provided (external link)
  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default RetroButton;