import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide";
  
  const variants = {
    // UPDATED: Added animate-glow-pulse on hover
    primary: "bg-gradient-to-r from-[#FF3D00] to-[#FF9100] text-black hover:from-[#ff5e2e] hover:to-[#ffaa33] shadow-[0_0_20px_rgba(255,61,0,0.3)] hover:animate-glow-pulse border border-transparent",
    secondary: "bg-white text-black hover:bg-gray-200 border border-transparent",
    glass: "bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 border border-white/10",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="material-symbols-outlined text-lg">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;