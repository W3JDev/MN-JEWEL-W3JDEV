import React from 'react';
import { TESTIMONIALS } from '../../constants';
import GlassCard from '../UI/GlassCard';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden border-y border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
             <div className="flex items-center gap-4 mb-12 opacity-70">
                <span className="w-12 h-[1px] bg-gray-500"></span>
                <span className="font-mono text-xs tracking-widest text-gray-400">MISSION REPORTS</span>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                 {TESTIMONIALS.map((t, i) => (
                     <div key={i} className="relative">
                         <span className="absolute -top-4 -left-2 text-6xl text-white/5 font-serif">"</span>
                         <GlassCard className="p-8 rounded-xl bg-[#0a0a0a]" hoverEffect={false}>
                             <p className="text-gray-300 mb-6 leading-relaxed italic relative z-10">
                                 {t.quote}
                             </p>
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold text-white/50">
                                     {t.name.charAt(0)}
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-sm text-white">{t.name}</h4>
                                     <p className="text-xs text-gray-500 font-mono">{t.role}</p>
                                 </div>
                             </div>
                         </GlassCard>
                     </div>
                 ))}
             </div>
        </div>
    </section>
  );
};

export default Testimonials;