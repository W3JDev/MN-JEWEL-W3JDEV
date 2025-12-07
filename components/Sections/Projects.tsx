import React, { useEffect } from 'react';
import { PROJECTS } from '../../constants';
import GlassCard from '../UI/GlassCard';

// GSAP types not available in environment
declare const gsap: any;
declare const ScrollTrigger: any;

interface ProjectsProps {
  onOpenModal: (projectTitle: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  
  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Parallax for Background Blobs
        gsap.utils.toArray('.project-bg-blob').forEach((blob: any, i: number) => {
            gsap.to(blob, {
                y: (i + 1) * 150, // Move blobs at different speeds
                ease: 'none',
                scrollTrigger: {
                    trigger: '#projects',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        });
    }
  }, []);

  const getGridClass = (index: number) => {
    if (index === 0) return 'md:col-span-2 md:row-span-2';
    if (index === 1) return 'md:col-span-1 md:row-span-2';
    return 'md:col-span-1 md:row-span-1';
  };

  const getGemstoneGradient = (color: string) => {
    const map: Record<string, string> = {
      cyan: 'from-[#00f3ff] via-[#ffffff] to-[#00f3ff]',
      orange: 'from-[#FF3D00] via-[#ffcc00] to-[#FF3D00]',
      purple: 'from-[#7e22ce] via-[#ff00ff] to-[#7e22ce]',
      green: 'from-[#00ff99] via-[#ccff00] to-[#00ff99]',
    };
    return map[color] || map.cyan;
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      
      {/* --- ATMOSPHERIC BACKGROUND BLOBS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="project-bg-blob absolute top-10 left-[-10%] w-[40rem] h-[40rem] bg-purple-900/10 rounded-full blur-[100px] mix-blend-screen" />
         <div className="project-bg-blob absolute bottom-0 right-[-10%] w-[35rem] h-[35rem] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
         <div className="project-bg-blob absolute top-[40%] left-[30%] w-[20rem] h-[20rem] bg-[#00f3ff]/5 rounded-full blur-[80px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-16">
            <div>
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
                Verifiable <span className="text-white opacity-50">Impact</span>
                </h2>
                <p className="font-mono text-gray-400 text-sm">/// QUANTIFIABLE RESULTS</p>
            </div>
            <div className="hidden md:block text-right">
                <p className="text-xs font-mono text-gray-500">HOVER TO DECRYPT</p>
            </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {PROJECTS.map((project, index) => (
            <div 
                key={project.id} 
                className={`group relative ${getGridClass(index)} cursor-default p-[1px] rounded-[1.6rem] overflow-hidden`} 
                data-hover="true"
            >
              {/* Iridescent Gemstone Border Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${getGemstoneGradient(project.metricColor)} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shine_3s_linear_infinite] bg-[length:200%_auto]`}></div>
              
              {/* Inner Card Card */}
              <GlassCard 
                className="h-full w-full rounded-3xl overflow-hidden relative !bg-[#050505] !border-transparent transition-all duration-500" 
                hoverEffect={false}
              >
                {/* Background Image - Zoom Effect */}
                <div className="absolute inset-0">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-30 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    
                    {/* Action Buttons (Hover Only) */}
                    <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                         <button onClick={() => onOpenModal(project.title)} className="bg-white text-black px-4 py-2 rounded-full font-bold text-xs hover:bg-gray-200 transition-colors">
                            LIVE DEMO
                         </button>
                         {project.repoLink && (
                             <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-black/50 border border-white/20 text-white px-3 py-2 rounded-full hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined text-sm">code</span>
                             </a>
                         )}
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                            <span className={`w-2 h-2 rounded-full bg-${project.metricColor === 'cyan' ? '[#00f3ff]' : project.metricColor === 'orange' ? '[#FF3D00]' : project.metricColor === 'green' ? 'green-400' : '[#7e22ce]'} shadow-[0_0_10px_currentColor]`}></span>
                            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">{project.metricLabel}</span>
                        </div>
                        
                        <h3 className="font-display text-3xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                        
                        {/* Metric Big Display */}
                        <div className={`text-5xl font-bold font-mono mb-4 text-transparent bg-clip-text bg-gradient-to-r ${getGemstoneGradient(project.metricColor)} opacity-100 transition-all duration-500 drop-shadow-lg`}>
                            {project.metric}
                        </div>

                        <p className="text-gray-300 text-sm line-clamp-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-black drop-shadow-md">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-[10px] px-2 py-1 border border-white/20 bg-black/50 rounded text-gray-300 uppercase backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
              </GlassCard>
            </div>
          ))}
          
           <div className="hidden md:flex md:col-span-1 md:row-span-1 items-center justify-center border border-dashed border-white/10 rounded-3xl p-8 text-center group hover:bg-white/5 transition-colors cursor-pointer" data-hover="true">
              <div>
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-gray-400">arrow_forward</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-300">View Archive</h3>
                  <p className="text-xs font-mono text-gray-600 mt-2">GITHUB REPO</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;