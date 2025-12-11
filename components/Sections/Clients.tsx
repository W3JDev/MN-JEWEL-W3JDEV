import React from 'react';
import { CLIENTS } from '../../constants';
import GlassCard from '../UI/GlassCard';

const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-black border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
         <div className="inline-flex items-center gap-3 mb-12 opacity-80">
            <span className="h-[1px] w-8 bg-gray-700"></span>
            <p className="font-mono text-xs md:text-sm text-gray-400 tracking-[0.3em] uppercase">
                Trusted By Industry Leaders
            </p>
            <span className="h-[1px] w-8 bg-gray-700"></span>
         </div>
         
         {/* Removed parent opacity and grayscale to make them CLEARLY VISIBLE */}
         <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
            {CLIENTS.map((client) => (
               <div key={client.name} className="group transition-transform duration-300 hover:scale-105 cursor-default relative">
                   {/* Optional Glow Effect on Hover */}
                   <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                   {client.logo && !client.logo.includes('placehold.co') ? (
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-10 md:h-14 w-auto object-contain relative z-10 filter brightness-100 contrast-125"
                      />
                   ) : (
                     /* Fallback text rendering if logo is placeholder or text */
                     /* Rendered as bright white/gray text */
                     <div className="relative z-10 px-4 py-2 border border-white/5 bg-white/5 rounded-lg backdrop-blur-sm group-hover:border-white/20 transition-colors">
                        <span className="font-display font-bold text-xl md:text-2xl text-gray-200 group-hover:text-white uppercase tracking-tight">
                            {client.name}
                        </span>
                     </div>
                   )}
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Clients;