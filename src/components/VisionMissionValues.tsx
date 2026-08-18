import React from 'react';
import { 
  Eye, 
  Target, 
  ShieldCheck, 
  Flame, 
  Award, 
  TrendingUp, 
  Lightbulb,
  Compass
} from 'lucide-react';
import { CORE_VALUES } from '../data/companyData';

export const VisionMissionValues: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-red-600" />;
      case 'Flame': return <Flame className="w-6 h-6 text-red-600" />;
      case 'Award': return <Award className="w-6 h-6 text-red-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-red-600" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-red-600" />;
      default: return <Award className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Blueprint lines */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* VISION CARD */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-xl p-8 sm:p-10 border border-slate-800 hover:border-red-600/60 transition-all duration-300 shadow-xl relative group">
            <div className="w-12 h-12 rounded-lg bg-red-950/80 border border-red-800 flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono-tech text-red-400 uppercase tracking-widest font-bold mb-2">
              OUR STRATEGIC DIRECTION
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight mb-4">
              VISION
            </h3>

            <blockquote className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed italic border-l-2 border-red-700 pl-4">
              "To promote modern ways of manufacturing machinery in Africa."
            </blockquote>

            <p className="text-xs text-slate-400 font-mono-tech mt-6 pt-4 border-t border-slate-800">
              MGM PAN-AFRICAN INDUSTRIAL VISION
            </p>
          </div>

          {/* MISSION CARD */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-xl p-8 sm:p-10 border border-slate-800 hover:border-red-600/60 transition-all duration-300 shadow-xl relative group">
            <div className="w-12 h-12 rounded-lg bg-red-950/80 border border-red-800 flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono-tech text-red-400 uppercase tracking-widest font-bold mb-2">
              OUR CORE PURPOSE & ACTION
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight mb-4">
              MISSION
            </h3>

            <blockquote className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed italic border-l-2 border-red-700 pl-4">
              "To substitute imports by manufacturing locally, combining innovative, scientific, local trends and ideas to reach standard-level solutions."
            </blockquote>

            <p className="text-xs text-slate-400 font-mono-tech mt-6 pt-4 border-t border-slate-800">
              ENGINEERING INDEPENDENCE & IMPORT SUBSTITUTION
            </p>
          </div>

        </div>

        {/* CORE VALUES HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/80 border border-red-800 text-red-400 text-xs font-mono-tech uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
            CORE VALUES
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            The foundation of our engineering discipline, precision manufacturing, and client relationships.
          </p>
        </div>

        {/* 5 Core Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={val.id}
              className="bg-slate-900/90 rounded-lg p-6 border border-slate-800 hover:border-red-600/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/20 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-red-600/50 transition-colors">
                    {getIcon(val.icon)}
                  </div>
                  <span className="text-xs font-mono-tech text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="text-lg font-display font-black uppercase text-white group-hover:text-red-400 transition-colors mb-2 tracking-wide">
                  {val.name}
                </h4>

                <p className="text-xs text-red-400 font-medium font-sans mb-3">
                  {val.tagline}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {val.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono-tech text-slate-400 uppercase">
                MGM Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
