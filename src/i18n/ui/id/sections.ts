import type { SectionsStrings } from '../../ui.types';

const sections: SectionsStrings = {
  about: { title: 'Tentang', kicker: 'Siapa / Di mana' },
  skills: { title: 'Teknologi', kicker: 'Yang saya gunakan' },
  projects: { title: 'Karya pilihan', kicker: (count) => `${count} proyek` },
  experience: { title: 'Pengalaman', kicker: 'Tempat saya berkarya' },
  volunteer: { title: 'Relawan', kicker: 'Di luar pekerjaan' },
  certifications: { title: 'Sertifikasi', kicker: 'Keahlian terverifikasi' },
  languages: { title: 'Bahasa', kicker: 'Cara saya berkomunikasi' },
  contact: { title: 'Mari membangun sesuatu', kicker: 'Hubungi saya' },
};

export default sections;
