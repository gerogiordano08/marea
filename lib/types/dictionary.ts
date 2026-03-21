// ─── Component-level dictionary slices ───────────────────────────────────────

export interface NavDict {
  brand: string;
  home: string;
  services: string;
  contact: string;
  toggleMenu: string;
}

export interface HeroDict {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  card1Badge: string;
  card1Title: string;
  card2Badge: string;
  card2Title: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  solutions?: string[];
  stack: string[];
}

export interface ServicesDict {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  items: ServiceItem[];
}

export interface StatEntry {
  title?: string; // stat3 uses CountUp, so title is optional
  subtitle: string;
  description: string;
}

export interface StatsDict {
  stat1: Required<StatEntry>;
  stat2: Required<StatEntry>;
  stat3: Required<StatEntry>;
}

export interface FooterNavItems {
  home: string;
  services: string;
}

export interface FooterDict {
  brand: string;
  description1: string;
  description2: string;
  est: string;
  navTitle: string;
  navItems: FooterNavItems;
  connectTitle: string;
  rights: string;
  stack: string;
}

// ─── Full dictionary (top-level shape matching en.json / es.json) ─────────────

export interface ServicesPageHeroDict {
  badge: string;
  title: string;
  subtitle: string;
}

export interface ServicesPageGridDict {
  badge: string;
  title: string;
  titleAccent: string;
}

export interface MethodologyStep {
  phase: string;
  label: string;
  description: string;
}

export interface MethodologyDict {
  badge: string;
  title: string;
  steps: MethodologyStep[];
}

export interface ServicesPageDict {
  hero: ServicesPageHeroDict;
  grid: ServicesPageGridDict;
  items: ServiceItem[];
  methodology: MethodologyDict;
}

// ─── Contact page ─────────────────────────────────────────────────────────────

export interface ContactHeroDict {
  badge: string;
  title: string;
  subtitle: string;
}

export interface ContactServiceCard {
  value: string;
  label: string;
  description: string;
}

export interface ContactServiceSelectorDict {
  label: string;
  services: ContactServiceCard[];
}

// Shared building blocks
export interface SelectOption  { value: string; label: string; }
export interface ChipField     { label: string; chips: string[]; }
export interface SelectField   { label: string; options: SelectOption[]; }
export interface TextInputField { label: string; placeholder: string; }
export interface BudgetField   { label: string; options: SelectOption[]; }

// Service-specific schemas
export interface ContactWebDevDict {
  projectType:  SelectField;
  techStack:    ChipField;
  motionLevel:  SelectField;
  integrations: ChipField;
}

export interface ContactSystemsDict {
  coreObjective: SelectField;
  systemType:    SelectField;
  dataArch:      ChipField;
  userScope:     SelectField;
}

export interface ContactScriptingDict {
  workflowChallenge: SelectField;
  dataSources:       ChipField;
  targetOutput:      TextInputField;
  frequency:         SelectField;
}

// Common fields
export interface ContactCommonDict {
  name:   TextInputField;
  email:  TextInputField;
  brief:  TextInputField;
  budget: BudgetField;
}

export interface ContactFormDict {
  button: string;
  otherPlaceholder: string;
  errors: {
    required: string;
    invalidEmail: string;
    serviceRequired: string;
  };
}

export interface ContactSuccessDict {
  status:  string;
  title:   string;
  message: string;
  sub:     string;
}

export interface ContactDict {
  hero:            ContactHeroDict;
  serviceSelector: ContactServiceSelectorDict;
  webDev:          ContactWebDevDict;
  systems:         ContactSystemsDict;
  scripting:       ContactScriptingDict;
  common:          ContactCommonDict;
  form:            ContactFormDict;
  success:         ContactSuccessDict;
}

export interface Dictionary {
  nav:          NavDict;
  hero:         HeroDict;
  services:     ServicesDict;
  stats:        StatsDict;
  footer:       FooterDict;
  servicesPage: ServicesPageDict;
  contact:      ContactDict;
}



