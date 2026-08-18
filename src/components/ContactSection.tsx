import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Upload, 
  CheckCircle2, 
  FileText, 
  Building, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: 'Dairy Processing Plants',
    projectDescription: '',
    attachedFileName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

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
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#991B1B', '#E2E8F0', '#0F172A']
        });
      } catch (err) {
        // Fallback silently if confetti is unavailable
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 border border-red-200 text-red-800 text-xs font-mono-tech uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Industrial Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-slate-950">
            CONTACT MARAST GENERAL MECHANICS
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Speak directly with our electro-mechanical engineers, request technical proposals, or schedule a workshop visit in Addis Ababa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Cards & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 border border-red-200 flex items-center justify-center shrink-0 text-red-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono-tech uppercase font-bold text-red-800 tracking-wider">
                    HEADQUARTERS & WORKSHOP
                  </h3>
                  <p className="text-base font-bold text-slate-950 mt-1">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-sm text-slate-600">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Telephone Lines */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 border border-red-200 flex items-center justify-center shrink-0 text-red-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-mono-tech uppercase font-bold text-red-800 tracking-wider">
                    DIRECT PHONE NUMBERS
                  </h3>
                  <div>
                    <a 
                      href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} 
                      className="block text-base font-bold text-slate-950 hover:text-red-800 transition-colors font-mono-tech"
                    >
                      {COMPANY_INFO.phones[0]}
                    </a>
                    <a 
                      href={`tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}`} 
                      className="block text-base font-bold text-slate-950 hover:text-red-800 transition-colors font-mono-tech"
                    >
                      {COMPANY_INFO.phones[1]}
                    </a>
                  </div>
                  <span className="text-xs text-slate-500 block">Available during working hours (EAT)</span>
                </div>
              </div>
            </div>

            {/* Email & Digital Inquiries */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 border border-red-200 flex items-center justify-center shrink-0 text-red-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono-tech uppercase font-bold text-red-800 tracking-wider">
                    OFFICIAL EMAIL
                  </h3>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="block text-base font-bold text-slate-950 hover:text-red-800 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Send RFP/RFQ drawings and technical specifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-sm font-mono-tech text-xs">
              <div className="flex items-center text-slate-700 mb-1">
                <Clock className="w-4 h-4 mr-2 text-red-800" />
                <span className="font-bold text-slate-900 uppercase">OPERATING HOURS</span>
              </div>
              <p className="text-slate-600 pl-6">
                {COMPANY_INFO.hours}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive RFP / Quotation Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-mono-tech uppercase text-red-400 font-bold tracking-wider">
                    Official Quotation Request
                  </span>
                  <h3 className="text-2xl font-display font-black uppercase text-white">
                    Submit Technical Inquiry
                  </h3>
                </div>
                <div className="w-8 h-8 rounded bg-red-950 border border-red-800 flex items-center justify-center text-red-400">
                  <FileText className="w-4 h-4" />
                </div>
              </div>

              {submittedRef ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-red-950/80 border-2 border-red-600 mx-auto flex items-center justify-center text-red-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="text-2xl font-display font-black uppercase text-white">
                    INQUIRY TRANSMITTED
                  </h4>

                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Your technical RFQ has been logged into our engineering dispatch queue.
                  </p>

                  <div className="inline-block p-4 rounded bg-slate-900 border border-slate-800 font-mono-tech text-xs text-slate-300 my-4">
                    <span className="text-slate-400 block">REFERENCE NUMBER:</span>
                    <span className="text-red-400 font-bold text-base">{submittedRef}</span>
                  </div>

                  <p className="text-xs text-slate-400 font-mono-tech">
                    An MGM engineer will reach you via <strong>{formData.phone || formData.email}</strong> within 24 hours.
                  </p>

                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        phone: '',
                        email: '',
                        serviceRequired: 'Dairy Processing Plants',
                        projectDescription: '',
                        attachedFileName: ''
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono-tech uppercase font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Abebe Bekele"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Awash Agro Enterprise"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600 font-sans"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+251 91 234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600 font-mono-tech"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="client@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600 font-sans"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1.5">
                      Service / Equipment Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600 font-sans"
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

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1.5">
                      Project Description & Technical Specifications *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please specify estimated capacity (e.g. 2,000 Liters/day), desired material grades (SS304/SS316L), timeline, and installation location in Ethiopia..."
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-600 font-sans"
                    />
                  </div>

                  {/* File Attachment Simulation */}
                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1.5">
                      Upload Project File / Drawings (Optional - PDF, CAD, Image, DOC)
                    </label>
                    <div className="flex items-center space-x-3">
                      <label className="cursor-pointer px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono-tech uppercase flex items-center border border-slate-700 transition-colors">
                        <Upload className="w-4 h-4 mr-1.5 text-red-400" />
                        <span>Select File</span>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx"
                        />
                      </label>
                      <span className="text-xs text-slate-400 truncate max-w-xs font-mono-tech">
                        {formData.attachedFileName || 'No file selected'}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-inquiry-btn"
                    className="w-full py-4 rounded-lg bg-red-800 hover:bg-red-700 text-white font-display font-black text-sm uppercase tracking-wider shadow-xl shadow-red-950/60 border border-red-600 transition-all duration-200 flex items-center justify-center gap-2 mt-4 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING INQUIRY...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND INQUIRY</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Embedded Google Maps Section */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
          <div className="bg-slate-900 p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono-tech border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="font-bold">MGM ADDIS ABABA LOCATION:</span>
              <span className="text-slate-400">{COMPANY_INFO.fullAddress}</span>
            </div>
            <a
              href="https://maps.google.com/?q=Yeka+Addis+Ababa+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline font-bold"
            >
              Open in Google Maps ↗
            </a>
          </div>
          
          <div className="h-80 w-full bg-slate-200">
            <iframe
              title="Marast General Mechanics Location Map"
              src={COMPANY_INFO.mapCoordinates.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
