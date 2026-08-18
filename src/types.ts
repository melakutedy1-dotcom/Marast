export interface ClientPartner {
  id: string;
  name: string;
  nameAmharic?: string;
  category: 'beverage' | 'agro' | 'financial' | 'hospitality' | 'chemical' | 'dairy';
  badge: string;
  description: string;
  highlight: string;
  logoType?: 'badge' | 'icon';
  color: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'food' | 'hotel' | 'construction' | 'other';
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  features: string[];
  materials: string[];
  applications: string[];
}

export interface DairyProduct {
  id: number;
  name: string;
  code: string;
  category: string;
  description: string;
  specs: {
    capacity?: string;
    material: string;
    insulation?: string;
    control?: string;
    hygieneStandard: string;
  };
  features: string[];
  image: string;
  badge?: string;
}

export interface DistillationItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keySpecs: string[];
  image: string;
  applications: string[];
}

export interface TradingItem {
  id: string;
  name: string;
  category: 'stainless' | 'mechanical' | 'pneumatic' | 'measurement' | 'conveyor';
  standards: string;
  description: string;
  specs: string[];
  image: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  image: string;
  keyEquipment: string[];
  stats: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Food Processing' | 'Dairy' | 'Construction' | 'Hotel' | 'Steel Fabrication' | 'Industrial Equipment';
  location: string;
  year: string;
  clientSector: string;
  description: string;
  scopeOfWork: string[];
  materialsUsed: string[];
  image: string;
  galleryImages?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Fabrication & Welding' | 'Dairy & Food Equipment' | 'Boilers & Vessels' | 'Steel Structures' | 'Factory Operations';
  image: string;
  description: string;
  techDetail: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  tools: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  productInterest?: string;
  estimatedCapacity?: string;
  materialPreference?: string;
  timeline?: string;
  location?: string;
  projectDescription: string;
  attachedFileName?: string;
}
