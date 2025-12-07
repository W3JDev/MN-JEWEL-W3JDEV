import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div 
      className={`
        relative overflow-hidden
        bg-white/[0.03] backdrop-blur-xl border border-white/10
        transition-all duration-500 ease-out
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
        ${hoverEffect ? 'hover:scale-[1.01] hover:border-white/20' : ''}
        ${className}
      `}
    >
      {/* Iridescent shimmer overlay for the 'Jewel' feel */}
      <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transform -skew-x-12 translate-x-[-200%] transition-transform duration-1000 group-hover:translate-x-[200%]" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;