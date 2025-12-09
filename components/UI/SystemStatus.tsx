import React, { useEffect, useState } from 'react';

const SystemStatus = () => {
  const [activeSection, setActiveSection] = useState('INITIALIZING');
  
  useEffect(() => {
    // List of section IDs to track
    const sections = ['hero', 'story', 'expertise', 'services', 'projects', 'contact'];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Update the state with the ID of the visible section
          setActiveSection(entry.target.id.toUpperCase());
        }
      });
    }, { 
      threshold: 0.2, // Trigger when 20% of the section is visible
      rootMargin: '-10% 0px -10% 0px' 
    });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden md:flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full font-mono text-[10px] text-gray-400 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-[fadeIn_1s_ease-out_2s_both]">
      <div className="relative flex h-2 w-2">
         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f3ff] opacity-75"></span>
         <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f3ff]"></span>
      </div>
      <span className="tracking-widest">SYSTEM: ONLINE</span>
      <span className="w-[1px] h-3 bg-white/20"></span>
      <span className="text-[#00f3ff] animate-pulse">SECTOR: {activeSection}</span>
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default SystemStatus;