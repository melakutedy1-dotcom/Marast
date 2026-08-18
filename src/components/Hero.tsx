import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  Factory, 
  Flame, 
  Award,
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuote: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Heavy Industrial Background Imagery with Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=85" 
          alt="Heavy Industrial Stainless Steel Fabrication & Welding at MGM Workshop" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125 saturate-50"
        />
        
        {/* Dark Industrial Charcoal and Red Atmospheric Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        
        {/* Subtle Technical Blueprint Grid Lines */}
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      </div>

      {/* Engineering Coordinate & Telemetry Watermarks */}
      <div className="hidden md:block absolute top-6 right-8 text-right font-mono-tech text-[11px] text-slate-400 select-none z-10">
        <p>MGM-SPEC // LAT: 09°01'50"N • LON: 38°47'21"E</p>
        <p className="text-red-500/80 font-bold">ETHIOPIA INDUSTRIAL SECTOR GRADE: SS304 / SS316L</p>
        <p className="text-slate-400">STATUS: MANUFACTURING ACTIVE • 2008-2026</p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Credibility Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs font-mono-tech uppercase tracking-wider mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="font-semibold text-white">Established 2008</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Engineering</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Fabrication</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Manufacturing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight uppercase leading-[1.05] mb-6">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
              SOLUTIONS
            </span> <br />
            BUILT FOR INDUSTRY
          </h1>

          {/* Supporting Statement */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl text-balance">
            Advanced electro-mechanical engineering, food-grade stainless steel fabrication, and industrial equipment solutions engineered for Ethiopia and beyond.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={() => onOpenQuote()}
              id="hero-request-quote-btn"
              className="inline-flex items-center justify-center px-7 py-4 rounded bg-red-800 hover:bg-red-700 text-white font-display font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl shadow-red-950/60 border border-red-600/60 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services"
              id="hero-explore-services-btn"
              className="inline-flex items-center justify-center px-7 py-4 rounded bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-display font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 border border-slate-700/80 hover:border-slate-500"
            >
              <span>EXPLORE OUR SERVICES</span>
            </a>
          </div>

          {/* Core Technical Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 font-mono-tech">
            <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-white font-display flex items-center">
                15<span className="text-red-500">+</span>
              </div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Years Pedigree</div>
            </div>

            <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-white font-display flex items-center">
                SS304<span className="text-xs text-red-400 ml-1">/316L</span>
              </div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Food Grade Spec</div>
            </div>

            <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-white font-display flex items-center">
                100<span className="text-red-500">%</span>
              </div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Local Manufacturing</div>
            </div>

            <div className="p-3 rounded bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-white font-display flex items-center">
                Addis<span className="text-xs text-red-400 ml-1">Ababa</span>
              </div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">HQ & Workshop</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Steel Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-red-600 to-slate-800" />
    </section>
  );
};
