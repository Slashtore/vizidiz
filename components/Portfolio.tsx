import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Свайп стейт
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const filteredProjects = filter === ProjectCategory.ALL 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = [
    { value: ProjectCategory.ALL, label: 'Все' },
    { value: ProjectCategory.INTERIOR, label: 'Интерьер' },
    { value: ProjectCategory.EXTERIOR, label: 'Экстерьер' },
    { value: ProjectCategory.PRODUCT, label: 'Предметы' },
    { value: ProjectCategory.MODELING, label: 'Моделинг' },
  ];

  // Навигация клавишами
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') {
        setSelectedProject(null);
        return;
      }
      if (selectedProject.imageUrls.length > 1) {
        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex(prev => prev === 0 ? selectedProject.imageUrls.length - 1 : prev - 1);
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex(prev => prev === selectedProject.imageUrls.length - 1 ? 0 : prev + 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Свайп обработчики
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!selectedProject || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (selectedProject.imageUrls.length > 1) {
      if (isLeftSwipe) {
        setCurrentImageIndex(prev => prev === selectedProject.imageUrls.length - 1 ? 0 : prev + 1);
      }
      if (isRightSwipe) {
        setCurrentImageIndex(prev => prev === 0 ? selectedProject.imageUrls.length - 1 : prev - 1);
      }
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">Портфолио</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat.value
                    ? 'bg-accent text-slate-900'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
               onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer border border-slate-800 hover:border-accent/50 transition-colors"
            >
              <img 
                src={project.imageUrls[0]} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-xs uppercase tracking-wider font-bold mb-2">
                  {categories.find(c => c.value === project.category)?.label}
                </span>
                <h3 className="text-white text-lg font-bold flex items-center justify-between">
                  {project.title}
                  <Maximize2 className="w-4 h-4 text-slate-300" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 rounded-xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl border border-slate-700" 
            onClick={e => e.stopPropagation()}
          >
            {/* Image Slider Container */}
            <div 
              className="w-full md:w-2/3 h-[50vh] md:h-[70vh] bg-black relative flex items-center justify-center overflow-hidden group touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {selectedProject.imageUrls.map((url, index) => (
                <img 
                  key={index}
                  src={url} 
                  alt={`${selectedProject.title} - ${index + 1}`} 
                  className={`w-full h-full object-contain absolute transition-opacity duration-300 ${
                    currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
  
              {/* Кнопки навигации */}
              {selectedProject.imageUrls.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? selectedProject.imageUrls.length - 1 : prev - 1); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === selectedProject.imageUrls.length - 1 ? 0 : prev + 1); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
      
                  {/* Индикаторы страниц */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.imageUrls.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentImageIndex === idx ? 'bg-accent' : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content Container */}
            <div className="w-full md:w-1/3 p-8 flex flex-col relative overflow-y-auto">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 mt-4 md:mt-0">
                {categories.find(c => c.value === selectedProject.category)?.label}
              </span>
              
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                {selectedProject.title}
              </h3>

              <div className="space-y-6 mb-8">
                <p className="text-slate-300 leading-relaxed">
                  {selectedProject.description || "Описание проекта отсутствует."}
                </p>
                
                <div className="border-t border-slate-800 pt-6 space-y-3">
                  {selectedProject.client && (
                    <div className="flex items-center text-slate-400">
                      <User className="w-4 h-4 mr-3 text-accent" />
                      <span className="text-sm">Клиент: <span className="text-slate-200">{selectedProject.client}</span></span>
                    </div>
                  )}
                  {selectedProject.year && (
                    <div className="flex items-center text-slate-400">
                      <Calendar className="w-4 h-4 mr-3 text-accent" />
                      <span className="text-sm">Год: <span className="text-slate-200">{selectedProject.year}</span></span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => {
                    setSelectedProject(null);
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 bg-slate-800 border border-slate-600 text-white font-medium rounded hover:bg-accent hover:text-slate-900 hover:border-accent transition-colors duration-300"
                >
                  Хочу такой же проект
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;