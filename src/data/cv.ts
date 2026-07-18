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
  name: string;
  description: string;
  date: string;
  role: string;       // ownership signal — recruiters look for this
  keywords: string[];
  links?: ProjectLinks; // any empty/omitted URL is never rendered
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  endDate?: string;
  summary: string;
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
    location: { city: string; countryCode: string; region: string };
    profiles: Profile[];
  };
  work: Work[];
  volunteer: Volunteer[];
  skills: SkillGroup[];
  projects: Project[];
  awards: Award[];
  certificates: Certificate[];
  languages: Language[];
}
