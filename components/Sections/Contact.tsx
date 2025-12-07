import React, { useState } from 'react';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
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
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF3D00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Column: CTA Info */}
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-5xl font-bold mb-6 leading-tight">
            Ready to <br />
            <span className="text-[#FF3D00]">Scale?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            I build systems that sleep so you don't have to. Whether it's architecting an AI agent swarm or auditing your F&B operations, let's engineer the solution.
          </p>
          
          <div className="flex flex-col gap-4 mb-10">
             <Button variant="secondary" icon="download" className="w-fit">
                Download Resume (PDF)
             </Button>
             <Button variant="primary" icon="bolt" className="w-fit">
                Book 15-Min Automation Audit
             </Button>
          </div>
          
          <div className="flex flex-col gap-6 mb-8">
            <div className="flex items-center gap-4 text-gray-300">
              <span className="material-symbols-outlined text-[#00f3ff]">mail</span>
              <a href="mailto:contact@w3jdev.com" className="hover:text-white transition-colors">mnjewelps@gmail.com</a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="material-symbols-outlined text-[#FF3D00]">location_on</span>
              <span>Kuala Lumpur / Remote</span>
            </div>
             <div className="flex gap-4 text-gray-400 mt-2">
                <a href="https://linkedin.com/in/w3jdev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <span>/</span>
                <a href="https://github.com/W3JDev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
             </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="relative">
          <GlassCard className="p-8 md:p-10 rounded-2xl" hoverEffect={false}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-3 gap-2 p-1 bg-white/5 rounded-lg border border-white/10">
                {(['project', 'consulting', 'hiring'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, type: t }))}
                    className={`
                      py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all
                      ${formData.type === t ? 'bg-[#FF3D00] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                    `}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-[#FF3D00] transition-colors`}
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-[#FF3D00] transition-colors`}
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase">Mission Brief</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-[#FF3D00] transition-colors resize-none`}
                  placeholder="Describe your project or the '95% time savings' opportunity..."
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'TRANSMITTING...' : 'INITIATE PROTOCOL'}
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
        <p className="text-gray-500 italic text-sm mb-4">
            "Let's connect if you need a developer who knows the difference between a <span className="text-[#FF3D00]">sous vide</span> and an <span className="text-[#00f3ff]">SVG</span>."
        </p>
        <p className="text-xs text-gray-800">
            © 2024 Muhammad Nurunnabi (Jewel). All Systems Operational.
        </p>
      </div>
    </footer>
  );
};

export default Contact;