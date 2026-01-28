
import React, { useState, useEffect } from 'react';
import { SUMMARY } from '../constants';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -0.5 to 0.5
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-20 relative overflow-hidden bg-[#061125]">
      {/* Dynamic Background Parallax Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Background Layer - Moves slowest */}
        <div 
          className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-stone-800/20 rounded-full mix-blend-screen filter blur-[120px] transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate3d(${mousePos.x * 40}px, ${mousePos.y * 40}px, 0)`,
            willChange: 'transform'
          }}
        ></div>

        {/* Mid Layer Accent - Moves faster, different direction */}
        <div 
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#fc466b]/5 rounded-full mix-blend-overlay filter blur-[100px] transition-transform duration-700 ease-out animate-pulse"
          style={{ 
            transform: `translate3d(${mousePos.x * -80}px, ${mousePos.y * -80}px, 0)`,
            willChange: 'transform'
          }}
        ></div>

        {/* Foreground Layer Accent - Moves fastest */}
        <div 
          className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-[#00dbde]/5 rounded-full mix-blend-color-dodge filter blur-[140px] transition-transform duration-500 ease-out"
          style={{ 
            transform: `translate3d(${mousePos.x * 120}px, ${mousePos.y * 120}px, 0)`,
            willChange: 'transform'
          }}
        ></div>
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <FadeIn className="max-w-4xl relative z-10">
        <p className="text-stone-500 tracking-[0.3em] uppercase mb-6 text-sm">Introduction</p>
        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-12">
          Enterprise Systems. <br/>
          <span className="gradient-text italic opacity-90">Data & Automation.</span> <br/>
          Strategic Leadership.
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="w-20 h-1 bg-gradient-to-r from-[#fc466b] to-[#00dbde] mb-6"></div>
            <p className="text-stone-400 font-light leading-relaxed">
              Based in the United States. <br/>
              Available for remote & hybrid roles.
            </p>
          </div>
          <div className="md:w-2/3">
             <p className="text-xl text-stone-300 font-light leading-relaxed mb-8">
              {SUMMARY}
             </p>
             <div className="flex flex-wrap gap-4">
               <a 
                href="#contact" 
                className="group relative overflow-hidden px-10 py-4 border border-white/10 text-white font-oswald uppercase tracking-widest text-xs hover:border-transparent transition-all duration-300"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-[#fc466b] to-[#00dbde] transition-transform duration-500 ease-out"></div>
              </a>
             </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
