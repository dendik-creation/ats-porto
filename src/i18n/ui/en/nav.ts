import type { NavStrings } from '../../ui.types';

const nav: NavStrings = {
  homeAria: (name) => `${name} — home`,
  items: {
    about: 'About',
    stack: 'Stack',
    work: 'Work',
    experience: 'Experience',
    volunteer: 'Volunteer',
    certifications: 'Certifications',
    languages: 'Languages',
    contact: 'Contact',
    visitors: 'Visitors',
  },
  ariaLabels: {
    about: 'Jump to about',
    stack: 'Jump to stack',
    work: 'Jump to selected work',
    experience: 'Jump to experience',
    volunteer: 'Jump to volunteer',
    certifications: 'Jump to certifications',
    languages: 'Jump to languages',
    contact: 'Jump to contact',
    visitors: 'View site visitor analytics (opens in a new tab)',
  },
  menuLabel: 'Menu',
  closeLabel: 'Close',
  openMenuAria: 'Open menu',
  closeMenuAria: 'Close menu',
  elsewhere: 'Elsewhere',
  theme: {
    toggleToDark: 'Switch to dark mode',
    toggleToLight: 'Switch to light mode',
  },
  language: {
    title: 'Language',
  },
};

export default nav;
