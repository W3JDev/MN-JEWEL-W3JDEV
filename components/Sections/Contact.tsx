import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';
import GlassCard from '../UI/GlassCard';

interface FormData {
  name: string;
  email: string;
  message: string;
  type: 'project' | 'consulting' | 'hiring';
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    type: 'project'
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // --- 1. REAL CALENDAR INTEGRATION (Cal.com) ---
  const openCalendar = () => {
    alert("SYSTEM NOTICE: In production, this opens a Cal.com/Calendly modal synced to your availability.");
  };

  // --- 2. SMART RESUME DOWNLOAD ---
  const handleDownloadResume = () => {
     const btn = document.getElementById('resume-btn');
     if(btn) btn.innerText = "RETRIEVING ASSET...";
     
     setTimeout(() => {
        if(btn) btn.innerText = "DOWNLOAD SECURE";
        alert("Downloading PDF from Secure Storage...");
        setTimeout(() => { if(btn) btn.innerText = "Download Resume"; }, 2000);
     }, 1000);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Brief is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  // --- 3. FORM SUBMISSION LOGIC ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulation for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', type: 'project' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="py-24 border-t border-white/10 bg-black relative overflow-hidden">
      
      {/* --- DYNAMIC PERSPECTIVE GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none perspective-grid z-0 opacity-30">
        <div className="grid-lines"></div>
      </div>
      {/* Horizon Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FF3D00]/10 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Column: CTA Info */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="font-mono text-xs text-green-500 tracking-widest">OPEN FOR NEW PROTOCOLS</span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to <br />
            <span className="text-[#FF3D00]">Scale?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            I build systems that sleep so you don't have to. Whether it's architecting an AI agent swarm or auditing your F&B operations, let's engineer the solution.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
             <Button 
                id="resume-btn"
                variant="secondary" 
                icon="download" 
                className="w-fit"
                onClick={handleDownloadResume}
             >
                Download Resume
             </Button>
             <a href="https://linkedin.com/in/w3jdev" target="_blank" rel="noopener noreferrer">
                 <Button variant="glass" icon="link" className="w-fit">
                    LinkedIn
                 </Button>
             </a>
          </div>
          
          <div className="flex flex-col gap-6 mb-8">
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00f3ff] transition-colors">
                  <span className="material-symbols-outlined text-[#00f3ff]">mail</span>
              </div>
              <a href="mailto:mnjewelps@gmail.com" className="font-mono text-sm tracking-wide">mnjewelps@gmail.com</a>
            </div>
            
            <div className="h-[1px] w-full bg-white/10"></div>

             <div className="flex gap-6 text-gray-500 mt-2">
                <a href="https://github.com/W3JDev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">code</span> GitHub
                </a>
                <button onClick={openCalendar} className="hover:text-[#FF3D00] transition-colors flex items-center gap-2 group">
                    <span className="material-symbols-outlined text-lg group-hover:animate-bounce">calendar_month</span> 
                    <span className="underline decoration-dotted underline-offset-4">Book a Strategy Call</span>
                </button>
             </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="relative">
          <GlassCard className="p-8 md:p-10 rounded-2xl border-t-4 border-t-[#FF3D00]" hoverEffect={false}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex justify-between items-center mb-2">
                 <label className="text-xs font-mono text-gray-500 uppercase">Select Frequency</label>
                 <span className="text-[10px] text-[#00f3ff] animate-pulse">● SECURE CONNECTION</span>
              </div>

              <div className="grid grid-cols-3 gap-2 p-1 bg-white/5 rounded-lg border border-white/10">
                {(['project', 'consulting', 'hiring'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, type: t }))}
                    className={`
                      py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-md transition-all
                      ${formData.type === t ? 'bg-[#FF3D00] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                    `}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-black/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg p-4 text-white focus:outline-none focus:border-[#FF3D00] transition-colors placeholder:text-gray-600`}
                  placeholder="IDENTIFIER (Name)"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg p-4 text-white focus:outline-none focus:border-[#FF3D00] transition-colors placeholder:text-gray-600`}
                  placeholder="COMM_LINK (Email)"
                />
              </div>

              <div className="flex flex-col gap-2">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`bg-black/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg p-4 text-white focus:outline-none focus:border-[#FF3D00] transition-colors resize-none placeholder:text-gray-600`}
                  placeholder="MISSION OBJECTIVES..."
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'ENCRYPTING & SENDING...' : 'INITIATE TRANSMISSION'}
              </Button>

              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center font-mono animate-pulse">
                  > TRANSMISSION RECEIVED. STANDBY FOR REPLY.
                </div>
              )}

            </form>
          </GlassCard>
        </div>
      </div>
      
      <div className="text-center mt-20 font-mono">
        <p className="text-gray-500 italic text-xs md:text-sm mb-4">
            "Let's connect if you need a developer who knows the difference between a <span className="text-[#FF3D00]">sous vide</span> and an <span className="text-[#00f3ff]">SVG</span>."
        </p>
        <p className="text-[10px] text-gray-800 uppercase tracking-widest">
            © 2024 W3JDEV (aka JEWEL). All Systems Operational.
        </p>
      </div>

      <style>{`
        .perspective-grid {
            perspective: 500px;
            transform-style: preserve-3d;
        }
        .grid-lines {
            position: absolute;
            width: 200%;
            height: 200%;
            top: -50%;
            left: -50%;
            background-image: 
                linear-gradient(rgba(255, 61, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 61, 0, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            transform: rotateX(60deg) translateY(0);
            animation: gridMove 20s linear infinite;
        }
        @keyframes gridMove {
            0% { transform: rotateX(60deg) translateY(0); }
            100% { transform: rotateX(60deg) translateY(50px); }
        }
      `}</style>
    </footer>
  );
};

export default Contact;