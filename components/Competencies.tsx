
import React, { useState } from 'react';
import { COMPETENCIES, SKILL_METRICS } from '../constants';
import SectionWrapper from './SectionWrapper';
import { Cpu, Database, Workflow, Target, Award } from 'lucide-react';

const Competencies: React.FC = () => {
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

  const getCategoryIcon = (title: string) => {
    if (title.includes('Architecture')) return <Cpu size={18} />;
    if (title.includes('Data')) return <Database size={18} />;
    if (title.includes('Automation')) return <Workflow size={18} />;
    if (title.includes('Project')) return <Target size={18} />;
    return <Award size={18} />;
  };

  return (
    <SectionWrapper 
      title="Strategic Expertise" 
      subtitle="Competencies"
      mediaContent={
        <div 
          className="w-full h-full bg-[#030b1e] flex items-center justify-center p-8 lg:p-12 overflow-hidden relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
            {/* Background Texture & Grid - subtle reverse movement */}
            <div 
              className="absolute inset-0 opacity-10 transition-transform duration-300 ease-out will-change-transform"
              style={{
                transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0)`,
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}
            ></div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#fc466b]/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#00dbde]/10 rounded-full blur-[80px]"></div>

            {/* Skills Container - 3D Tilt Effect */}
            <div 
              className="w-full max-w-md space-y-8 relative z-10 transition-transform duration-300 ease-out will-change-transform bg-[#061125]/40 backdrop-blur-sm p-8 border border-white/5 rounded-xl shadow-2xl"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -5}deg) translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`
              }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-[2px] bg-gradient-to-r from-[#fc466b] to-[#00dbde]"></div>
                    <h3 className="font-oswald text-xl tracking-widest text-white uppercase">Technical Proficiency</h3>
                </div>

                {SKILL_METRICS.map((skill, idx) => (
                    <div key={idx} className="w-full group">
                        <div className="flex justify-between mb-2">
                            <span className="font-oswald text-xs uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                                {skill.subject}
                            </span>
                            <span className="font-mono text-[10px] text-[#00dbde]">{skill.A}%</span>
                        </div>
                        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                            <div 
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#fc466b] to-[#00dbde] transition-all duration-1000 ease-out"
                                style={{ width: `${skill.A}%` }}
                            ></div>
                        </div>
                    </div>
                ))}

                <div className="pt-6 border-t border-white/5 mt-4">
                    <p className="text-[10px] text-white/30 font-mono uppercase tracking-[0.2em]">
                        Verified cross-domain core competencies
                    </p>
                </div>
            </div>
        </div>
      }
    >
      <div className="space-y-16 pb-20">
        <p className="font-light leading-relaxed text-lg text-white/70 max-w-lg">
           Driving organizational success through a unique blend of technical mastery and strategic leadership. I bridge the gap between abstract business goals and concrete, scalable technical reality.
        </p>

        <div className="space-y-20">
          {COMPETENCIES.map((category, idx) => (
            <div key={idx} className="group relative">
              <div className="flex items-center gap-4 mb-8">
                 <div className="flex items-center justify-center w-10 h-10 border border-white/10 text-[#fc466b] group-hover:bg-[#fc466b] group-hover:text-white transition-all duration-300">
                    {getCategoryIcon(category.title)}
                 </div>
                 <h4 className="font-oswald text-2xl text-white uppercase tracking-wider group-hover:text-[#00dbde] transition-colors">
                    {category.title}
                 </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pl-14">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="relative group/item">
                    <div className="absolute -left-4 top-2 w-[1px] h-0 group-hover/item:h-full bg-gradient-to-b from-[#fc466b] to-transparent transition-all duration-300"></div>
                    <strong className="block text-white font-medium text-sm mb-1 uppercase tracking-widest transition-colors group-hover/item:text-[#00dbde]">
                        {skill.name}
                    </strong>
                    <p className="text-xs font-light text-white/50 leading-relaxed group-hover/item:text-white/70 transition-colors">
                        {skill.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Competencies;
