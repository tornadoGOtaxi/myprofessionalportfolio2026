import React from 'react';
import { Mail, Phone, Linkedin, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 pt-12 border-t border-white/5 pb-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="space-y-2">
            <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">Email</span>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="text-sm text-white/50 hover:text-[#00dbde] transition-colors flex items-center gap-2"
            >
              <Mail size={12} className="text-[#fc466b]" />
              {CONTACT_INFO.email}
            </a>
          </div>
          
          <div className="space-y-2">
            <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">Phone</span>
            <span className="text-sm text-white/50 flex items-center gap-2">
              <Phone size={12} className="text-[#fc466b]" />
              {CONTACT_INFO.phone}
            </span>
          </div>

          <div className="space-y-2">
            <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">LinkedIn</span>
            <a 
              href={CONTACT_INFO.portfolio} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-white/50 hover:text-[#00dbde] transition-colors flex items-center gap-2"
            >
              <Linkedin size={12} className="text-[#fc466b]" />
              linkedin.com/in/reneeikem
            </a>
          </div>

          <div className="space-y-2">
            <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">Extras</span>
            <a 
              href="https://resume-fun-retro.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-white/50 hover:text-[#00dbde] transition-colors flex items-center gap-2"
            >
              <Sparkles size={12} className="text-[#fc466b]" />
              For Fun
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8">
          <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/10">
            © {new Date().getFullYear()} Renee Ikemire • Solutions Architect
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;