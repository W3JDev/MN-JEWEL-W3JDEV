import React, { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden
        bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10
        transition-all duration-500 ease-out
        ${hoverEffect ? 'hover:scale-[1.01] hover:border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : ''}
        ${className}
      `}
      // Performance Optimization: Explicitly tell browser to expect changes
      style={{ willChange: hoverEffect ? 'transform, opacity, box-shadow' : 'opacity' }}
    >
      {/* Spotlight Effect Layer */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;