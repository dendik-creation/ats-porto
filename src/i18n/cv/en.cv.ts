// English canonical CV content. The Indonesian version mirrors its structure.
// Types live in ../../data/cv.
import type { CV } from '../../data/cv';

export const cv: CV = {
  basics: {
    name: "Dendi' Setiawan",
    label: 'Software Engineer',
    email: 'setiawandendik0205@gmail.com',
    url: 'https://dendikcreation.dev',
    cvUrl: 'https://drive.google.com/file/d/1IC-G5b8WJTjGduhHqbUdW04bh5lSSKqL/view?usp=sharing',
    summary:
      "I build fullstack products end-to-end, from database design to user interface. Four years of experience across web and mobile, using Laravel, Go, Node.js, Vue, Next.js, Astro, and Flutter to deliver software that's secure and fast.",
    seoDescription:
      "Dendi' Setiawan is a fullstack developer in Indonesia building web and mobile products with Laravel, Go, Node.js, Vue, Next.js, Astro, and Flutter.",
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
    location: 'Kudus, Indonesia',
    startDate: '2026-03',
    endDate: 'Present',
    summary: 'Led the core system architecture, SaaS platform development, and DevOps infrastructure for an automated website builder that generates websites for Indonesian SMEs through a structured multi-stage LLM workflow.',
    highlights: [
    'Designed the core system architecture using Next.js, TypeScript, Prisma, PostgreSQL, Redis, and BullMQ to support structured and asynchronous website generation workflows.',
    'Developed an LLM-powered workflow using the DeepSeek API to transform structured business profiles into production-ready static websites.',
    'Designed and managed Docker- and Caddy-based deployment infrastructure, including domain configuration, reverse proxy, and Cloudflare integration.',
    'Implemented background job processing with Redis and BullMQ to execute website generation workflows reliably and efficiently at scale.'
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
      summary: 'Build and release web and mobile applications for clients, covering backend services, user interfaces, and deployment.',
      highlights: [
        'Design database schemas, build REST APIs, and create responsive interfaces for client applications.',
        'Deploy fullstack applications using Node.js, Go, and web technologies suited to each project.'
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
        'Business software for product marketing and charitable-fund distribution through WhatsApp for Business.',
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
      summary: 'Built and maintained business applications that work alongside existing systems.',
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
      summary: 'Built and maintained web applications for business use.',
      highlights: [
        'Built the Pilih Dhewe voting application with a REST API integration.',
        'Worked on the database schema, backend API, and administrative panel.',
      ],
      keywords: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    },
  ],
  volunteer: [
    {
    organization: 'Pemburu Lomba Skadaku',
    position: 'Competition Participant',
    location: 'Kudus, Indonesia',
    startDate: '2023-02',
    endDate: '2024-07',
    summary: 'Participated in various technology competitions to develop technical skills and industry-relevant experience.',
    highlights: [
    'Participated in various technology competitions aligned with industry trends and practices.',
    'Shared knowledge and experiences with peers while participating in technology competitions.'
    ]
    }
,
    {
      organization: 'Muria Computer Club',
      position: 'Educator / Mentor',
      location: 'Kudus, Indonesia',
      startDate: '2025-05',
      endDate: 'Present',
      summary: 'Teach and mentor members on practical web-development foundations.',
      highlights: [
        'Run training sessions on Laravel and its ecosystem.',
        'Guide members through hands-on development workflows and software-architecture practices.'
      ]
    }
  ],
  skills: [
    { name: 'Frontend', keywords: ['TypeScript', 'Next.js', 'Astro', 'Vue', 'React', 'Flutter', 'shadcn/ui'] },
    { name: 'Backend', keywords: ['PHP', 'Laravel', 'Django', 'Node.js', 'Go', 'Bun', 'REST API'] },
    { name: 'Database', keywords: ['MySQL', 'PostgreSQL', 'SQLite', 'Oracle'] },
    { name: 'Cloud', keywords: ['AWS', 'Firebase', 'FCM', 'Pusher', 'Digital Ocean'] },
    { name: 'Tools', keywords: ['Git', 'GitHub', 'Figma', 'WordPress', 'Docker', 'Obsidian'] },
  ],
  projects: [
    {
      slug: 'get-the-matrix',
      name: 'Get The Matrix',
      description:
        'A three-person interactive learning project that turns matrix lessons into short, playable exercises for web and mobile.',
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
      name: 'Gamelaneka',
      description:
        'An interactive learning app that introduces Javanese gamelan through instrument audio and concise historical material.',
      seoDescription:
        'Gamelaneka is an interactive learning app introducing Javanese gamelan with instrument audio and historical material.',
      date: '2023-11',
      role: 'Design & Interactive Build',
      keywords: ['Construct 3', 'Figma', 'Adobe Illustrator', 'Interactive Audio', 'Multimedia Learning'],
      links: { live: 'https://gamelaneka.projectmendoan.my.id', repo: "https://github.com/dendik-creation/gamelaneka" },
      images: [
        "/projects/gamelaneka/1.png",
        "/projects/gamelaneka/2.png",
        "/projects/gamelaneka/3.png",
        "/projects/gamelaneka/4.png",
      ],
    },
    {
      slug: 'audit-mutu-internal-system',
      name: 'Audit Mutu Internal System',
      description:
        'An internal quality-audit system for running user-level audits and reviewing results, built with Laravel, React, Oracle, and REST APIs.',
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
      name: 'Family Care Stunting',
      description:
        'A public-health app that records and assesses stunting-related data, paired with digital learning modules for families.',
      seoDescription:
        'Family Care Stunting is a Flutter and Laravel public-health app for recording assessments and sharing learning modules.',
      date: '2024-09',
      role: 'Solo Fullstack, mobile + backend',
      keywords: ['Laravel', 'MySQL', 'PHP', 'Flutter', 'Public Health Tracking'],
      images: [
        "/projects/family-care-stunting/1.png",
        "/projects/family-care-stunting/2.png",
        "/projects/family-care-stunting/3.png",
        "/projects/family-care-stunting/4.png",
      ],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.dendikcreation.familycarestunting' },
    },
    {
      slug: 'tree-smart-coach',
      name: 'Tree Smart Coach',
      description:
        'A monitoring system for Kemenag Kudus that helps madrasah supervisors record reviews and follow up on school data.',
      seoDescription:
        'Tree Smart Coach is a Laravel and Flutter monitoring system for madrasah supervision at Kemenag Kudus.',
      date: '2024-10',
      role: 'Solo Fullstack, Laravel API + Flutter app',
      keywords: ['Laravel', 'MySQL', 'PHP', 'Flutter', 'FCM', 'Pusher', 'Digital Reporting'],
      images: [
        "/projects/tree-smart-coach/1.png",
        "/projects/tree-smart-coach/2.png",
        "/projects/tree-smart-coach/3.png",
        "/projects/tree-smart-coach/4.png",
      ],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.dendikcreation.treesmartcoach' },
    },
    {
      slug: 'snumaku-pkwu',
      name: 'SNUMAKU PKWU',
      description:
        'A Google Play learning app for vocational entrepreneurship classes, covering planning, validation, production, and marketing.',
      seoDescription:
        'SNUMAKU PKWU is a Google Play learning app for vocational entrepreneurship lessons, built with Godot.',
      date: '2025-12',
      role: 'Lead Interactive Developer',
      keywords: ['Godot', 'Figma', 'UI/UX Design', 'Interactive Multimedia'],
      images: [
        "/projects/snumaku-pkwu/1.png",
        "/projects/snumaku-pkwu/2.png",
        "/projects/snumaku-pkwu/3.png",
        "/projects/snumaku-pkwu/4.png",
      ],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.dendikcreation.snumakupkwu' },
    },
    {
      slug: 'keras',
      name: 'KeRaS.',
      description:
        'An open-source PWA that helps students submit course-registration requests. It uses no application database and supports portal scraping.',
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
        "/projects/keras/1.png",
        "/projects/keras/2.png",
        "/projects/keras/3.png",
        "/projects/keras/4.png",
        "/projects/keras/5.png",
      ],
      links: { repo: 'https://github.com/dendik-creation/keras', live: 'https://keras.dendikcreation.dev' },
    },
    {
      slug: 'bi-booster',
      name: 'Bi Booster',
      description:
        'A SaaS website builder for Indonesian small businesses. It creates static sites from business profiles using a multi-stage LLM workflow.',
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
        "/projects/bi-booster/1.png",
        "/projects/bi-booster/2.png",
        "/projects/bi-booster/3.png"
      ],
      links: { live: 'https://bibooster.id' },
    },
  ],
  awards: [
    {
      title: '1st Place, AWS Club Competition',
      date: '2023-11',
      awarder: 'Central Java',
      summary: 'Built a school-profile website surfacing activities and administration, using WordPress and converting it to a static site via a WordPress plugin.',
    },
    {
      title: '3rd Place, LKS Web Technologies',
      date: '2023-05',
      awarder: 'Batang City',
      summary: 'Provincial competitive-programming event: native HTML5/CSS/JS/PHP tasks, a Plants vs. Zombies clone game, and a job-seeker REST API built with Laravel and Vue for the frontend.',
    },
  ],
  certificates: [
    { name: 'Belajar Dasar Cloud dan Gen AI di AWS', issuer: 'Dicoding', date: '2026', summary: 'Fundamentals of AWS Cloud computing and generative AI prompt engineering models.', credentialId: '3XE1QNMVZRN', url: 'https://www.dicoding.com/certificates/53XE1QNMVZRN' },
    { name: 'Spec-Driven Development dengan Kiro', issuer: 'Dicoding', date: '2026', summary: 'Spec-driven backend API design and documentation using modern development toolkits.', credentialId: 'GRX5WOM4KZ0M', url: 'https://www.dicoding.com/certificates/GRX5WOM4KZ0M' },
    { name: 'Microsoft Office Specialist - Excel 2019', issuer: 'Microsoft', date: '2026', summary: 'Professional competency certification in advanced spreadsheet modeling and data analysis.', credentialId: 'wNMEx-2FNW', url: 'https://www.certiport.com/portal/pages/credentialverification.aspx' },
    { name: 'Junior Web Programmer (BNSP)', issuer: 'LSP Teknologi Digital', date: '2023-11', endDate: '2026-11', summary: 'Nationally certified competency in database administration with the Django framework.', credentialId: '11843220', url: 'https://drive.google.com/file/d/1YCEHNxRW3Ozu3bG5S3soIc36eec1U09N/view' },
    { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Cloud fundamentals: core AWS services, pricing, and the shared-responsibility model.', credentialId: '', url: 'https://drive.google.com/file/d/1kmqZlREcC-7_XKkVaYcYs3e3anfZKHgw/view?usp=sharing' },
    { name: 'AWS Technical Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Hands-on practice with EC2, VPC, and DynamoDB for compute, networking, and managed data storage.', credentialId: '', url: 'https://drive.google.com/file/d/1DPSi0J1MBvLrQ0gFh8OZwuhHBeR0Gs7H/view?usp=sharing' },
    { name: 'Architecting on AWS', issuer: 'AWS Training', date: '2023-06', summary: 'Cloud architecture patterns for designing and troubleshooting solutions across the AWS ecosystem.', credentialId: '', url: 'https://drive.google.com/file/d/1_AzOVgRNSHhYFN_Hrnxm8Be1X5wKlBHA/view?usp=sharing' },
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
