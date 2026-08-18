import React, { useState } from 'react';
import { 
  Beaker, 
  Flame, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  Info,
  X
} from 'lucide-react';
import { DISTILLATION_DATA } from '../data/companyData';
import { DistillationItem } from '../types';

interface DistillationSectionProps {
  onOpenQuote: (serviceName?: string, productName?: string) => void;
}

export const DistillationSection: React.FC<DistillationSectionProps> = ({ onOpenQuote }) => {
  const [activeItem, setActiveItem] = useState<DistillationItem | null>(null);

  return (
    <section id="distillation" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-800">
      {/* Blueprint Grid & Atmospheric Elements */}
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

      {/* Decorative Blueprint Corner Mark */}
      <div className="absolute top-8 right-8 font-mono-tech text-[10px] text-slate-400 border border-slate-800 p-2 hidden sm:block">
        MGM-DISTILL-SYS // RECTIFICATION & EXTRACTION SPEC
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/80 border border-red-800 text-red-400 text-xs font-mono-tech uppercase tracking-wider mb-3">
            <Beaker className="w-3.5 h-3.5" />
            <span>Thermal Separation & Distillation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-white leading-tight">
            DISTILLATION & ALCOHOL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
              PROCESSING EQUIPMENT
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mt-3 font-normal">
            Precision-crafted fractional columns, electrolytic copper stills, reboilers, and explosion-safe spirit holding tanks designed for winemakers, distilleries, and essential oil extractors.
          </p>
        </div>

        {/* Distillation Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DISTILLATION_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="bg-slate-900/90 rounded-xl overflow-hidden border border-slate-800 hover:border-red-600/70 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/30"
            >
              {/* Product Visual */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                
                {/* Badge Number */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-md text-[10px] font-mono-tech uppercase tracking-wider text-red-400 border border-red-900/60">
                  SYSTEM // 0{idx + 1}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-mono-tech text-slate-400 uppercase block">
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-black text-white group-hover:text-red-400 transition-colors uppercase leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Key Technical Specs Pills */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-300 font-mono-tech">
                    {item.keySpecs.slice(0, 2).map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start">
                        <span className="text-red-500 mr-2 font-bold">•</span>
                        <span className="line-clamp-1">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveItem(item)}
                    className="text-xs font-mono-tech uppercase tracking-wider text-slate-300 hover:text-white inline-flex items-center"
                  >
                    <Info className="w-3.5 h-3.5 mr-1 text-red-500" />
                    <span>View Schematics</span>
                  </button>

                  <button
                    onClick={() => onOpenQuote('Distillation & Alcohol Processing Equipment', item.title)}
                    className="px-3.5 py-1.5 rounded bg-red-800 hover:bg-red-700 text-white text-xs font-mono-tech font-bold uppercase tracking-wider shadow-sm transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Engineering Credibility Line */}
        <div className="mt-12 p-6 rounded-lg bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs">
          <div className="flex items-center space-x-3 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>Fabricated with High-Purity Electrolytic Copper & Sanitary AISI 316L Stainless</span>
          </div>
          <span className="text-red-400 uppercase font-bold">
            Trusted by Awash Wine & Leading Distilleries
          </span>
        </div>

      </div>

      {/* Modal for Distillation Details */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 text-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-800 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-950 text-red-400 text-xs font-mono-tech uppercase font-bold mb-3 border border-red-800">
              Distillation Engineering Specification
            </div>

            <h3 className="text-2xl font-display font-black text-white uppercase mb-1">
              {activeItem.title}
            </h3>
            <p className="text-xs text-red-400 font-mono-tech uppercase mb-4">
              {activeItem.subtitle}
            </p>

            <div className="rounded-lg overflow-hidden h-48 mb-4 border border-slate-800">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
              {activeItem.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <h4 className="text-xs font-mono-tech font-bold uppercase text-red-400 mb-2">
                  Technical Specifications & Metallurgy:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300 font-mono-tech">
                  {activeItem.keySpecs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mr-2 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono-tech font-bold uppercase text-slate-400 mb-2">
                  Key Industrial Applications:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeItem.applications.map((app, aIdx) => (
                    <span key={aIdx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-mono-tech border border-slate-700">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono-tech uppercase"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const title = activeItem.title;
                  setActiveItem(null);
                  onOpenQuote('Distillation & Alcohol Processing Equipment', title);
                }}
                className="px-5 py-2.5 rounded bg-red-800 hover:bg-red-700 text-white text-xs font-display font-bold uppercase tracking-wider shadow-md"
              >
                Request Distillation Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
