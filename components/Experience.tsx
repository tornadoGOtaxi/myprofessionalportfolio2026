
import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import SectionWrapper from './SectionWrapper';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <SectionWrapper 
      title="Career History" 
      subtitle="Portfolio"
      mediaContent={
        <div 
          className="relative w-full h-full overflow-hidden bg-[#030b1e]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
            {/* Background Image - Subtle parallax movement */}
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10 transition-transform duration-300 ease-out will-change-transform"
              style={{ 
                transform: `scale(1.1) translate3d(${mousePos.x * -30}px, ${mousePos.y * -30}px, 0)` 
              }}
            ></div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#061125] via-transparent to-transparent pointer-events-none"></div>
            
            {/* Floating Card */}
            <div 
              className="absolute bottom-12 left-12 p-10 border border-white/5 bg-[#061125]/90 backdrop-blur-xl max-w-sm transition-transform duration-500 ease-out will-change-transform shadow-2xl rounded-lg"
              style={{
                transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`
              }}
            >
                 <div className="w-12 h-1 bg-[#fc466b] mb-6"></div>
                 <h4 className="font-oswald text-2xl text-white mb-3 uppercase tracking-wider">Expert Delivery</h4>
                 <p className="text-sm font-light text-white/50 leading-relaxed">
                    Over 15 years of experience architecting resilient systems and leading cross-functional teams in high-stakes environments.
                 </p>
            </div>
        </div>
      }
    >
      <div className="space-y-16 pb-12">
        {EXPERIENCE.map((job) => (
          <div key={job.id} className="relative pl-10 border-l border-white/5 hover:border-[#fc466b] transition-all duration-500 group">
             <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] bg-[#061125] border border-white/20 group-hover:border-[#fc466b] group-hover:bg-[#fc466b] group-hover:scale-125 rounded-full transition-all duration-300"></div>
             
             <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
               <h4 className="font-oswald text-2xl text-white group-hover:text-[#00dbde] transition-colors uppercase tracking-wide">{job.role}</h4>
               <span className="font-mono text-[10px] text-white/30 tracking-widest border border-white/5 px-3 py-1 rounded mt-2 sm:mt-0 group-hover:text-white/60 transition-colors uppercase">{job.period}</span>
             </div>
             
             <h5 className="font-oswald text-sm font-medium text-white/40 mb-8 flex items-center gap-2 uppercase tracking-widest">
                <Briefcase size={14} className="text-[#fc466b]" />
                {job.company}
             </h5>

             <ul className="space-y-4 mb-8">
               {job.description.map((desc, i) => (
                 <li key={i} className="text-sm font-light text-white/60 leading-relaxed pl-6 relative">
                    <span className="absolute left-0 top-2.5 w-1.5 h-[1px] bg-[#00dbde]"></span>
                    {desc}
                 </li>
               ))}
             </ul>
          </div>
        ))}
        
        <div className="pt-12 mt-12 border-t border-white/5">
           <span className="text-[10px] text-white/20 font-mono tracking-widest uppercase">PMP® Certified • ScrumMaster® • Solutions Architect</span>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
