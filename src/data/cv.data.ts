// Single source of truth for all portfolio content.
// Shaped from the ATS résumé JSON. No placeholder data lives anywhere else.
// Types live in ./cv.
import type { CV } from './cv';

export const cv: CV = {
  basics: {
    name: "Dendi' Setiawan",
    label: 'Fullstack Developer',
    email: 'setiawandendik0205@gmail.com',
    phone: '+6289504522341',
    url: 'https://dendikcreation.dev',
    summary:
      'Fullstack developer with four years shipping enterprise web and mobile products end to end — from database schema and REST APIs to the interface people actually use. I work across Laravel, Go, and Node on the backend and Vue, Next.js, Astro, and Flutter on the front, and I take ownership of a feature the whole way through.',
    location: { city: 'Kudus', countryCode: 'ID', region: 'Central Java' },
    profiles: [
      { network: 'GitHub', username: 'dendik-creation', url: 'https://github.com/dendik-creation' },
      { network: 'LinkedIn', username: 'dendi-setiawan', url: 'https://www.linkedin.com/in/dendi-setiawan/' },
    ],
  },
  work: [
    {
      name: 'PT. Innovasia Inovasi Indonesia',
      position: 'Fullstack Developer — Freelance, Remote',
      location: 'West Java, Indonesia',
      startDate: '2024-07',
      endDate: 'Present',
      summary:
        'Enterprise software helping businesses market products and foundations distribute charitable funds over WhatsApp for Business.',
      highlights: [
        'Shipped template customization and integrations with Meta WhatsApp Cloud API, Biteship, and JNE for order and shipping flows.',
        'Built the broadcasting pipeline that connects consumers to sellers — turning conversation into conversion at scale.',
        'Owned features end to end: data model, REST API, third-party integration, and the operator-facing UI.',
      ],
      keywords: ['Laravel', 'PHP', 'Vue', 'Meta WhatsApp Cloud API', 'Biteship', 'JNE', 'REST API'],
    },
    {
      name: 'PT. Pura Group Indonesia',
      position: 'Fullstack Developer & Database Administrator — Internship',
      location: 'Central Java, Indonesia',
      startDate: '2024-02',
      endDate: '2024-05',
      summary: 'Built and maintained enterprise software with modern frameworks alongside legacy systems.',
      highlights: [
        'Delivered an employee data-management application on Oracle with PowerBuilder, administering the database directly.',
        'Developed an internal quality-audit system (AMI) using Laravel and React to run and recap audits per user.',
      ],
      keywords: ['Laravel', 'React', 'Oracle', 'PowerBuilder', 'MySQL'],
    },
    {
      name: 'PT. Humanika Mitra Solusi',
      position: 'Fullstack Developer — Internship',
      location: 'Central Java, Indonesia',
      startDate: '2023-06',
      endDate: '2023-08',
      summary: 'Built and maintained enterprise software with modern web technologies.',
      highlights: [
        'Completed the Pilih Dhewe voting app with a RESTful API integration.',
        'Owned the full stack: database schema, backend API, and admin panel.',
      ],
      keywords: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    },
  ],
  skills: [
    { name: 'Front End', keywords: ['TypeScript', 'Next.js', 'Astro', 'Vue', 'React', 'Flutter', 'shadcn/ui'] },
    { name: 'Back End', keywords: ['PHP', 'Laravel', 'Django', 'Node.js', 'Go', 'Bun', 'REST API'] },
    { name: 'Database', keywords: ['MySQL', 'PostgreSQL', 'SQLite', 'Oracle'] },
    { name: 'Cloud & Realtime', keywords: ['AWS', 'Firebase', 'FCM', 'Pusher'] },
    { name: 'Tools', keywords: ['Git', 'GitHub', 'Figma', 'WordPress'] },
  ],
  projects: [
    {
      name: 'Tree Smart Coach',
      description:
        'Web and mobile platform to monitor and supervise schools across Kudus City, with realtime notifications to the field.',
      date: '2024-10',
      role: 'Solo fullstack — Laravel API + Flutter app',
      keywords: ['Laravel', 'MySQL', 'PHP', 'Flutter', 'FCM', 'Pusher'],
      links: { repo: '', live: '', playStore: '' },
    },
    {
      name: 'Family Care Stunting',
      description:
        'Play Store app to capture and treat childhood stunting across neighborhoods, with built-in screening tests.',
      date: '2024-09',
      role: 'Solo fullstack — mobile + backend',
      keywords: ['Laravel', 'MySQL', 'PHP', 'Flutter'],
      links: { repo: '', live: '', playStore: '' },
    },
    {
      name: 'Audit Mutu Internal',
      description:
        'Internal audit system (AMI) that runs quality audits per user and recaps the full audit history for review.',
      date: '2024-05',
      role: 'Fullstack — Laravel + React',
      keywords: ['Laravel', 'MySQL', 'PHP', 'React'],
      links: { repo: '', live: '' },
    },
    {
      name: 'Gudang Ajaib',
      description:
        'Warehouse management app: stock levels, inbound/outbound goods, and barcode / QR printing per item.',
      date: '2023-10',
      role: 'Solo fullstack',
      keywords: ['Laravel', 'MySQL', 'PHP'],
      links: { repo: '', live: '' },
    },
    {
      name: 'Pilih Dhewe',
      description:
        'Voting platform for the student-council election at SMK Negeri 2 Kudus, backed by a RESTful API.',
      date: '2023-09',
      role: 'Solo fullstack — schema, API, admin panel',
      keywords: ['Laravel', 'MySQL', 'PHP', 'REST API'],
      links: { repo: '', live: '' },
    },
    {
      name: 'Gamelaneka',
      description:
        'Interactive learning media that introduces Javanese gamelan instruments through play.',
      date: '2023-11',
      role: 'Design + interactive build',
      keywords: ['Construct 3', 'Figma', 'Illustrator'],
      links: { live: '' },
    },
  ],
  awards: [
    {
      title: '1st Place — AWS Club Competition',
      date: '2023-11',
      awarder: 'Central Java',
      summary: 'Built a school-profile website surfacing activities and administration; placed first in the field.',
    },
    {
      title: '3rd Place — LKS Web Technologies',
      date: '2023-05',
      awarder: 'Kota Batang',
      summary: 'Provincial competition: native HTML5/CSS/JS/PHP tasks plus a jobseeker REST API on Laravel and Vue.',
    },
  ],
  certificates: [
    { name: 'Junior Web Programmer (BNSP)', issuer: 'LSP Teknologi Digital', date: '2023-11', endDate: '2026-11', summary: 'Nationally certified competency — database administration with the Django framework.', credentialId: '', url: '' },
    { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Cloud fundamentals: core AWS services, pricing, and the shared-responsibility model.', credentialId: '', url: '' },
    { name: 'AWS Technical Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Hands-on with EC2, VPC, and DynamoDB — compute, networking, and managed data stores.', credentialId: '', url: '' },
    { name: 'Dasar Pemrograman', issuer: 'Dicoding', date: '2023-08', endDate: '2026-08', summary: 'Programming foundations for software developers.', credentialId: '', url: '' },
  ],
  education: [
    {
      institution: 'SMK Negeri 2 Kudus',
      studyType: 'Vocational High School',
      area: 'Software Engineering (Rekayasa Perangkat Lunak)',
      location: 'Central Java, Indonesia',
      startDate: '',
      endDate: '',
      summary: '',
      highlights: [
        'Specialized in software engineering — web development, databases, and RESTful API design.',
        'Represented the school in provincial and club-level web-technology competitions.',
      ],
      keywords: [],
    },
  ],
  languages: [
    { name: 'Indonesia', level: 'Native' },
    {
      name: 'English',
      level: 'Professional — formal',
      note: 'Reads, writes, and communicates comfortably in formal and technical contexts; conversational fluency developing.',
    },
  ],
};
