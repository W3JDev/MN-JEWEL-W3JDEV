import React from 'react';
import { SERVICES } from '../../constants';
import GlassCard from '../UI/GlassCard';
import Button from '../UI/Button';

const Services: React.FC = () => {
  const getBorderColor = (color: string) => {
     const map: Record<string, string> = {
      cyan: 'hover:border-[#00f3ff]',
      orange: 'hover:border-[#FF3D00]',
      purple: 'hover:border-[#7e22ce]',
    };
    return map[color];
  };

  const getIconColor = (color: string) => {
    const map: Record<string, string> = {
      cyan: 'text-[#00f3ff]',
      orange: 'text-[#FF3D00]',
      purple: 'text-[#7e22ce]',
    };
    return map[color];
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold mb-4">Engagement Models</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    I don't just "write code". I solve business problems. Choose the protocol that fits your mission.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {SERVICES.map((service) => (
                    <GlassCard 
                        key={service.title} 
                        className={`p-8 rounded-2xl flex flex-col relative group border-t-4 border-t-transparent ${getBorderColor(service.color)}`}
                    >
                         <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-2xl ${getIconColor(service.color)}`}>
                            <span className="material-symbols-outlined">{service.icon}</span>
                         </div>
                         
                         <h3 className="text-2xl font-display font-bold mb-2">{service.title}</h3>
                         <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-300 mb-6 w-fit">
                            {service.price}
                         </div>
                         
                         <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
                            {service.description}
                         </p>

                         <ul className="space-y-3 mb-8">
                            {service.features.map(feature => (
                                <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className={`material-symbols-outlined text-sm ${getIconColor(service.color)}`}>check_circle</span>
                                    {feature}
                                </li>
                            ))}
                         </ul>

                         <Button variant="glass" className="w-full group-hover:bg-white/10">
                            Discuss Scope
                         </Button>
                    </GlassCard>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;