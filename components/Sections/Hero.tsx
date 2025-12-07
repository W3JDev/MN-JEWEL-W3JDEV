import React, { useEffect, useRef } from 'react';
import Button from '../UI/Button';
import GlitchText from '../UI/GlitchText';

// GSAP types not available in environment, declaring as any for visual logic
declare const gsap: any;

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined') {
      const tl = gsap.timeline();
      tl.fromTo(heroRef.current?.querySelectorAll('.hero-anim'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!contentRef.current || typeof gsap === 'undefined') return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate normalized mouse position (-1 to 1)
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;

    // Animate text elements with different intensities for parallax depth
    gsap.to(contentRef.current.querySelector('h1'), {
        x: x * 20,
        y: y * 20,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.to(contentRef.current.querySelector('.uvp-container'), {
        x: x * 10,
        y: y * 10,
        duration: 1,
        ease: 'power2.out'
    });
    
    gsap.to(contentRef.current.querySelector('.badge-container'), {
        x: x * 30,
        y: y * 30,
        duration: 1,
        ease: 'power2.out'
    });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
        className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20 overflow-hidden"
        onMouseMove={handleMouseMove}
    >
      
      {/* 3D Depth Glass Container */}
      <div className="relative z-10 max-w-6xl w-full">
        <div className="relative bg-[#050505]/50 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-12 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden group">
          
          {/* Inner Generative Noise/Texture */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          
          {/* BACKGROUND IMAGE - Fixed Visibility */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070" 
                alt="Circuit Background" 
                className="w-full h-full object-cover opacity-30 mix-blend-screen grayscale transition-transform duration-[2s] group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/40"></div>
          </div>

          <div ref={heroRef} className="text-center relative z-10">
             <div ref={contentRef}>
                {/* Status Badge */}
                <div className="badge-container hero-anim opacity-0 inline-flex items-center gap-3 mb-8 px-4 py-2 bg-black/60 rounded-full border border-green-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="font-mono text-[10px] md:text-xs tracking-widest text-gray-300 uppercase">
                      OPEN TO WORK <span className="mx-2 text-gray-600">|</span> <span className="text-white font-bold">ENTERPRISE AI ARCHITECT</span>
                  </span>
                </div>
                
                <h1 className="hero-anim opacity-0 font-display text-5xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter will-change-transform drop-shadow-2xl">
                From The Floor <br />
                To The <GlitchText text="Full Stack" />
                </h1>

                {/* UVP Statement */}
                <div className="uvp-container hero-anim opacity-0 w-full max-w-3xl mx-auto mb-10 will-change-transform">
                    <p className="font-display text-xl md:text-3xl text-gray-200 font-light leading-snug drop-shadow-lg">
                    Architecting digital solutions where <span className="text-[#FF3D00] font-bold">Michelin-star service</span> meets <span className="text-[#00f3ff] font-bold">machine learning precision</span>.
                    </p>
                </div>
            </div>

            {/* Gradient Line */}
            <div className="hero-anim opacity-0 w-32 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-10"></div>

            {/* Executive Summary TL;DR */}
            <div className="hero-anim opacity-0 font-mono text-gray-400 max-w-2xl mx-auto mb-12 text-xs md:text-sm tracking-wide leading-relaxed bg-black/40 border border-white/5 p-6 rounded-xl backdrop-blur-md">
               <p className="mb-2"><span className="text-[#00f3ff] font-bold">/// SYSTEM STATUS:</span></p>
               <p>
                 I transform <span className="text-white">champagne problems</span> into <span className="text-white">prosecco-budget fixes</span>. 
                 Specializing in <span className="text-[#FF3D00]">F&B Ops</span>, <span className="text-[#00f3ff]">Agentic AI</span>, and <span className="text-[#7e22ce]">Automation</span>.
                 Looking for high-impact roles in Digital Transformation.
               </p>
            </div>
            
            <div className="hero-anim opacity-0 flex flex-col md:flex-row gap-5 justify-center">
              <Button onClick={() => scrollTo('projects')} icon="bolt">
                View ROI Impact
              </Button>
              <Button variant="glass" onClick={() => scrollTo('contact')} icon="mail">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-black/20 backdrop-blur-md border-t border-white/5 py-4 overflow-hidden z-20">
        <div className="flex animate-[ticker_40s_linear_infinite] w-max">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-24 mx-12 font-mono text-xs text-gray-500 items-center tracking-widest">
              <span className="flex items-center gap-3"><span className="text-[#00f3ff] font-bold text-xl drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">95%</span> TIME SAVED (HR)</span>
              <span className="flex items-center gap-3"><span className="text-[#FF3D00] font-bold text-xl drop-shadow-[0_0_8px_rgba(255,61,0,0.5)]">300%</span> ROI (SALES)</span>
              <span className="flex items-center gap-3"><span className="text-[#7e22ce] font-bold text-xl">40%</span> FASTER ONBOARDING</span>
              <span className="flex items-center gap-3"><span className="text-white font-bold text-xl">10k+</span> HOURS OPS EXPERIENCE</span>
              <span className="flex items-center gap-3"><span className="text-[#00f3ff] font-bold text-xl">605%</span> SCENARIO COVERAGE</span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;