import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  Upload, 
  CheckCircle2, 
  FileText, 
  Phone, 
  Mail, 
  Building,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Dairy Processing Plants',
  initialProduct = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: initialService,
    projectDescription: initialProduct ? `Inquiring about specifications and quotation for: ${initialProduct}` : '',
    attachedFileName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        serviceRequired: initialService,
        projectDescription: initialProduct ? `Inquiring about specifications and quotation for: ${initialProduct}` : prev.projectDescription
      }));
    }
  }, [initialService, initialProduct, isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, attachedFileName: e.target.files![0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const refCode = `MGM-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refCode);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#991B1B', '#CBD5E1', '#0F172A']
        });
      } catch (err) {
        // confetti fallback
      }
    }, 800);
  };

  const handleModalClose = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-950 text-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-800 shadow-2xl p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded bg-red-950 border border-red-800 flex items-center justify-center text-red-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono-tech uppercase text-red-400 font-bold tracking-wider">
              OFFICIAL REQUEST FOR QUOTATION (RFQ)
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white">
              Marast General Mechanics
            </h3>
          </div>
        </div>

        {submittedRef ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-red-950/80 border-2 border-red-600 mx-auto flex items-center justify-center text-red-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-display font-black uppercase text-white">
              RFQ RECORDED SUCCESSFULLY
            </h4>

            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. Your inquiry for <strong>{formData.serviceRequired}</strong> has been logged.
            </p>

            <div className="inline-block p-4 rounded bg-slate-900 border border-slate-800 font-mono-tech text-xs text-slate-300 my-2">
              <span className="text-slate-400 block">TRANSACTION REF:</span>
              <span className="text-red-400 font-bold text-lg">{submittedRef}</span>
            </div>

            <p className="text-xs text-slate-400 font-mono-tech">
              Our engineering team will review drawings and contact you within 24 hours.
            </p>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleModalClose}
                className="px-6 py-2.5 rounded bg-red-800 hover:bg-red-700 text-white text-xs font-mono-tech uppercase font-bold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+251 91 161 3136"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600 font-mono-tech"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="client@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                Equipment / Category Required *
              </label>
              <select
                value={formData.serviceRequired}
                onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600 font-sans"
              >
                <option value="Dairy Processing Plants">Dairy Processing Plants & Turnkey Lines</option>
                <option value="Milk Cooling Tanks & Pasteurizers">Milk Cooling Tanks & Pasteurizers</option>
                <option value="Distillation & Alcohol Systems">Distillation & Alcohol Processing Equipment</option>
                <option value="Honey Processing Plants">Honey Processing Plants</option>
                <option value="Beverage Processing Plants">Beverage Processing Plants</option>
                <option value="Hotel Kitchen Hoods & Cold Rooms">Hotel Kitchen Hoods & Cold Rooms</option>
                <option value="Trailers & Water Tankers">Trailers, Water Tankers & Fuel Vessels</option>
                <option value="Structural Steel & PEB Buildings">Structural Steel & PEB Buildings</option>
                <option value="Steam & Water Boilers">Industrial Steam & Water Boilers</option>
                <option value="Block Press Machines">Concrete Block Press Machines</option>
                <option value="Custom Stainless Steel Fabrication">Custom Stainless Steel Fabrication (SS304/316L)</option>
                <option value="Industrial Trading / Raw Material Supply">Industrial Trading / Raw Material Supply</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                Project Scope, Capacity & Technical Requirements *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Specify dimensions, volume (liters/day), steel grade (SS304/316L), timeline..."
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600 font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                Upload CAD / PDF / Specs (Optional)
              </label>
              <div className="flex items-center space-x-3">
                <label className="cursor-pointer px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono-tech uppercase flex items-center border border-slate-700 transition-colors">
                  <Upload className="w-3.5 h-3.5 mr-1 text-red-400" />
                  <span>Choose File</span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.doc,.docx"
                  />
                </label>
                <span className="text-xs text-slate-400 truncate max-w-xs font-mono-tech">
                  {formData.attachedFileName || 'No file selected'}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded bg-red-800 hover:bg-red-700 text-white font-display font-black text-sm uppercase tracking-wider shadow-xl shadow-red-950/60 border border-red-600 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>SUBMITTING INQUIRY...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>SEND OFFICIAL RFQ</span>
                </>
              )}
            </button>

            <div className="pt-2 text-center">
              <span className="text-[11px] font-mono-tech text-slate-500">
                Direct Dispatch: marastgm@gmail.com • +251 11 868 5090
              </span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
