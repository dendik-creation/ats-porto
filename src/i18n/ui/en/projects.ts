import type { ProjectsStrings } from '../../ui.types';

const projects: ProjectsStrings = {
  stackAria: (name) => `${name} — stack`,
  linksAria: (name) => `${name} — links`,
  backToWork: 'All work',
  gallery: 'Gallery',
  galleryAria: (name) => `${name} screenshots`,
  screenshotAlt: (name, index, total) => `${name} — screenshot ${index} of ${total}`,
  openScreenshotAria: (alt) => `Open ${alt}, enlarged`,
  projectCount: (num, total) => `Project ${num} / ${total}`,
  builtWith: 'Built with',
  facts: { role: 'Role', focus: 'Focus', shipped: 'Shipped', stack: 'Stack' },
  focusMobile: 'Web & mobile',
  focusWeb: 'Web application',
  techCount: (n) => `${n} technologies`,
  seeItLive: 'See it live',
  linkLabels: { repo: 'Code', live: 'Live', playStore: 'Google Play' },
  projectNav: 'Project navigation',
  previous: 'Previous',
  next: 'Next',
  startConversation: 'Start a conversation',
  lightbox: { close: 'Close', prevAria: 'Previous screenshot', nextAria: 'Next screenshot' },
};

export default projects;
