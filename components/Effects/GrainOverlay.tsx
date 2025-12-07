import React from 'react';

const GrainOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {/* Noise Filter */}
      <div 
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      {/* Vignette */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"
      />
    </div>
  );
};

export default GrainOverlay;