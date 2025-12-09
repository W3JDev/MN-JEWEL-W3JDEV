import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50 
        w-[90%] max-w-5xl px-6 md:px-8 py-4 rounded-full
        transition-all duration-500 ease-out
        flex justify-between items-center
        border border-white/5
        ${scrolled 
          ? 'bg-[#050505]/80 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-white/[0.02] backdrop-blur-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]'}
      `}>
        {/* Rubber/Polished Glass Effect Overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-50" />

        {/* Logo */}
        <a href="#" className="relative z-10 font-display font-bold text-xl tracking-tighter hover:text-[#00f3ff] transition-colors flex items-center gap-1">
          w3.ai<span className="text-[#FF3D00]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-mono text-gray-400 relative z-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="hover:text-white transition-colors tracking-wide text-xs font-bold relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00f3ff] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex relative z-10">
           <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-6 py-2 bg-[#FF3D00] hover:bg-[#ff5e2e] text-black rounded-full text-[10px] font-bold transition-all border border-transparent tracking-widest shadow-[0_0_15px_rgba(255,61,0,0.4)] hover:shadow-[0_0_25px_rgba(255,61,0,0.6)] animate-pulse hover:animate-none cursor-pointer"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden relative z-50 text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`material-symbols-outlined transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}>
             {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay (Cyber HUD Style) */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00f3ff]/10 via-transparent to-transparent opacity-20 pointer-events-none"></div>
          
          <div className="flex flex-col gap-8 text-center relative z-10">
             {NAV_ITEMS.map((item, i) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="font-display text-4xl font-bold text-gray-400 hover:text-white transition-all hover:scale-110"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {item.label}
                </a>
             ))}
             <div className="w-12 h-[1px] bg-white/20 mx-auto my-4"></div>
             <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="font-mono text-[#FF3D00] tracking-widest text-sm border border-[#FF3D00] px-6 py-3 rounded-full hover:bg-[#FF3D00] hover:text-black transition-all"
             >
                INITIATE CONTACT
             </a>
          </div>
      </div>
    </>
  );
};

export default Navbar;