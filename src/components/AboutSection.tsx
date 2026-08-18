import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  Factory, 
  ShieldCheck, 
  Wrench, 
  User, 
  Calendar, 
  Sparkles,
  X,
  Target
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_STATS } from '../data/companyData';

interface AboutSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const [showDetailedModal, setShowDetailedModal] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Professional Industrial Fabrication Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-slate-900/15 border-2 border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="MGM Industrial Engineering Workshop and Stainless Steel Tank Fabrication"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Engineering Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-white font-mono-tech text-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-red-400 font-bold uppercase tracking-wider flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Certified Fabrication
                  </span>
                  <span className="text-slate-400 text-[10px]">AD-ET SPEC</span>
                </div>
                <p className="text-slate-300 font-sans text-xs">
                  Food-grade stainless steel welding, precision pipe bending & ASME-standard pressure vessels.
                </p>
              </div>
            </div>

            {/* Decorative Offset Corner Accent */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-800 -z-10" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-slate-400 -z-10" />
          </div>

          {/* Right: Narrative & Statistics */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 border border-red-200 text-red-800 text-xs font-mono-tech uppercase tracking-wider mb-4">
              <Factory className="w-3.5 h-3.5" />
              <span>About Marast General Mechanics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-950 uppercase tracking-tight leading-tight mb-6">
              Engineering Innovation <br />
              <span className="text-red-800">Since 2008</span>
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              <p className="font-medium text-slate-900">
                <strong className="text-slate-950">Marast General Mechanics (MGM)</strong> is an Electro-Mechanical Engineering contracting company established in 2008 under the leadership of its founder, <strong className="text-red-800">Mr. Mearg Hailemichael</strong>.
              </p>
              <p>
                MGM provides end-to-end engineering solutions specializing in <strong>food-grade stainless steel fabrication</strong>, <strong>dairy & food processing machinery</strong>, <strong>distillation plants</strong>, and <strong>heavy industrial steel fabrication</strong> across Ethiopia and the broader Horn of Africa.
              </p>
              <p className="text-sm text-slate-600">
                Rooted in deep engineering craftsmanship and import-substitution manufacturing, we combine advanced computer-aided design, sanitary TIG welding, and local raw material adaptations to deliver robust machinery that matches international European specifications.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8 pt-6 border-t border-slate-200">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-3xl sm:text-4xl font-display font-black text-slate-950 flex items-baseline">
                  2008
                </div>
                <div className="text-xs font-bold text-red-800 uppercase tracking-wider font-mono-tech mt-1">
                  Established
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Under Mr. Mearg</div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-3xl sm:text-4xl font-display font-black text-slate-950 flex items-baseline">
                  15<span className="text-red-800">+</span>
                </div>
                <div className="text-xs font-bold text-red-800 uppercase tracking-wider font-mono-tech mt-1">
                  Years Experience
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Heavy metallurgy</div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-3xl sm:text-4xl font-display font-black text-slate-950 flex items-baseline">
                  Multi
                </div>
                <div className="text-xs font-bold text-red-800 uppercase tracking-wider font-mono-tech mt-1">
                  Industries
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Engineering Solutions</div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-3xl sm:text-4xl font-display font-black text-slate-950 flex items-baseline">
                  Custom
                </div>
                <div className="text-xs font-bold text-red-800 uppercase tracking-wider font-mono-tech mt-1">
                  Fabrication
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Bespoke Plants</div>
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowDetailedModal(true)}
                id="about-learn-more-btn"
                className="inline-flex items-center px-6 py-3.5 rounded bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.02]"
              >
                <span>LEARN MORE ABOUT MGM</span>
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </button>

              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center px-6 py-3.5 rounded bg-red-800 hover:bg-red-700 text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.02]"
              >
                <span>CONSULT OUR ENGINEERS</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Modal */}
      {showDetailedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setShowDetailedModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-100 text-red-800 text-xs font-mono-tech font-bold uppercase mb-4">
              Company Pedigree & Engineering Philosophy
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950 uppercase mb-4">
              Marast General Mechanics (MGM)
            </h3>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Founded in 2008 in Addis Ababa by <strong>Mr. Mearg Hailemichael</strong>, Marast General Mechanics was established with a clear national imperative: to elevate Ethiopia's domestic manufacturing capacity through advanced electro-mechanical craftsmanship.
              </p>
              <p>
                Over the past 15+ years, MGM has developed into a premier turnkey engineering contractor for food and beverage conglomerates, public development institutions, agricultural unions, and private factory enterprises.
              </p>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-4 space-y-2">
                <h4 className="font-display font-bold text-slate-950 text-sm uppercase flex items-center text-red-800">
                  <ShieldCheck className="w-4 h-4 mr-1.5" /> Key Engineering Principles
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <strong>Sanitary Metallurgy:</strong> Exclusive dedicated stainless steel fabrication areas to avoid ferrous carbon steel cross-contamination.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <strong>Turnkey Local Support:</strong> Rapid on-site technician response, eliminating weeks of waiting for foreign technicians.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <strong>Import Substitution:</strong> Designing robust machinery with locally accessible consumables, reducing foreign exchange strain.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-tech pt-2">
                <div className="p-3 bg-slate-100 rounded">
                  <span className="text-slate-500 block">HEADQUARTERS & WORKSHOP</span>
                  <span className="font-bold text-slate-900">{COMPANY_INFO.fullAddress}</span>
                </div>
                <div className="p-3 bg-slate-100 rounded">
                  <span className="text-slate-500 block">DIRECT LINES</span>
                  <span className="font-bold text-slate-900">{COMPANY_INFO.phoneDisplay}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setShowDetailedModal(false)}
                className="px-4 py-2 text-xs font-bold uppercase rounded bg-slate-200 hover:bg-slate-300 text-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowDetailedModal(false);
                  onOpenQuote();
                }}
                className="px-4 py-2 text-xs font-bold uppercase rounded bg-red-800 hover:bg-red-700 text-white"
              >
                Request Equipment Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
