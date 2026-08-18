import React, { useState } from 'react';
import { 
  Camera, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck,
  Filter
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Fabrication & Welding',
    'Dairy & Food Equipment',
    'Boilers & Vessels',
    'Steel Structures',
    'Factory Operations'
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === activeCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex(g => g.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 border border-red-200 text-red-800 text-xs font-mono-tech uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Workshop & On-Site Imagery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-slate-950">
              ENGINEERING GALLERY
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Authentic visual documentation of our stainless steel fabrication, heavy welding, boiler manufacturing, and completed industrial machinery.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono-tech text-xs text-slate-500">
            Click any image to inspect engineering detail
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-red-800 text-white font-bold shadow-md shadow-red-950/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 ${
                idx % 5 === 0 ? 'sm:col-span-2 sm:row-span-2 h-[340px] sm:h-[440px]' : 'h-64'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Tag */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-[10px] font-mono-tech uppercase text-red-400 border border-red-900/40">
                {item.category}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="text-sm font-display font-bold uppercase leading-snug group-hover:text-red-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300 font-mono-tech mt-1 line-clamp-1">
                  {item.techDetail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-slate-900 text-white rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 hover:bg-red-800 text-white transition-colors border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-red-800 text-white transition-colors border border-slate-700"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-red-800 text-white transition-colors border border-slate-700"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="h-[400px] sm:h-[500px] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Footer Details */}
            <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono-tech text-red-400 uppercase font-bold tracking-wider">
                  {currentItem.category} • Image {(lightboxIndex ?? 0) + 1} of {filteredItems.length}
                </span>
                <h3 className="text-lg sm:text-xl font-display font-black uppercase text-white mt-0.5">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl font-sans">
                  {currentItem.description}
                </p>
              </div>

              <div className="shrink-0 font-mono-tech text-xs px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                {currentItem.techDetail}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
