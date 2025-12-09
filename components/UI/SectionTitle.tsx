import React from 'react';

interface SectionTitleProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  eyebrow, 
  title, 
  description, 
  align = 'center', 
  className = '' 
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col relative z-10 mb-20 md:mb-32 ${alignClasses[align]} ${className}`}>
      {/* Eyebrow Label */}
      <div className="flex items-center gap-4 mb-6 opacity-80">
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00f3ff]"></span>
        <span className="font-mono text-xs text-[#00f3ff] tracking-[0.3em] uppercase whitespace-nowrap">
          /// {eyebrow}
        </span>
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#00f3ff]"></span>
      </div>
      
      {/* Main Title */}
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.95] mb-8">
        {title}
      </h2>
      
      {/* Description */}
      {description && (
        <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed max-w-2xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;