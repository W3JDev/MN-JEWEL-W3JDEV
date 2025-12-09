import React, { useState } from 'react';
import { FAQS } from '../../constants';
import GlassCard from '../UI/GlassCard';
import SectionTitle from '../UI/SectionTitle';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <SectionTitle 
            eyebrow="PROTOCOL SPECS"
            title={<span>System <span className="text-gray-600">(FAQ)</span></span>}
            description="Operational parameters and engagement protocols."
        />
        
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
             const isOpen = openIndex === index;
             return (
               <GlassCard 
                  key={index} 
                  className={`rounded-xl transition-all duration-300 ${isOpen ? 'bg-white/10' : 'bg-white/5'}`}
                  hoverEffect={false}
               >
                 <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center"
                 >
                    <span className="font-bold text-lg">{faq.q}</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00f3ff]' : 'text-gray-400'}`}>
                        expand_more
                    </span>
                 </button>
                 <div 
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                 >
                    <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                            {faq.a}
                        </div>
                    </div>
                 </div>
               </GlassCard>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;