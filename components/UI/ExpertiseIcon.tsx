import React from 'react';

interface ExpertiseIconProps {
  id: string;
  color: string;
  className?: string;
}

const ExpertiseIcon: React.FC<ExpertiseIconProps> = ({ id, color, className = '' }) => {
  // Enhanced color palette for 3D depth
  const colors: Record<string, { start: string; end: string; face: string; edge: string; highlight: string }> = {
    cyan: { start: '#00f3ff', end: '#0088ff', face: 'rgba(0, 243, 255, 0.2)', edge: '#00f3ff', highlight: '#aeeeff' },
    orange: { start: '#FF3D00', end: '#ff9100', face: 'rgba(255, 61, 0, 0.2)', edge: '#FF3D00', highlight: '#ffccbc' },
    purple: { start: '#7e22ce', end: '#d946ef', face: 'rgba(126, 34, 206, 0.2)', edge: '#d946ef', highlight: '#e9d5ff' },
    green: { start: '#22c55e', end: '#4ade80', face: 'rgba(34, 197, 94, 0.2)', edge: '#4ade80', highlight: '#bbf7d0' },
  };

  const c = colors[color] || colors.cyan;
  const uniqueId = `icon-${id}`;

  const renderIcon = () => {
    switch (id) {
      case 'ai-arch': // AI Agent Architecture: Central Hub + Satellites
        return (
          <g transform="translate(32, 32)">
            {/* Defs for gradients */}
            <defs>
              <radialGradient id={`grad-hub-${uniqueId}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={c.highlight} stopOpacity="0.8" />
                <stop offset="100%" stopColor={c.start} stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Orbital Rings */}
            <ellipse cx="0" cy="0" rx="24" ry="8" stroke={c.edge} strokeWidth="0.5" fill="none" opacity="0.3" transform="rotate(-15)" />
            <ellipse cx="0" cy="0" rx="24" ry="8" stroke={c.edge} strokeWidth="0.5" fill="none" opacity="0.3" transform="rotate(45)" />

            {/* Connecting Lines */}
            <line x1="0" y1="0" x2="18" y2="-8" stroke={c.edge} strokeWidth="1" opacity="0.5" />
            <line x1="0" y1="0" x2="-14" y2="12" stroke={c.edge} strokeWidth="1" opacity="0.5" />
            <line x1="0" y1="0" x2="12" y2="14" stroke={c.edge} strokeWidth="1" opacity="0.5" />

            {/* Central Core (Octahedron-ish) */}
            <path d="M0 -10 L10 0 L0 10 L-10 0 Z" fill={c.face} stroke={c.edge} strokeWidth="1" />
            <path d="M0 -10 L0 10" stroke={c.edge} strokeWidth="0.5" opacity="0.5" />
            <path d="M-10 0 L10 0" stroke={c.edge} strokeWidth="0.5" opacity="0.5" />
            
            {/* Satellite Nodes */}
            <circle cx="18" cy="-8" r="3" fill={c.start} className="animate-pulse" />
            <circle cx="-14" cy="12" r="2.5" fill={c.end} className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="12" cy="14" r="2" fill={c.highlight} className="animate-pulse" style={{ animationDelay: '1s' }} />
          </g>
        );

      case 'gen-ai': // Conversational AI: Neural Sphere / Waveform
        return (
          <g transform="translate(32, 32)">
            {/* Outer Glow */}
            <circle cx="0" cy="0" r="16" fill={`url(#grad-glow-${uniqueId})`} opacity="0.4" />
            
            {/* Sound Waves / Neural Lines */}
            <path d="M-20 0 Q-10 -15 0 0 T20 0" stroke={c.start} strokeWidth="1.5" fill="none" opacity="0.6">
               <animate attributeName="d" values="M-20 0 Q-10 -15 0 0 T20 0;M-20 0 Q-10 15 0 0 T20 0;M-20 0 Q-10 -15 0 0 T20 0" dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M-15 5 Q0 20 15 5" stroke={c.end} strokeWidth="1.5" fill="none" opacity="0.6">
                <animate attributeName="d" values="M-15 5 Q0 20 15 5;M-15 5 Q0 -10 15 5;M-15 5 Q0 20 15 5" dur="3s" repeatCount="indefinite" />
            </path>

            {/* Central Brain/Chip */}
            <rect x="-8" y="-8" width="16" height="16" rx="4" fill={c.face} stroke={c.edge} strokeWidth="1.5" transform="rotate(45)" />
            <circle cx="0" cy="0" r="3" fill={c.highlight} />
            
            {/* Particles */}
            <circle cx="-12" cy="-12" r="1" fill={c.highlight} className="animate-ping" />
            <circle cx="12" cy="12" r="1" fill={c.highlight} className="animate-ping" style={{ animationDelay: '1s' }} />
          </g>
        );

      case 'fullstack': // Modern Full Stack: Floating Isometric Layers
        return (
          <g transform="translate(32, 26)">
            {/* Bottom Layer (Database) */}
            <path d="M0 24 L-16 16 L0 8 L16 16 Z" fill={c.face} stroke={c.end} strokeWidth="1" transform="translate(0, 8)" opacity="0.6" />
            <path d="M-16 24 L0 32 L16 24" fill="none" stroke={c.end} strokeWidth="1" opacity="0.6" /> {/* Thickness */}
            
            {/* Middle Layer (Logic) */}
            <path d="M0 16 L-16 8 L0 0 L16 8 Z" fill={c.face} stroke={c.start} strokeWidth="1" transform="translate(0, 4)" />
             
            {/* Top Layer (Frontend) */}
            <path d="M0 8 L-16 0 L0 -8 L16 0 Z" fill={c.highlight} fillOpacity="0.2" stroke={c.edge} strokeWidth="1.5" transform="translate(0, -4)" />
            
            {/* Connecting Beam */}
            <path d="M0 -4 L0 32" stroke={c.highlight} strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
          </g>
        );

      case 'cloud': // Cloud & DevOps: Hexagonal Infrastructure
        return (
          <g transform="translate(32, 34)">
            {/* Back Hex */}
            <path d="M-10 -15 L10 -15 L20 0 L10 15 L-10 15 L-20 0 Z" fill="none" stroke={c.end} strokeWidth="1" opacity="0.4" transform="translate(6, -6)" />
            
            {/* Main Hex Structure */}
            <path d="M0 -18 L16 -9 L16 9 L0 18 L-16 9 L-16 -9 Z" fill={c.face} stroke={c.edge} strokeWidth="1.5" />
            
            {/* Inner Y */}
            <path d="M0 0 L0 18 M0 0 L-16 -9 M0 0 L16 -9" stroke={c.edge} strokeWidth="1" opacity="0.7" />
            
            {/* Floating Data Packet */}
            <circle cx="0" cy="-24" r="3" fill={c.highlight}>
                 <animate attributeName="cy" values="-24;-14;-24" dur="3s" repeatCount="indefinite" />
            </circle>
            
            {/* Base Shadow */}
            <ellipse cx="0" cy="24" rx="10" ry="3" fill={c.start} opacity="0.3" />
          </g>
        );

      case 'ops': // Business Logic: Interlocking Gears / Flow
        return (
          <g transform="translate(32, 32)">
             {/* Gear 1 */}
             <g className="animate-[spin_10s_linear_infinite]">
                 <circle cx="-8" cy="-8" r="10" fill="none" stroke={c.start} strokeWidth="2" strokeDasharray="4 2" />
                 <circle cx="-8" cy="-8" r="4" fill={c.face} stroke={c.edge} />
             </g>
             
             {/* Gear 2 */}
             <g className="animate-[spin_10s_linear_infinite_reverse]">
                 <circle cx="10" cy="10" r="8" fill="none" stroke={c.end} strokeWidth="2" strokeDasharray="3 3" />
                 <circle cx="10" cy="10" r="3" fill={c.face} stroke={c.edge} />
             </g>

             {/* Connection Line */}
             <path d="M-5 -5 L7 7" stroke={c.highlight} strokeWidth="1.5" />
             
             {/* Process Nodes */}
             <rect x="16" y="-18" width="6" height="6" fill={c.highlight} opacity="0.8" />
             <rect x="-22" y="12" width="6" height="6" fill={c.highlight} opacity="0.8" />
             <path d="M22 -12 L28 -12 M25 -15 L25 -9" stroke={c.highlight} strokeWidth="1" />
          </g>
        );

      case 'web3': // Web3: Tesseract / Blockchain
        return (
          <g transform="translate(32, 32)">
            {/* Tesseract Structure */}
            <g transform="rotate(15)">
                {/* Outer Cube */}
                <rect x="-14" y="-14" width="28" height="28" fill="none" stroke={c.start} strokeWidth="1" opacity="0.5" />
                
                {/* Inner Cube */}
                <rect x="-6" y="-6" width="12" height="12" fill={c.face} stroke={c.highlight} strokeWidth="1.5" />
                
                {/* Connecting Lines */}
                <line x1="-14" y1="-14" x2="-6" y2="-6" stroke={c.edge} strokeWidth="0.5" />
                <line x1="14" y1="-14" x2="6" y2="-6" stroke={c.edge} strokeWidth="0.5" />
                <line x1="14" y1="14" x2="6" y2="6" stroke={c.edge} strokeWidth="0.5" />
                <line x1="-14" y1="14" x2="-6" y2="6" stroke={c.edge} strokeWidth="0.5" />
            </g>
            
            {/* Nodes on corners */}
            <circle cx="-12" cy="-16" r="2" fill={c.end} />
            <circle cx="16" cy="12" r="2" fill={c.end} />
            
            {/* Glowing Core */}
            <circle cx="0" cy="0" r="2" fill={c.highlight} className="animate-pulse" />
          </g>
        );
        
      default:
        return <circle cx="32" cy="32" r="10" fill={c.start} />;
    }
  };

  return (
    <svg 
      viewBox="0 0 64 64" 
      className={`w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] ${className}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`grad-glow-${uniqueId}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={c.start} stopOpacity="0.4" />
            <stop offset="100%" stopColor={c.start} stopOpacity="0" />
        </radialGradient>
      </defs>
      {renderIcon()}
    </svg>
  );
};

export default ExpertiseIcon;