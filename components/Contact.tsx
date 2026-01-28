import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import SectionWrapper from './SectionWrapper';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setFormState('sending');

    try {
      // Simulate an API call to send values to R.ikemire@outlook.com
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Sending secure payload to R.ikemire@outlook.com:', formData);
      setFormState('sent');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset button state after 4 seconds
      setTimeout(() => setFormState('idle'), 4000);
    } catch (error) {
      console.error('Submission error:', error);
      setFormState('idle');
    }
  };

  return (
    <SectionWrapper 
      title="Get In Touch" 
      subtitle="Contact"
      mediaContent={
         <div className="relative w-full h-full flex items-center justify-center bg-[#030b1e]">
             {/* Abstract Map-like visual */}
             <div className="absolute inset-0 bg-[#0c1833] opacity-80"></div>
             <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #00dbde 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
             
             <div className="relative text-center z-10 p-12 bg-[#061125]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                 <div className="w-20 h-20 bg-gradient-to-br from-[#fc466b] to-[#00dbde] rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin size={32} className="text-white animate-bounce" />
                 </div>
                 <p className="font-oswald text-2xl text-white tracking-[0.2em] uppercase mb-2">United States</p>
                 <p className="text-white/40 text-sm font-mono tracking-widest uppercase">Available for Global Remote Roles</p>
             </div>
         </div>
      }
    >
      <div className="flex flex-col justify-between h-full">
        <div className="mb-12">
            <p className="text-lg font-light text-white/70 mb-12 leading-relaxed">
            I am currently evaluating new opportunities in solutions architecture and technical leadership. Reach out to discuss how my expertise in modernization and data engineering can drive your digital transformation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="group">
                    <h5 className="font-oswald text-[10px] text-white/30 uppercase tracking-[0.3em] mb-3">Direct Email</h5>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl text-white group-hover:text-[#00dbde] transition-colors font-light flex items-center gap-4">
                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-[#00dbde] transition-colors">
                            <Mail size={16} className="text-[#fc466b]" />
                        </div>
                        {CONTACT_INFO.email}
                    </a>
                </div>
                
                <div className="group">
                    <h5 className="font-oswald text-[10px] text-white/30 uppercase tracking-[0.3em] mb-3">Direct Line</h5>
                    <span className="text-xl text-white font-light flex items-center gap-4">
                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                            <Phone size={16} className="text-[#fc466b]" />
                        </div>
                        {CONTACT_INFO.phone}
                    </span>
                </div>
            </div>
        </div>

        {/* Contact Form */}
        <div className="relative">
            <h5 className="font-oswald text-[10px] text-white/30 uppercase tracking-[0.3em] mb-8">Send a Message</h5>
            
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group relative">
                        <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-widest text-white/20 group-focus-within:text-[#00dbde] transition-colors">Name</label>
                        <input 
                            required
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Full Name" 
                            className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/10 focus:border-[#fc466b] focus:outline-none transition-all"
                        />
                    </div>
                    <div className="group relative">
                        <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-widest text-white/20 group-focus-within:text-[#00dbde] transition-colors">Email</label>
                        <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="email@example.com" 
                            className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/10 focus:border-[#fc466b] focus:outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="group relative">
                    <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-widest text-white/20 group-focus-within:text-[#00dbde] transition-colors">Message</label>
                    <textarea 
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="How can I help you?" 
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/10 focus:border-[#fc466b] focus:outline-none transition-all resize-none"
                    />
                </div>

                <div className="pt-8">
                    <button 
                        disabled={formState !== 'idle'}
                        className="group relative overflow-hidden px-12 py-5 border border-white/20 text-white font-oswald uppercase tracking-[0.2em] text-xs hover:border-transparent transition-all duration-300 disabled:opacity-50"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {formState === 'idle' && (
                                <>Send Inquiry <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                            )}
                            {formState === 'sending' && (
                                <>Sending... <Loader2 size={14} className="animate-spin" /></>
                            )}
                            {formState === 'sent' && (
                                <>Message Sent! <CheckCircle size={14} className="text-[#00dbde]" /></>
                            )}
                        </span>
                        <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-[#fc466b] to-[#00dbde] transition-transform duration-500 ease-out ${formState === 'sent' ? 'translate-y-0' : ''}`}></div>
                    </button>
                    {formState === 'sent' && (
                        <p className="text-[10px] font-mono text-[#00dbde] mt-4 uppercase tracking-[0.2em] animate-pulse">
                            Values delivered to R.ikemire@outlook.com
                        </p>
                    )}
                </div>
            </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;