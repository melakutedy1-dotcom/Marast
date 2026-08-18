import React from 'react';
import { 
  Building, 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/companyData';

interface IndustriesSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/80 border border-red-800 text-red-400 text-xs font-mono-tech uppercase tracking-wider mb-3">
            <Factory className="w-3.5 h-3.5" />
            <span>Cross-Sector Industrial Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-white leading-tight">
            INDUSTRIES WE SERVE
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mt-3 font-normal">
            Delivering mission-critical electro-mechanical machinery, food sanitary plants, and structural steel solutions across Ethiopia's most demanding economic sectors.
          </p>
        </div>

        {/* 8 Industries Large Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_SERVED.map((ind) => (
            <div
              key={ind.id}
              className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-red-600 transition-all duration-500 flex flex-col justify-between h-[360px] sm:h-[400px] shadow-lg hover:shadow-2xl hover:shadow-red-950/40"
            >
              {/* Background Image with Zoom & Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-50 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30" />
              </div>

              {/* Dynamic Red Accent Line (Appears on Hover) */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />

              {/* Top Meta */}
              <div className="relative z-10 p-6 flex justify-between items-start">
                <span className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-mono-tech uppercase tracking-wider text-red-400 border border-red-900/60">
                  {ind.stats}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-6 pt-0">
                <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white group-hover:text-red-400 transition-colors tracking-tight mb-2">
                  {ind.name}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed font-sans">
                  {ind.description}
                </p>

                {/* Key Equipment List */}
                <div className="space-y-1 mb-4 hidden group-hover:block transition-all duration-300">
                  {ind.keyEquipment.slice(0, 2).map((eq, eIdx) => (
                    <div key={eIdx} className="text-[11px] font-mono-tech text-slate-300 flex items-center">
                      <CheckCircle2 className="w-3 h-3 text-red-500 mr-1.5 shrink-0" />
                      <span className="truncate">{eq}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onOpenQuote(ind.name)}
                  className="w-full py-2 rounded bg-slate-950/90 hover:bg-red-800 text-white text-xs font-mono-tech uppercase font-bold tracking-wider border border-slate-700/80 hover:border-red-600 transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>Inquire Sector Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
