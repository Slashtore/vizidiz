import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">Отзывы Клиентов</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-slate-800 p-8 rounded-xl relative group hover:bg-slate-800/80 transition-colors">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-700 group-hover:text-accent/20 transition-colors" />
              
              <div className="flex items-center mb-6">
                <img 
                  src={item.avatarUrl} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                />
                <div className="ml-4">
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-accent text-xs uppercase tracking-wide">{item.role}</p>
                  {item.company && <p className="text-slate-500 text-xs">{item.company}</p>}
                </div>
              </div>
              
              <p className="text-slate-300 italic leading-relaxed text-sm">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;