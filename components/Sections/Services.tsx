import React, { useEffect, useRef } from 'react';
import { SERVICES } from '../../constants';
import GlassCard from '../UI/GlassCard';
import Button from '../UI/Button';
import SectionTitle from '../UI/SectionTitle';

declare const gsap: any;
declare const ScrollTrigger: any;

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      const cards = sectionRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(cards, 
            { y: 50, opacity: 0, rotateX: 10 },
            { 
              y: 0, 
              opacity: 1, 
              rotateX: 0,
              duration: 0.8, 
              stagger: 0.15, 
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
              }
            }
        );
      }
    }
  }, []);

  const getBorderColor = (color: string) => {
     const map: Record<string, string> = {
      cyan: 'group-hover:border-[#00f3ff]',
      orange: 'group-hover:border-[#FF3D00]',
      purple: 'group-hover:border-[#7e22ce]',
    };
    return map[color];
  };

  const getIconColor = (color: string) => {
    const map: Record<string, string> = {
      cyan: 'text-[#00f3ff]',
      orange: 'text-[#FF3D00]',
      purple: 'text-[#7e22ce]',
    };
    return map[color];
  };

  return (
    <section id="services" ref={sectionRef} className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            <SectionTitle 
                eyebrow="ENGAGEMENT MODELS"
                title="Service Protocols"
                description="I don't just 'write code'. I solve business problems. Choose the protocol that fits your mission."
            />

            <div className="grid md:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                    <div key={service.title} className="service-card opacity-0">
                        <GlassCard 
                            className={`p-8 rounded-2xl flex flex-col relative group border-t-4 border-t-transparent transition-all duration-300 ${getBorderColor(service.color)} hover:-translate-y-2`}
                        >
                             {/* Hover Glow Background */}
                             <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-${service.color === 'cyan' ? 'cyan-500' : service.color === 'orange' ? 'orange-500' : 'purple-500'}`} />

                             <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 text-3xl ${getIconColor(service.color)} transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                                <span className="material-symbols-outlined">{service.icon}</span>
                             </div>
                             
                             <h3 className="text-2xl font-display font-bold mb-2 z-10">{service.title}</h3>
                             <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-300 mb-6 w-fit border border-white/5 z-10">
                                /// {service.price.toUpperCase()}
                             </div>
                             
                             <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow z-10">
                                {service.description}
                             </p>

                             <ul className="space-y-4 mb-8 z-10">
                                {service.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300 font-mono">
                                        <span className={`material-symbols-outlined text-sm ${getIconColor(service.color)}`}>check</span>
                                        {feature}
                                    </li>
                                ))}
                             </ul>

                             <Button variant="glass" className="w-full group-hover:bg-white/10 z-10">
                                Discuss Scope
                             </Button>
                        </GlassCard>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;