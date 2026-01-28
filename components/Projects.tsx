
import React from 'react';
import { PROJECTS } from '../constants';
import FadeIn from './FadeIn';
import { Database, Signal, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const getIcon = (sector: string) => {
    switch(sector) {
        case 'Government': return <Database size={32} className="text-stone-400" />;
        case 'PropTech': return <Signal size={32} className="text-stone-400" />;
        case 'Non-Profit': return <MapPin size={32} className="text-stone-400" />;
        default: return <Database size={32} className="text-stone-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-20 bg-[#0a0a0a] border-t border-stone-900">
      <FadeIn className="max-w-7xl mx-auto">
        <p className="text-stone-500 tracking-[0.3em] uppercase mb-4 text-sm">Portfolio</p>
        <h3 className="text-3xl md:text-4xl font-serif text-white mb-16">Select Projects</h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-[#121212] border border-stone-800 hover:border-stone-600 transition-colors flex flex-col h-full group p-8">
              
              <div className="mb-8 flex justify-between items-start">
                  <div className="p-4 bg-stone-900/50 rounded-full border border-stone-800 group-hover:border-stone-600 transition-colors">
                    {getIcon(project.sector)}
                  </div>
                  <span className="text-xs font-mono text-stone-500 border border-stone-800 px-3 py-1 rounded uppercase tracking-wider">
                     {project.sector}
                   </span>
              </div>

              <div className="flex-1 flex flex-col">
                <h4 className="text-2xl font-serif text-stone-200 mb-2 group-hover:text-white transition-colors">{project.title}</h4>
                <p className="text-stone-500 text-sm italic mb-6 border-b border-stone-800 pb-4">{project.subtitle}</p>
                
                <p className="text-stone-400 font-light text-base leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="mt-auto">
                   <p className="text-xs text-stone-600 uppercase tracking-widest mb-3">Technologies</p>
                   <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs text-stone-400 bg-stone-900 border border-stone-800 px-2 py-1.5 rounded font-mono">
                        {t}
                        </span>
                    ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
