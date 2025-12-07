import React, { useEffect, useRef, useState } from 'react';

declare const gsap: any;

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    // Center the initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    // Add listeners for hover effects on interactive elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, [data-hover]');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    addHoverListeners();

    // Re-bind listeners when DOM changes (simple observer)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Main Dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-[#00f3ff] rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      {/* Magnetic Ring */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 border border-[#00f3ff] rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out mix-blend-difference
          ${isHovering ? 'w-12 h-12 bg-white/10 backdrop-blur-[1px] border-transparent' : 'w-8 h-8 opacity-50'}
        `}
      />
    </>
  );
};

export default CustomCursor;