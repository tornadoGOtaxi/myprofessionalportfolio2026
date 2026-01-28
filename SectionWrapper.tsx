
import React from 'react';

interface SectionWrapperProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  mediaContent?: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subtitle, children, mediaContent }) => {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col lg:flex-row">
      
      {/* Content Side (Left on Desktop) */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto bg-[#061125] scrollbar-hide relative z-10 animate-fade-in">
        <div className="px-8 py-24 lg:px-20 lg:py-32 min-h-full">
           <div className="mb-12 opacity-0 animate-fade-in delay-200" style={{ animationFillMode: 'forwards' }}>
             <span className="block text-sm tracking-[0.3em] uppercase text-[#fc466b] mb-4">{subtitle}</span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald text-white uppercase leading-tight">
               {title.split(' ').map((word, i) => (
                 <span key={i} className="block">{word}</span>
               ))}
             </h2>
           </div>
           
           <div className="opacity-0 animate-fade-in delay-500" style={{ animationFillMode: 'forwards' }}>
             {children}
           </div>
        </div>
      </div>

      {/* Media Side (Right on Desktop) */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden bg-[#030b1e]">
         {/* Dark overlay animation curtain */}
         <div className="absolute inset-0 bg-[#061125] z-20 animate-block-move pointer-events-none"></div>
         
         <div className="relative w-full h-full animate-items-opacity z-10">
            {mediaContent ? mediaContent : (
              <div className="w-full h-full bg-gradient-to-br from-[#0c1833] to-[#061125] relative">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#061125] to-transparent"></div>
              </div>
            )}
         </div>
      </div>

    </div>
  );
};

export default SectionWrapper;
