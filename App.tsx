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
  const scrollLockTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // ✅ Сразу обновляем активный раздел (кнопка желтеет)
      setActiveSection(sectionId);
      
      element.scrollIntoView({ behavior: 'smooth' });
      
      // 🔒 Блокируем handleScroll на 800мс (время плавного скролла)
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
      // 🔒 Если недавно был клик — игнорируем скролл
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
    </div>
  );
};

export default App;