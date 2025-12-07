import React from 'react';
import GlassCard from '../UI/GlassCard';

const Blueprint: React.FC = () => {
  return (
    <section className="py-20 bg-black text-center border-t border-white/10 relative overflow-hidden">
      {/* Radial pulse background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#00f3ff]/5 to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="font-mono text-[#00f3ff] mb-8 text-sm tracking-widest">/// AUTOMATION BLUEPRINT ///</h2>
        
        <GlassCard className="p-10 rounded-xl relative overflow-hidden bg-[#050505]" hoverEffect={false}>
          {/* OS Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 font-mono text-xs md:text-sm pt-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center border border-gray-600 transition-colors group-hover:border-white">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <p>GITHUB REPO</p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex gap-1">
              {[0, 100, 200, 300].map((delay, i) => (
                <span key={i} className="w-2 h-2 bg-[#FF3D00] rounded-full animate-bounce" style={{ animationDelay: `${delay}ms` }} />
              ))}
            </div>
            <div className="md:hidden text-[#FF3D00]">↓</div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center border-2 border-[#FF3D00] shadow-[0_0_15px_#FF3D00] animate-pulse">
                <span className="material-symbols-outlined text-3xl text-[#FF3D00]">webhook</span>
              </div>
              <p className="text-[#FF3D00]">n8n WORKFLOW</p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex gap-1">
              {[0, 100, 200, 300].map((delay, i) => (
                <span key={i} className="w-2 h-2 bg-[#00f3ff] rounded-full animate-bounce" style={{ animationDelay: `${delay}ms` }} />
              ))}
            </div>
            <div className="md:hidden text-[#00f3ff]">↓</div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center border border-[#00f3ff] transition-colors group-hover:bg-[#00f3ff]/10">
                <span className="material-symbols-outlined text-3xl text-[#00f3ff]">public</span>
              </div>
              <p className="text-[#00f3ff]">LIVE PORTFOLIO</p>
            </div>
          </div>

          <div className="mt-8 text-left bg-black/50 p-4 rounded font-mono text-xs text-green-400 border border-white/5">
            <p className="mb-1 opacity-70">&gt; Detecting push to 'main'...</p>
            <p className="mb-1 opacity-80">&gt; Triggering webhook...</p>
            <p className="mb-1 opacity-90">&gt; Fetching latest metrics...</p>
            <p className="mb-1">&gt; Rebuilding assets...</p>
            <p className="animate-pulse font-bold">&gt; DEPLOYMENT SUCCESSFUL</p>
          </div>
        </GlassCard>

        <p className="mt-8 text-gray-500 text-sm max-w-lg mx-auto font-mono">
          This site is a living document. My agent swarm updates the project stats and content automatically via GitHub Actions and n8n webhooks.
        </p>
      </div>
    </section>
  );
};

export default Blueprint;