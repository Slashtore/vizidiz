import React from 'react';
import { Home, Building, Box, Monitor } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="h-10 w-10 text-accent" />;
      case 'Building': return <Building className="h-10 w-10 text-accent" />;
      case 'Box': return <Box className="h-10 w-10 text-accent" />;
      case 'Monitor': return <Monitor className="h-10 w-10 text-accent" />;
      default: return <Home className="h-10 w-10 text-accent" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">Мои Услуги</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Я предлагаю полный спектр услуг в области компьютерной графики.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-accent transition-all duration-300 group">
              <div className="mb-6 bg-slate-900 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.iconName)}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;