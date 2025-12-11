import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'cyber';
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, className = '', ...props }) => {
  // Base structural classes
  const baseStyles = "relative group overflow-hidden font-bold tracking-wider uppercase text-xs md:text-sm transition-all duration-300 flex items-center justify-center gap-3 px-8 py-4 rounded-lg select-none active:scale-95";
  
  // Variant specific styles
  const variants = {
    // 1. High-Impact CTA (ROI Impact)
    // Magma Gradient + Shimmer + Glow
    primary: `
      bg-gradient-to-r from-[#FF3D00] to-[#FF9100] text-black border border-white/20
      shadow-[0_0_20px_rgba(255,61,0,0.3)] 
      hover:shadow-[0_0_40px_rgba(255,61,0,0.6)] hover:brightness-110
    `,

    // 2. Technical Ghost Button (Resume / Secondary)
    // Clean White/Gray aesthetic
    secondary: `
      bg-white/5 border border-white/20 text-white backdrop-blur-md
      hover:bg-white text-black hover:border-white
      shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
    `,

    // 3. Cyber/Protocol Button (Initiate Protocol)
    // Darker, Cyan accents, terminal feel
    glass: `
      bg-[#050505]/80 border border-[#00f3ff]/30 text-[#00f3ff] backdrop-blur-md
      hover:bg-[#00f3ff]/10 hover:border-[#00f3ff] hover:text-white hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]
    `,
    
    // 4. Raw Cyber (Alternative)
    cyber: `
      bg-transparent border border-gray-600 text-gray-300
      hover:border-[#00f3ff] hover:text-[#00f3ff]
    `
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {/* Background Shimmer Effect for Primary */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
      )}

      {/* Tech Corners for Glass/Cyber variants */}
      {(variant === 'glass' || variant === 'cyber') && (
        <>
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50 group-hover:opacity-100 transition-opacity" />
        </>
      )}

      {/* Icon Wrapper with Animation */}
      {icon && (
        <span className={`material-symbols-outlined text-lg transition-transform duration-300 group-hover:rotate-12 ${variant === 'primary' ? 'text-black' : ''}`}>
            {icon}
        </span>
      )}

      <span className="relative z-20 flex items-center gap-2">
        {/* Decorative Brackets for Technical Buttons */}
        {(variant === 'glass') && <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] -ml-2 text-[#00f3ff]">{'>'}</span>}
        
        {children}

        {(variant === 'glass') && <span className="opacity-50 group-hover:opacity-100 transition-opacity text-[10px] animate-pulse">_</span>}
      </span>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </button>
  );
};

export default Button;