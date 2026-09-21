// English canonical CV content. The Indonesian version mirrors its structure.
// Types live in ../../data/cv.
import type { CV } from '../../data/cv';

export const cv: CV = {
  basics: {
    name: "Dendi' Setiawan",
    siteName: "Dendi' Creation",
    label: 'Fullstack Developer',
    email: 'setiawandendik0205@gmail.com',
    url: 'https://dendikcreation.dev',
    cvUrl: 'https://drive.google.com/file/d/1IC-G5b8WJTjGduhHqbUdW04bh5lSSKqL/view?usp=sharing',
    summary:
      'Fullstack developer with four years of experience building web and mobile products. Works across database design, APIs, user interfaces, and deployment with Laravel, Go, Node.js, Vue, Next.js, Astro, and Flutter. Experience includes business systems, public-service applications, and interactive learning products.',
    seoDescription:
      "Dendi' Setiawan is a fullstack developer in Indonesia with experience building web and mobile products.",
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
    name: 'Tech Lead of BI Booster',
    position: 'Chief Technology Officer',
    location: 'Central Java, Indonesia',
    startDate: '2026-03',
    endDate: 'Present',
    summary: 'Lead core system architecture, SaaS platform development, and DevOps infrastructure for an automated website builder for Indonesian SMEs.',
    highlights: [
    'Designed the core architecture with Next.js, TypeScript, Prisma, PostgreSQL, Redis, and BullMQ for structured, asynchronous website generation.',
    'Built a DeepSeek API workflow that turns structured business profiles into publishable static websites.',
    'Manage Docker- and Caddy-based deployment infrastructure, including domain configuration, reverse proxy, and Cloudflare integration.',
    'Set up Redis and BullMQ jobs to run website-generation workflows.'
    ],
    keywords: [
    'Next.js',
    'TypeScript',
    'Prisma',
    'PostgreSQL',
    'Redis',
    'BullMQ',
    'DeepSeek API',
    'Caddy',
    'Docker',
    'Cloudflare'
    ]
    }
,
    {
      name: 'Freelance',
      position: 'Freelance Software Engineer',
      location: 'Remote',
      startDate: '2025-07',
      endDate: 'Present',
      summary: 'Develop and release web and mobile applications for clients, from backend services and user interfaces through deployment.',
      highlights: [
        'Design database schemas, build REST APIs, and create responsive interfaces for client applications.',
        'Deploy fullstack applications with Node.js, Go, and web technologies suited to each project.'
      ],
      keywords: ['Laravel', 'Go', 'Node.js', 'React', 'Vue', 'Flutter', 'Docker', 'Next.js']
    },
    {
      name: 'PT. Innovasia Inovasi Indonesia',
      position: 'Fullstack Developer, Freelance Remote',
      location: 'West Java, Indonesia',
      startDate: '2024-07',
      endDate: '2025-07',
      summary:
        'Built business software for product marketing and charitable-fund distribution through WhatsApp Business.',
      highlights: [
        'Delivered template customizations and integrations with Meta WhatsApp API, Biteship, and JNE for ordering and shipping.',
        'Built a broadcast workflow that connects customers with sellers through WhatsApp.',
        'Handled data models, REST APIs, third-party integrations, and interfaces for operators.',
      ],
      keywords: ['Laravel', 'PHP', 'Vue', 'Meta WhatsApp API', 'Biteship', 'JNE Shipping API'],
    },
    {
      name: 'PT. Pura Group Indonesia',
      position: 'Fullstack Developer & Database Administrator, Internship',
      location: 'Central Java, Indonesia',
      startDate: '2024-02',
      endDate: '2024-05',
      summary: 'Developed business applications that work alongside existing systems.',
      highlights: [
        'Built an employee data-management application with PowerBuilder and Oracle, including direct database administration.',
        'Developed an internal quality-audit system with Laravel and React for conducting and summarizing audits by user.',
      ],
      keywords: ['Laravel', 'React', 'Oracle', 'PowerBuilder', 'MySQL'],
    },
    {
      name: 'PT. Humanika Mitra Solusi',
      position: 'Fullstack Developer, Internship',
      location: 'Central Java, Indonesia',
      startDate: '2023-06',
      endDate: '2023-08',
      summary: 'Developed web applications for business use.',
      highlights: [
        'Built the Pilih Dhewe voting application with a REST API integration.',
        'Worked on the database schema, backend API, and administrative panel.',
      ],
      keywords: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    },
  ],
  volunteer: [
    {
      organization: 'Muria Computer Club',
      position: 'Educator / Competition Judge',
      location: 'Kudus, Indonesia',
      startDate: '2025-05',
      endDate: 'Present',
      summary: 'Teach and mentor members in practical web development.',
      highlights: [
        'Run Laravel training sessions.',
        'Guide members through hands-on development workflows and software architecture.',
        'Serve as a judge for the "Vibe Coding" competition, where first-year university students develop projects with Google AI Studio.'
      ]
    },
    {
    organization: 'Pemburu Lomba Skadaku',
    position: 'Competition Participant',
    location: 'Kudus, Indonesia',
    startDate: '2023-02',
    endDate: '2024-07',
    summary: 'Took part in technology competitions to develop technical and industry experience.',
    highlights: [
    'Joined technology competitions relevant to industry practices.',
    'Shared competition experience and knowledge with peers.'
    ]
    }
  ],
  skills: [
    { name: 'Frontend', keywords: ['TypeScript', 'Next.js', 'Astro', 'Vue', 'React', 'Flutter', 'shadcn/ui'] },
    { name: 'Backend', keywords: ['PHP', 'Laravel', 'Django', 'Node.js', 'Go', 'Bun', 'Prisma', 'Drizzle'] },
    { name: 'Database', keywords: ['MySQL', 'PostgreSQL', 'SQLite', 'Oracle'] },
    { name: 'Cloud', keywords: ['AWS', 'Firebase', 'FCM', 'Pusher', 'Digital Ocean', 'Nginx', 'Caddy'] },
    { name: 'Game Engine', keywords: ['Godot', 'Construct 3'] },
    { name: 'Tools', keywords: ['Git', 'GitHub', 'Figma', 'WordPress', 'Docker', 'Obsidian', 'Notion'] },
  ],
  projects: [
    {
      slug: 'get-the-matrix',
      isPin: false,
      name: 'Get The Matrix',
      description:
        'A three-person learning project that turns matrix lessons into short interactive exercises for web and mobile.',
      seoDescription:
        'Get The Matrix is a math-learning game for web and mobile, built in Construct 3 by a three-person team.',
      date: '2022-11',
      role: 'Game Programmer',
      images: [
        "https://github.com/dendik-creation/get-the-matrix/raw/main/images/Gameplay-1.png",
        "https://github.com/dendik-creation/get-the-matrix/raw/main/images/Gameplay-2.png",
        "https://github.com/dendik-creation/get-the-matrix/raw/main/images/Gameplay-3.png"
      ],
      keywords: ['Construct 3', 'Figma', 'Adobe Illustrator', 'Game Development', 'Educational Gamification'],
      links: { repo: 'https://github.com/dendik-creation/get-the-matrix', live: 'https://get-the-matrix.projectmendoan.my.id/' },
    },
    {
      slug: 'gamelaneka',
      isPin: false,
      name: 'Gamelaneka',
      description:
        'An interactive learning app for Javanese gamelan, with instrument audio and short historical material.',
      seoDescription:
        'Gamelaneka is an interactive learning app introducing Javanese gamelan with instrument audio and historical material.',
      date: '2023-11',
      role: 'Design & Interactive Build',
      keywords: ['Construct 3', 'Figma', 'Adobe Illustrator', 'Interactive Audio', 'Multimedia Learning'],
      links: { live: 'https://gamelaneka.projectmendoan.my.id', repo: "https://github.com/dendik-creation/gamelaneka" },
      images: [
        "/projects/gamelaneka/1.webp",
        "/projects/gamelaneka/2.webp",
        "/projects/gamelaneka/3.webp",
        "/projects/gamelaneka/4.webp",
      ],
    },
    {
      slug: 'audit-mutu-internal-system',
      isPin: false,
      name: 'Audit Mutu Internal System',
      description:
        'An internal quality-audit system for conducting per-user audits and reviewing results, built with Laravel, React, Oracle, and REST APIs.',
      seoDescription:
        'Audit Mutu Internal System is a Laravel and React application for conducting user-level internal quality audits.',
      date: '2024-05',
      role: 'Fullstack, Laravel + React',
      keywords: [
        'Laravel',
        'React',
        'Oracle',
        'REST API'
      ],
      links: { repo: '', live: '' },
    },
    {
      slug: 'family-care-stunting',
      isPin: false,
      name: 'Family Care Stunting',
      description:
        'A public-health app for recording and assessing stunting-related data, with digital learning modules for families.',
      seoDescription:
        'Family Care Stunting is a Flutter and Laravel public-health app for recording assessments and sharing learning modules.',
      date: '2024-09',
      role: 'Solo Fullstack, mobile + backend',
      keywords: ['Laravel', 'MySQL', 'PHP', 'Flutter', 'Public Health Tracking'],
      images: [
        "/projects/family-care-stunting/1.webp",
        "/projects/family-care-stunting/2.webp",
        "/projects/family-care-stunting/3.webp",
        "/projects/family-care-stunting/4.webp",
      ],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.dendikcreation.familycarestunting' },
    },
    {
      slug: 'tree-smart-coach',
      isPin: true,
      name: 'Tree Smart Coach',
      description:
        'A monitoring system for Kemenag Kudus that lets madrasah supervisors record reviews and follow up on school data.',
      seoDescription:
        'Tree Smart Coach is a Laravel and Flutter monitoring system for madrasah supervision at Kemenag Kudus.',
      date: '2024-10',
      role: 'Solo Fullstack, Laravel API + Flutter app',
      keywords: ['Laravel', 'MySQL', 'PHP', 'Flutter', 'FCM', 'Pusher', 'Digital Reporting'],
      images: [
        "/projects/tree-smart-coach/1.webp",
        "/projects/tree-smart-coach/2.webp",
        "/projects/tree-smart-coach/3.webp",
        "/projects/tree-smart-coach/4.webp",
      ],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.dendikcreation.treesmartcoach' },
    },
    {
      slug: 'snumaku-pkwu',
      isPin: true,
      name: 'SNUMAKU PKWU',
      description:
        'A Google Play learning app for vocational entrepreneurship classes, covering planning, validation, production, and marketing.',
      seoDescription:
        'SNUMAKU PKWU is a Google Play learning app for vocational entrepreneurship lessons, built with Godot.',
      date: '2025-12',
      role: 'Lead Interactive Developer',
      keywords: ['Godot', 'Figma', 'UI/UX Design', 'Interactive Multimedia'],
      images: [
        "/projects/snumaku-pkwu/1.webp",
        "/projects/snumaku-pkwu/2.webp",
        "/projects/snumaku-pkwu/3.webp",
        "/projects/snumaku-pkwu/4.webp",
      ],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.dendikcreation.snumakupkwu' },
    },
    {
      slug: 'keras',
      isPin: true,
      name: 'KeRaS.',
      description:
        'An open-source PWA for students submitting course-registration requests. It supports portal scraping without an application database.',
      seoDescription:
        'KeRaS is an open-source PWA for course registration, with portal scraping and no application database.',
      date: '2026-01',
      role: 'Creator & Lead Engineer',
      keywords: [
        'Next.js',
        'TypeScript',
        'Bun',
        'PostHog',
        'Docker',
        'Cloudflare',
        'Redis'
      ],
      images: [
        "/projects/keras/1.webp",
        "/projects/keras/2.webp",
        "/projects/keras/3.webp",
        "/projects/keras/4.webp",
        "/projects/keras/5.webp",
      ],
      links: { repo: 'https://github.com/dendik-creation/keras', live: 'https://keras.dendikcreation.dev' },
    },
    {
      slug: 'bi-booster',
      isPin: true,
      name: 'Bi Booster',
      description:
        'A SaaS website builder for Indonesian small businesses that generates static sites from structured business profiles through a staged LLM workflow.',
      seoDescription:
        'Bi Booster is a SaaS website builder for Indonesian small businesses, using structured business profiles and an LLM workflow.',
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
        'Docker',
        'Cloudflare',
      ],
      images: [
        "/projects/bi-booster/1.webp",
        "/projects/bi-booster/2.webp",
        "/projects/bi-booster/3.webp",
        "/projects/bi-booster/4.webp",
        "/projects/bi-booster/5.webp",
        "/projects/bi-booster/6.webp",
      ],
      links: { live: 'https://bibooster.id' },
    },
  ],
  certificates: [
    { type: 'award', name: '1st Place, AWS Club Competition', issuer: 'Central Java', date: '2023-11', summary: 'Built a school-profile website for activities and administration with WordPress, then converted it to a static site using a WordPress plugin.', image: '/static/certifications/awards/1st_aws_project.webp' },
    { type: 'award', name: '3rd Place, LKS Web Technologies', issuer: 'Batang City', date: '2023-05', summary: 'Provincial web technologies competition involving native HTML5, CSS, JavaScript, and PHP tasks, a Plants vs. Zombies clone, and a Laravel and Vue job-seeker REST API.', image: '/static/certifications/awards/3rd_province_web_tech.webp' },
    { type: 'certification', name: 'Belajar Dasar Cloud dan Gen AI di AWS', issuer: 'Dicoding', date: '2026', summary: 'AWS Cloud fundamentals and generative-AI prompt engineering.', credentialId: '3XE1QNMVZRN', url: 'https://www.dicoding.com/certificates/53XE1QNMVZRN', image: '/static/certifications/certificate/dicoding_cloud_gen_ai.webp' },
    { type: 'certification', name: 'Spec-Driven Development dengan Kiro', issuer: 'Dicoding', date: '2026', summary: 'Spec-driven backend API design and documentation with modern development tools.', credentialId: 'GRX5WOM4KZ0M', url: 'https://www.dicoding.com/certificates/GRX5WOM4KZ0M', image: '/static/certifications/certificate/dicoding_kiro_sdd.webp' },
    { type: 'certification', name: 'Microsoft Office Specialist - Excel 2019', issuer: 'Microsoft', date: '2026', summary: 'Advanced spreadsheet modeling and data analysis.', credentialId: 'wNMEx-2FNW', url: 'https://www.certiport.com/portal/pages/credentialverification.aspx', image: '/static/certifications/certificate/microsoft_office_specialsit.webp' },
    { type: 'certification', name: 'Junior Web Programmer (BNSP)', issuer: 'LSP Teknologi Digital', date: '2023-11', endDate: '2026-11', summary: 'National certification in database administration with the Django framework.', credentialId: '11843220', url: 'https://drive.google.com/file/d/1YCEHNxRW3Ozu3bG5S3soIc36eec1U09N/view', image: '/static/certifications/certificate/lsp_juniorweb.webp' },
    { type: 'certification', name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Core AWS services, pricing, and the shared-responsibility model.', credentialId: '', url: 'https://drive.google.com/file/d/1kmqZlREcC-7_XKkVaYcYs3e3anfZKHgw/view?usp=sharing', image: '/static/certifications/certificate/aws_cloud_practitioner_essentials.webp' },
    { type: 'certification', name: 'AWS Technical Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Hands-on work with EC2, VPC, and DynamoDB for compute, networking, and managed data storage.', credentialId: '', url: 'https://drive.google.com/file/d/1DPSi0J1MBvLrQ0gFh8OZwuhHBeR0Gs7H/view?usp=sharing', image: '/static/certifications/certificate/aws_technical_essentials.webp' },
    { type: 'certification', name: 'Architecting on AWS', issuer: 'AWS Training', date: '2023-06', summary: 'AWS architecture patterns for designing and troubleshooting cloud solutions.', credentialId: '', url: 'https://drive.google.com/file/d/1_AzOVgRNSHhYFN_Hrnxm8Be1X5wKlBHA/view?usp=sharing', image: '/static/certifications/certificate/aws_architecting.webp' },
    { type: 'certification', name: 'Certificate of Laziness', issuer: 'Ingin Menjadi Programmer Handal Namun Enggan Ngoding', date: '2025-07', summary: 'Recognition for maintaining Facebook activity during critical work periods instead of completing assigned work.', image: '/static/certifications/certificate/imphnen_lazy.webp' },
  ],
  languages: [
    { name: 'Indonesian', level: 'Native' },
    {
      name: 'English',
      level: 'Professional, formal',
      note: 'Reads, writes, and communicates comfortably in formal and technical contexts; conversational fluency developing.',
    },
  ],
};
