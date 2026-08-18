import React from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Workflow, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/80 border border-red-800 text-red-400 text-xs font-mono-tech uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Engineering Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-white">
            HOW WE WORK
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mt-3">
            A rigorous six-stage electro-mechanical engineering lifecycle ensuring precision tolerances, verified throughput, and seamless commissioning.
          </p>
        </div>

        {/* 6 Steps Grid with Connected Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-slate-900/90 rounded-xl p-8 border border-slate-800 hover:border-red-600/70 transition-all duration-300 relative group flex flex-col justify-between hover:shadow-xl hover:shadow-red-950/20"
            >
              <div>
                {/* Step Number Circle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-red-800 flex items-center justify-center font-mono-tech font-black text-white text-lg group-hover:bg-red-800 transition-colors shadow-lg">
                    {step.number}
                  </div>
                  <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                    PHASE // 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-black uppercase text-white group-hover:text-red-400 transition-colors tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {step.shortDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-1.5 pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono-tech text-red-400 uppercase font-bold tracking-wider block mb-1">
                    Key Deliverables:
                  </span>
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mr-2 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Rigor Footer */}
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono-tech text-slate-400">
                {step.tools}
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono-tech">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>Full Warranty, On-Site Commissioning & Preventative Maintenance Included on All Turnkey Deliveries</span>
          </div>
        </div>

      </div>
    </section>
  );
};
