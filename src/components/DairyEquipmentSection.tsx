import React, { useState } from 'react';
import { 
  Milk, 
  CheckCircle2, 
  ArrowRight, 
  Info, 
  Sliders, 
  FileText, 
  ShieldCheck, 
  X,
  Sparkles
} from 'lucide-react';
import { DAIRY_PRODUCTS } from '../data/companyData';
import { DairyProduct } from '../types';

interface DairySectionProps {
  onOpenQuote: (serviceName?: string, productName?: string) => void;
}

export const DairyEquipmentSection: React.FC<DairySectionProps> = ({ onOpenQuote }) => {
  const [selectedProduct, setSelectedProduct] = useState<DairyProduct | null>(null);

  return (
    <section id="dairy" className="py-20 lg:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 border border-red-200 text-red-800 text-xs font-mono-tech uppercase tracking-wider mb-3">
              <Milk className="w-3.5 h-3.5" />
              <span>Sanitary Food-Grade Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-slate-950">
              DAIRY PROCESS EQUIPMENT
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Engineered and fabricated for dairy processing factories, milk collection centers, and agricultural cooperatives across Ethiopia.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 text-slate-800 font-mono-tech text-xs border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-red-700" />
              Food Grade AISI 304 / 316L Standard
            </span>
          </div>
        </div>

        {/* 10 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
          {DAIRY_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:border-red-600/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1"
            >
              {/* Product Visual */}
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Product Number & Code */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded bg-red-800 text-white font-mono-tech font-bold text-xs flex items-center justify-center shadow">
                    0{product.id}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-slate-300 font-mono-tech text-[10px] border border-slate-700">
                    {product.code}
                  </span>
                </div>

                {product.badge && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-amber-500/90 text-slate-950 font-bold text-[10px] uppercase font-mono-tech shadow">
                    {product.badge}
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-mono-tech text-slate-300 uppercase tracking-wider block">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-black text-slate-950 group-hover:text-red-800 transition-colors uppercase leading-snug mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Technical Spec Box */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1 text-xs font-mono-tech mb-4">
                    {product.specs.capacity && (
                      <div className="flex justify-between text-slate-700">
                        <span className="text-slate-400">Capacity:</span>
                        <span className="font-bold text-slate-900 text-right">{product.specs.capacity}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-700">
                      <span className="text-slate-400">Material:</span>
                      <span className="font-bold text-red-800 text-right">{product.specs.material.split(' ')[0]} {product.specs.material.split(' ')[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-display font-bold uppercase tracking-wider text-slate-700 hover:text-red-800 inline-flex items-center"
                  >
                    <Info className="w-3.5 h-3.5 mr-1" />
                    <span>Specs</span>
                  </button>

                  <button
                    onClick={() => onOpenQuote('Dairy Processing Plants', product.name)}
                    className="px-3 py-1.5 rounded bg-red-800 hover:bg-red-700 text-white text-xs font-display font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-105"
                  >
                    Request Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Dairy CTA Banner */}
        <div className="mt-12 p-8 rounded-xl bg-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-xs font-mono-tech uppercase text-red-400 font-bold tracking-wider block mb-1">
              Custom Industrial Engineering
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white">
              NEED CUSTOM INDUSTRIAL DAIRY EQUIPMENT?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              We engineer custom capacity pasteurizers, cooling silos, and automated CIP circuits adapted to your daily liter throughput.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('Dairy Processing Plants')}
            className="relative z-10 shrink-0 px-6 py-3.5 rounded bg-red-800 hover:bg-red-700 text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-red-950/60 border border-red-600 transition-all hover:scale-105"
          >
            REQUEST A DAIRY QUOTE
          </button>
        </div>

      </div>

      {/* Product Spec Lightbox Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-red-100 text-red-800 text-xs font-mono-tech font-bold uppercase">
                {selectedProduct.code}
              </span>
              <span className="text-xs text-slate-500 font-mono-tech">
                {selectedProduct.category}
              </span>
            </div>

            <h3 className="text-2xl font-display font-black text-slate-950 uppercase mb-3">
              {selectedProduct.name}
            </h3>

            <div className="rounded-lg overflow-hidden h-48 mb-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
              {selectedProduct.description}
            </p>

            {/* Detailed Spec Sheet */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4 space-y-2 text-xs font-mono-tech">
              <h4 className="font-bold text-slate-900 uppercase text-xs mb-2">Technical Specification Matrix:</h4>
              {Object.entries(selectedProduct.specs).map(([k, v]) => (
                <div key={k} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/60 last:border-0">
                  <span className="text-slate-500 uppercase">{k}:</span>
                  <span className="font-bold text-slate-900">{v}</span>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xs font-bold font-mono-tech uppercase text-red-800 mb-2">
                Standard Engineering Features:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                {selectedProduct.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-red-700 mr-2 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const pName = selectedProduct.name;
                  setSelectedProduct(null);
                  onOpenQuote('Dairy Processing Plants', pName);
                }}
                className="px-5 py-2.5 rounded bg-red-800 hover:bg-red-700 text-white text-xs font-display font-bold uppercase tracking-wider shadow-md"
              >
                Request Quotation for this Unit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
