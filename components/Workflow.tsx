import React from 'react';
import { WORKFLOW_STEPS } from '../constants';

const Workflow: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/30 skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="text-accent uppercase tracking-widest font-semibold text-sm">Процесс</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">Как я работаю</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.id} className="relative group">
              <div className="text-6xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors mb-4 select-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-4 group-hover:border-accent transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;