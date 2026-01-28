
import React, { useState, useEffect } from 'react';
import { SUMMARY } from '../constants';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    "a Solution Architect", 
    "a Project Manager", 
    "a Full Stack Developer", 
    "Renee"
  ];

  useEffect(() => {
    // Stop animation when we reach the final name "Renee" and it is fully typed
    const isAtLastPhrase = loopNum === phrases.length - 1;
    if (isAtLastPhrase && text === phrases[phrases.length - 1] && !isDeleting) {
      return;
    }

    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(prev => isDeleting 
        ? fullText.substring(0, prev.length - 1) 
        : fullText.substring(0, prev.length + 1)
      );

      // Speed configuration: faster deletion, slower typing
      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && text === fullText) {
        // Finished typing the phrase, pause before deleting unless it's the last one
        if (isAtLastPhrase) {
            speed = 0; // Final stop
        } else {
            speed = 1500;
            setIsDeleting(true);
        }
      } else if (isDeleting && text === '') {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        speed = 300;
      }
      
      setTypingSpeed(speed);
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row overflow-hidden">
      
      {/* Intro Text Side */}
      <div className="w-full lg:w-1/2 h-full flex items-center bg-[#061125] z-10 relative px-8 lg:px-20 pt-20 lg:pt-0">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-oswald uppercase text-white leading-[1.1] mb-6 min-h-[160px] lg:min-h-[240px]">
            Hello! <br/> I am <span className="gradient-text">{text}</span>
            <span className="animate-pulse text-[#fc466b]">|</span>
          </h1>
          
          <div className="h-1 w-20 bg-gradient-to-r from-[#fc466b] to-[#00dbde] mb-8"></div>
          
          <p className="text-lg font-light leading-relaxed text-white/70 mb-10 max-w-md">
            {SUMMARY.split('.')[0]}.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
             <a 
               href="mailto:r.ikemire@outlook.com"
               className="group relative overflow-hidden px-8 py-4 border border-white/20 text-white font-oswald uppercase tracking-widest text-sm hover:border-transparent transition-all duration-300"
             >
               <span className="relative z-10 flex items-center gap-3">
                 Get in Touch <ArrowRight size={16} />
               </span>
               <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-[#fc466b] to-[#00dbde] transition-transform duration-500 ease-out"></div>
             </a>
          </div>
        </div>
      </div>

      {/* Media Slider Side */}
      <div className="w-full lg:w-1/2 h-full relative bg-[#030b1e] overflow-hidden">
        {/* Curtain Animation */}
        <div className="absolute inset-0 bg-[#061125] z-30 animate-block-move pointer-events-none"></div>

        {/* Content */}
        <div className="absolute inset-0 animate-items-opacity flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0c1833] via-[#061125] to-[#0a152e]"></div>
              
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#fc466b]/10 rounded-full blur-[100px] animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00dbde]/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

              <div className="absolute bottom-12 right-12 text-right px-8">
                <span className="block text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Current Focus</span>
                <p className="font-oswald text-2xl md:text-3xl text-white">Solution Architecture and Smart System Design</p>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
