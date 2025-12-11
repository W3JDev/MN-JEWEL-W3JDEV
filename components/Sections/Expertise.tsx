import React, { useEffect, useRef } from 'react';
import { EXPERTISE_SKILLS, DUAL_EXPERTISE, TECH_STACK } from '../../constants';
import GlassCard from '../UI/GlassCard';
import SectionTitle from '../UI/SectionTitle';
import ExpertiseIcon from '../UI/ExpertiseIcon';

declare const gsap: any;
declare const ScrollTrigger: any;

const Expertise: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      const dualCards = containerRef.current?.querySelectorAll('.dual-card');
      if (dualCards) {
          gsap.fromTo(dualCards, 
            { y: 50, opacity: 0, scale: 0.95 },
            { 
              y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "power2.out",
              scrollTrigger: { trigger: containerRef.current, start: "top 70%" }
            }
          );
      }
      const skillCards = containerRef.current?.querySelectorAll('.skill-card');
      if (skillCards) {
        gsap.fromTo(skillCards,
            { y: 30, opacity: 0 },
            { 
              y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.2)",
              scrollTrigger: { trigger: ".skills-grid", start: "top 80%" }
            }
        );
      }
    }
  }, []);

  const getDualColorStyles = (color: string) => {
    return color === 'cyan' 
      ? 'border-[#00f3ff]/30 hover:border-[#00f3ff] shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]'
      : 'border-[#FF3D00]/30 hover:border-[#FF3D00] shadow-[0_0_15px_rgba(255,61,0,0.1)] hover:shadow-[0_0_30px_rgba(255,61,0,0.3)]';
  };

  return (
    <section id="expertise" ref={containerRef} className="py-32 relative overflow-hidden bg-transparent border-t border-white/5"> 
       {/* Background Animated Gradients */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7e22ce]/10 rounded-full blur-[100px] animate-[float_20s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#00f3ff]/10 rounded-full blur-[100px] animate-[float_25s_ease-in-out_infinite_reverse]" />
       </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Standardized Header */}
        <SectionTitle 
            eyebrow="TECHNICAL ARSENAL"
            title={<span>Dual <span className="text-jewel">Expertise</span></span>}
            description="Bridging the gap between Michelin-star operations and autonomous AI agents."
        />

        {/* --- DUAL HERO SECTION --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {DUAL_EXPERTISE.map((item) => (
            <div key={item.title} className="dual-card opacity-0 relative group h-full">
                <GlassCard 
                    className={`p-10 rounded-3xl relative overflow-hidden h-full !bg-black/40 backdrop-blur-xl ${getDualColorStyles(item.color)}`}
                    hoverEffect={false}
                >
                    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-all duration-700 transform group-hover:rotate-12 scale-150`}>
                        <span className={`material-symbols-outlined text-9xl ${item.color === 'cyan' ? 'text-[#00f3ff]' : 'text-[#FF3D00]'}`}>{item.icon}</span>
                    </div>
                    
                    <div className="relative z-10">
                        <div className={`inline-flex p-3 rounded-lg mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${item.color === 'cyan' ? 'bg-[#00f3ff]/10 text-[#00f3ff]' : 'bg-[#FF3D00]/10 text-[#FF3D00]'}`}>
                            <span className="material-symbols-outlined text-3xl drop-shadow-[0_0_5px_currentColor]">{item.icon}</span>
                        </div>
                        <h3 className="font-display text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                            {item.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {item.features.map(feature => (
                                <div key={feature} className="flex items-center gap-2 text-sm font-mono text-gray-400 group-hover:text-gray-200 transition-colors">
                                <span className={`w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor] ${item.color === 'cyan' ? 'bg-[#00f3ff]' : 'bg-[#FF3D00]'}`} />
                                {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </GlassCard>
            </div>
          ))}
        </div>

        {/* --- TECHNICAL GRID --- */}
        <div className="mb-20">
            <h3 className="font-mono text-xs text-gray-500 mb-8 uppercase tracking-widest border-b border-white/10 pb-2">Core Competencies</h3>
            <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_SKILLS.map((skill) => (
                <div key={skill.id} className="skill-card opacity-0">
                  <GlassCard className="p-8 rounded-2xl group cursor-default h-full !bg-white/[0.02] border border-white/10 hover:border-white/30" hoverEffect={true}>
                      {/* NEW: 3D SVG Icon */}
                      <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 shadow-inner">
                          <ExpertiseIcon id={skill.id} color={skill.color} className="w-10 h-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 font-display text-white">{skill.title}</h3>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{skill.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {skill.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5">
                                {tag}
                            </span>
                        ))}
                      </div>
                  </GlassCard>
                </div>
            ))}
            </div>
        </div>
        
        {/* --- RUNNING ICONS (TECH STACK MARQUEE) --- */}
        {/* UPDATED: Increased vertical padding and borders to match the requested 'white marked border' weight. */}
        <div className="relative py-12 md:py-16 border-y border-white/10 -mx-6 w-[calc(100%+3rem)] bg-black/30 backdrop-blur-md overflow-hidden shadow-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
            
            <div className="flex overflow-hidden group">
                {/* Loop duplicated for infinite effect */}
                {[1, 2, 3].map((iter) => (
                    <div key={iter} className="flex animate-[ticker_30s_linear_infinite] group-hover:[animation-play-state:paused] flex-shrink-0 items-center">
                        {TECH_STACK.map((tech, i) => (
                            <div key={`${iter}-${i}`} className="flex items-center gap-6 md:gap-8 px-8 md:px-12 opacity-60 hover:opacity-100 transition-all duration-300 cursor-default grayscale hover:grayscale-0 hover:scale-110 transform">
                                {/* SVG Logo from constants */}
                                {tech.logo && <img src={tech.logo} alt={tech.name} className="w-10 h-10 md:w-16 md:h-16 object-contain drop-shadow-xl" />}
                                
                                {/* HUGE TEXT AS REQUESTED */}
                                <span 
                                    className="text-3xl md:text-5xl font-bold font-display tracking-wide whitespace-nowrap" 
                                    style={{ color: tech.color }}
                                >
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>

      </div>
      
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
};

export default Expertise;