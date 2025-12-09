import React from 'react';
import { CLIENTS } from '../../constants';
import GlassCard from '../UI/GlassCard';

const Clients: React.FC = () => {
  return (
    <section className="py-16 bg-black border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
         <p className="font-mono text-[10px] md:text-xs text-gray-600 mb-10 tracking-[0.3em] uppercase">
            Trusted By Industry Leaders
         </p>
         
         <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-50">
            {CLIENTS.map((client) => (
               <div key={client.name} className="group transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-pointer grayscale hover:grayscale-0">
                   {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-8 md:h-12 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                      />
                   ) : (
                     <svg height="30" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-8 w-auto">
                          <text x="0" y="30" fill="currentColor" className="text-gray-400 group-hover:text-white transition-colors font-display font-bold text-2xl uppercase tracking-tighter">
                              {client.name}
                          </text>
                     </svg>
                   )}
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Clients;