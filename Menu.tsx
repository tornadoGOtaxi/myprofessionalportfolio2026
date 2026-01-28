
import React from 'react';
import { X } from 'lucide-react';
import { SectionType } from '../App';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: SectionType) => void;
  activeSection: string;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose, onNavigate, activeSection }) => {
  const menuItems: { id: SectionType; label: string; sub: string }[] = [
    { id: 'home', label: 'Welcome', sub: 'Introduction' },
    { id: 'competencies', label: 'About', sub: 'Expertise & Skills' },
    { id: 'experience', label: 'Portfolio', sub: 'Career History' },
    { id: 'contact', label: 'Contact', sub: 'Get in Touch' },
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#061125] transition-all duration-700 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="absolute top-0 right-0 p-8 z-50">
        <button onClick={onClose} className="group relative w-12 h-12 flex items-center justify-center">
            <X size={32} className="text-white group-hover:rotate-90 transition-transform duration-500" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row h-full">
        {/* Navigation Column */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-start lg:pl-32 bg-[#061125] relative z-10">
          <ul className="space-y-10">
            {menuItems.map((item, idx) => (
              <li 
                key={item.id} 
                className={`transform transition-all duration-500 ease-out delay-${(idx + 1) * 100} ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <button 
                  onClick={() => onNavigate(item.id)}
                  className="group text-left"
                >
                  <span className="block text-xs md:text-sm font-roboto tracking-[0.2em] text-white/50 uppercase mb-2 group-hover:text-[#fc466b] transition-colors">
                    {item.sub}
                  </span>
                  <span className={`block text-4xl md:text-6xl font-oswald font-medium uppercase transition-colors duration-300 ${activeSection === item.id ? 'gradient-text' : 'text-white group-hover:text-white/80'}`}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Media Column (Decorative) */}
        <div className={`hidden lg:block w-1/2 h-full bg-[#030b1e] relative overflow-hidden transition-transform duration-1000 delay-200 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
           {/* Abstract shapes or placeholder images mimicking the split images in Unio */}
           <div className="absolute inset-0 opacity-20">
               <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#fc466b]/20 to-transparent"></div>
               <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-t from-[#00dbde]/10 to-transparent rounded-full blur-3xl"></div>
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[1px] h-1/2 bg-white/10"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
