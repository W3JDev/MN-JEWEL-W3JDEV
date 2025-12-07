import React from 'react';
import { EXPERTISE_SKILLS, DUAL_EXPERTISE, TECH_STACK } from '../../constants';
import GlassCard from '../UI/GlassCard';

const Expertise: React.FC = () => {
  // Mythical Tablet Style: Transparent background, colored borders
  const getDualColorStyles = (color: string) => {
    return color === 'cyan' 
      ? 'border-[#00f3ff]/30 hover:border-[#00f3ff] shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]'
      : 'border-[#FF3D00]/30 hover:border-[#FF3D00] shadow-[0_0_15px_rgba(255,61,0,0.1)] hover:shadow-[0_0_30px_rgba(255,61,0,0.3)]';
  };

  const getColorBg = (color: string) => {
    const map: Record<string, string> = {
      cyan: 'bg-[#00f3ff]/10 text-[#00f3ff] group-hover:bg-[#00f3ff] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]',
      orange: 'bg-[#FF3D00]/10 text-[#FF3D00] group-hover:bg-[#FF3D00] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(255,61,0,0.6)]',
      purple: 'bg-[#7e22ce]/10 text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(126,34,206,0.6)]',
      green: 'bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-black group-hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]',
    };
    return map[color] || map.cyan;
  };

  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-transparent"> 
       {/* Background Animated Gradients */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7e22ce]/10 rounded-full blur-[100px] animate-[float_20s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#00f3ff]/10 rounded-full blur-[100px] animate-[float_25s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[30vw] h-[30vw] bg-[#FF3D00]/10 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite]" />
       </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Dual <span className="text-jewel">Expertise</span></h2>
          <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between <span className="text-[#FF3D00]">Michelin-star operations</span> and <span className="text-[#00f3ff]">autonomous AI agents</span>.
          </p>
        </div>

        {/* --- DUAL HERO SECTION --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {DUAL_EXPERTISE.map((item) => (
            <div key={item.title} className="relative group" data-hover="true">
                <GlassCard 
                className={`p-10 rounded-3xl relative overflow-hidden h-full !bg-transparent backdrop-blur-sm ${getDualColorStyles(item.color)}`}
                hoverEffect={false}
                >
                    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-all duration-700 transform group-hover:rotate-12 scale-150`}>
                        <span className={`material-symbols-outlined text-9xl ${item.color === 'cyan' ? 'text-[#00f3ff]' : 'text-[#FF3D00]'}`}>{item.icon}</span>
                    </div>
                    
                    <div className="relative z-10">
                        <div className={`inline-flex p-3 rounded-lg mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${item.color === 'cyan' ? 'bg-[#00f3ff]/10 text-[#00f3ff]' : 'bg-[#FF3D00]/10 text-[#FF3D00]'}`}>
                        <span className="material-symbols-outlined text-3xl drop-shadow-[0_0_5px_currentColor]">{item.icon}</span>
                        </div>
                        <h3 className="font-display text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                        {item.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                        {item.features.map(feature => (
                            <div key={feature} className="flex items-center gap-2 text-sm font-mono text-gray-400 group-hover:text-gray-200 transition-colors">
                            <span className={`w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor] ${item.color === 'cyan' ? 'bg-[#00f3ff]' : 'bg-[#FF3D00]'}`} />
                            {feature}
                            </div>
                        ))}
                        </div>
                    </div>
                </GlassCard>
            </div>
          ))}
        </div>

        {/* --- TECHNICAL GRID --- */}
        <div className="mb-20">
            <h3 className="font-mono text-xs text-gray-500 mb-8 uppercase tracking-widest border-b border-white/10 pb-2">Technical Arsenal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_SKILLS.map((skill) => (
                <GlassCard key={skill.id} className="p-8 rounded-2xl group cursor-default overflow-visible transition-all duration-500 hover:scale-[1.02] !bg-transparent border border-white/10 hover:border-white/30 backdrop-blur-sm" data-hover="true">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 ease-out ${getColorBg(skill.color)}`}>
                    <span className="material-symbols-outlined text-2xl transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                    {skill.icon}
                    </span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-display transition-colors group-hover:text-white">{skill.title}</h3>
                <p className="text-gray-400 text-sm mb-6 h-12 leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                    {skill.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5 transition-colors group-hover:border-white/20 group-hover:bg-white/10">
                        {tag}
                    </span>
                    ))}
                </div>
                </GlassCard>
            ))}
            </div>
        </div>

        {/* --- TECH STACK TICKER --- */}
        <div className="w-full overflow-hidden border-t border-b border-white/5 py-6 bg-black/20 backdrop-blur-md">
             <div className="flex animate-[ticker_20s_linear_infinite] w-max hover:pause">
                {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                    <span key={i} className="mx-6 font-mono text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#00f3ff] rounded-full opacity-50 shadow-[0_0_5px_#00f3ff]"></span>
                        {tech}
                    </span>
                ))}
             </div>
        </div>

      </div>
      <style>{`
        .pause:hover { animation-play-state: paused; }
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Expertise;