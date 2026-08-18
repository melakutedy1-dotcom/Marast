import { 
  ClientPartner, 
  ServiceItem, 
  DairyProduct, 
  DistillationItem, 
  TradingItem, 
  IndustryItem, 
  ProjectItem, 
  GalleryItem, 
  ProcessStep 
} from '../types';

export const COMPANY_INFO = {
  name: "Marast General Mechanics",
  acronym: "MGM",
  fullName: "Marast General Mechanics (MGM)",
  tagline: "Engineering Solutions Built for Industry",
  slogan: "Advanced electro-mechanical engineering, stainless steel fabrication and industrial equipment solutions engineered for Ethiopia and beyond.",
  establishedYear: 2008,
  founder: "Mr. Mearg Hailemichael",
  founderTitle: "Founder & Managing Director",
  address: "Yeka Sub-City, Kebele 17, House No. 428",
  city: "Addis Ababa",
  country: "Ethiopia",
  fullAddress: "Yeka Sub-City, Kebele 17, House No. 428, Addis Ababa, Ethiopia",
  phones: [
    "+251 11 868 5090",
    "+251 91 161 3136"
  ],
  phoneDisplay: "+251 11 868 5090 / +251 91 161 3136",
  email: "marastgm@gmail.com",
  whatsapp: "+251911613136",
  hours: "Monday – Saturday: 8:00 AM – 6:00 PM (EAT)",
  mapCoordinates: {
    lat: 9.0305,
    lng: 38.7892,
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.485123910332!2d38.79589!3d9.01945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850689b14247%3A0xb3ff765ee55ecbf5!2sYeka%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
  }
};

export const COMPANY_STATS = [
  { value: "2008", label: "Established Year", detail: "Over a decade and a half of engineering pedigree" },
  { value: "15+", label: "Years of Experience", detail: "Turnkey electro-mechanical craftsmanship" },
  { value: "100+", label: "Completed Projects", detail: "Industrial plants, breweries & dairy setups" },
  { value: "100%", label: "Custom Fabrication", detail: "Food-grade stainless steel & heavy metallurgy" }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  {
    id: "awash-wine",
    name: "Awash Wine",
    nameAmharic: "አዋሽ ወይን (Since 1936)",
    category: "beverage",
    badge: "Winery & Distillery",
    description: "Ethiopia's pioneer winemaker and distillery institution since 1936.",
    highlight: "Distillation equipment, stainless steel fermentation tanks & sanitary piping systems.",
    color: "from-amber-900 to-red-950"
  },
  {
    id: "luna",
    name: "LUNA Export Slaughterhouse",
    category: "agro",
    badge: "Meat & Export Processing",
    description: "Major Ethiopian export abattoir & livestock meat processing conglomerate.",
    highlight: "Food-grade stainless steel abattoir equipment, conveyor lines & cold room installations.",
    color: "from-blue-900 to-slate-900"
  },
  {
    id: "dbe",
    name: "Development Bank of Ethiopia",
    nameAmharic: "የኢትዮጵያ ልማት ባንክ (DBE)",
    category: "financial",
    badge: "Development Finance",
    description: "National financial development institution backing industrial manufacturing.",
    highlight: "Approved engineering contractor for industrial machinery lease financing programs.",
    color: "from-emerald-900 to-teal-950"
  },
  {
    id: "feed-the-future",
    name: "Feed the Future",
    category: "agro",
    badge: "USAID Agricultural Initiative",
    description: "Agricultural growth and food security initiative supporting modern agro-processing.",
    highlight: "Dairy cooling plants and honey processing equipment for agricultural cooperatives.",
    color: "from-sky-900 to-indigo-950"
  },
  {
    id: "addis-modjo",
    name: "Addis Modjo Edible Oil Complex S.C.",
    nameAmharic: "አዲስ ሞጆ የምግብ ዘይት ኮምፕሌክስ",
    category: "agro",
    badge: "Edible Oil Refining",
    description: "Major industrial edible oil processing and refining enterprise.",
    highlight: "Storage vessels, heavy piping networks, reboilers and processing tanks.",
    color: "from-yellow-900 to-amber-950"
  },
  {
    id: "family-milk",
    name: "Family Milk",
    nameAmharic: "ፋሚሊ ወተት",
    category: "dairy",
    badge: "Dairy Production",
    description: "Leading commercial dairy brand in Addis Ababa and surrounding regions.",
    highlight: "Batch pasteurisers, milk cooling tanks, CIP units and packaging integration.",
    color: "from-red-900 to-rose-950"
  },
  {
    id: "ethio-agri-ceft",
    name: "Ethio Agri-CEFT",
    category: "agro",
    badge: "Agro-Industrial Giant",
    description: "Largest commercial agricultural, coffee, tea, and agro-processing producer.",
    highlight: "Custom stainless steel processing units, material handling and storage silos.",
    color: "from-green-900 to-emerald-950"
  },
  {
    id: "etab",
    name: "ETAB Industrial & Soap Industry",
    category: "chemical",
    badge: "Industrial Manufacturing",
    description: "Leading manufacturer of industrial soaps, detergents and consumer goods.",
    highlight: "Stainless steel blending reactors, jacketed mixing kettles and piping.",
    color: "from-purple-900 to-slate-900"
  },
  {
    id: "sare-maria",
    name: "Sare-Maria Hotel",
    category: "hospitality",
    badge: "Luxury Hospitality",
    description: "Prestigious hotel and international conference venue.",
    highlight: "Industrial stainless steel commercial kitchen hood ventilation & cold store setup.",
    color: "from-stone-900 to-amber-950"
  },
  {
    id: "gsm-chemicals",
    name: "GSM Chemicals",
    category: "chemical",
    badge: "Chemical Processing",
    description: "Specialized industrial and commercial chemical manufacturer.",
    highlight: "Acid-resistant stainless steel mixing vessels and solvent storage tanks.",
    color: "from-cyan-950 to-blue-950"
  },
  {
    id: "ttk-services",
    name: "TTK Services Private Limited",
    category: "agro",
    badge: "Technical Engineering",
    description: "Engineering services and specialized industrial contracting partner.",
    highlight: "Heavy structural fabrication, industrial machinery installation and piping.",
    color: "from-blue-950 to-slate-950"
  },
  {
    id: "precise-consult",
    name: "PRECISE Consult",
    category: "financial",
    badge: "Growth Accelerated",
    description: "Premier management and industrial development consultancy firm.",
    highlight: "Machinery manufacturing partner for industrial expansion programs.",
    color: "from-red-950 to-stone-950"
  },
  {
    id: "zebim",
    name: "Zebim Agro-Industry",
    category: "agro",
    badge: "Agro-Processing",
    description: "Commercial livestock, crop processing, and agricultural developer.",
    highlight: "Grain handling equipment, custom steel structures and processing hoppers.",
    color: "from-stone-900 to-green-950"
  },
  {
    id: "tac",
    name: "TAC Technical & Construction",
    category: "chemical",
    badge: "Civil & Industrial Works",
    description: "Industrial infrastructure and structural engineering contracting.",
    highlight: "Pre-engineered structural steel framing and fuel storage vessel fabrication.",
    color: "from-amber-950 to-stone-950"
  },
  {
    id: "oche",
    name: "OCHE (HFA Pvt. Ltd.)",
    category: "agro",
    badge: "Food & Feed Enterprise",
    description: "Food processing and agricultural value chain developer.",
    highlight: "Industrial steam boilers and customized stainless steel food processing line.",
    color: "from-yellow-950 to-stone-900"
  },
  {
    id: "addis-credit",
    name: "Addis Credit & Saving Institution",
    nameAmharic: "አዲስ የብድርና ቁጠባ ተቋም",
    category: "financial",
    badge: "Micro & SME Enterprise Finance",
    description: "Supporting local manufacturing and machinery acquisition across Addis Ababa.",
    highlight: "Equipping local agro-processors and cooperatives with MGM manufactured machinery.",
    color: "from-teal-950 to-slate-900"
  }
];

export const CORE_VALUES = [
  {
    id: "integrity",
    name: "INTEGRITY",
    tagline: "Respectful and trusting interactions.",
    description: "We conduct all engineering contracts with transparent accountability, certified material grading, and lasting client trust.",
    icon: "ShieldCheck"
  },
  {
    id: "commitment",
    name: "COMMITMENT",
    tagline: "Creating and executing inspired solutions.",
    description: "We dedicate our engineering expertise to building robust, high-duty machinery that solves real industrial bottlenecks.",
    icon: "Flame"
  },
  {
    id: "excellence",
    name: "EXCELLENCE",
    tagline: "Delivering bolder, brighter and better outcomes.",
    description: "From precision TIG sanitary welding to structural tolerances, we adhere to uncompromising engineering standards.",
    icon: "Award"
  },
  {
    id: "growth",
    name: "GROWTH",
    tagline: "A willingness to train and a desire to learn.",
    description: "Empowering Ethiopian technicians and engineers through advanced electro-mechanical skills transfer and technology adoption.",
    icon: "TrendingUp"
  },
  {
    id: "innovation",
    name: "INNOVATION",
    tagline: "Creating new things and bringing new ideas.",
    description: "Pioneering import-substituting machinery designs tailored to local industrial conditions and energy requirements.",
    icon: "Lightbulb"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  // Food Processing Plants
  {
    id: "dairy-plants",
    title: "Dairy Processing Plants",
    category: "food",
    shortDesc: "Complete turnkey milk receiving, pasteurization, homogenization, cheese, yoghurt and cooling systems.",
    fullDesc: "MGM designs, fabricates, and commissions complete dairy processing facilities tailored to farm cooperatives, commercial dairies, and regional milk processing plants across Ethiopia. Built with sanitary AISI 304 and 316L stainless steel with food-grade CIP cleanability.",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80",
    iconName: "Milk",
    features: [
      "Turnkey pasteurization and storage capacity from 500L to 10,000L",
      "Sanitary orbital TIG welds with smooth roughness Ra < 0.8 μm",
      "Integrated CIP (Clean-In-Place) chemical circulation loops",
      "Semi-automated temperature & steam regulatory controls"
    ],
    materials: ["AISI 304 Stainless Steel", "AISI 316L Sanitary Grade", "Food Grade EPDM/PTFE Seals"],
    applications: ["Pasteurized pouch milk", "Greek & stirred yogurt lines", "Artisanal cheese plants", "Butter manufacturing"]
  },
  {
    id: "honey-plants",
    title: "Honey Processing Plants",
    category: "food",
    shortDesc: "Stainless steel honey heating, filtration, moisture reduction, settling and sanitary bottling lines.",
    fullDesc: "Specialized equipment engineered for Ethiopian honey producers and exporters. Our systems provide gentle, indirect water-jacketed heating to preserve vital enzymes while filtering pollen, wax, and reducing excess moisture for export-standard quality.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    iconName: "Droplets",
    features: [
      "Jacketed stainless steel heating & settling vats",
      "Multi-stage high-mesh stainless steel filtration sieves",
      "Vacuum moisture reduction concentrators",
      "Sanitary rotary honey pumps and semi-auto filling stations"
    ],
    materials: ["AISI 304 Stainless Steel", "Mirror Polished Inner Liner", "Heating Coils"],
    applications: ["Table honey packaging", "Organic honey exports", "Beeswax processing", "Honey wine preparation"]
  },
  {
    id: "beverage-plants",
    title: "Beverage Processing Plants",
    category: "food",
    shortDesc: "Juice extraction, syrup blending kettles, carbonation vessels, beverage mixing tanks and CIP lines.",
    fullDesc: "Complete stainless steel processing systems for carbonated soft drinks, natural fruit juices, flavored syrups, and mineral water packaging facilities.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    iconName: "Wine",
    features: [
      "Sugar dissolving and continuous syrup blending tanks",
      "Flash pasteurizers with plate heat exchangers",
      "Sanitary beverage distribution manifolds and valves",
      "Automated batch recording and agitation systems"
    ],
    materials: ["AISI 304 / 316L Stainless Steel", "Sanitary Tri-Clamp Fittings"],
    applications: ["Tropical fruit juices", "Flavored beverages", "Concentrate manufacturing", "Bottling lines"]
  },
  {
    id: "distillery-parts",
    title: "Alcohol Distillery Parts",
    category: "food",
    shortDesc: "Pot stills, fractional distillation columns, copper reboilers, condensers and spirit storage tanks.",
    fullDesc: "MGM manufactures precision distillation equipment for wineries, spirit distilleries, and industrial ethanol plants, combining high thermal conductivity copper fabrication with sanitary stainless steel columns.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    iconName: "Beaker",
    features: [
      "High-efficiency bubble cap and perforated tray columns",
      "Electrolytic copper helmet & aroma extraction domes",
      "Tubular shell-and-tube stainless steel condensers",
      "Alcohol proof storage vessels with flame-arrestor vents"
    ],
    materials: ["Deoxidized Copper (C12200)", "AISI 304 & 316L Stainless Steel"],
    applications: ["Wineries (Awash Wine standard)", "Spirits & gin distillation", "Industrial ethanol", "Essential oil extraction"]
  },

  // Hotel Industries
  {
    id: "cold-stores",
    title: "Cold Stores & Refrigeration",
    category: "hotel",
    shortDesc: "Modular walk-in chillers, deep freezers, insulated polyurethane panels and refrigeration racks.",
    fullDesc: "Engineered cold storage solutions for hotels, abattoirs, food distributors, and restaurants. Featuring heavy-duty polyurethane insulated wall and ceiling panels, airtight stainless steel doors, and high-efficiency refrigeration units.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    iconName: "Snowflake",
    features: [
      "Temperature range from -25°C deep freeze to +4°C chilling",
      "High-density PUR/PIR sandwich panels (80mm to 150mm)",
      "Heavy duty stainless steel sliding and hinged doors with safety release",
      "Digital temperature monitoring and defrost cycle control"
    ],
    materials: ["Camo-locked Polyurethane Panels", "AISI 304 Chequered Floor", "Hermetic Compressor Units"],
    applications: ["Hotel central kitchens", "Meat and seafood storage", "Pharmaceutical chilling", "Produce warehousing"]
  },
  {
    id: "kitchen-hoods",
    title: "Kitchen Hood & Ventilation Systems",
    category: "hotel",
    shortDesc: "Commercial stainless steel exhaust hoods, grease baffle filters, centrifugal blowers and ductwork.",
    fullDesc: "Custom commercial kitchen ventilation engineered for maximum smoke capture, grease removal, and fire safety in high-volume hotel and restaurant kitchens.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    iconName: "Wind",
    features: [
      "Heavy-gauge AISI 304 stainless steel all-welded construction",
      "Removable stainless steel baffle grease filters with drain troughs",
      "High static pressure backward-curved industrial exhaust fans",
      "Galvanized or stainless steel fresh air makeup and exhaust ducts"
    ],
    materials: ["AISI 304 Brushed Stainless Steel", "Heavy Galvanized Duct Sheet"],
    applications: ["Hotel culinary operations", "Hospital cafeterias", "Commercial catering centres", "Bakery exhausts"]
  },
  {
    id: "working-tables",
    title: "Commercial Working Tables",
    category: "hotel",
    shortDesc: "Heavy-duty food-grade stainless steel prep tables, sink benches, chopping stations, and cabinets.",
    fullDesc: "Durable, easy-to-sanitize stainless steel furniture designed for demanding food prep environments. Reinforced with sound-deadening under-top channels and adjustable bullet feet.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    iconName: "LayoutGrid",
    features: [
      "1.2mm to 1.5mm AISI 304 food-grade stainless steel top tops",
      "Under-shelf storage or customized drawers and sink bowls",
      "Reinforced hats and sound-deadening insulation",
      "Sanitary rear upstand / backsplash (50mm–100mm)"
    ],
    materials: ["AISI 304 Stainless Steel", "Stainless Tubular Legs"],
    applications: ["Food prep zones", "Meat fabrication rooms", "Pastry workshops", "Laboratory counters"]
  },
  {
    id: "store-shelves",
    title: "Store Shelves & Racking",
    category: "hotel",
    shortDesc: "Multi-tier stainless steel and heavy galvanized wire shelving for cold rooms and dry storage.",
    fullDesc: "Modular, high load-bearing shelving engineered to resist corrosion in high-humidity cold rooms, wet dishwashing zones, and dry dry-goods food pantries.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    iconName: "Layers",
    features: [
      "Load capacity up to 250 kg per shelf level",
      "Solid stainless steel sheets or slotted air-circulation shelves",
      "Fully adjustable shelf heights with locking collars",
      "100% rust-proof even in sub-zero cold room environments"
    ],
    materials: ["AISI 304 Stainless Steel", "Heavy Duty Square Tubing"],
    applications: ["Walk-in cold storage", "Dry ingredient warehousing", "Tableware staging", "Industrial parts stores"]
  },

  // Construction Industries
  {
    id: "trailers-tankers",
    title: "Trailers & Water Tankers",
    category: "construction",
    shortDesc: "Heavy-duty truck-mounted water tankers, fuel bowsers, tractor trailers and transport chassis.",
    fullDesc: "MGM manufactures rugged transportation vessels designed to withstand demanding Ethiopian road conditions. Built with internal anti-surge baffles, certified welding, and heavy-duty chassis mounts.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    iconName: "Truck",
    features: [
      "Capacity ranges from 5,000 Liters to 30,000 Liters",
      "Multi-compartment internal wave-breaking baffle plates",
      "PTO or engine-driven high-flow delivery pump systems",
      "Shot-blasted and polyurethane industrial epoxy coated exterior"
    ],
    materials: ["Carbon Steel Q235B / Corten", "AISI 304 (Drinking water)", "High-tensile Chassis Steel"],
    applications: ["Construction site water delivery", "Municipal potable water distribution", "Fuel logistics", "Agricultural tractors"]
  },
  {
    id: "steel-structures",
    title: "Industrial Steel Structures",
    category: "construction",
    shortDesc: "Heavy structural steel framing, factory trusses, mezzanine floors, staircases and crane runways.",
    fullDesc: "Comprehensive steel structural fabrication from engineering drafting to erection on site. Designed to carry heavy factory equipment, overhead cranes, and wide-span industrial roofing.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80",
    iconName: "Building2",
    features: [
      "Clear-span portal frames and custom lattice trusses",
      "Overhead traveling crane (EOT) runway beams and corbels",
      "Structural steel mezzanine decks and access walkways",
      "Strict compliance with national building and structural codes"
    ],
    materials: ["Structural Steel I-Beams / H-Beams", "Cold-formed Z & C Purlins", "High-strength Bolts"],
    applications: ["Factory warehouses", "Agro-processing sheds", "Industrial workshops", "Commercial complexes"]
  },
  {
    id: "oil-fuel-vessels",
    title: "Oil, Water & Fuel Vessels",
    category: "construction",
    shortDesc: "Above-ground and underground fuel storage tanks, pressure vessels, and chemical bulk tanks.",
    fullDesc: "Hydrostatically tested pressure vessels and bulk storage tanks engineered in accordance with international safety standards for diesel, heavy fuel oil, water, and industrial chemicals.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    iconName: "Database",
    features: [
      "Capacity from 1,000 Liters to 100,000+ Liters",
      "100% radiographic / ultrasonic and hydrostatic pressure testing",
      "Calibrated level gauges, manholes, breather valves and ladders",
      "Double-wall containment option for environmental protection"
    ],
    materials: ["Pressure Vessel Steel SA516 Gr.70", "AISI 304/316L", "Corrosion Resistant Coatings"],
    applications: ["Industrial fuel storage", "Generator fuel day tanks", "Water treatment plants", "Chemical batch plants"]
  },
  {
    id: "block-press",
    title: "Block Press Machines",
    category: "construction",
    shortDesc: "Hydraulic and mechanical concrete hollow block (CHB), paving stone, and interlocking brick machines.",
    fullDesc: "Rugged construction machinery manufactured locally to supply Ethiopia's booming infrastructure sector. Designed for high compaction pressure, low maintenance, and continuous daily production.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    iconName: "Box",
    features: [
      "Vibro-compression technology for dense, high-strength blocks",
      "Interchangeable mold dies for hollow blocks, solid bricks, and pavers",
      "Heavy hydraulic power pack with proportional valve control",
      "High daily output capacity (up to 4,000+ blocks per 8-hr shift)"
    ],
    materials: ["Wear-resistant Hardox / Mn Steel Molds", "Heavy Structural Box Section Frame"],
    applications: ["Construction block factories", "Infrastructure paving projects", "SME building enterprises"]
  },
  {
    id: "water-boilers",
    title: "Water Boilers & Calorifiers",
    category: "construction",
    shortDesc: "Industrial hot water boilers, heat storage calorifiers, and solar-diesel hybrid heating tanks.",
    fullDesc: "Reliable hot water generating systems for hotels, hospitals, industrial laundries, and textile dyeing plants, engineered for high thermal efficiency and low fuel consumption.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    iconName: "Flame",
    features: [
      "Thermal output from 50 kW to 2,000 kW",
      "Multi-fuel firing: Diesel, LPG, Biomass or Electric immersion",
      "Rockwool thermal insulation with polished protective aluminum cladding",
      "Automatic dual-safety thermostat and pressure relief valves"
    ],
    materials: ["Boiler Quality Carbon Steel", "Stainless Steel Internal Coils", "Mineral Wool Cladding"],
    applications: ["Hotel central hot water", "Hospitals", "Industrial laundries", "Pre-heating processes"]
  },
  {
    id: "steam-boilers",
    title: "Steam Boilers & Steam Headers",
    category: "construction",
    shortDesc: "Electrical and diesel-fired steam boilers, steam distribution headers, and condensate recovery tanks.",
    fullDesc: "Heavy industrial steam generation systems engineered for process steam in food manufacturing, dairy pasteurization, sterilization, and textile processing.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    iconName: "Zap",
    features: [
      "Capacity from 50 kg/hr to 3,000 kg/hr steam output",
      "Operating pressure up to 10 Bar (1.0 MPa)",
      "Three-pass wet-back smoke tube design for maximum fuel efficiency",
      "Integrated water softening and automatic blowdown valves"
    ],
    materials: ["ASME / EN 12953 Certified Boiler Plate", "Seamless Boiler Tubes"],
    applications: ["Dairy pasteurization plants", "Distilleries and breweries", "Garment steam finishing", "Feed mills"]
  },

  // Other Industries
  {
    id: "peb-erection",
    title: "Pre-Engineered Building (PEB) Erection",
    category: "other",
    shortDesc: "Turnkey PEB structural engineering, fabrication, transport, and precision erection on site.",
    fullDesc: "Complete industrial building solution from anchor bolt placement to primary steel framing, secondary purlins, insulated roofing, and industrial wall cladding.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    iconName: "Warehouse",
    features: [
      "Fast-track construction timelines compared to conventional concrete",
      "Long-span column-free layouts optimizing manufacturing floor area",
      "Integrated crane runway beams and mezzanine office floors",
      "High wind and seismic load certified design"
    ],
    materials: ["High Grade Q345B Steel", "Corrugated Profile Sheeting", "Sky-light Panels"],
    applications: ["Factory buildings", "Logistics distribution hubs", "Cold chain logistics centres", "Aircraft hangars"]
  },
  {
    id: "bamboo-plants",
    title: "Laminated Bamboo Processing Plants",
    category: "other",
    shortDesc: "Machinery for bamboo cross-cutting, splitting, planers, carbonizing tanks, and hydraulic press lines.",
    fullDesc: "Custom-built machinery to support Ethiopia's natural bamboo resource commercialization into high-value engineered flooring, lumber, and furniture panels.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    iconName: "TreePine",
    features: [
      "Heavy duty bamboo pole splitting and knot removal machines",
      "Steam carbonization pressure vessels for insect and mold treatment",
      "High-pressure hydraulic hot press multi-daylight presses",
      "Precision thickness calibrating and four-side molding planers"
    ],
    materials: ["Heavy Cast Steel", "Hardened Alloy Tool Steel Blades", "Hydraulic Rams"],
    applications: ["Bamboo flooring factories", "Curtain stick & toothpick production", "Engineered bamboo timber"]
  },
  {
    id: "stainless-fab",
    title: "Stainless Steel Fabrication",
    category: "other",
    shortDesc: "Sanitary tanks, custom hoppers, pharmaceutical vessels, architectural stainless railings and ducts.",
    fullDesc: "MGM's core specialty: precision stainless steel fabrication utilizing pulsed TIG/MIG welding, plate rolling, CNC shearing, and chemical pickling/passivation for sterile applications.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    iconName: "Sparkles",
    features: [
      "AISI 304, 304L, 316, and 316L food-grade stainless steels",
      "Sanitary Ra 0.4 μm mirror or 240-grit satin brushed finish",
      "ASME compliant sanitary tank heads (torispherical, conical)",
      "Zero-carbon contamination manufacturing workshop protocols"
    ],
    materials: ["AISI 304 / 316L Stainless Steel", "Sanitary Valves & Fittings"],
    applications: ["Food and dairy plants", "Pharmaceutical mixing vessels", "Hospital cleanrooms", "Architectural features"]
  },
  {
    id: "aluminium-copper-steel",
    title: "Aluminium, Copper & Steel Fabrication",
    category: "other",
    shortDesc: "Non-ferrous and ferrous metallurgy: Copper heat exchangers, aluminium tanks, and heavy steel plate welding.",
    fullDesc: "Advanced metalworking capabilities across non-ferrous alloys. From pure electrolytic copper vessels for traditional and modern distillation to lightweight aluminium storage units and heavy structural steelwork.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    iconName: "Hammer",
    features: [
      "Electrolytic copper welding for high heat transfer applications",
      "Aluminium TIG/MIG welding with argon gas shielding",
      "Heavy plate bending (up to 16mm thickness) and profile cutting",
      "Custom mechanical machining on industrial lathe and milling machines"
    ],
    materials: ["C12200 Deoxidized Copper", "Aluminium 5083 / 6061", "Mild Steel St 37-2 / St 52-3"],
    applications: ["Distillation equipment", "Heat exchanger tubes", "Chemical reactors", "Heavy equipment repair"]
  }
];

export const DAIRY_PRODUCTS: DairyProduct[] = [
  {
    id: 1,
    name: "Raw Milk Transport Tank",
    code: "MGM-DPT-01",
    category: "Milk Logistics & Collection",
    description: "Insulated elliptical or cylindrical stainless steel mobile transport tank mounted on truck chassis or trailers for farm-to-factory milk collection.",
    specs: {
      capacity: "1,000 L to 15,000 L",
      material: "Food Grade AISI 304 / 316L Stainless Steel",
      insulation: "50mm high-density polyurethane (temp rise < 1°C in 12 hrs)",
      control: "Rotary spray CIP ball, manhole, sampling cock, outlet butterfly valve",
      hygieneStandard: "ISO 22000 / 3A Sanitary Standard"
    },
    features: [
      "Elliptical low-center-of-gravity design for safe road transport",
      "Anti-surge internal stainless wave baffle plates",
      "Top sanitary manhole with dust-proof breather valve",
      "Quick-drain bottom slope with sanitary DIN/SMS union"
    ],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller for Cooperatives"
  },
  {
    id: 2,
    name: "Milk Cooling Tank / Milk Storage Tank",
    code: "MGM-MCT-02",
    category: "Bulk Milk Preservation",
    description: "Direct expansion refrigerated milk cooling and holding tank with high-efficiency dimple jacket and automated slow-speed agitator.",
    specs: {
      capacity: "500 L, 1,000 L, 2,000 L, 5,000 L, 10,000 L",
      material: "Sanitary AISI 304 Stainless Steel (Mirror polished inner wall)",
      insulation: "60mm CFC-free polyurethane foam",
      control: "Microprocessor digital thermostat with automatic cooling cycle",
      hygieneStandard: "Cools from 35°C to 4°C within 2.5 hours"
    },
    features: [
      "Laser-welded honeycomb dimple jacket evaporator for rapid cooling",
      "Gentle planetary agitator (32 RPM) preventing milk fat separation",
      "Automatic rotary CIP spray cleaning nozzle",
      "Hermetic refrigeration condensing unit with R404A eco-refrigerant"
    ],
    image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80",
    badge: "Essential for Dairy Centers"
  },
  {
    id: 3,
    name: "Turnkey Milk Processing Equipment",
    code: "MGM-TMP-03",
    category: "Complete Processing Line",
    description: "Integrated processing line encompassing milk intake, filtration, continuous plate pasteurization, homogenization, cooling, and pouch packaging.",
    specs: {
      capacity: "500 L/hr to 5,000 L/hr continuous throughput",
      material: "Full AISI 304 / 316L Contact Parts",
      insulation: "Mineral wool jacket on hot sections",
      control: "Centralized stainless electrical control console with PLC option",
      hygieneStandard: "Certified Food Grade Grade 3A / HACCP"
    },
    features: [
      "Turnkey engineering from milk reception to finished pouch dispatch",
      "High thermal regeneration efficiency (up to 90% heat recovery)",
      "Integrated sanitary pumps, balance tank, and holding tubes",
      "Local commissioning, operator training, and spare parts support in Ethiopia"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    badge: "Turnkey Factory Solution"
  },
  {
    id: 4,
    name: "Yoghurt Production Line",
    code: "MGM-YPL-04",
    category: "Fermented Dairy",
    description: "Complete line for plain, flavored, and stirred yogurt production including standardization, incubation fermentation tanks, cooling, and filling.",
    specs: {
      capacity: "300 L to 3,000 L batch fermentation vats",
      material: "AISI 304 / 316L Tri-wall Jacketed Stainless Steel",
      insulation: "50mm high density polyurethane insulation",
      control: "Precision PID fermentation temperature controller (±0.5°C)",
      hygieneStandard: "Sterile air-vent filter & aseptic design"
    },
    features: [
      "Triple-wall vessel (inner product, heating/cooling jacket, outer shell)",
      "Slow-speed anchor agitator with Teflon wall scrapers",
      "Gentle progressive cavity pump for smooth yogurt texture preservation",
      "Semi-automatic cup / bottle filling and sealing unit"
    ],
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80",
    badge: "High Value Product Line"
  },
  {
    id: 5,
    name: "Cheese Production Machine (Cheese Vat)",
    code: "MGM-CPM-05",
    category: "Cheese Manufacturing",
    description: "Multifunctional stainless steel cheese vat for curd cooking, cutting, whey draining, and pressing for Gouda, Cheddar, Mozzarella, and Ethiopian Ayib.",
    specs: {
      capacity: "200 L, 500 L, 1,000 L, 2,000 L",
      material: "Heavy-gauge AISI 304 Stainless Steel",
      insulation: "Thermal insulated outer jacket with hot water heating",
      control: "Variable speed bidirectional cutting and stirring mechanism",
      hygieneStandard: "Sanitary hygienic drainage & easy CIP"
    },
    features: [
      "Double 'O' or rectangular ergonomic vat design with tilting option",
      "Interchangeable planetary curd cutting harps and stirring blades",
      "Integrated sanitary whey strainer plate and drain port",
      "Includes pneumatic cheese press and food-grade stainless molds"
    ],
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80",
    badge: "Artisanal & Commercial"
  },
  {
    id: 6,
    name: "Industrial Water Chiller",
    code: "MGM-IWC-06",
    category: "Process Cooling Utilities",
    description: "Heavy-duty industrial ice-water generation chiller designed for instantaneous milk and beverage plate heat exchanger cooling.",
    specs: {
      capacity: "5 kW to 120 kW cooling capacity (1°C chilled water)",
      material: "Stainless steel chilled water reservoir tank",
      insulation: "Closed cell elastomeric thermal insulation",
      control: "Intelligent digital thermostat with anti-freeze protection",
      hygieneStandard: "Closed loop sanitary cooling circuit"
    },
    features: [
      "Scroll or semi-hermetic reciprocating compressors",
      "Stainless steel plate heat exchanger evaporator",
      "High-pressure chilled water delivery circulation pump",
      "Tropicalized air-cooled condenser engineered for high ambient temperatures"
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    badge: "Heavy Duty Utility"
  },
  {
    id: 7,
    name: "Electrical Steam Boiler with Accessories",
    code: "MGM-ESB-07",
    category: "Clean Process Steam",
    description: "Compact zero-emission electrical steam generator supplying rapid, clean process steam for milk pasteurization and CIP sterilization.",
    specs: {
      capacity: "18 kW to 150 kW (25 kg/hr to 200 kg/hr steam)",
      material: "High pressure boiler grade carbon steel / SS option",
      insulation: "High density ceramic fiber insulation with SS cover",
      control: "Automated multi-stage heating step control and low water cutoff",
      hygieneStandard: "Dual spring-loaded safety relief valves"
    },
    features: [
      "Reaches working pressure (0.7 MPa) in under 8 minutes from cold start",
      "Heavy Incoloy 800 high-efficiency immersion heating elements",
      "Includes feed water storage tank and high pressure plunger pump",
      "Zero combustion emissions — ideal for indoor food factory installation"
    ],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    badge: "Clean Energy Steam"
  },
  {
    id: 8,
    name: "CIP Unit with Pipeline & Circulation Pump",
    code: "MGM-CIP-08",
    category: "Sanitary Cleaning Utilities",
    description: "Automated Clean-In-Place station with chemical dosing tanks, plate heat exchanger, and high-head sanitary return scavenge pump.",
    specs: {
      capacity: "2-Tank, 3-Tank or 4-Tank systems (500L to 2,000L tanks)",
      material: "Full AISI 304 / 316L Stainless Steel tanks and manifold",
      insulation: "Insulated hot caustic and acid wash tanks",
      control: "Pneumatic butterfly valve manifold with cycle timer",
      hygieneStandard: "Meets international FDA / European hygienic guidelines"
    },
    features: [
      "Circulates hot caustic, nitric acid, and fresh rinse water sequentially",
      "Heavy-duty high-flow sanitary centrifugal pump with SS shroud",
      "Integrated chemical dosing and temperature control loops",
      "Eliminates manual equipment dismantling for 100% sterile cleanliness"
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    badge: "Hygienic Mandatory Unit"
  },
  {
    id: 9,
    name: "Batch-Type Milk Pasteuriser",
    code: "MGM-BMP-09",
    category: "Thermal Milk Treatment",
    description: "Triple-wall jacketed batch vat pasteurizer for slow heating (63°C for 30 min or 72°C) and rapid water chilling in the same vessel.",
    specs: {
      capacity: "100 L, 250 L, 500 L, 1,000 L, 2,000 L",
      material: "AISI 304 Inner and Outer Stainless Steel (Polished)",
      insulation: "Fiberglass / Rockwool thermal jacket insulation",
      control: "Digital batch temperature recorder & automatic electric heaters",
      hygieneStandard: "Sanitary flush bottom outlet valve (zero dead leg)"
    },
    features: [
      "Multi-purpose: Ideal for liquid milk, yogurt mix, and ice-cream base",
      "Heating via built-in electrical elements or external steam coil",
      "Slow-speed sweep agitator with top-mounted geared motor",
      "Sloping conical bottom for 100% residue-free milk drainage"
    ],
    image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular in Ethiopia"
  },
  {
    id: 10,
    name: "Butter Churner (Commercial & Industrial)",
    code: "MGM-BC-10",
    category: "Dairy Fats Processing",
    description: "Stainless steel rotary drum butter churner designed for efficient phase conversion of ripened cream into golden butter and fresh buttermilk.",
    specs: {
      capacity: "50 L, 100 L, 250 L, 500 L, 1,000 L cream capacity",
      material: "Sanitary Sand-Blasted or Brushed AISI 304 Stainless Steel",
      insulation: "Dual stainless drum shell with sight glass",
      control: "Variable speed frequency drive (VFD) with safety interlock guard",
      hygieneStandard: "Sanitary buttermilk drain port and butter kneading doors"
    },
    features: [
      "Conical or cylindrical drum with internal butter beating baffles",
      "Rapid butter separation cycle (20 to 35 minutes depending on fat %)",
      "Safety perimeter railing with automatic magnetic brake stop",
      "Includes stainless butter collecting trolley and kneading accessories"
    ],
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    badge: "High Yield Machine"
  }
];

export const DISTILLATION_DATA: DistillationItem[] = [
  {
    id: "steam-distillation",
    title: "Steam Distillation Systems",
    subtitle: "Essential Oils, Aromatics & Botanical Extracts",
    description: "Heavy-duty steam distillation apparatus featuring stainless steel biomass distillation retorts, high-surface steam injection headers, multi-tube condensers, and Florentine oil-water separators.",
    keySpecs: [
      "Biomass retort volume: 500 Liters to 5,000 Liters",
      "Direct steam injection with perforated stainless false bottom",
      "Vertical stainless shell-and-tube condenser with counter-current cooling",
      "Precision Pyrex / Stainless Florentine flask for pure oil decanting"
    ],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    applications: ["Eucalyptus oil extraction", "Rosemary & lavender essences", "Botanical aroma concentrates", "Herbal extracts"]
  },
  {
    id: "fractional-distillation",
    title: "Fractional Distillation Systems",
    subtitle: "High-Purity Spirits & Neutral Alcohol",
    description: "Multi-plate fractionating column distillation plants capable of achieving up to 96% ABV neutral alcohol, potable spirits, and gin distillation with precise reflux ratio control.",
    keySpecs: [
      "Bubble cap or structured packing rectification columns",
      "Reflux condenser (Dephlegmator) with fine temperature regulation",
      "High proof observation sight glasses with illuminated LEDs",
      "Integrated CIP spray systems throughout column sections"
    ],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    applications: ["Potable ethanol manufacturing", "Winery spirit fortifiers (Awash Wine standard)", "Gin & Vodka rectifiers", "Solvent recovery"]
  },
  {
    id: "steam-boilers-reboilers",
    title: "Steam Boilers & Thermosiphon Reboilers",
    subtitle: "Thermal Driving Core for Distillation Units",
    description: "Dedicated industrial steam generation boilers and stainless/copper reboilers engineered for continuous thermal vapor generation and distillation column energy efficiency.",
    keySpecs: [
      "Heavy duty ASME certified heating coils and tube bundles",
      "Thermosiphon natural circulation design with low pressure drop",
      "Compatible with steam, thermal oil, or high-power electric elements",
      "Equipped with automatic condensate traps and level controllers"
    ],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    applications: ["Distillation column kettle heating", "Continuous stripping columns", "Solvent evaporation plants", "Chemical concentration"]
  },
  {
    id: "reboilers-kettles",
    title: "Distillation Reboilers & Copper Pots",
    subtitle: "Traditional & Modern Pot Stills",
    description: "Hybrid pot stills marrying handcrafted electrolytic copper helmets with stainless steel boiling kettles for sulfur removal and rich ester flavor development in spirits.",
    keySpecs: [
      "Electrolytic copper (C12200) swan neck & aroma basket",
      "Jacketed stainless steel pot still with motorized agitation",
      "Explosion-proof ATEX motor and electric controls",
      "Sanitary CIP wash balls on still body and column"
    ],
    image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80",
    applications: ["Arak and traditional Ethiopian spirits", "Brandy & fruit schnapps", "Single malt whiskey batching", "Specialty botanicals"]
  },
  {
    id: "alcohol-storage",
    title: "Alcohol Storage Tanks (Vessels)",
    subtitle: "Explosion-Proof Sanitary Spirit Holding",
    description: "Stainless steel spirit blending and bulk holding tanks designed to meet strict flammability standards with static earthing, flame arrestors, and high-accuracy volume calibration.",
    keySpecs: [
      "Capacities from 2,000 Liters to 50,000 Liters",
      "AISI 304 / 316L Stainless Steel with 2B or mirror interior finish",
      "Flame arrestor breather vents and pressure vacuum relief valves",
      "Calibrated sight glass level indicators with stainless steel protective guard"
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    applications: ["Bulk alcohol storage", "Spirit dilution & blending vats", "Aging and maturation staging", "Export bottling holding"]
  },
  {
    id: "fermentation-tanks",
    title: "Fermentation Tanks (Cylindroconical)",
    subtitle: "Winery & Distillery Primary Fermentation",
    description: "Dimple-jacketed stainless steel fermentation vessels with 60° cone bottom for yeast settling, automated cooling jackets, and sanitary sample ports.",
    keySpecs: [
      "60-degree cone bottom for complete yeast harvesting and trub discharge",
      "Dual or triple-zone dimple cooling jackets for precise fermentation temp",
      "Top sanitary pressure manhole with CO2 blow-off arm and airlock",
      "Sanitary rotary CIP spray head and shadowless side manhole"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    applications: ["Grape wine fermentation", "Molasses wash fermentation", "Grain mash brewing", "Industrial bio-ethanol wash"]
  },
  {
    id: "liquor-production-lines",
    title: "Complete Liquor Production Lines",
    subtitle: "Turnkey Blending, Filtration & Bottling",
    description: "End-to-end turnkey manufacturing lines for commercial liquor producers encompassing distillation, multi-stage spirit filtration, blending tanks, and conveyorized bottling integration.",
    keySpecs: [
      "Multi-cartridge membrane spirit polishing filtration housings",
      "Automated mass flow meters and precision ethanol blending stations",
      "Integrated explosion-safe alcohol transfer pumps",
      "Complete electrical safety control systems conforming to industrial safety codes"
    ],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    applications: ["Commercial distilleries", "Branded liqueur production", "Export spirit packaging lines", "Regional beverage bottling"]
  }
];

export const TRADING_PRODUCTS: TradingItem[] = [
  {
    id: "ss-pipes",
    name: "Stainless Steel Pipes & Tubes",
    category: "stainless",
    standards: "ASTM A270 / ASTM A312 / DIN 11850",
    description: "Sanitary food-grade seamless and welded stainless steel tubing with Ra < 0.8 μm internal finish for dairy, beverage, pharmaceutical and industrial fluids.",
    specs: ["Grades: AISI 304, 304L, 316, 316L", "Sizes: 1/2\" to 8\" OD (12.7mm to 204mm)", "Finishes: Annealed Pickled, Satin Brushed (240 Grit), Mirror Polish (400 Grit)"],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ss-fittings",
    name: "Sanitary Stainless Steel Fittings & Valves",
    category: "stainless",
    standards: "Tri-Clamp (TC) / DIN / SMS / RJT Unions",
    description: "Comprehensive inventory of food-grade stainless elbows, tees, reducers, butterfly valves, sampling cocks, check valves, and sight glasses.",
    specs: ["Valves: Manual & Pneumatic Butterfly, Ball, Diaphragm, Seat Valves", "Fittings: Sanitary Bends (90°/45°), Concentric/Eccentric Reducers, Tees", "Connections: Quick-release Tri-clamp, DIN 11851 thread, SMS male/female"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ss-sheets",
    name: "Stainless Steel Sheets & Plates",
    category: "stainless",
    standards: "ASTM A240 / EN 10088",
    description: "Cold-rolled and hot-rolled prime stainless steel sheet coils and sheared plates for machine builders, tank manufacturers, and structural fabricators.",
    specs: ["Grades: AISI 304, 304L, 316L, 430", "Thickness: 0.8mm up to 20mm plate", "Surfaces: 2B (Smooth Mill), No. 4 (Hairline Brushed with PE Laser film), BA (Bright Annealed)"],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ss-bars",
    name: "Stainless Steel Round, Square & Angle Bars",
    category: "stainless",
    standards: "ASTM A276 / ASTM A484",
    description: "Precision centerless ground round bars, cold-drawn hex, square shafts, and structural angle profiles for machining drive shafts, impellers, and machine frames.",
    specs: ["Diameters: 6mm to 150mm solid bars", "Angle Bars: 25x25x3mm to 100x100x10mm", "Profiles: Flat bars, Square bars, Solid round shafts (Grade 304/316)"],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gauges-measuring",
    name: "Gauges & Industrial Measuring Instruments",
    category: "measurement",
    standards: "EN 837-1 / IP65 / 3A Sanitary",
    description: "Sanitary diaphragm seal pressure gauges, digital temperature transmitters (PT100/RTD), bimetallic thermometers, flow meters, and level sensors.",
    specs: ["Pressure Ranges: -1 to 0 Bar (Vacuum), 0 to 25 Bar", "Temperature Sensors: -50°C to +300°C RTD with 4-20mA transmitter output", "Connections: 1.5\" / 2\" Sanitary Tri-Clamp, 1/2\" NPT/BSP bottom/back mount"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gear-motors",
    name: "Industrial Gear Motors & Speed Reducers",
    category: "mechanical",
    standards: "IEC Standard / IP55 / Class F Insulation",
    description: "High-torque helical gearboxes, worm gear reducers, variable speed drives, and stainless-washdown electric motors for food machinery and conveyors.",
    specs: ["Power: 0.18 kW to 30 kW (3-Phase 380V / 50Hz)", "Gear Types: Inline Helical, Worm NMRV, Bevel Helical, Planetary", "Output Speeds: 5 RPM to 350 RPM with high service factor"],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "conveyor-belts",
    name: "Modular, PVC & Stainless Conveyor Belts",
    category: "conveyor",
    standards: "FDA Food Contact Approved",
    description: "Food-grade white/blue PVC belts, plastic modular slat chains, stainless wire mesh belts, and motorized roller systems for packaging and processing lines.",
    specs: ["Types: Modular Plastic Belt (PP/POM), Food-Grade PVC, SS304 Wire Mesh", "Widths: 100mm to 1,500mm custom fabricated conveyors", "Components: Drive sprockets, wear strips, stainless guide rails, support brackets"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "heaters",
    name: "Industrial Electric Immersion & Band Heaters",
    category: "mechanical",
    standards: "CE / High Watt Density Incoloy",
    description: "Heavy-duty electric immersion heating elements, ceramic band heaters for extruders, cartridge heaters, and tubular duct heating batteries.",
    specs: ["Materials: Stainless Steel 304, 316, Titanium, Incoloy 800", "Power: 1 kW to 36 kW per bundle (220V / 380V)", "Thread / Flange: 1.5\", 2\" BSP Brass or Stainless Steel Flange Mount"],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pneumatics",
    name: "Pneumatic Pistons, Valves & Accessories",
    category: "pneumatic",
    standards: "ISO 15552 / ISO 6432 Standard",
    description: "Double-acting pneumatic cylinders, solenoid direction control valves, air preparation FRL units (filter-regulator-lubricator), polyurethane tubing and quick push fittings.",
    specs: ["Cylinders: Bore 16mm to 200mm with stroke lengths up to 1,000mm", "Valves: 5/2-Way, 3/2-Way 24VDC / 220VAC Solenoid & Mechanical Limit Valves", "Air Lines: PU Hoses (4mm to 12mm OD), Silencers, One-touch brass fittings"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: "food-processing",
    name: "Food Processing",
    description: "Sanitary processing equipment, pasteurizers, mixing kettles, honey plants, and sterile food handling machinery engineered to international food safety standards.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    keyEquipment: ["Honey processing lines", "Juice extractors", "Food cooking vats", "Sanitary CIP stations"],
    stats: "30+ Plants Equipped"
  },
  {
    id: "dairy",
    name: "Dairy & Milk Products",
    description: "Turnkey milk processing, batch pasteurizers, raw milk cooling tanks, butter churners, cheese vats, and transport tankers serving commercial farms and regional dairies.",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80",
    keyEquipment: ["Bulk milk cooling tanks", "Batch pasteurisers", "Yogurt fermentation lines", "Sanitary milk tankers"],
    stats: "15,000+ L/day capacity installed"
  },
  {
    id: "beverage",
    name: "Beverage & Soft Drinks",
    description: "Syrup preparation tanks, carbonation vessels, beverage plate heat exchangers, sanitary stainless manifolds, and high-speed packaging conveyors.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    keyEquipment: ["Syrup dissolving tanks", "Flash pasteurizers", "Beverage pumps", "CIP manifolds"],
    stats: "High Flow Turnkey Systems"
  },
  {
    id: "distillery",
    name: "Distillery & Wineries",
    description: "High-purity rectification columns, copper pot stills, reboilers, condensers, and spirit storage vessels trusted by premier Ethiopian winemakers like Awash Wine.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    keyEquipment: ["Fractional distillation columns", "Electrolytic copper stills", "Alcohol storage tanks", "Steam reboilers"],
    stats: "National Winemaker Partner"
  },
  {
    id: "hotels",
    name: "Hotels & Hospitality",
    description: "Commercial stainless kitchen exhaust hoods, modular walk-in cold rooms, prep tables, food display counters, and heavy dishwashing staging benches.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    keyEquipment: ["Commercial exhaust hoods", "Walk-in cold rooms", "Stainless prep tables", "Storage racking"],
    stats: "40+ Commercial Kitchens"
  },
  {
    id: "construction",
    name: "Construction & Infrastructure",
    description: "Pre-engineered structural steel buildings (PEB), water tankers, fuel storage vessels, hydraulic concrete block press machines, and industrial water boilers.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80",
    keyEquipment: ["Structural steel trusses", "Mobile water tankers", "Fuel storage tanks", "Block press machines"],
    stats: "10,000+ Sqm Structures Fabricated"
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Agro-processing",
    description: "Custom machinery fabrication, import-substituting production machinery, bamboo processing lines, and mechanized material handling systems.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    keyEquipment: ["Bamboo processing plants", "Industrial mixing reactors", "Custom production jigs", "Hydraulic presses"],
    stats: "Leading Import Substitution"
  },
  {
    id: "industrial-facilities",
    name: "Industrial Facilities & Chemical Plants",
    description: "Acid-resistant stainless steel mixing tanks, heavy industrial steam boilers, process piping networks, and bulk chemical storage vessels for GSM Chemicals and others.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    keyEquipment: ["Chemical reactor vessels", "Industrial steam boilers", "Piping manifolds", "Pressure vessels"],
    stats: "Heavy Industrial Grade"
  }
];

export const WHY_CHOOSE_MGM = [
  {
    id: "engineering-exp",
    title: "ENGINEERING EXPERIENCE",
    subtitle: "Over 15 Years of Pedigree",
    description: "Established in 2008 under the visionary leadership of Mr. Mearg Hailemichael, MGM brings deep electro-mechanical mastery to complex industrial requirements across Ethiopia.",
    icon: "BadgeCheck",
    metric: "15+ Years Active"
  },
  {
    id: "custom-fab",
    title: "CUSTOM FABRICATION",
    subtitle: "Tailored to Your Specifications",
    description: "Every machine and steel structure is custom engineered around the client's exact plant footprint, raw material throughput, and operational demands.",
    icon: "Sliders",
    metric: "100% Tailored"
  },
  {
    id: "local-mfg",
    title: "LOCAL MANUFACTURING",
    subtitle: "Import Substitution Leadership",
    description: "We lead the national drive to substitute costly imported machinery with locally manufactured, world-class equipment with rapid local parts availability and zero foreign currency bottleneck.",
    icon: "Globe",
    metric: "Import Substitution"
  },
  {
    id: "quality-mat",
    title: "QUALITY MATERIALS",
    subtitle: "Certified SS304 / SS316L & Steel",
    description: "We use only certified prime-grade food sanitary stainless steel, electrolytic copper, and certified structural steel with rigorous hydrostatic and dye-penetrant weld testing.",
    icon: "ShieldCheck",
    metric: "Sanitary Grade Guaranteed"
  },
  {
    id: "innovative-sol",
    title: "INNOVATIVE SOLUTIONS",
    subtitle: "Scientific & Local Synergy",
    description: "Combining modern international mechanical engineering standards with practical local trends, energy-efficient designs, and easily maintainable components.",
    icon: "Cpu",
    metric: "High ROI Engineering"
  },
  {
    id: "end-to-end",
    title: "END-TO-END SERVICE",
    subtitle: "Design to Lifetime Maintenance",
    description: "From initial 3D technical CAD drafting and workshop fabrication to transport, on-site mechanical erection, PLC commissioning, and lifetime technician support.",
    icon: "Wrench",
    metric: "Turnkey Responsibility"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-awash-distillation",
    title: "High-Capacity Distillation & Fermentation Plant",
    category: "Food Processing",
    location: "Addis Ababa & Regional Winery",
    year: "2023",
    clientSector: "Winery & Beverage Conglomerate (Awash Wine)",
    description: "Design, fabrication, and installation of stainless steel distillation column assemblies, copper aroma vapor domes, reboilers, and 10,000L jacketed fermentation vessels.",
    scopeOfWork: [
      "Fabrication of multi-plate fractional distillation columns",
      "Sanitary AISI 316L spirit holding tanks with flame arrestors",
      "Interconnecting stainless process piping and sanitary valves",
      "On-site hydrostatic pressure testing and commissioning"
    ],
    materialsUsed: ["AISI 316L Sanitary Stainless Steel", "Deoxidized Copper (C12200)", "Pneumatic Controls"],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-turnkey-dairy",
    title: "Turnkey Milk Processing & Yogurt Production Facility",
    category: "Dairy",
    location: "Oromia / Addis Ababa Dairy Hub",
    year: "2024",
    clientSector: "Commercial Dairy & Cooperative (Family Milk Standard)",
    description: "Complete turnkey dairy processing line including insulated raw milk intake tankers, 2,000L direct expansion cooling tanks, continuous plate pasteurizer, and batch yogurt vats.",
    scopeOfWork: [
      "2x 2,000L Direct Expansion Milk Cooling Tanks with automated agitation",
      "1,000L/hr Sanitary plate pasteurizer with 90% heat regeneration",
      "3x 500L Jacketed yogurt incubation and fermentation vats",
      "Integrated 3-tank automated CIP sanitation loop"
    ],
    materialsUsed: ["AISI 304 Food Grade Stainless Steel", "EPDM Sanitary Gaskets", "Rockwool Insulation"],
    image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-luna-abattoir",
    title: "Meat Processing Stainless Equipment & Cold Storage",
    category: "Industrial Equipment",
    location: "Modjo Export Processing Corridor",
    year: "2022",
    clientSector: "Export Slaughterhouse & Livestock Processing (LUNA)",
    description: "Specialized food-grade stainless steel abattoir processing tables, carcass conveyor overhead rails, washing stations, and industrial cold room ventilation systems.",
    scopeOfWork: [
      "AISI 304 heavy stainless inspection and deboning conveyors",
      "Sanitary pneumatic lifting platforms and washing stations",
      "Walk-in blast freezer and holding cold store insulated panels",
      "Corrosion-resistant drainage channels and floor grates"
    ],
    materialsUsed: ["AISI 304 Stainless Steel", "High-density PIR Panels", "Galvanized Crane Rails"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-modjo-edible-oil",
    title: "Industrial Bulk Storage Vessels & Process Piping",
    category: "Construction",
    location: "Modjo, Ethiopia",
    year: "2023",
    clientSector: "Edible Oil Refining (Addis Modjo Edible Oil Complex)",
    description: "Fabrication of 50,000L heavy liquid storage tanks, process steam manifolds, reboilers, and structural access platforms for industrial oil refining.",
    scopeOfWork: [
      "Shop fabrication and field erection of cylindrical storage vessels",
      "Heavy process steam distribution header and condensate recovery",
      "Structural steel elevated catwalks, staircases, and safety cages",
      "100% weld ultrasonic non-destructive testing (NDT)"
    ],
    materialsUsed: ["Pressure Vessel Steel SA516 Gr.70", "AISI 304", "Structural I-Beams"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-hotel-ventilation",
    title: "Commercial Hotel Kitchen Ventilation & Cold Rooms",
    category: "Hotel",
    location: "Addis Ababa",
    year: "2024",
    clientSector: "Luxury Hospitality (Sare-Maria Hotel Standard)",
    description: "Engineered commercial exhaust hood systems, fire-rated grease ducting, centrifugal exhaust blowers, and modular stainless walk-in refrigeration units.",
    scopeOfWork: [
      "Custom seamless island and wall-mounted exhaust hoods with grease baffles",
      "Dual walk-in chillers and sub-zero meat freezers with digital control",
      "Custom stainless chef prep tables, sink units, and shelving",
      "Balancing of kitchen makeup air and exhaust airflow"
    ],
    materialsUsed: ["AISI 304 Brushed Stainless Steel", "Galvanized Heavy Sheet", "PUR Panels"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-factory-peb",
    title: "Pre-Engineered Factory Warehouse & Crane Runway",
    category: "Steel Fabrication",
    location: "Gelana / Dukem Industrial Zone",
    year: "2023",
    clientSector: "Agro-Industrial Manufacturing & Processing",
    description: "Design, structural steel fabrication, transport, and precision erection of a 2,500 sqm clear-span factory building with a 10-Ton overhead crane runway.",
    scopeOfWork: [
      "Fabrication of high-strength tapered portal frames and roof trusses",
      "Crane runway runway beams (EOT) with surge bracing",
      "Roof and wall cladding with thermal insulation sandwich sheets",
      "Foundation anchor bolt placement and structural torque verification"
    ],
    materialsUsed: ["High Grade Q345B Steel", "High Tensile 8.8 Structural Fasteners", "Aluzinc Cladding"],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sanitary TIG Orbital Welding on SS316L Pipes",
    category: "Fabrication & Welding",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    description: "Precision argon gas shielded TIG welding on sanitary food pipelines ensuring zero internal slag and ultra-smooth hygienic inner finish.",
    techDetail: "TIG Process • Argon Shield 99.99% • Ra < 0.8μm"
  },
  {
    id: "gal-2",
    title: "Triple-Wall Jacketed Milk Pasteuriser Vat",
    category: "Dairy & Food Equipment",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80",
    description: "Completed 1,000L batch pasteurizer ready for dispatch with electric immersion heaters, sanitary slow-speed agitator, and CIP spray ball.",
    techDetail: "AISI 304 Stainless Steel • 1,000L • PID Temperature Loop"
  },
  {
    id: "gal-3",
    title: "Industrial Steam Boiler Wet-Back Assembly",
    category: "Boilers & Vessels",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    description: "Heavy three-pass smoke tube boiler pressure vessel undergoing hydrostatic pressure testing to 1.5x operating pressure.",
    techDetail: "Hydro Tested 1.5 MPa • SA516 Gr.70 • Mineral Wool Cladding"
  },
  {
    id: "gal-4",
    title: "Fractional Distillation Column & Reflux Condenser",
    category: "Dairy & Food Equipment",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    description: "Multi-plate distillation column fitted with bubble-cap trays, sight glasses, and electrolytic copper dephlegmator condenser.",
    techDetail: "Rectification Column • 96% ABV Output • Copper/SS316 Hybrid"
  },
  {
    id: "gal-5",
    title: "Clear-Span Industrial Steel Trusses Erection",
    category: "Steel Structures",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80",
    description: "Field hoisting and bolting of 24-meter span heavy structural steel roof trusses for a new agro-processing factory warehouse.",
    techDetail: "24m Clear Span • Q345B Steel • Grade 8.8 Fasteners"
  },
  {
    id: "gal-6",
    title: "MGM Precision Engineering Workshop Operations",
    category: "Factory Operations",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Technicians machining stainless steel drive shafts and rolling heavy cylinder shells in the MGM Addis Ababa facility.",
    techDetail: "Heavy Plate Rolling • Lathe Machining • CNC Shearing"
  },
  {
    id: "gal-7",
    title: "Food-Grade Honey Vacuum Moisture Extractor",
    category: "Dairy & Food Equipment",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    description: "Jacketed stainless steel vacuum concentrator unit for reducing moisture content in export-bound honey without degrading natural diastase enzymes.",
    techDetail: "Vacuum Concentration • Low-Temp Indirect Heating • Food Safe"
  },
  {
    id: "gal-8",
    title: "Commercial Stainless Exhaust Hood with Baffles",
    category: "Fabrication & Welding",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    description: "Heavy-gauge brushed stainless kitchen exhaust canopy featuring seamless grease drainage channels and removable fire baffle filters.",
    techDetail: "Brushed AISI 304 • Seamless Welds • Fire Baffle Interlock"
  },
  {
    id: "gal-9",
    title: "Bulk Fuel & Water Transport Bowsers",
    category: "Boilers & Vessels",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    description: "15,000L truck-mounted water and fuel tanker bodies equipped with internal surge baffles and heavy epoxy anti-corrosion exterior coating.",
    techDetail: "15,000L Capacity • Anti-Surge Baffles • Epoxy Industrial Coat"
  },
  {
    id: "gal-10",
    title: "Stainless Steel Rotary Butter Churning Drum",
    category: "Dairy & Food Equipment",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    description: "500L cream capacity industrial butter churner with variable speed motor, safety cage, and buttermilk extraction valve.",
    techDetail: "500L Batch • VFD Variable Speed • Sanitary Drain"
  },
  {
    id: "gal-11",
    title: "Chemical Mixing Reactors with Motorized Agitation",
    category: "Boilers & Vessels",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    description: "Specialized acid-resistant SS316L blending reactors manufactured for GSM Chemicals with high-shear turbine impellers.",
    techDetail: "AISI 316L • High Shear Turbine • Explosion Proof ATEX Motor"
  },
  {
    id: "gal-12",
    title: "Modular Polyurethane Cold Room Installation",
    category: "Factory Operations",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    description: "Installation of high-density camo-locked PUR panels and heavy stainless steel sliding door for a hotel central cold facility.",
    techDetail: "100mm PUR Panels • -18°C Deep Freeze • Cam-lock Assembly"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    number: "01",
    title: "CONSULTATION",
    shortDesc: "Understand the client's operational requirements, plant capacity, raw material characteristics, and facility constraints.",
    deliverables: ["Requirement Specification Document", "Site & Utility Evaluation", "Initial Feasibility & Budget Estimate"],
    tools: "On-site Assessment • Technical Scoping"
  },
  {
    step: "02",
    number: "02",
    title: "ENGINEERING",
    shortDesc: "Develop the comprehensive electro-mechanical solution, thermodynamics calculations, flow rates, and material grade selection.",
    deliverables: ["Process Flow Diagrams (PFD)", "Thermodynamic / Pressure Calculations", "Certified Material Grade Selection (SS304/316L)"],
    tools: "Thermodynamic & Mechanical Modeling"
  },
  {
    step: "03",
    number: "03",
    title: "DESIGN",
    shortDesc: "Prepare precise 3D CAD models, structural calculations, fabrication blueprints, piping schematics, and electrical single-line drawings.",
    deliverables: ["3D Equipment Models", "Detailed Fabrication Blueprints", "Electrical & Automation Schematics"],
    tools: "3D CAD Drafting • Structural Analysis"
  },
  {
    step: "04",
    number: "04",
    title: "FABRICATION",
    shortDesc: "Manufacture equipment in our Addis Ababa engineering facility utilizing certified welding, precision plate rolling, and machining.",
    deliverables: ["Precision Metalworking & Rolling", "Sanitary Orbital TIG Welding", "Hydrostatic & Dye Penetrant Weld Testing"],
    tools: "MGM Engineering Workshop • Strict QA/QC"
  },
  {
    step: "05",
    number: "05",
    title: "INSTALLATION",
    shortDesc: "Transport, position, level, interconnect process piping, wire electrical control panels, and commission systems on-site.",
    deliverables: ["Rigging & Precision Positioning", "Process Piping & Valve Hookup", "Electrical & Sensor Interconnection"],
    tools: "On-site Mechanical & Electrical Crew"
  },
  {
    step: "06",
    number: "06",
    title: "DELIVERY",
    shortDesc: "Conduct full wet-test commissioning, calibrate control systems, train client operators, and hand over complete documentation.",
    deliverables: ["Wet Run Performance Verification", "Operator Hands-on Training", "Maintenance Manuals & Warranty Handover"],
    tools: "Commissioning Signoff • 24/7 Local Support"
  }
];
