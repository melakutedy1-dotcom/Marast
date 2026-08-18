import React, { useState } from 'react';
import { Phone, MessageSquare, ArrowUp, FileText } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientsBanner } from './components/ClientsBanner';
import { AboutSection } from './components/AboutSection';
import { VisionMissionValues } from './components/VisionMissionValues';
import { ServicesSection } from './components/ServicesSection';
import { DairyEquipmentSection } from './components/DairyEquipmentSection';
import { DistillationSection } from './components/DistillationSection';
import { IndustrialTradingSection } from './components/IndustrialTradingSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectsSection } from './components/ProjectsSection';
import { GallerySection } from './components/GallerySection';
import { ProcessSection } from './components/ProcessSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { COMPANY_INFO } from './data/companyData';

export function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string>('Dairy Processing Plants');
  const [quoteProduct, setQuoteProduct] = useState<string>('');

  const handleOpenQuote = (serviceName?: string, productName?: string) => {
    if (serviceName) setQuoteService(serviceName);
    if (productName) setQuoteProduct(productName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteProduct('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-red-800 selection:text-white font-sans antialiased">
      
      {/* 1. STICKY INDUSTRIAL NAVBAR */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* MAIN CONTENT REGIONS */}
      <main id="main-content">
        {/* 2. HERO SECTION */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 3. TRUSTED CLIENTS BANNER */}
        <ClientsBanner />

        {/* 4. COMPANY INTRODUCTION */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 5. VISION / MISSION / CORE VALUES */}
        <VisionMissionValues />

        {/* 6. ENGINEERING SERVICES */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* 7. DAIRY PROCESSING EQUIPMENT */}
        <DairyEquipmentSection onOpenQuote={handleOpenQuote} />

        {/* 8. DISTILLATION & ALCOHOL EQUIPMENT */}
        <DistillationSection onOpenQuote={handleOpenQuote} />

        {/* 9. INDUSTRIAL PRODUCTS & COMPONENTS TRADING */}
        <IndustrialTradingSection onOpenQuote={handleOpenQuote} />

        {/* 10. INDUSTRIES WE SERVE */}
        <IndustriesSection onOpenQuote={handleOpenQuote} />

        {/* 11. WHY CHOOSE MARAST GENERAL MECHANICS */}
        <WhyChooseUs onOpenQuote={() => handleOpenQuote()} />

        {/* 12. PROJECTS SHOWCASE */}
        <ProjectsSection onOpenQuote={handleOpenQuote} />

        {/* 13. MASONRY ENGINEERING GALLERY */}
        <GallerySection />

        {/* 14. HOW WE WORK / 6-STEP PROCESS */}
        <ProcessSection />

        {/* 15. PRIMARY CALL TO ACTION BANNER */}
        <CtaBanner onOpenQuote={() => handleOpenQuote()} />

        {/* 16. CONTACT & RFQ FORM WITH MAP */}
        <ContactSection />
      </main>

      {/* 17. CORPORATE FOOTER */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* FLOATING ACTION SPEED-DIAL (WhatsApp & RFQ Fast Access) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20MGM%20Engineering%2C%20I%20would%20like%20to%20inquire%20about%20machinery.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-900/50 transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 text-xs font-mono-tech font-bold uppercase">
            WhatsApp MGM
          </span>
        </a>

        <button
          onClick={() => handleOpenQuote()}
          className="p-3.5 rounded-full bg-red-800 hover:bg-red-700 text-white shadow-xl hover:shadow-red-950/60 border border-red-600 transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Request Fast Quote"
        >
          <FileText className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 text-xs font-mono-tech font-bold uppercase">
            Request Quote
          </span>
        </button>
      </div>

      {/* UNIVERSAL RFQ QUOTATION MODAL */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialService={quoteService}
        initialProduct={quoteProduct}
      />

    </div>
  );
}

export default App;
