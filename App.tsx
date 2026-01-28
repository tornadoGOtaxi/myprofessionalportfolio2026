
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Loader from './components/Loader';

export type SectionType = 'home' | 'competencies' | 'experience' | 'contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initial loader simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (section: SectionType) => {
    if (section === activeSection) {
      setIsMenuOpen(false);
      return;
    }
    
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#061125] text-white">
      {/* Loading Screen */}
      <Loader visible={isLoading} />

      {/* Main Layout Elements */}
      {!isLoading && (
        <>
          <Header 
            onMenuClick={() => setIsMenuOpen(true)} 
            activeSection={activeSection}
          />
          
          <Menu 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)} 
            onNavigate={navigateTo}
            activeSection={activeSection}
          />

          {/* Main Content Area - Renders active section */}
          <main className="absolute top-0 left-0 w-full h-full lg:pl-[100px] z-0">
             {activeSection === 'home' && <Home />}
             {activeSection === 'competencies' && <Competencies />}
             {activeSection === 'experience' && <Experience />}
             {activeSection === 'contact' && <Contact />}
          </main>
        </>
      )}
    </div>
  );
};

export default App;
