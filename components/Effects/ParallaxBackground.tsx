import React, { useEffect, useRef } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const ParallaxBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const rows = containerRef.current?.querySelectorAll('.parallax-text-row');
      
      rows?.forEach((row, i) => {
        // Alternating direction for visual interest
        const direction = i % 2 === 0 ? 1 : -1;
        
        gsap.to(row, {
          x: direction * 200, 
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1 // Increased scrub for smoother inertia
          }
        });
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex flex-col justify-center select-none bg-black">
      
      {/* Premium Diagonal Layout */}
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-[0.03] transform -rotate-[15deg] scale-125 origin-center">
          {[...Array(8)].map((_, i) => (
             <div 
               key={i} 
               className={`parallax-text-row w-[200vw] text-center font-display font-bold whitespace-nowrap leading-none py-4 ${i % 2 === 0 ? 'text-white' : 'text-transparent stroke-text'}`}
               style={{ fontSize: '8vw' }}
             >
                 ARCHITECT /// ENGINEER /// BUILDER /// AUTOMATION /// DEFI /// AI /// OPS /// SCALE
             </div>
          ))}
      </div>

      {/* Radial Vignette Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]"></div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.5);
        }
      `}</style>
    </div>
  );
};

export default ParallaxBackground;