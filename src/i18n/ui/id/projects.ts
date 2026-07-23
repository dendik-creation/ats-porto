import type { ProjectsStrings } from '../../ui.types';

const projects: ProjectsStrings = {
  stackAria: (name) => `${name} — teknologi`,
  linksAria: (name) => `${name} — tautan`,
  backToWork: 'Semua karya',
  gallery: 'Galeri',
  galleryAria: (name) => `Tangkapan layar ${name}`,
  screenshotAlt: (name, index, total) => `${name} — tangkapan layar ${index} dari ${total}`,
  openScreenshotAria: (alt) => `Buka ${alt}, perbesar`,
  projectCount: (num, total) => `Proyek ${num} / ${total}`,
  builtWith: 'Dibangun dengan',
  facts: { role: 'Peran', focus: 'Fokus', shipped: 'Dirilis', stack: 'Teknologi' },
  focusMobile: 'Web & mobile',
  focusWeb: 'Aplikasi web',
  techCount: (n) => `${n} teknologi`,
  seeItLive: 'Lihat langsung',
  linkLabels: { repo: 'Kode', live: 'Langsung', playStore: 'Google Play' },
  projectNav: 'Navigasi proyek',
  previous: 'Sebelumnya',
  next: 'Berikutnya',
  startConversation: 'Mulai percakapan',
  lightbox: { close: 'Tutup', prevAria: 'Tangkapan layar sebelumnya', nextAria: 'Tangkapan layar berikutnya' },
};

export default projects;
