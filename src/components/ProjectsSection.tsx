import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ExternalLink,
  ShieldCheck,
  X
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Food Processing',
    'Dairy',
    'Construction',
    'Hotel',
    'Steel Fabrication',
    'Industrial Equipment'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Blueprint Background */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/80 border border-red-800 text-red-400 text-xs font-mono-tech uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Commissioned Industrial Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-white">
              ENGINEERED FOR REAL-WORLD INDUSTRY
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-2 max-w-2xl">
              A track record of high-performance electro-mechanical installations, distillation columns, and turnkey food factories across Ethiopia.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono-tech text-xs text-slate-400">
            <span className="text-red-400 font-bold">100% Commissioned</span> • Verified Performance
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-red-800 text-white font-bold shadow-md shadow-red-950/60 border border-red-600'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-red-600/70 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/30"
            >
              {/* Image with Category Badge & Location */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-md text-[10px] font-mono-tech uppercase tracking-wider text-red-400 border border-red-900/60">
                  {project.category}
                </div>

                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 text-[10px] font-mono-tech border border-slate-800 flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-red-400" />
                  {project.year}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-slate-300 text-xs font-mono-tech flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-red-500 mr-1 shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono-tech text-red-400 font-bold uppercase mb-1">
                    {project.clientSector}
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-black text-white group-hover:text-red-400 transition-colors uppercase leading-snug mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Scope of Work highlights */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-300 font-sans">
                    {project.scopeOfWork.slice(0, 2).map((s, sIdx) => (
                      <div key={sIdx} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mr-2 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 text-slate-300">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono-tech uppercase tracking-wider text-slate-300 hover:text-white inline-flex items-center"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuote(project.category)}
                    className="px-3 py-1.5 rounded bg-slate-800 hover:bg-red-800 text-slate-200 hover:text-white text-xs font-mono-tech uppercase font-bold transition-colors"
                  >
                    Similar RFQ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 text-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-800 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-red-950 text-red-400 text-xs font-mono-tech uppercase font-bold border border-red-800">
                {selectedProject.category}
              </span>
              <span className="text-xs text-slate-400 font-mono-tech">
                Year {selectedProject.year} • {selectedProject.location}
              </span>
            </div>

            <h3 className="text-2xl font-display font-black text-white uppercase mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-xs text-red-400 font-mono-tech uppercase mb-4">
              Client Sector: {selectedProject.clientSector}
            </p>

            <div className="rounded-lg overflow-hidden h-56 mb-4 border border-slate-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
              {selectedProject.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <h4 className="text-xs font-mono-tech font-bold uppercase text-red-400 mb-2">
                  Engineering Scope of Execution:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300 font-mono-tech">
                  {selectedProject.scopeOfWork.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-red-500 mr-2 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono-tech font-bold uppercase text-slate-400 mb-2">
                  Key Metallurgy & Materials:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.materialsUsed.map((mat, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono-tech border border-slate-700">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono-tech uppercase"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const cat = selectedProject.category;
                  setSelectedProject(null);
                  onOpenQuote(cat);
                }}
                className="px-5 py-2.5 rounded bg-red-800 hover:bg-red-700 text-white text-xs font-display font-bold uppercase tracking-wider shadow-md"
              >
                Inquire Similar Solution
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
