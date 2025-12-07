import React, { useEffect, useRef, useState } from 'react';
import { STORY_CHAPTERS } from '../../constants';
import GlassCard from '../UI/GlassCard';

declare const gsap: any;
declare const ScrollTrigger: any;

const Story: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      const chapters = sectionRef.current?.querySelectorAll('.story-chapter');
      
      chapters?.forEach((chapter, index) => {
        ScrollTrigger.create({
          trigger: chapter,
          start: 'top 60%', // Trigger slightly earlier for smoother sync
          end: 'bottom 60%',
          onEnter: () => setActiveChapter(index),
          onEnterBack: () => setActiveChapter(index),
          // markers: true, // Uncomment for debugging
        });
      });

      // Force refresh to calculate positions correctly after render
      ScrollTrigger.refresh();
    }

    return () => {
        // Cleanup triggers on unmount
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <section id="story" ref={sectionRef} className="relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row items-start relative">
          
          {/* Sticky Left Side (Visuals) */}
          <div className="hidden md:flex w-1/2 sticky top-0 h-screen py-20 flex-col justify-center z-10 pointer-events-none">
             {/* 
                Image Container 
                - Added fallback bg-gray-900 to prevent "empty" void if image is slow
                - Removed potential overflow clipping
             */}
             <div className="relative w-full aspect-square max-h-[600px] rounded-[2rem] overflow-hidden border border-white/10 bg-gray-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                {/* Stacked Images for Cross-fade */}
                {STORY_CHAPTERS.map((chapter, index) => {
                   const isActive = activeChapter === index;
                   return (
                     <div 
                        key={chapter.id}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                        }`}
                     >
                        <img 
                            src={chapter.image} 
                            alt={chapter.title} 
                            className="w-full h-full object-cover filter brightness-[0.8] contrast-125"
                        />
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                        
                        {/* Dynamic Overlay Text on Image */}
                         <div className={`absolute bottom-8 left-8 right-8 transform transition-all duration-700 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`w-2 h-2 rounded-full ${
                                    chapter.color === 'cyan' ? 'bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]' :
                                    chapter.color === 'orange' ? 'bg-[#FF3D00] shadow-[0_0_10px_#FF3D00]' :
                                    'bg-[#7e22ce] shadow-[0_0_10px_#7e22ce]'
                                }`}></span>
                                <span className="font-mono text-xs text-gray-300 tracking-widest uppercase">
                                    0{chapter.id} // {chapter.subtitle}
                                </span>
                            </div>
                        </div>
                     </div>
                   );
                })}
             </div>
          </div>

          {/* Scrolling Right Side (Text) */}
          <div className="w-full md:w-1/2 relative z-10">
            {STORY_CHAPTERS.map((chapter, index) => (
              <div 
                key={chapter.id} 
                className="story-chapter min-h-screen flex flex-col justify-center px-4 md:px-16 py-24"
              >
                 {/* Text Content Block */}
                 <div className={`transition-all duration-700 ease-out transform ${
                    activeChapter === index ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-0 blur-[2px]'
                 }`}>
                    {/* Mobile Only Image */}
                    <div className="md:hidden mb-8 aspect-video rounded-xl overflow-hidden relative border border-white/10 bg-gray-900">
                         <img src={chapter.image} className="w-full h-full object-cover" alt={chapter.title} />
                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <span className={`h-[1px] w-12 ${
                            chapter.color === 'cyan' ? 'bg-[#00f3ff]' :
                            chapter.color === 'orange' ? 'bg-[#FF3D00]' : 'bg-[#7e22ce]'
                        }`}></span>
                        <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">{chapter.subtitle}</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-[0.9] text-white">
                        {chapter.title}
                    </h2>
                    
                    <GlassCard className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border-white/10" hoverEffect={false}>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                            {chapter.description}
                        </p>
                    </GlassCard>
                 </div>
              </div>
            ))}
            
            {/* Spacer to ensure last item clears nicely */}
            <div className="h-[20vh]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;