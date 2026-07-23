// Shared shape every locale's UI-string bundle must satisfy — a missing
// translation is a TypeScript error, not a silent English fallback.

export interface NavStrings {
  homeAria: (name: string) => string;
  items: {
    about: string;
    stack: string;
    work: string;
    experience: string;
    volunteer: string;
    certifications: string;
    languages: string;
    contact: string;
    visitors: string;
  };
  ariaLabels: {
    about: string;
    stack: string;
    work: string;
    experience: string;
    volunteer: string;
    certifications: string;
    languages: string;
    contact: string;
    visitors: string;
  };
  menuLabel: string;
  closeLabel: string;
  openMenuAria: string;
  closeMenuAria: string;
  elsewhere: string;
  theme: {
    toggleToDark: string;
    toggleToLight: string;
  };
  language: {
    title: string;
  };
}

export interface CommonStrings {
  skipToContent: string;
  present: string;
  country: Record<string, string>;
}

export interface SectionsStrings {
  about: { title: string; kicker: string };
  skills: { title: string; kicker: string };
  projects: { title: string; kicker: (count: number) => string };
  experience: { title: string; kicker: string };
  volunteer: { title: string; kicker: string };
  certifications: { title: string; kicker: string };
  languages: { title: string; kicker: string };
  contact: { title: string; kicker: string };
}

export interface HeroStrings {
  availability: string;
  viewCv: string;
}

export interface AboutStrings {
  ledeBefore: string; // text before the bolded "region, Country" phrase
  ledeAfter: string; // text after it
  lede2: string;
  stats: {
    years: string;
    buildingSoftware: string;
    shippedProjects: string;
    competitionWins: string;
    certifications: string;
  };
}

export interface ExperienceStrings {
  currentRoleAria: string;
  recognition: string;
}

export interface VolunteerStrings {
  currentAria: string;
}

export interface CertificationsStrings {
  credentialIdLabel: string;
  verifyCredential: string;
}

export interface ProjectsStrings {
  stackAria: (name: string) => string;
  linksAria: (name: string) => string;
  backToWork: string;
  gallery: string;
  galleryAria: (name: string) => string;
  screenshotAlt: (name: string, index: number, total: number) => string;
  openScreenshotAria: (alt: string) => string;
  projectCount: (num: string, total: string) => string;
  builtWith: string;
  facts: { role: string; focus: string; shipped: string; stack: string };
  focusMobile: string;
  focusWeb: string;
  techCount: (n: number) => string;
  seeItLive: string;
  linkLabels: { repo: string; live: string; playStore: string };
  projectNav: string;
  previous: string;
  next: string;
  startConversation: string;
  lightbox: { close: string; prevAria: string; nextAria: string };
}

export interface ContactStrings {
  direct: string;
  email: string;
  social: string;
  freelance: string;
  availability: string;
  openTo: string;
  openToValue: (region: string) => string;
  basedIn: string;
  basedInValue: (place: string) => string;
  replyTime: string;
  replyTimeValue: string;
}

export interface MetaStrings {
  notFound: {
    title: string;
    description: string;
    heading: string;
    lede: string;
    backHome: string;
    seeWork: string;
  };
}

export interface UiStrings {
  nav: NavStrings;
  common: CommonStrings;
  sections: SectionsStrings;
  hero: HeroStrings;
  about: AboutStrings;
  experience: ExperienceStrings;
  volunteer: VolunteerStrings;
  certifications: CertificationsStrings;
  projects: ProjectsStrings;
  contact: ContactStrings;
  meta: MetaStrings;
}
