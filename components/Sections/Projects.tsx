import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../../constants';
import Button from '../UI/Button';
import SectionTitle from '../UI/SectionTitle';

// GSAP types
declare const gsap: any;
declare const ScrollTrigger: any;

interface ProjectsProps {
  onOpenModal: (projectTitle: string) => void;
  onOpenCaseStudy: (projectTitle: string) => void; // Added handler
}

const Projects: React.FC<ProjectsProps> = ({ onOpenModal, onOpenCaseStudy }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const cards = gsap.utils.toArray(".project-stack-card");
      
      cards.forEach((card: HTMLElement, i: number) => {
        const nextCard = cards[i + 1];
        if (nextCard) {
             ScrollTrigger.create({
                trigger: nextCard,
                start: "top bottom", 
                end: "top top",      
                scrub: 1, // Smoother scrubbing for weightier feel
                onUpdate: (self: any) => {
                    gsap.to(card, {
                        scale: 1 - (self.progress * 0.1), // Subtle scale down
                        opacity: 1 - (self.progress * 0.4), // Fade out slightly
                        filter: `brightness(${1 - (self.progress * 0.5)}) blur(${self.progress * 8}px)`, // Cinematic blur
                        y: -40 * self.progress,
                        overwrite: true,
                        ease: "power1.out"
                    });
                }
            });
        }
      });
    }
  }, []);

  const getAccentColor = (color: string) => {
    switch (color) {
      case 'cyan': return '#00f3ff';
      case 'orange': return '#FF3D00';
      case 'purple': return '#7e22ce';
      case 'green': return '#22c55e';
      default: return '#ffffff';
    }
  };

  return (
    <section id="projects" ref={containerRef} className="bg-black relative z-10 py-32 border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
            eyebrow="MISSION ARCHIVES"
            title={<span>Impact <span className="text-[#FF3D00]">Protocols</span></span>}
            description="Scroll to decrypt key mission archives. ROI-focused deployments across F&B and FinTech sectors."
        />
      </div>

      <div className="flex flex-col items-center w-full px-4 md:px-0 pb-40">
        {PROJECTS.map((project, index) => (
          <div 
            id={`project-${index}`}
            key={project.id} 
            className="project-stack-card sticky top-24 h-[85vh] w-full max-w-6xl flex items-center justify-center py-6 md:py-10 perspective-1000"
            style={{ zIndex: index + 1 }} 
          >
            {/* Card Container */}
            <div className="relative w-full h-full bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group transition-transform duration-700">
                
                {/* BACKGROUND VISION */}
                <div className="absolute inset-0 z-0 bg-black">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-50 transition-transform duration-[20s] ease-linear scale-100 group-hover:scale-125 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20" />
                </div>

                {/* CONTENT LAYER */}
                <div className="absolute inset-0 z-20 p-8 md:p-16 flex flex-col justify-end">
                    
                    <div className="grid md:grid-cols-12 gap-8 items-end">
                        {/* Title & Desc */}
                        <div className="md:col-span-8">
                             <div className="flex items-center gap-3 mb-6">
                                 <div 
                                    className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black flex items-center gap-2"
                                    style={{ backgroundColor: getAccentColor(project.metricColor) }}
                                 >
                                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                                    {project.metric} {project.metricLabel}
                                 </div>
                                 <span className="text-white/50 font-mono text-xs tracking-widest">/// {project.tags[0].toUpperCase()}</span>
                             </div>

                             <h3 className="font-display text-5xl md:text-8xl font-bold text-white mb-8 leading-[0.85] tracking-tighter drop-shadow-2xl">
                                {project.title}
                             </h3>

                             <div className="backdrop-blur-md bg-black/60 p-6 rounded-2xl border-l-4 border-white/20 max-w-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                                <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
                                    {project.description}
                                </p>
                             </div>
                        </div>

                        {/* Actions */}
                        <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6">
                             <div className="flex flex-wrap gap-2 justify-end">
                                 {project.tags.map(tag => (
                                     <span key={tag} className="px-3 py-1.5 border border-white/10 rounded-full bg-black/40 backdrop-blur-md text-xs text-gray-400 font-mono">
                                         {tag}
                                     </span>
                                 ))}
                             </div>
                             
                             <div className="flex items-center gap-4">
                                {/* Case Study Button - Launches INTERNAL modal */}
                                {(project.caseStudyContent || project.caseStudyLink) && (
                                   <div 
                                     className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-100"
                                   >
                                      <Button 
                                        variant="glass" 
                                        icon="menu_book"
                                        onClick={() => onOpenCaseStudy(project.title)} // New handler
                                        className="text-xs px-5 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border-white/20 text-gray-300 hover:text-white"
                                      >
                                        Case Study
                                      </Button>
                                   </div>
                                )}

                                <Button 
                                    onClick={() => onOpenModal(project.title)} 
                                    className="bg-white text-black hover:bg-gray-200"
                                    icon="visibility"
                                >
                                    Initialize Demo
                                </Button>
                             </div>
                        </div>
                    </div>

                </div>

            </div>
          </div>
        ))}
        
        {/* End Spacer */}
        <div className="h-[10vh] flex items-center justify-center opacity-50 mt-12">
            <p className="font-mono text-gray-600 animate-pulse text-xs tracking-[0.5em]">/// END ARCHIVE</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;