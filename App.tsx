import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Calculator from './components/Calculator';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const scrollLockTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Проверка согласия на куки при загрузке
  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowCookieBanner(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
      if (scrollLockTimeoutRef.current) {
        clearTimeout(scrollLockTimeoutRef.current);
      }
      scrollLockTimeoutRef.current = setTimeout(() => {
        scrollLockTimeoutRef.current = null;
      }, 800);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLockTimeoutRef.current) return;
      const sections = ['hero', 'services', 'portfolio', 'calculator', 'contact'];
      const scrollPosition = window.scrollY + 300;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollLockTimeoutRef.current) {
        clearTimeout(scrollLockTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-accent selection:text-slate-900">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <Workflow />
        <Portfolio />
        <Calculator />
        <Testimonials />
        <Contact />
      </main>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-slate-800 border border-slate-700 text-slate-300 px-6 py-4 rounded-xl shadow-2xl w-[90%] max-w-lg animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left">
              Мы используем cookie для сохранения настроек и улучшения работы сайта.
            </p>
            <button 
              onClick={acceptCookies}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-colors flex-shrink-0"
            >
              Принять
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;