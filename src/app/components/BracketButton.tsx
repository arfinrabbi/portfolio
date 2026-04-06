import React from 'react';

interface BracketButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function BracketButton({ children, variant = 'primary', onClick, className = '' }: BracketButtonProps) {
  const variantStyles = variant === 'primary' 
    ? 'bg-[#00C8FF] text-[#050A12] hover:bg-[#00B4E6] shadow-[0_0_20px_rgba(0,200,255,0.4)]'
    : 'bg-transparent border border-[#00C8FF] text-[#00C8FF] hover:bg-[#00C8FF]/10 shadow-[0_0_15px_rgba(0,200,255,0.3)]';

  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 font-['Rajdhani'] font-semibold tracking-wider uppercase transition-all duration-300 relative group ${variantStyles} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="text-lg">[</span>
        {children}
        <span className="text-lg">]</span>
      </span>
    </button>
  );
}
