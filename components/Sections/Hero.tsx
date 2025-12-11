import React, { useEffect, useRef } from 'react';
import Button from '../UI/Button';
import GlitchText from '../UI/GlitchText';

// GSAP types not available in environment, declaring as any for visual logic
declare const gsap: any;

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  
  // Refs for Kinetic Text
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const line3Ref = useRef<HTMLHeadingElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined') {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // 1. Card Expansion Entrance
      tl.fromTo(cardRef.current, 
        { scale: 0.95, opacity: 0, rotateX: 5, y: 30 },
        { scale: 1, opacity: 1, rotateX: 0, y: 0, duration: 1.2, ease: 'expo.out' }
      );

      // 2. Status Badge Reveal
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.8"
      );

      // 3. Premium Text Reveal (Clip Path / Slide Up)
      const textElements = [line1Ref.current, line2Ref.current, line3Ref.current];
      
      // Ensure elements are visible before animating
      gsap.set(textElements, { opacity: 1 });

      tl.fromTo(line1Ref.current,
        { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', y: 40 },
        { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', y: 0, duration: 1, ease: 'power4.out' },
        "-=0.6"
      );

      tl.fromTo(line2Ref.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: 'expo.out' },
        "-=0.8"
      );

      tl.fromTo(line3Ref.current,
        { clipPath: 'polygon(0 0%, 100% 0%, 100% 0%, 0 0%)', y: -40 }, // Reveal downwards
        { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', y: 0, duration: 1, ease: 'power4.out' },
        "-=0.7"
      );

      // 4. Manifesto & Buttons
      tl.fromTo(manifestoRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );
      
      tl.fromTo(buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || typeof gsap === 'undefined') return;
    
    const { clientX, clientY } = e;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalize coordinates relative to card center
    const x = (clientX - rect.left) - rect.width / 2;
    const y = (clientY - rect.top) - rect.height / 2;

    // Spotlight follows mouse
    if (spotlightRef.current) {
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;
        gsap.to(spotlightRef.current, {
            x: mouseX,
            y: mouseY,
            duration: 0.1,
            ease: 'none'
        });
    }

    // 1. Smooth Card Tilt (Reduced intensity for premium feel)
    const tiltX = (x / rect.width) * 3; 
    const tiltY = (y / rect.height) * -3;

    gsap.to(cardRef.current, {
        rotationY: tiltX,
        rotationX: tiltY,
        duration: 1.5,
        ease: 'power2.out',
        transformPerspective: 1000
    });

    // 2. Parallax Text (Subtle float)
    gsap.to(line1Ref.current, { x: x * 0.01, y: y * 0.01, duration: 1 });
    gsap.to(line3Ref.current, { x: x * -0.01, y: y * -0.01, duration: 1 });
  };

  const handleMouseLeave = () => {
      // Reset card position
      gsap.to(cardRef.current, {
          rotationY: 0,
          rotationX: 0,
          duration: 1,
          ease: 'power2.out'
      });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
        className="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-6 py-24 md:py-20 overflow-hidden perspective-1000"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
      
      {/* 3D Depth Glass Container */}
      <div className="relative z-10 max-w-7xl w-full">
        {/* Adjusted Background Opacity for clearer view */}
        <div ref={cardRef} className="relative bg-[#050505]/95 backdrop-blur-3xl rounded-[2rem] md:rounded-[4rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden group will-change-transform flex flex-col">
          
          {/* Interactive Spotlight */}
          <div 
             ref={spotlightRef}
             className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 mix-blend-overlay opacity-30" 
             style={{ top: 0, left: 0 }}
          />

          {/* Inner Generative Noise/Texture */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          
          {/* Scanline Effect - Subtle */}
          <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] bg-repeat animate-[scanline_8s_linear_infinite] opacity-10 mix-blend-overlay"></div>

          {/* Main Content Padding Wrapper - Using GAP for spacing */}
          <div ref={heroRef} className="text-center relative z-20 flex flex-col items-center justify-center p-6 md:p-16 pb-12 gap-10 md:gap-14">
             
             {/* Status Badge */}
             <div ref={badgeRef} className="inline-flex items-center gap-3 px-5 py-2 bg-black/80 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] opacity-0">
                  <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3D00] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3D00]"></span>
                  </span>
                  <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-gray-300 uppercase">
                      SYSTEM ONLINE <span className="mx-2 text-gray-700">|</span> V.3.0
                  </span>
             </div>

             {/* --- KINETIC TYPOGRAPHY HEADLINE --- */}
             <h1 className="flex flex-col items-center justify-center font-display font-bold leading-[0.85] tracking-tighter w-full relative z-10">
                
                {/* LINE 1: OUTLINE / STROKE */}
                <div className="overflow-hidden py-2">
                    <span 
                        ref={line1Ref} 
                        className="block text-[10vw] md:text-[7vw] text-transparent stroke-text whitespace-nowrap will-change-transform origin-center"
                    >
                        FROM THE FLOOR
                    </span>
                </div>
                
                {/* LINE 2: BRIDGE */}
                <span 
                    ref={line2Ref}
                    className="block text-sm md:text-xl font-mono text-[#00f3ff] tracking-[1em] my-2 opacity-0"
                >
                    /// TO THE ///
                </span>

                {/* LINE 3: SOLID / GLITCH */}
                <div className="overflow-hidden py-2">
                    <span 
                        ref={line3Ref}
                        className="block text-[12vw] md:text-[8vw] text-white whitespace-nowrap will-change-transform origin-center drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        <GlitchText text="FULL STACK" />
                    </span>
                </div>

             </h1>

            {/* --- MANIFESTO TERMINAL (REDESIGNED) --- */}
            <div ref={manifestoRef} className="w-full max-w-3xl mx-auto relative group opacity-0 z-20">
               {/* Decorative brackets */}
               <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF3D00] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute -right-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#00f3ff] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
               
               {/* Terminal Window */}
               <div className="bg-[#080808] border border-white/10 rounded-lg overflow-hidden shadow-2xl relative">
                   {/* Terminal Header */}
                   <div className="bg-[#111] border-b border-white/5 px-4 py-2 flex items-center justify-between">
                       <div className="flex gap-2">
                           <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                           <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                           <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                       </div>
                       <div className="font-mono text-[10px] text-gray-500 tracking-widest">MANIFESTO.LOG</div>
                       <div className="w-8"></div> {/* Spacer */}
                   </div>

                   {/* Terminal Body */}
                   <div className="p-6 md:p-8 relative">
                       {/* Background Striping */}
                       <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_1px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_3px)] pointer-events-none opacity-20"></div>
                       
                       <p className="font-mono text-xs md:text-sm text-gray-300 leading-relaxed text-justify tracking-wide relative z-10">
                          <span className="text-[#FF3D00] font-bold">root@w3jdev:~#</span> <span className="text-white">init_sequence</span><br/><br/>
                          <span className="text-[#FF3D00] font-bold">>></span> WE REJECT LATENCY. WE REJECT BLOAT. 
                          I ARCHITECT DIGITAL SOLUTIONS WHERE <span className="text-black bg-[#e5e5e5] px-1 font-bold">MICHELIN-STAR SERVICE</span> MEETS <span className="text-black bg-[#00f3ff] px-1 font-bold">MACHINE LEARNING PRECISION</span>. 
                          TRANSFORMING CHAMPAGNE PROBLEMS INTO PROSECCO-BUDGET FIXES.
                          <span className="animate-pulse inline-block ml-2 w-2 h-4 bg-[#00f3ff] align-middle shadow-[0_0_10px_#00f3ff]"></span>
                       </p>
                   </div>
               </div>
            </div>
            
            {/* --- CONTROL DECK (BUTTONS) --- */}
            <div ref={buttonsRef} className="flex flex-col items-center gap-6 opacity-0 z-20 w-full">
                {/* Visual Connector Line */}
                <div className="h-8 w-[1px] bg-gradient-to-b from-white/10 to-transparent"></div>
                
                <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
                    <Button 
                        variant="primary" 
                        onClick={() => scrollTo('projects')} 
                        icon="bolt" 
                        className="w-full md:w-auto min-w-[200px]"
                    >
                        View ROI Impact
                    </Button>
                    
                    <Button 
                        variant="glass" 
                        onClick={() => scrollTo('contact')} 
                        icon="terminal" 
                        className="w-full md:w-auto min-w-[200px]"
                    >
                        Initiate Protocol
                    </Button>
                </div>
            </div>

          </div>

          {/* Ticker - Adjusted for distinct separation */}
          <div className="relative w-full bg-[#050505] border-t border-white/10 py-6 md:py-8 overflow-hidden z-20 mt-auto shadow-2xl">
            <div className="flex animate-[ticker_30s_linear_infinite] w-max hover:[animation-play-state:paused]">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-16 md:gap-32 mx-8 md:mx-16 font-mono items-center tracking-widest">
                  <span className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                      <span className="text-[#00f3ff] font-bold text-3xl md:text-5xl drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">95%</span> 
                      <span className="text-xs md:text-sm text-gray-400">TIME SAVED</span>
                  </span>
                  <span className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                      <span className="text-[#FF3D00] font-bold text-3xl md:text-5xl drop-shadow-[0_0_15px_rgba(255,61,0,0.3)]">300%</span> 
                      <span className="text-xs md:text-sm text-gray-400">ROI (SALES)</span>
                  </span>
                  <span className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                      <span className="text-[#7e22ce] font-bold text-3xl md:text-5xl drop-shadow-[0_0_15px_rgba(126,34,206,0.3)]">40%</span> 
                      <span className="text-xs md:text-sm text-gray-400">FASTER ONBOARDING</span>
                  </span>
                  <span className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                      <span className="text-white font-bold text-3xl md:text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">10k+</span> 
                      <span className="text-xs md:text-sm text-gray-400">HOURS OPS</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        .stroke-text {
            -webkit-text-stroke: 1px rgba(255,255,255,0.3);
            color: transparent;
            transition: all 0.5s ease;
        }
        .group:hover .stroke-text {
            -webkit-text-stroke: 1px rgba(255,255,255,0.8);
            text-shadow: 0 0 20px rgba(255,255,255,0.2);
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scanline {
            0% { background-position: 0% 0%; }
            100% { background-position: 0% 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;