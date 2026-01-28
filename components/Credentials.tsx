import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award } from 'lucide-react';
import FadeIn from './FadeIn';

const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="py-24 px-6 lg:px-20 bg-[#0f0f0f] border-t border-stone-900">
      <FadeIn className="max-w-6xl mx-auto">
        <p className="text-stone-500 tracking-[0.3em] uppercase mb-4 text-sm">Qualifications</p>
        <h3 className="text-3xl md:text-4xl font-serif text-white mb-16">Education & Certifications</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8 pb-4 border-b border-stone-800">
              <GraduationCap className="text-stone-400 mr-4" size={28} />
              <h4 className="text-2xl font-serif text-stone-200">Education</h4>
            </div>
            
            <div className="space-y-12">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="group">
                  <h5 className="text-xl text-white font-medium mb-1 group-hover:text-stone-300 transition-colors">
                    {edu.institution}
                  </h5>
                  <p className="text-stone-400 font-serif italic mb-2">{edu.degree}</p>
                  <span className="text-stone-600 text-sm font-mono">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center mb-8 pb-4 border-b border-stone-800">
              <Award className="text-stone-400 mr-4" size={28} />
              <h4 className="text-2xl font-serif text-stone-200">Certifications</h4>
            </div>

            <div className="space-y-8">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-[#151515] p-6 border border-stone-800/50 hover:border-stone-600 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-stone-200 font-medium mb-1">{cert.name}</h5>
                      <p className="text-stone-500 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-stone-600 text-xs font-mono border border-stone-800 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
};

export default Credentials;