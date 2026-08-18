import React, { useState } from 'react';
import { 
  Package, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  Sliders, 
  Filter, 
  Search,
  Sparkles,
  ShieldCheck,
  X
} from 'lucide-react';
import { TRADING_PRODUCTS } from '../data/companyData';
import { TradingItem } from '../types';

interface TradingSectionProps {
  onOpenQuote: (serviceName?: string, productName?: string) => void;
}

export const IndustrialTradingSection: React.FC<TradingSectionProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'stainless' | 'mechanical' | 'pneumatic' | 'measurement' | 'conveyor'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<TradingItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'stainless', label: 'Stainless Steel' },
    { id: 'mechanical', label: 'Mechanical' },
    { id: 'pneumatic', label: 'Pneumatic' },
    { id: 'measurement', label: 'Measurement' },
    { id: 'conveyor', label: 'Conveyor' },
  ];

  const filteredProducts = TRADING_PRODUCTS.filter(product => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.standards.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-slate-100 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 border border-red-200 text-red-800 text-xs font-mono-tech uppercase tracking-wider mb-3">
              <Package className="w-3.5 h-3.5" />
              <span>Industrial Hardware & Components</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-slate-950">
              INDUSTRIAL PRODUCTS & COMPONENTS
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Prime certified stainless steel raw materials, electro-mechanical drive components, pneumatic valves, and sanitary fittings in stock in Addis Ababa.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono-tech text-xs text-slate-500">
            <span className="text-red-800 font-bold">Standard Grades:</span> SS304, SS316L, DIN, ISO
          </div>
        </div>

        {/* Filter Toolbar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeFilter === tab.id
                    ? 'bg-slate-950 text-white font-bold shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search components or standards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-red-700 focus:bg-white"
            />
          </div>
        </div>

        {/* Product Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-red-600/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-slate-300 font-mono-tech text-[10px] uppercase border border-slate-700">
                  {product.category}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 text-white font-mono-tech text-[11px] truncate">
                  <span className="text-red-400 font-bold">Standard:</span> {product.standards}
                </div>
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-display font-black text-slate-950 group-hover:text-red-800 transition-colors uppercase leading-snug mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="space-y-1 mb-4 text-xs font-mono-tech text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-200/80">
                    {product.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start">
                        <span className="text-red-700 mr-1.5">•</span>
                        <span className="line-clamp-1">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-display font-bold uppercase tracking-wider text-slate-700 hover:text-red-800"
                  >
                    View Specs
                  </button>

                  <button
                    onClick={() => onOpenQuote('Industrial Products & Components', product.name)}
                    className="px-3 py-1.5 rounded bg-slate-900 hover:bg-red-800 text-white text-xs font-mono-tech uppercase font-bold transition-colors"
                  >
                    Inquire Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Spec Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-100 text-red-800 text-xs font-mono-tech uppercase font-bold mb-2">
              {selectedProduct.category} Catalog
            </div>

            <h3 className="text-2xl font-display font-black text-slate-950 uppercase mb-1">
              {selectedProduct.name}
            </h3>
            <p className="text-xs text-slate-500 font-mono-tech mb-4">
              Standard: {selectedProduct.standards}
            </p>

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

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6 space-y-1.5 text-xs font-mono-tech">
              <h4 className="font-bold text-slate-900 uppercase mb-2">Available Specifications:</h4>
              {selectedProduct.specs.map((s, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-700 mr-2 shrink-0 mt-0.5" />
                  <span>{s}</span>
                </div>
              ))}
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
                  onOpenQuote('Industrial Products & Components', pName);
                }}
                className="px-5 py-2.5 rounded bg-red-800 hover:bg-red-700 text-white text-xs font-display font-bold uppercase tracking-wider shadow-md"
              >
                Request Quotation / Stock Check
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
