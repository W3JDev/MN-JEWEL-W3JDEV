import React, { useEffect, useRef } from 'react';
import { STORY_CHAPTERS } from '../../constants';
import GlassCard from '../UI/GlassCard';
import SectionTitle from '../UI/SectionTitle';

declare const gsap: any;
declare const ScrollTrigger: any;

const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);

  const getGlowColor = (color: string) => {
    switch (color) {
      case 'cyan': return '#00f3ff';
      case 'orange': return '#FF3D00';
      case 'purple': return '#7e22ce';
      default: return '#ffffff';
    }
  };

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // --- Background Parallax (Subtle Depth) ---
      if (bg1Ref.current && bg2Ref.current) {
          gsap.to(bg1Ref.current, {
              y: '20%',
              ease: "none",
              scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.5
              }
          });
          gsap.to(bg2Ref.current, {
              y: '-20%',
              ease: "none",
              scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 2
              }
          });
      }

      // --- Line Draw Animation ---
      gsap.fromTo(lineRef.current,
        { height: '0%' },
        { 
          height: '100%',
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center+=100", // Start slightly later for better timing
            end: "bottom bottom-=100",
            scrub: 0.5
          }
        }
      );

      // --- Node & Visual Parallax ---
      const nodes = gsap.utils.toArray('.story-node');
      nodes.forEach((node: HTMLElement) => {
         const content = node.querySelector('.story-content');
         const visual = node.querySelector('.story-visual');
         const image = node.querySelector('img'); // Internal image
         const dot = node.querySelector('.story-dot');
         
         const tl = gsap.timeline({
             scrollTrigger: {
                 trigger: node,
                 start: "top 80%", // Trigger entrance a bit earlier
                 toggleActions: "play none none reverse"
             }
         });

         // Entrance Sequence
         tl.fromTo(dot, 
            { scale: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' }, 
            { scale: 1, boxShadow: '0 0 20px currentColor', duration: 0.8, ease: "elastic.out(1, 0.5)" }
         )
         .fromTo(content, 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
            "-=0.6"
         )
         .fromTo(visual, 
             { opacity: 0, scale: 0.95 },
             { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
             "-=0.6"
         );

         // Visual Container Parallax (Float)
         gsap.fromTo(visual, 
            { y: 50 },
            {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: node,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            }
         );

         // Internal Image Parallax (Window Effect)
         if (image) {
             gsap.fromTo(image,
                { scale: 1.1, yPercent: -5 },
                {
                    scale: 1.1,
                    yPercent: 5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: node,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.2
                    }
                }
             );
         }
      });
    }
  }, []);

  return (
    <section id="story" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
        
        {/* Ambient Background with Parallax Refs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div ref={bg1Ref} className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
            <div ref={bg2Ref} className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px]" />
        </div>

        <div ref={containerRef} className="relative max-w-7xl mx-auto px-6">
            
            <SectionTitle 
                eyebrow="CHRONOLOGICAL LOG"
                title={<span>System <span className="text-jewel">Evolution</span></span>}
                description="My journey from the high-pressure floor of hospitality to the high-precision world of AI architecture."
            />

            {/* TIMELINE SPINE */}
            <div className="absolute left-6 md:left-1/2 top-48 bottom-32 w-[2px] bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden">
                <div 
                    ref={lineRef} 
                    className="w-full bg-gradient-to-b from-[#00f3ff] via-[#FF3D00] to-[#7e22ce] origin-top rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                />
            </div>

            {/* CHAPTER NODES */}
            <div className="flex flex-col gap-32 relative z-10">
                {STORY_CHAPTERS.map((chapter, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                        <div 
                            key={chapter.id} 
                            className={`story-node flex flex-col md:flex-row items-center gap-8 md:gap-0 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* CONTENT */}
                            <div className={`w-full md:w-5/12 pl-12 md:pl-0 story-content ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                <GlassCard 
                                    className={`p-8 rounded-2xl border-l-4 ${isEven ? 'md:border-l-0 md:border-r-4' : ''} group`} 
                                    hoverEffect={true}
                                >
                                    <div className={`font-mono text-xs text-gray-500 mb-4 flex items-center gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <span className="uppercase tracking-widest text-[#00f3ff] opacity-80">{chapter.subtitle}</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10">LOG_0{chapter.id}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display transition-all">
                                        {chapter.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {chapter.description}
                                    </p>
                                </GlassCard>
                            </div>

                            {/* DOT */}
                            <div 
                                className="absolute left-6 md:left-1/2 w-4 h-4 md:-translate-x-1/2 flex items-center justify-center story-dot z-20" 
                                style={{ color: getGlowColor(chapter.color) }}
                            >
                                <div className="w-4 h-4 rounded-full bg-black border-2 border-current z-10 shadow-[0_0_15px_currentColor]" />
                                <div className="absolute w-8 h-8 rounded-full bg-current opacity-20 animate-ping" />
                            </div>
                            
                            {/* VISUAL */}
                            <div className={`w-full md:w-5/12 pl-12 md:pl-0 story-visual ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                                <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-[#050505] shadow-2xl aspect-video md:aspect-[4/3]">
                                    <img 
                                        src={chapter.image} 
                                        alt={chapter.title} 
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 will-change-transform"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/50" />
                                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/50" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
};

export default Story;