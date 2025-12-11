import React, { useEffect, useState } from 'react';
import GlassCard from './GlassCard';
import { Project } from '../../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  mode: 'demo' | 'case-study';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project, mode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      // Simulate connection time only for demo, faster for case study
      const timer = setTimeout(() => {
        setLoading(false);
      }, mode === 'demo' ? 1500 : 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen, mode]);

  if (!isOpen || !project) return null;

  // Pre-calculate classes to avoid TSX parsing issues with complex template literals
  const modalSizeClass = mode === 'case-study' ? 'max-w-5xl h-[90vh]' : 'max-w-4xl h-[70vh]';
  const spinnerBorderClass = mode === 'demo' ? 'border-[#00f3ff]' : 'border-[#FF3D00]';
  const spinnerTextClass = mode === 'demo' ? 'text-[#00f3ff]' : 'text-[#FF3D00]';
  const loadingText = mode === 'demo' ? 'ESTABLISHING SECURE CONNECTION...' : 'DECRYPTING ARCHIVE...';
  const headerText = mode === 'demo' ? `LIVE_ENV :: ${project.title}` : `ARCHIVE_LOG :: ${project.title}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      <GlassCard 
        className={`w-full ${modalSizeClass} relative rounded-2xl flex flex-col overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl transition-all duration-500`} 
        hoverEffect={false}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/60 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            <span className="font-mono text-xs md:text-sm text-gray-400">
                {headerText}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden">
          
          {loading ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505]">
                <div className={`w-12 h-12 border-4 ${spinnerBorderClass} border-t-transparent rounded-full animate-spin mx-auto mb-4`} />
                <p className={`font-mono text-xs ${spinnerTextClass} animate-pulse`}>
                    {loadingText}
                </p>
             </div>
          ) : (
             <div className="h-full overflow-y-auto custom-scrollbar">
                
                {/* --- DEMO MODE (TERMINAL STYLE) --- */}
                {mode === 'demo' && (
                    <div className="h-full flex flex-col items-center justify-center p-8 animate-[fadeIn_0.3s_ease-out]">
                         <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 animate-pulse">
                             <span className="material-symbols-outlined text-5xl text-[#00f3ff]">terminal</span>
                         </div>
                         <h3 className="text-3xl font-bold mb-2 font-display text-white">Interactive Simulation</h3>
                         <p className="text-gray-400 max-w-md text-center mb-8 font-light">
                             You are connected to a simulated live environment of <span className="text-white font-bold">{project.title}</span>. 
                             In a production setting, this would iframe the deployed application.
                         </p>
                         <div className="p-4 bg-black rounded border border-white/10 font-mono text-xs text-green-400 w-full max-w-lg">
                            <p>{'>'} Initializing viewport...</p>
                            <p>{'>'} Loading assets... [OK]</p>
                            <p>{'>'} Fetching API... {project.metric} improvement detected.</p>
                            <p className="animate-pulse">{'>'} WAITING FOR USER INPUT_</p>
                         </div>
                    </div>
                )}

                {/* --- CASE STUDY MODE (EDITORIAL STYLE) --- */}
                {mode === 'case-study' && (
                    <div className="p-8 md:p-12 animate-[fadeIn_0.5s_ease-out]">
                        
                        {/* Hero */}
                        <div className="mb-12 border-b border-white/10 pb-12">
                             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3D00]/10 border border-[#FF3D00]/20 text-[#FF3D00] text-xs font-mono mb-6">
                                CASE STUDY ID: {project.id.toUpperCase()}
                             </div>
                             <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                {project.title}
                             </h2>
                             <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl">
                                {project.description}
                             </p>
                        </div>

                        {/* Content Grid */}
                        {project.caseStudyContent ? (
                            <div className="grid md:grid-cols-12 gap-12">
                                
                                {/* Main Content */}
                                <div className="md:col-span-8 space-y-12">
                                    <section>
                                        <h3 className="text-[#FF3D00] font-mono text-sm tracking-widest mb-4 uppercase flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">crisis_alert</span> The Challenge
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {project.caseStudyContent.challenge}
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-[#00f3ff] font-mono text-sm tracking-widest mb-4 uppercase flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">build</span> The Solution
                                        </h3>
                                        <div className="p-6 bg-white/5 rounded-xl border-l-4 border-[#00f3ff] backdrop-blur-sm">
                                            <p className="text-gray-200 leading-relaxed text-lg">
                                                {project.caseStudyContent.solution}
                                            </p>
                                        </div>
                                    </section>
                                    
                                    <section>
                                         <h3 className="text-[#7e22ce] font-mono text-sm tracking-widest mb-4 uppercase flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">memory</span> Technical Deep Dive
                                        </h3>
                                        <p className="text-gray-400 font-mono text-sm leading-relaxed border border-white/10 p-6 rounded-lg bg-black/40">
                                            {project.caseStudyContent.techDeepDive}
                                        </p>
                                    </section>
                                </div>

                                {/* Sidebar / Stats */}
                                <div className="md:col-span-4 space-y-8">
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <h4 className="text-white font-bold mb-6 border-b border-white/10 pb-2">Key Outcomes</h4>
                                        <ul className="space-y-4">
                                            {project.caseStudyContent.results.map((result, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-gray-300">
                                                    <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <h4 className="text-white font-bold mb-4">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-black rounded border border-white/20 text-xs text-gray-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className="text-center py-20 text-gray-500 font-mono">
                                /// DATA CORRUPTED OR NOT FOUND ///
                            </div>
                        )}
                    </div>
                )}

             </div>
          )}
        </div>
      </GlassCard>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default Modal;