// Type definitions for the portfolio content model.
// Data lives in ./cv.data — this file is types only.

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Work {
  name: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  keywords: string[]; // stack used in the role — surfaces backend/frontend/API/etc.
}

export interface SkillGroup {
  name: string;
  keywords: string[];
}

export interface ProjectLinks {
  repo?: string;      // GitHub / source
  live?: string;      // deployed web app
  playStore?: string; // Google Play listing
}

export interface Project {
  slug: string;       // stable, locale-independent URL id — never derived from name
  name: string;
  description: string;
  seoDescription: string;
  date: string;
  role: string;       // ownership signal — recruiters look for this
  keywords: string[];
  links?: ProjectLinks; // any empty/omitted URL is never rendered
  images?: string[];    // paths into /public, e.g. '/projects/bi-booster/01.jpg'
  isPin: boolean;       // true = featured in the landing page's project section
}

export interface Certificate {
  type: 'certification' | 'award';
  name: string;
  issuer: string;
  date: string;
  endDate?: string;
  summary: string;
  image: string; // single certificate/award image, e.g. from /public or a placeholder
  credentialId?: string;
  url?: string;
}

export interface Volunteer {
  organization: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface Language {
  name: string;
  level: string; // short badge label
  note?: string; // honest nuance, one line
}

export interface CV {
  basics: {
    name: string;
    label: string;
    email: string;
    url: string;
    cvUrl: string; // link to the downloadable/viewable CV file
    summary: string;
    seoDescription: string;
    location: { city: string; countryCode: string; region: string };
    profiles: Profile[];
  };
  work: Work[];
  volunteer: Volunteer[];
  skills: SkillGroup[];
  projects: Project[];
  certificates: Certificate[];
  languages: Language[];
}
