import React from 'react';
import { 
  BadgeCheck, 
  Sliders, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_MGM } from '../data/companyData';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BadgeCheck': return <BadgeCheck className="w-6 h-6 text-red-700" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-red-700" />;
      case 'Globe': return <Globe className="w-6 h-6 text-red-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-red-700" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-red-700" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-red-700" />;
      default: return <ShieldCheck className="w-6 h-6 text-red-700" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 border border-red-200 text-red-800 text-xs font-mono-tech uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Industrial Value Proposition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-slate-950">
            WHY INDUSTRIES CHOOSE MGM
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            Eliminating import delays, foreign currency dependency, and technical bottlenecks with dependable, locally manufactured industrial engineering.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_MGM.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-600/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-red-600/50 transition-colors">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-red-50 text-red-800 border border-red-200 font-bold">
                    {pillar.metric}
                  </span>
                </div>

                <h3 className="text-xl font-display font-black uppercase text-slate-950 group-hover:text-red-800 transition-colors tracking-tight mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-red-800 font-mono-tech uppercase tracking-wider mb-3 font-bold">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                <span>PILLAR 0{idx + 1}</span>
                <span className="text-red-800 font-bold">MGM STANDARD</span>
              </div>
            </div>
          ))}
        </div>

        {/* Import Substitution Bottom Banner */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-white mb-2">
              Accelerate Your Industrial Plant Setup in Ethiopia
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              No foreign currency letters of credit required. Certified local fabrication, on-site installation, and immediate spare parts availability from our Addis Ababa workshop.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="shrink-0 px-6 py-3.5 rounded bg-red-800 hover:bg-red-700 text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950/50 border border-red-600 transition-all hover:scale-105"
          >
            DISCUSS YOUR PROJECT
          </button>
        </div>

      </div>
    </section>
  );
};
