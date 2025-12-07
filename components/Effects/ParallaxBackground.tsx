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
        const direction = i % 2 === 0 ? 1 : -1;
        gsap.to(row, {
          x: direction * 200, // Move 200px left or right
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1
          }
        });
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex flex-col justify-center opacity-[0.03] select-none">
      <div className="parallax-text-row text-[15vh] md:text-[20vh] font-display font-bold whitespace-nowrap text-transparent stroke-text leading-none">
        ARCHITECT ENGINEER BUILDER ARCHITECT ENGINEER BUILDER
      </div>
      <div className="parallax-text-row text-[15vh] md:text-[20vh] font-display font-bold whitespace-nowrap text-transparent stroke-text leading-none ml-[-200px]">
        AUTOMATION DEFI AI AUTOMATION DEFI AI
      </div>
      <div className="parallax-text-row text-[15vh] md:text-[20vh] font-display font-bold whitespace-nowrap text-transparent stroke-text leading-none">
        SYSTEMS DESIGN SCALE SYSTEMS DESIGN SCALE
      </div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #fff;
        }
      `}</style>
    </div>
  );
};

export default ParallaxBackground;