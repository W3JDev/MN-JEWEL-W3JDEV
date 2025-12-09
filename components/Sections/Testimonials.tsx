import React, { useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../../constants';
import GlassCard from '../UI/GlassCard';
import SectionTitle from '../UI/SectionTitle';

declare const gsap: any;
declare const ScrollTrigger: any;

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const cards = containerRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(cards, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.2, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
             <SectionTitle 
                eyebrow="MISSION REPORTS"
                title="Field Intelligence"
                description="Operational outcomes and impact reports from deployed systems."
             />
             
             <div className="grid md:grid-cols-3 gap-8">
                 {TESTIMONIALS.map((t, i) => (
                     <div key={i} className="testimonial-card opacity-0 relative">
                         <span className="absolute -top-4 -left-2 text-6xl text-white/5 font-serif">"</span>
                         <GlassCard className="p-8 rounded-xl bg-[#0a0a0a]" hoverEffect={false}>
                             <p className="text-gray-300 mb-6 leading-relaxed italic relative z-10">
                                 {t.quote}
                             </p>
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold text-white/50">
                                     {t.name.charAt(0)}
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-sm text-white">{t.name}</h4>
                                     <p className="text-xs text-gray-500 font-mono">{t.role}</p>
                                 </div>
                             </div>
                         </GlassCard>
                     </div>
                 ))}
             </div>
        </div>
    </section>
  );
};

export default Testimonials;