import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => setOpacity(0), 1800);
    const timer2 = setTimeout(() => setLoading(false), 2300);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className="fixed inset-0 bg-[#050505] z-[9999] flex justify-center items-center transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="text-center w-64">
        <div className="font-mono text-[#00f3ff] text-xl mb-4 animate-pulse">
          INITIALIZING SYSTEM...
        </div>
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#FF3D00] transition-all duration-[1500ms] ease-out w-full origin-left animate-[grow_1.5s_ease-out]"
          />
        </div>
      </div>
      <style>{`
        @keyframes grow {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loader;