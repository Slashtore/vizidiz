import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT, COMPANY_INFO } from '../constants';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_CONTENT.bgImage} 
          alt="3D Interior Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {HERO_CONTENT.avatarUrl && (
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-[#cc9b06] shadow-2xl mx-auto overflow-hidden">
              <img 
                src={HERO_CONTENT.avatarUrl} 
                alt={COMPANY_INFO.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        <h2 className="text-accent text-lg sm:text-xl uppercase tracking-[0.2em] mb-4 font-semibold">
          {COMPANY_INFO.subtitle}
        </h2>
        <h1 className="text-5xl sm:text-7xl font-serif font-bold text-white mb-8 leading-tight whitespace-pre-line">
          {HERO_CONTENT.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10 font-light">
          {HERO_CONTENT.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-accent text-slate-900 font-bold rounded-sm hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center"
          >
            {HERO_CONTENT.ctaPrimary}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border border-slate-500 text-white font-medium rounded-sm hover:bg-slate-800 hover:border-slate-400 transition-colors duration-300"
          >
            {HERO_CONTENT.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;