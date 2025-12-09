import React from 'react';

interface ExpertiseIconProps {
  id: string;
  color: string;
  className?: string;
}

const ExpertiseIcon: React.FC<ExpertiseIconProps> = ({ id, color, className = '' }) => {
  // Color mapping for gradients
  const colors: Record<string, { start: string; end: string; accent: string }> = {
    cyan: { start: '#00f3ff', end: '#0088ff', accent: '#aeeeff' },
    orange: { start: '#FF3D00', end: '#ff9100', accent: '#ffccbc' },
    purple: { start: '#7e22ce', end: '#d946ef', accent: '#e9d5ff' },
    green: { start: '#22c55e', end: '#4ade80', accent: '#bbf7d0' },
  };

  const c = colors[color] || colors.cyan;
  const uniqueId = `icon-${id}`;

  const renderIcon = () => {
    switch (id) {
      case 'ai-arch': // AI Agent Architecture - Central Node Cluster
        return (
          <g transform="translate(32, 32)">
            {/* Base Grid */}
            <path d="M0 20 L20 10 L0 0 L-20 10 Z" fill="url(#gradB)" opacity="0.3" transform="translate(0, 15)" />
            {/* Central Cube */}
            <path d="M-10 -5 L10 -5 L10 15 L-10 15 Z" fill={c.start} opacity="0.8" />
            <path d="M-10 -5 L0 -15 L10 -5" fill={c.end} opacity="0.9" />
            <path d="M10 15 L20 5 L20 -15 L10 -5" fill={c.start} opacity="0.6" />
            {/* Satellite Nodes */}
            <circle cx="20" cy="-10" r="3" fill={c.accent} className="animate-pulse" />
            <circle cx="-20" cy="5" r="3" fill={c.accent} className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="0" cy="25" r="3" fill={c.accent} className="animate-pulse" style={{ animationDelay: '1s' }} />
            {/* Connections */}
            <path d="M10 -5 L20 -10" stroke={c.accent} strokeWidth="1" opacity="0.5" />
            <path d="M-10 5 L-20 5" stroke={c.accent} strokeWidth="1" opacity="0.5" />
            <path d="M0 15 L0 25" stroke={c.accent} strokeWidth="1" opacity="0.5" />
          </g>
        );
      
      case 'gen-ai': // Conversational AI - Waveform Sphere
        return (
          <g transform="translate(32, 32)">
            <defs>
              <filter id="glow-sphere">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Abstract Brain/Wave */}
            <path d="M-20 0 Q-10 -20 0 0 T20 0" stroke={c.start} strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M-20 0 Q-10 20 0 0 T20 0" stroke={c.end} strokeWidth="2" fill="none" opacity="0.5" />
            
            <circle cx="0" cy="0" r="12" fill="url(#gradA)" opacity="0.2" />
            <circle cx="0" cy="0" r="8" fill={c.start} opacity="0.8" filter="url(#glow-sphere)" />
            
            {/* Orbital Rings */}
            <ellipse cx="0" cy="0" rx="22" ry="8" stroke={c.accent} strokeWidth="0.5" fill="none" transform="rotate(45)" opacity="0.6" />
            <ellipse cx="0" cy="0" rx="22" ry="8" stroke={c.accent} strokeWidth="0.5" fill="none" transform="rotate(-45)" opacity="0.6" />
          </g>
        );

      case 'fullstack': // Modern Full Stack - Isometric Layers
        return (
          <g transform="translate(32, 28)">
            {/* Bottom Layer */}
            <path d="M-20 10 L0 20 L20 10 L0 0 Z" fill={c.end} opacity="0.4" transform="translate(0, 16)" />
            {/* Middle Layer */}
            <path d="M-20 10 L0 20 L20 10 L0 0 Z" fill={c.start} opacity="0.7" transform="translate(0, 8)" />
            {/* Top Layer */}
            <path d="M-20 10 L0 20 L20 10 L0 0 Z" fill={c.accent} opacity="0.9" transform="translate(0, 0)" />
            {/* Floating Highlight */}
            <path d="M-20 10 L-20 5" stroke={c.accent} strokeWidth="1" opacity="0.5" />
            <path d="M20 10 L20 5" stroke={c.accent} strokeWidth="1" opacity="0.5" />
            <path d="M0 20 L0 25" stroke={c.accent} strokeWidth="1" opacity="0.5" />
          </g>
        );

      case 'cloud': // Cloud & DevOps - Hex Cloud
        return (
          <g transform="translate(32, 32)">
            {/* Hexagons */}
            <path d="M-10 -15 L5 -15 L12 -5 L5 5 L-10 5 L-17 -5 Z" stroke={c.start} strokeWidth="1.5" fill={c.start} fillOpacity="0.1" />
            <path d="M5 -5 L20 -5 L27 5 L20 15 L5 15 L-2 5 Z" stroke={c.end} strokeWidth="1.5" fill={c.end} fillOpacity="0.1" transform="translate(-5, 5)" />
            <path d="M-15 0 L0 0 L7 10 L0 20 L-15 20 L-22 10 Z" stroke={c.accent} strokeWidth="1.5" fill={c.accent} fillOpacity="0.1" transform="translate(5, 5)" />
            {/* Data Dots */}
            <circle cx="-5" cy="-5" r="2" fill={c.accent} />
            <circle cx="10" cy="10" r="2" fill={c.accent} />
          </g>
        );

      case 'ops': // Business Logic - Circuit Flow
        return (
          <g transform="translate(32, 32)">
             <path d="M-20 -10 L-10 -10 L-5 0 L10 0 L15 10 L25 10" stroke={c.start} strokeWidth="3" fill="none" strokeLinecap="round" />
             <path d="M-20 10 L-10 10 L-5 0" stroke={c.end} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
             
             <circle cx="-5" cy="0" r="5" fill="#000" stroke={c.accent} strokeWidth="2" />
             <circle cx="25" cy="10" r="3" fill={c.accent} />
             <circle cx="-20" cy="-10" r="3" fill={c.start} />
             <circle cx="-20" cy="10" r="3" fill={c.end} />
          </g>
        );

      case 'web3': // Web3 - Tesseract/Block
        return (
          <g transform="translate(32, 32)">
             {/* Outer Cube */}
             <rect x="-15" y="-15" width="30" height="30" rx="4" stroke={c.start} strokeWidth="2" fill="none" />
             {/* Inner Cube */}
             <rect x="-8" y="-8" width="16" height="16" rx="2" fill={c.end} opacity="0.8" />
             {/* Connection Lines */}
             <path d="M-15 -15 L-8 -8" stroke={c.accent} strokeWidth="1" />
             <path d="M15 -15 L8 -8" stroke={c.accent} strokeWidth="1" />
             <path d="M15 15 L8 8" stroke={c.accent} strokeWidth="1" />
             <path d="M-15 15 L-8 8" stroke={c.accent} strokeWidth="1" />
          </g>
        );
        
      default:
        return <circle cx="32" cy="32" r="10" fill={c.start} />;
    }
  };

  return (
    <svg 
      viewBox="0 0 64 64" 
      className={`w-full h-full ${className}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`gradA-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.start} />
          <stop offset="100%" stopColor={c.end} />
        </linearGradient>
        <linearGradient id={`gradB-${uniqueId}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={c.accent} stopOpacity="0" />
          <stop offset="100%" stopColor={c.accent} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {renderIcon()}
    </svg>
  );
};

export default ExpertiseIcon;