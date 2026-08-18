import React, { useState } from 'react';
import { 
  Building, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  Filter, 
  ArrowUpRight 
} from 'lucide-react';
import { CLIENT_PARTNERS } from '../data/companyData';

interface ClientsBannerProps {
  onSelectClientProject?: (clientId: string) => void;
}

export const ClientsBanner: React.FC<ClientsBannerProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Major Clients' },
    { id: 'beverage', label: 'Beverage & Distillery' },
    { id: 'dairy', label: 'Dairy & Milk' },
    { id: 'agro', label: 'Agro-Processing & Meat' },
    { id: 'financial', label: 'Financial & Development' },
    { id: 'chemical', label: 'Chemicals & Construction' },
    { id: 'hospitality', label: 'Hospitality & Hotels' },
  ];

  const filteredClients = activeCategory === 'all'
    ? CLIENT_PARTNERS
    : CLIENT_PARTNERS.filter(c => c.category === activeCategory);

  return (
    <section id="clients" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/80 border border-red-800 text-red-400 text-xs font-mono-tech uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Proven Industrial Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight uppercase text-white">
              OUR MAJOR CLIENTS
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Trusted by Ethiopia's leading industrial enterprises, commercial wineries, export slaughterhouses, government development banks, and agro-processors.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono-tech text-xs text-slate-400">
            <span className="text-red-400 font-bold">16+ Featured Leaders</span> • Countrywide Industrial Footprint
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <span className="text-xs text-slate-400 uppercase font-mono-tech flex items-center mr-2">
            <Filter className="w-3.5 h-3.5 mr-1 text-red-500" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap transition-all duration-150 ${
                activeCategory === cat.id
                  ? 'bg-red-800 text-white font-bold shadow-md shadow-red-950/60 border border-red-600'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-slate-950/90 rounded-lg p-5 border border-slate-800 hover:border-red-600/70 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Sector */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono-tech uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {client.badge}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
                </div>

                {/* Client Name */}
                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                  {client.name}
                </h3>
                {client.nameAmharic && (
                  <p className="text-xs text-red-400/90 font-medium mt-0.5 font-sans">
                    {client.nameAmharic}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                  {client.description}
                </p>
              </div>

              {/* Equipment Supplied Highlight */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <div className="text-[11px] text-slate-300 font-mono-tech flex items-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mr-1.5 shrink-0 mt-0.5" />
                  <span className="line-clamp-2 text-slate-300">
                    {client.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Trust Quote Banner */}
        <div className="mt-10 p-6 rounded-lg bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded bg-red-950/80 border border-red-800 flex items-center justify-center shrink-0 text-red-400">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-white font-medium">
                "Our client relationships are forged on uncompromising equipment longevity, food safety compliance, and direct local technical support."
              </p>
              <p className="text-xs text-slate-400 font-mono-tech mt-1">
                Marast General Mechanics • Trusted Partner to Ethiopian Industry Since 2008
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-mono-tech uppercase tracking-wider border border-slate-700 flex items-center"
          >
            <span>View Realized Projects</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
