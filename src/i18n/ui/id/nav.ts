import type { NavStrings } from '../../ui.types';

const nav: NavStrings = {
  homeAria: (name) => `${name} — beranda`,
  items: {
    about: 'Tentang',
    stack: 'Teknologi',
    work: 'Karya',
    experience: 'Pengalaman',
    volunteer: 'Relawan',
    certifications: 'Sertifikasi',
    languages: 'Bahasa',
    contact: 'Kontak',
    visitors: 'Pengunjung',
  },
  ariaLabels: {
    about: 'Lompat ke bagian tentang',
    stack: 'Lompat ke bagian teknologi',
    work: 'Lompat ke karya pilihan',
    experience: 'Lompat ke pengalaman',
    volunteer: 'Lompat ke relawan',
    certifications: 'Lompat ke sertifikasi',
    languages: 'Lompat ke bahasa',
    contact: 'Lompat ke kontak',
    visitors: 'Lihat statistik pengunjung situs (buka di tab baru)',
  },
  menuLabel: 'Menu',
  closeLabel: 'Tutup',
  openMenuAria: 'Buka menu',
  closeMenuAria: 'Tutup menu',
  elsewhere: 'Lainnya',
  theme: {
    toggleToDark: 'Ganti ke mode gelap',
    toggleToLight: 'Ganti ke mode terang',
  },
  language: {
    title: 'Bahasa',
  },
};

export default nav;
