import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`
      fixed top-6 left-1/2 -translate-x-1/2 z-50 
      w-[90%] max-w-2xl px-8 py-4 rounded-full
      transition-all duration-500 ease-out
      flex justify-between items-center
      border border-white/5
      ${scrolled 
        ? 'bg-[#050505]/60 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-white/[0.02] backdrop-blur-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]'}
    `}>
      {/* Rubber/Polished Glass Effect Overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-50" />

      <a href="#" className="relative z-10 font-display font-bold text-xl tracking-tighter hover:text-[#00f3ff] transition-colors flex items-center gap-1">
        w3.ai<span className="text-[#FF3D00]">.</span>
      </a>

      <div className="hidden md:flex gap-8 text-sm font-mono text-gray-400 relative z-10">
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="hover:text-white transition-colors tracking-wide text-xs font-bold"
          >
            {item.label}
          </a>
        ))}
      </div>

      <a 
        href="#contact"
        onClick={(e) => scrollToSection(e, '#contact')}
        className="relative z-10 px-6 py-2 bg-[#FF3D00] hover:bg-[#ff5e2e] text-black rounded-full text-[10px] font-bold transition-all border border-transparent tracking-widest shadow-[0_0_15px_rgba(255,61,0,0.4)] hover:shadow-[0_0_25px_rgba(255,61,0,0.6)] animate-pulse hover:animate-none"
      >
        HIRE ME
      </a>
    </nav>
  );
};

export default Navbar;