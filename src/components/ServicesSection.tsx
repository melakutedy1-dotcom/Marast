import React, { useState } from 'react';
import { 
  Wrench, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Layers, 
  Utensils, 
  Building2, 
  Flame, 
  Hammer, 
  Sparkles, 
  Milk, 
  Droplets, 
  Wine, 
  Beaker, 
  Snowflake, 
  Wind, 
  LayoutGrid, 
  Truck, 
  Database, 
  Box, 
  Zap, 
  Warehouse, 
  TreePine,
  ExternalLink,
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'food' | 'hotel' | 'construction' | 'other'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const tabs = [
    { id: 'all', label: 'All Services', icon: Layers },
    { id: 'food', label: 'Food Processing Plants', icon: Utensils },
    { id: 'hotel', label: 'Hotel Industries', icon: Snowflake },
    { id: 'construction', label: 'Construction Industries', icon: Building2 },
    { id: 'other', label: 'Specialized Fabrication', icon: Hammer },
  ];

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeTab);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Milk': return <Milk className="w-5 h-5 text-red-600" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-red-600" />;
      case 'Wine': return <Wine className="w-5 h-5 text-red-600" />;
      case 'Beaker': return <Beaker className="w-5 h-5 text-red-600" />;
      case 'Snowflake': return <Snowflake className="w-5 h-5 text-red-600" />;
      case 'Wind': return <Wind className="w-5 h-5 text-red-600" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-red-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-red-600" />;
      case 'Truck': return <Truck className="w-5 h-5 text-red-600" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-red-600" />;
      case 'Database': return <Database className="w-5 h-5 text-red-600" />;
      case 'Box': return <Box className="w-5 h-5 text-red-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-red-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-red-600" />;
      case 'Warehouse': return <Warehouse className="w-5 h-5 text-red-600" />;
      case 'TreePine': return <TreePine className="w-5 h-5 text-red-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-red-600" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-red-600" />;
      default: return <Wrench className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-100 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 border border-red-200 text-red-800 text-xs font-mono-tech uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Industrial Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-slate-950">
            OUR ENGINEERING SERVICES
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            Comprehensive fabrication and engineering solutions for industrial applications across Ethiopia.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-display font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-red-800 text-white shadow-lg shadow-red-950/20 border border-red-700'
                    : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-red-700'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-red-600/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-md text-[10px] font-mono-tech uppercase tracking-wider text-slate-300 border border-slate-700">
                  {service.category.toUpperCase()}
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="w-8 h-8 rounded bg-white flex items-center justify-center shadow-md">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono-tech text-white/80">
                    MGM-ENG
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-black text-slate-950 group-hover:text-red-800 transition-colors uppercase tracking-tight mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700 font-sans">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-700 mr-1.5 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-display font-bold uppercase tracking-wider text-slate-900 hover:text-red-800 inline-flex items-center group-hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="px-3 py-1.5 rounded bg-red-50 hover:bg-red-100 text-red-800 text-xs font-mono-tech uppercase font-bold border border-red-200 transition-colors"
                  >
                    RFQ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded bg-red-100 text-red-800 text-xs font-mono-tech font-bold uppercase">
                {selectedService.category} Service
              </span>
              <span className="text-xs text-slate-400 font-mono-tech">
                MGM Engineering
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950 uppercase mb-3">
              {selectedService.title}
            </h3>

            <div className="rounded-lg overflow-hidden h-52 mb-4">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold font-mono-tech uppercase tracking-wider text-red-800 mb-2">
                  Technical Features & Capabilities:
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {selectedService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold font-mono-tech uppercase tracking-wider text-slate-900 mb-1.5">
                  Standard Materials Applied:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.materials.map((mat, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-xs font-mono-tech border border-slate-200">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenQuote(title);
                }}
                className="px-5 py-2.5 rounded bg-red-800 hover:bg-red-700 text-white text-xs font-display font-bold uppercase tracking-wider shadow-md"
              >
                Request Quote for this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
