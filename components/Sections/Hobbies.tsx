import React, { useEffect, useRef } from 'react';
import { HOBBIES } from '../../constants';
import GlassCard from '../UI/GlassCard';
import SectionTitle from '../UI/SectionTitle';

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
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            }
          }
        );
      }
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-[#050505] border-t border-white/5">
       {/* Decorative Tech Elements */}
       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <SectionTitle 
            eyebrow="OFFLINE PROTOCOLS"
            title="Downtime"
            className="mb-16 md:mb-20"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {HOBBIES.map((hobby) => (
            <div key={hobby.label} className="hobby-card opacity-0 h-full">
              <GlassCard 
                className="p-6 rounded-lg text-center group cursor-default h-full bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300"
                hoverEffect={false}
              >
                <div className={`w-12 h-12 mx-auto rounded-full bg-black flex items-center justify-center mb-4 border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className={`material-symbols-outlined text-xl ${hobby.color} opacity-80 group-hover:opacity-100`}>
                    {hobby.icon}
                    </span>
                </div>
                <p className="font-display font-bold text-sm text-gray-300 group-hover:text-white tracking-wide">{hobby.label}</p>
                <div className="w-2 h-2 rounded-full bg-green-500/20 mx-auto mt-3">
                    <div className="w-full h-full rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;