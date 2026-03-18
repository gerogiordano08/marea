// ─── Component-level dictionary slices ───────────────────────────────────────

export interface NavDict {
  brand: string;
  home: string;
  projects: string;
  reviews: string;
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
  stat3: Omit<StatEntry, "title">; // stat3 title is rendered via CountUpMetric
}

export interface FooterNavItems {
  home: string;
  projects: string;
  reviews: string;
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

export interface Dictionary {
  nav: NavDict;
  hero: HeroDict;
  services: ServicesDict;
  stats: StatsDict;
  footer: FooterDict;
}
