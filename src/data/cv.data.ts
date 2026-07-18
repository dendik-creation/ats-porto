// Single source of truth for all portfolio content.
// Shaped from the ATS résumé JSON. No placeholder data lives anywhere else.
// Types live in ./cv.
import type { CV } from './cv';

export const cv: CV = {
  basics: {
    name: "Dendi' Setiawan",
    label: 'Fullstack Developer',
    email: 'setiawandendik0205@gmail.com',
    url: 'https://dendikcreation.dev',
    summary:
      'Fullstack developer with four years shipping enterprise web and mobile products end to end — from database schema and REST APIs to the interface people actually use. I work across Laravel, Go, and Node on the backend and Vue, Next.js, Astro, and Flutter on the front, and I take ownership of a feature the whole way through.',
    location: { city: 'Kudus', countryCode: 'ID', region: 'Central Java' },
    profiles: [
      { network: 'GitHub', username: 'dendik-creation', url: 'https://github.com/dendik-creation' },
      { network: 'LinkedIn', username: 'dendi-setiawan', url: 'https://www.linkedin.com/in/dendi-setiawan/' },
      { network: 'Upwork', username: 'dendik_creation', url: 'https://www.upwork.com/freelancers/~019a1d14923d5e4999?mp_source=share' },
      { network: 'Fiverr', username: 'dendik_creation', url: 'https://www.fiverr.com/dendik_creation' },
    ],
  },
  work: [
    {
      name: 'Freelance',
      position: 'Freelance Software Engineer',
      location: 'Remote',
      startDate: '2025-07',
      endDate: 'Present',
      summary: 'Developing and delivering custom web and mobile software solutions for various clients end-to-end.',
      highlights: [
        'Architecting database schemas, crafting optimized RESTful APIs, and building responsive client-facing interfaces.',
        'Managing cross-platform fullstack applications utilizing modern web stacks.'
      ],
      keywords: ['Laravel', 'Go', 'Node.js', 'React', 'Vue', 'Flutter', 'Docker', 'Next.js']
    },
    {
      name: 'PT. Innovasia Inovasi Indonesia',
      position: 'Fullstack Developer — Freelance, Remote',
      location: 'West Java, Indonesia',
      startDate: '2024-07',
      endDate: '2025-07',
      summary:
        'Enterprise software helping businesses market products and foundations distribute charitable funds over WhatsApp for Business.',
      highlights: [
        'Shipped template customization and integrations with Meta WhatsApp Cloud API, Biteship, and JNE for order and shipping flows.',
        'Built the broadcasting pipeline that connects consumers to sellers — turning conversation into conversion at scale.',
        'Owned features end to end: data model, REST API, third-party integration, and the operator-facing UI.',
      ],
      keywords: ['Laravel', 'PHP', 'Vue', 'Meta WhatsApp Cloud API', 'Biteship', 'JNE Shipping API'],
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
  volunteer: [
    {
      organization: 'Muria Computer Club',
      position: 'Educator / Mentor',
      location: 'Kudus, Indonesia',
      startDate: '2025-05',
      endDate: 'Present',
      summary: 'Teaching and mentoring core tech stacks to the organization members.',
      highlights: [
        'Conducting training sessions focusing on Laravel and its modern ecosystem.',
        'Guiding members through hands-on development workflows and architecture best practices.'
      ]
    },
    {
      organization: 'PEMBURU LOMBA SKADAKU',
      position: 'Web Developer',
      location: 'Kudus, Indonesia',
      startDate: '2022-09',
      endDate: '2024-05',
      summary: 'Active in system development to assist school and department administration.',
      highlights: [
        'Participated in various competitions in the field of website technology ranging from UI/UX, RESTful API, and software engineering.'
      ]
    }
  ],
  skills: [
    { name: 'Front End', keywords: ['TypeScript', 'Next.js', 'Astro', 'Vue', 'React', 'Flutter', 'shadcn/ui'] },
    { name: 'Back End', keywords: ['PHP', 'Laravel', 'Django', 'Node.js', 'Go', 'Bun', 'REST API'] },
    { name: 'Database', keywords: ['MySQL', 'PostgreSQL', 'SQLite', 'Oracle'] },
    { name: 'Cloud Computing', keywords: ['AWS', 'Firebase', 'FCM', 'Pusher', 'Digital Ocean'] },
    { name: 'Tools', keywords: ['Git', 'GitHub', 'Figma', 'WordPress', 'Docker'] },
  ],
  projects: [
    {
      name: 'Get The Matrix',
      description:
        'An interactive educational gamification project designed to transform traditional matrix mathematics learning into an engaging digital experience. Developed in a three-member team, it features localized language support, cross-platform compatibility for both web (localhost) and mobile devices, and intuitive game mechanics built to eliminate conventional learning boredom.',
      date: '2022-11',
      role: 'Game Programmer',
      keywords: ['Construct 3', 'Figma', 'Adobe Illustrator', 'Game Development', 'Educational Gamification'],
      links: { repo: 'https://github.com/dendik-creation/get-the-matrix', live: 'https://get-the-matrix.projectmendoan.my.id/' },
    },
    {
      name: 'Gamelaneka',
      description:
        'An interactive multimedia learning platform designed to preserve and introduce Javanese gamelan traditional musical instruments. Features high-fidelity original instrument audio playback, educational historical modules, and an engaging, user-friendly digital layout tailored to enhance cultural heritage interest among the younger generation.',
      date: '2023-11',
      role: 'Design & Interactive Build',
      keywords: ['Construct 3', 'Figma', 'Adobe Illustrator', 'Interactive Audio', 'Multimedia Learning'],
      links: { live: 'https://gamelaneka.projectmendoan.my.id', repo : "https://github.com/dendik-creation/gamelaneka" },
    },
    {
      name: 'Audit Mutu Internal System',
      description:
        'An enterprise internal quality audit system (AMI) architected with a decoupled frontend-backend infrastructure. Designed to run granular audits per user and systematically recap complete historical reviews. Integrates a robust Laravel backend securing APIs via Sanctum alongside a high-performance React dashboard built with Tailwind CSS.',
      date: '2024-05',
      role: 'Fullstack — Laravel + React',
      keywords: [
        'Laravel',
        'React',
        'Oracle',
        'RESTful API'
      ],
      links: { repo: '', live: '' },
    },
    {
      name: 'Family Care Stunting',
      description:
        'A comprehensive public health tracking application designed to monitor, screen, and evaluate citizens with stunting histories. Features customized stunting assessment tests paired with tailored digital learning modules to deliver targeted educational content directly to affected families via the Play Store.',
      date: '2024-09',
      role: 'Solo Fullstack — mobile + backend',
      keywords: ['Laravel', 'MySQL', 'PHP', 'Flutter', 'Public Health Tracking'],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.dendikcreation.familycarestunting' },
    },
    {
      name: 'Tree Smart Coach',
      description:
        'A multi-platform digital monitoring system commissioned by the Ministry of Religious Affairs (Kemenag) Kudus to modernize madrasah school supervision. Replaces conventional manual reporting with a structured, data-driven evaluation pipeline, enabling supervisors to efficiently track, audit, and systematically review school performance in real-time.',
      date: '2024-10',
      role: 'Solo Fullstack — Laravel API + Flutter app',
      keywords: ['Laravel', 'MySQL', 'PHP', 'Flutter', 'FCM', 'Pusher', 'Digital Reporting'],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.dendikcreation.treesmartcoach' },
    },
    {
      name: 'SNUMAKU PKWU',
      description:
        'An interactive digital multimedia learning platform published on the Google Play Store to streamline vocational high school entrepreneurship (PKWU) education. Designed to guide students through designing, validating, producing, and marketing real-world services. Built to foster cross-major collaboration and digital literacy using an advanced game engine interface.',
      date: '2025-12',
      role: 'Lead Interactive Developer',
      keywords: ['Godot', 'Figma', 'UI/UX Design', 'Interactive Multimedia'],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.dendikcreation.snumakupkwu' },
    },
    {
      name: 'KeRaS.',
      description:
        'An open-source, stateless web application and PWA designed to help university students automate and secure high-speed course registration (KRS). Features zero-database storage for absolute privacy, automated high-frequency submission mechanisms, real-time university portal scraping, and fully anonymized telemetry.',
      date: '2026-01',
      role: 'Creator & Lead Engineer',
      keywords: [
        'Next.js',
        'TypeScript',
        'Bun',
        'PostHog',
        'Docker'
      ],
      links: { repo: 'https://github.com/dendik-creation/keras', live: 'https://keras.dendikcreation.dev' },
    },
    {
      name: 'Bi Booster',
      description:
        'An AI-powered SaaS instant website builder for MSMEs (UMKM) that generates high-performance static websites in real-time based on structured business profiles[cite: 1]. Features a multi-stage LLM generation pipeline, continuous job queues, automated Midtrans billing workflows, and dynamic reverse-proxy routing[cite: 1].',
      date: '2026-03',
      role: 'Core Systems & DevOps Architect',
      keywords: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Redis',
        'BullMQ',
        'DeepSeek API',
        'Caddy',
        'Docker'
      ],
      links: { repo: '', live: 'https://bibooster.agency' },
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
    { name: 'Belajar Dasar Cloud dan Gen AI di AWS', issuer: 'Dicoding', date: '2026', summary: 'Fundamentals of AWS Cloud computing and generative AI prompt engineering models.', credentialId: '', url: '' },
    { name: 'Spec-Driven Development dengan Kiro', issuer: 'Dicoding', date: '2026', summary: 'Implementing strict spec-driven backend APIs and documentation using modern software development toolkits.', credentialId: '', url: '' },
    { name: 'Microsoft Office Specialist - Excel 2019', issuer: 'Microsoft', date: '2026', summary: 'Professional competency certification in advanced spreadsheet modeling and data analysis.', credentialId: '', url: '' },
    { name: 'Junior Web Programmer (BNSP)', issuer: 'LSP Teknologi Digital', date: '2023-11', endDate: '2026-11', summary: 'Nationally certified competency — database administration with the Django framework.', credentialId: '', url: '' },
    { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Cloud fundamentals: core AWS services, pricing, and the shared-responsibility model.', credentialId: '', url: '' },
    { name: 'AWS Technical Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Hands-on with EC2, VPC, and DynamoDB — compute, networking, and managed data stores.', credentialId: '', url: '' },
    { name: 'Dasar Pemrograman', issuer: 'Dicoding', date: '2023-08', endDate: '2026-08', summary: 'Programming foundations for software developers.', credentialId: '', url: '' },
  ],
  education: [
    {
      institution: 'Muria Kudus University',
      studyType: 'Bachelor of Computer Science',
      area: 'Teknik Informatika',
      location: 'Kudus, Indonesia',
      startDate: '2024',
      endDate: 'Present',
      summary: 'Active student focusing on software engineering, distributed systems, and cross-platform architecture.',
      highlights: [
        'Honing critical thinking skills to analyze complex technical concepts and solve system integration problems.',
        'Extensively building full-stack web architectures and multi-tenant database infrastructures.'
      ],
      keywords: ['Software Engineering', 'Database Management', 'Cloud Computing'],
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
