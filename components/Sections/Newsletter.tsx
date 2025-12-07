import React, { useState } from 'react';
import Button from '../UI/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'submitting'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5">
       {/* Background abstract forms */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#00f3ff]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#FF3D00]/5 rounded-full blur-[120px]" />
       </div>

       <div className="max-w-4xl mx-auto px-6 relative z-10">
         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            
            <span className="inline-block py-1 px-3 rounded-full bg-[#FF3D00]/20 text-[#FF3D00] text-xs font-mono font-bold mb-6 border border-[#FF3D00]/20">
              EXCLUSIVE CONTENT
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              Stay in the <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-[#00f3ff] to-[#FF3D00]">Loop</span>
            </h2>
            
            <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
              Get exclusive insights on Web3, AI, and automation. Plus early access to new projects and technical deep-dives.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
               <div className="relative flex items-center">
                  <span className="absolute left-4 material-symbols-outlined text-gray-500">mail</span>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-full py-4 pl-12 pr-32 text-white focus:outline-none focus:border-[#00f3ff] transition-colors"
                  />
                  <div className="absolute right-2 top-2 bottom-2">
                    <Button type="submit" variant="primary" className="h-full px-6 py-0 text-sm" disabled={status !== 'idle'}>
                      {status === 'submitting' ? '...' : status === 'success' ? 'Joined' : 'Subscribe'}
                    </Button>
                  </div>
               </div>
            </form>

            <p className="text-gray-600 text-xs mt-6 font-mono">
              No spam. Unsubscribe anytime. Privacy guaranteed.
            </p>
         </div>
       </div>

       <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
       `}</style>
    </section>
  );
};

export default Newsletter;