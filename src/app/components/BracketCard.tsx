import React from 'react';

interface BracketCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function BracketCard({ children, className = '', hover = true }: BracketCardProps) {
  return (
    <div className={`relative bg-[#0B1422] border border-[#1A3047] p-6 transition-all duration-300 ${hover ? 'hover:border-[#00C8FF] hover:shadow-[0_0_30px_rgba(0,200,255,0.2)]' : ''} ${className}`}>
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00C8FF]"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00C8FF]"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00C8FF]"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00C8FF]"></div>
      
      {children}
    </div>
  );
}
