import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Shield, 
  Cog, 
  FileText, 
  ChevronRight,
  Clock,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenQuote: (initialService?: string, initialProduct?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section on scroll
      const sections = ['home', 'about', 'clients', 'services', 'dairy', 'distillation', 'products', 'industries', 'projects', 'gallery', 'process', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Clients', href: '#clients', id: 'clients' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Dairy Equip.', href: '#dairy', id: 'dairy' },
    { name: 'Distillation', href: '#distillation', id: 'distillation' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Industrial Bar (Desktop Only) */}
      <div className="hidden lg:block bg-slate-950 text-slate-300 text-xs border-b border-slate-800 font-mono-tech py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-400">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-red-500" />
              {COMPANY_INFO.address}, Addis Ababa, Ethiopia
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-red-500" />
              {COMPANY_INFO.hours}
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
              className="flex items-center hover:text-white transition-colors text-slate-300"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-red-500" />
              {COMPANY_INFO.phones[0]}
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center hover:text-white transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-red-500" />
              {COMPANY_INFO.email}
            </a>
            <span className="px-2 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-800/50 text-[10px] tracking-wider uppercase font-semibold">
              Est. 2008
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-slate-800 py-3' 
            : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Company Title */}
          <a 
            href="#home" 
            id="nav-brand-logo"
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-red-700 via-red-800 to-red-950 rounded flex items-center justify-center shadow-lg shadow-red-950/50 border border-red-600/40 relative overflow-hidden group-hover:border-red-500 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              <div className="flex flex-col items-center justify-center font-display font-black text-white leading-none">
                <span className="text-base tracking-tighter">MGM</span>
                <span className="text-[7px] text-red-200 tracking-widest uppercase">2008</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-display font-extrabold text-white tracking-tight flex items-center leading-tight">
                MARAST <span className="text-red-500 ml-1.5 font-bold">GENERAL MECHANICS</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 tracking-wider uppercase font-mono-tech">
                Electro-Mechanical Engineering & Fabrication
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded relative ${
                    isActive 
                      ? 'text-white bg-slate-800/80 font-bold' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-red-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a 
              href={`tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}`}
              id="nav-quick-call"
              className="hidden md:inline-flex items-center px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-red-500" />
              <span>Call Us</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              id="nav-quote-btn"
              className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 rounded shadow-md shadow-red-950/40 border border-red-600/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={() => onOpenQuote()}
              className="sm:hidden px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-red-800 rounded border border-red-700"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded text-xs uppercase font-semibold tracking-wider flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-red-950/70 text-red-300 border border-red-800/60 font-bold'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 px-4 rounded bg-red-700 hover:bg-red-600 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center shadow-lg shadow-red-950/60"
              >
                <FileText className="w-4 h-4 mr-2" />
                Request a Custom Quote
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="p-2.5 rounded bg-slate-900 text-slate-300 flex items-center justify-center hover:bg-slate-800 border border-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                  <span>Call Line 1</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}`}
                  className="p-2.5 rounded bg-slate-900 text-slate-300 flex items-center justify-center hover:bg-slate-800 border border-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                  <span>Call Line 2</span>
                </a>
              </div>

              <p className="text-[11px] text-center text-slate-400 font-mono-tech">
                {COMPANY_INFO.fullAddress}
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
