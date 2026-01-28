
import React from 'react';
import { Menu, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface HeaderProps {
  onMenuClick: () => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, activeSection }) => {
  return (
    <>
      {/* Mobile Top Header */}
      <header className="fixed top-0 left-0 w-full h-20 bg-[#061125] border-b border-white/10 z-40 flex items-center justify-between px-6 lg:hidden">
        <div className="w-12 h-12 bg-gradient-to-br from-[#fc466b] to-[#00dbde] flex items-center justify-center font-serif font-bold text-xl text-white">
          R
        </div>
        <button onClick={onMenuClick} className="text-white p-2">
          <Menu size={32} />
        </button>
      </header>

      {/* Desktop Sidebar Header */}
      <aside className="hidden lg:flex fixed top-0 left-0 w-[100px] h-full bg-[#061125] border-r border-white/10 z-40 flex-col justify-between items-center py-8">
        
        {/* Logo */}
        <div className="w-[100px] h-[100px] absolute top-0 left-0 bg-gradient-to-br from-[#fc466b] to-[#00dbde] flex items-center justify-center">
             <span className="font-serif font-bold text-4xl text-white">R</span>
        </div>

        {/* Menu Trigger (Centered Vertical) */}
        <div className="flex-1 flex items-center justify-center">
          <button 
            onClick={onMenuClick} 
            className="group relative w-12 h-12 flex items-center justify-center"
          >
            <div className="space-y-1.5 group-hover:scale-110 transition-transform duration-300">
               <span className="block w-8 h-[2px] bg-white group-hover:bg-[#00dbde] transition-colors"></span>
               <span className="block w-6 h-[2px] bg-white ml-auto group-hover:bg-[#00dbde] transition-colors"></span>
               <span className="block w-8 h-[2px] bg-white group-hover:bg-[#00dbde] transition-colors"></span>
            </div>
          </button>
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center gap-6 mb-8">
           <a href={`mailto:${CONTACT_INFO.email}`} title="Email Me" className="text-white/70 hover:text-[#00dbde] transition-colors"><Mail size={18} /></a>
           <a href={CONTACT_INFO.portfolio} target="_blank" rel="noopener noreferrer" title="LinkedIn Profile" className="text-white/70 hover:text-[#00dbde] transition-colors"><Linkedin size={18} /></a>
           
           <div className="h-24 w-[1px] bg-white/20 my-4"></div>
           
           <div className="writing-vertical-lr rotate-180 text-xs tracking-widest text-white/40 font-mono uppercase">
             © {new Date().getFullYear()} Renee Ikemire
           </div>
        </div>
      </aside>

      <style>{`
        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
      `}</style>
    </>
  );
};

export default Header;
