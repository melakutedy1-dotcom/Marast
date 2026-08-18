import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white relative border-t border-slate-800">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info & Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-950 rounded flex items-center justify-center font-display font-black text-white text-base shadow-lg border border-red-600/50">
                MGM
              </div>
              <div>
                <span className="text-base sm:text-lg font-display font-black uppercase text-white tracking-tight block leading-tight">
                  MARAST <span className="text-red-500">GENERAL MECHANICS</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono-tech uppercase tracking-wider">
                  Established 2008 • Addis Ababa, Ethiopia
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-sans">
              "Electro-Mechanical Engineering, Industrial Fabrication and Manufacturing Solutions."
            </p>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Specializing in food-grade stainless steel fabrication, turnkey dairy plants, distillation columns, steam boilers, and heavy structural steel systems supporting import substitution in Ethiopia.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="px-4 py-2 rounded bg-red-800 hover:bg-red-700 text-white text-xs font-display font-bold uppercase tracking-wider border border-red-600 shadow-md transition-all hover:scale-105"
              >
                Request an Industrial Quote
              </button>
            </div>
          </div>

          {/* Col 2: COMPANY */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-red-400 tracking-wider">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors hover:underline">
                  About MGM
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors hover:underline">
                  Vision & Mission
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors hover:underline">
                  Trusted Clients
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors hover:underline">
                  Projects Showcase
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors hover:underline">
                  Engineering Gallery
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors hover:underline">
                  How We Work
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: SERVICES */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-red-400 tracking-wider">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors hover:underline">
                  Food Processing Plants
                </a>
              </li>
              <li>
                <a href="#dairy" className="hover:text-white transition-colors hover:underline">
                  Dairy Equipment
                </a>
              </li>
              <li>
                <a href="#distillation" className="hover:text-white transition-colors hover:underline">
                  Distillation & Alcohol
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors hover:underline">
                  Hotel Kitchen Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors hover:underline">
                  Steel Fabrication & PEB
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors hover:underline">
                  Industrial Products
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: CONTACT */}
          <div className="lg:col-span-3 space-y-3 font-mono-tech text-xs">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-red-400 tracking-wider">
              CONTACT
            </h4>

            <div className="space-y-3 text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </div>

              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} className="hover:text-white block font-bold">
                    {COMPANY_INFO.phones[0]}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}`} className="hover:text-white block font-bold">
                    {COMPANY_INFO.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center space-x-2 text-slate-400 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-slate-400">
          <div>
            © 2026 Marast General Mechanics (MGM). All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Addis Ababa, Ethiopia</span>
            <span className="text-slate-700">•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center border border-slate-800"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
