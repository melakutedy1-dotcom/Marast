import React from 'react';
import { 
  Phone, 
  FileText, 
  MessageSquare, 
  ArrowRight, 
  Mail, 
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CtaBannerProps {
  onOpenQuote: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-950 via-red-900 to-red-950 text-white relative overflow-hidden border-y border-red-800 shadow-2xl">
      {/* Blueprint Grid Lines Over Dark Red */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/40 border border-red-500/40 text-red-200 text-xs font-mono-tech uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Direct Engineering Consultation</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white mb-4 leading-tight">
          HAVE AN INDUSTRIAL PROJECT IN MIND?
        </h2>

        {/* Text */}
        <p className="text-lg sm:text-xl text-red-100/90 font-medium max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          "Let's turn your engineering requirements into a reliable industrial solution."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenQuote}
            id="cta-request-quote-btn"
            className="w-full sm:w-auto px-8 py-4 rounded bg-white hover:bg-slate-100 text-red-950 font-display font-black text-sm uppercase tracking-wider shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-red-800" />
            <span>REQUEST A QUOTE</span>
          </button>

          <a
            href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
            id="cta-call-mgm-btn"
            className="w-full sm:w-auto px-8 py-4 rounded bg-black/50 hover:bg-black/70 text-white font-display font-bold text-sm uppercase tracking-wider border border-white/20 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-red-400" />
            <span>CALL MGM</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20MGM%2C%20I%20would%20like%20to%20inquire%20about%20industrial%20machinery.`}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-btn"
            className="w-full sm:w-auto px-8 py-4 rounded bg-emerald-900/80 hover:bg-emerald-800 text-white font-display font-bold text-sm uppercase tracking-wider border border-emerald-500/50 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP MGM</span>
          </a>
        </div>

        {/* Phone Numbers Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-md mx-auto gap-3 text-xs sm:text-sm font-mono-tech pt-8 border-t border-red-800/80">
          <div className="p-3 bg-black/30 rounded border border-red-800/60 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-red-400" />
            <a href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} className="hover:underline font-bold">
              {COMPANY_INFO.phones[0]}
            </a>
          </div>
          <div className="p-3 bg-black/30 rounded border border-red-800/60 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-red-400" />
            <a href={`tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}`} className="hover:underline font-bold">
              {COMPANY_INFO.phones[1]}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
