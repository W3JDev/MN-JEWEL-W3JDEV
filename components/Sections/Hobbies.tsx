import React, { useEffect, useRef } from 'react';
import { HOBBIES } from '../../constants';
import GlassCard from '../UI/GlassCard';

declare const gsap: any;
declare const ScrollTrigger: any;

const Hobbies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      const cards = sectionRef.current?.querySelectorAll('.hobby-card');
      
      if (cards) {
        gsap.fromTo(cards,
          { 
            opacity: 0, 
            y: 50,
            rotation: 5 
          },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)", // Adds a slight overshoot/bounce for a premium feel
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
       {/* Floating background elements */}
       <div className="absolute top-10 left-10 text-white/5 text-9xl font-bold select-none pointer-events-none opacity-20 rotate-12">
        OFF
      </div>
      <div className="absolute bottom-10 right-10 text-white/5 text-9xl font-bold select-none pointer-events-none opacity-20 -rotate-12">
        LINE
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="font-display text-4xl font-bold mb-10 text-center">System Off-Line</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HOBBIES.map((hobby) => (
            <div key={hobby.label} className="hobby-card opacity-0">
              <GlassCard className="p-6 rounded-xl text-center group cursor-default h-full hover:bg-white/10 transition-colors">
                <span className={`material-symbols-outlined text-3xl mb-2 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 ${hobby.color}`}>
                  {hobby.icon}
                </span>
                <p className="font-bold text-sm text-gray-300">{hobby.label}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;