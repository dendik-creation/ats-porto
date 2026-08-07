// English canonical CV content — the source translations are cloned from.
// Types live in ../../data/cv.
import type { CV } from '../../data/cv';

export const cv: CV = {
  basics: {
    name: "Dendi' Setiawan",
    label: 'Fullstack Developer',
    email: 'setiawandendik0205@gmail.com',
    url: 'https://dendikcreation.dev',
    cvUrl: 'https://drive.google.com/file/d/1IC-G5b8WJTjGduhHqbUdW04bh5lSSKqL/view?usp=sharing',
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
        'Building and deploying cross-platform fullstack applications with Node.js, Go, and modern web stacks.'
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
        'Shipped template customization and integrations with Meta WhatsApp API, Biteship, and JNE for order and shipping flows.',
        'Built the broadcasting pipeline that connects consumers to sellers — turning conversation into conversion at scale.',
        'Owned features end to end: data model, REST API, third-party integration, and the operator-facing UI.',
      ],
      keywords: ['Laravel', 'PHP', 'Vue', 'Meta WhatsApp API', 'Biteship', 'JNE Shipping API'],
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
      slug: 'get-the-matrix',
      name: 'Get The Matrix',
      description:
        'An interactive educational gamification project designed to transform traditional matrix mathematics learning into an engaging digital experience. Developed in a three-member team, it features localized language support, cross-platform compatibility for both web (localhost) and mobile devices, and intuitive game mechanics built to eliminate conventional learning boredom.',
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
        'An interactive multimedia learning platform designed to preserve and introduce Javanese gamelan traditional musical instruments. Features high-fidelity original instrument audio playback, educational historical modules, and an engaging, user-friendly digital layout tailored to enhance cultural heritage interest among the younger generation.',
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
        'An enterprise internal quality audit system (AMI) architected with a decoupled frontend-backend infrastructure. Designed to run granular audits per user and systematically recap complete historical reviews. Integrates a robust Laravel backend securing APIs via Sanctum alongside a high-performance React dashboard built with Tailwind CSS.',
      date: '2024-05',
      role: 'Fullstack — Laravel + React',
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
        'A comprehensive public health tracking application designed to monitor, screen, and evaluate citizens with stunting histories. Features customized stunting assessment tests paired with tailored digital learning modules to deliver targeted educational content directly to affected families via the Play Store.',
      date: '2024-09',
      role: 'Solo Fullstack — mobile + backend',
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
        'A multi-platform digital monitoring system commissioned by the Ministry of Religious Affairs (Kemenag) Kudus to modernize madrasah school supervision. Replaces conventional manual reporting with a structured, data-driven evaluation pipeline, enabling supervisors to efficiently track, audit, and systematically review school performance in real-time.',
      date: '2024-10',
      role: 'Solo Fullstack — Laravel API + Flutter app',
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
        'An interactive digital multimedia learning platform published on the Google Play Store to streamline vocational high school entrepreneurship (PKWU) education. Designed to guide students through designing, validating, producing, and marketing real-world services. Built to foster cross-major collaboration and digital literacy using an advanced game engine interface.',
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
        'An open-source, stateless web application and PWA designed to help university students automate and secure high-speed course registration (KRS). Features zero-database storage for absolute privacy, automated high-frequency submission mechanisms, real-time university portal scraping, and fully anonymized telemetry.',
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
        'An AI-powered SaaS instant website builder for MSMEs (UMKM) that generates high-performance static websites in real-time based on structured business profiles. Features a multi-stage LLM generation pipeline, continuous job queues, automated Midtrans billing workflows, and dynamic reverse-proxy routing.',
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
      title: '1st Place — AWS Club Competition',
      date: '2023-11',
      awarder: 'Central Java',
      summary: 'Built a school-profile website surfacing activities and administration, using WordPress and converting it to a static site via a WordPress plugin.',
    },
    {
      title: '3rd Place — LKS Web Technologies',
      date: '2023-05',
      awarder: 'Batang City',
      summary: 'Provincial competitive-programming event: native HTML5/CSS/JS/PHP tasks, a Plants vs. Zombies clone game, and a job-seeker REST API built with Laravel and Vue for the frontend.',
    },
  ],
  certificates: [
    { name: 'Belajar Dasar Cloud dan Gen AI di AWS', issuer: 'Dicoding', date: '2026', summary: 'Fundamentals of AWS Cloud computing and generative AI prompt engineering models.', credentialId: '3XE1QNMVZRN', url: 'https://www.dicoding.com/certificates/53XE1QNMVZRN' },
    { name: 'Spec-Driven Development dengan Kiro', issuer: 'Dicoding', date: '2026', summary: 'Spec-driven backend API design and documentation using modern development toolkits.', credentialId: 'GRX5WOM4KZ0M', url: 'https://www.dicoding.com/certificates/GRX5WOM4KZ0M' },
    { name: 'Microsoft Office Specialist - Excel 2019', issuer: 'Microsoft', date: '2026', summary: 'Professional competency certification in advanced spreadsheet modeling and data analysis.', credentialId: 'wNMEx-2FNW', url: 'https://www.certiport.com/portal/pages/credentialverification.aspx' },
    { name: 'Junior Web Programmer (BNSP)', issuer: 'LSP Teknologi Digital', date: '2023-11', endDate: '2026-11', summary: 'Nationally certified competency — database administration with the Django framework.', credentialId: '11843220', url: 'https://drive.google.com/file/d/1YCEHNxRW3Ozu3bG5S3soIc36eec1U09N/view' },
    { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Cloud fundamentals: core AWS services, pricing, and the shared-responsibility model.', credentialId: '', url: 'https://drive.google.com/file/d/1kmqZlREcC-7_XKkVaYcYs3e3anfZKHgw/view?usp=sharing' },
    { name: 'AWS Technical Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Hands-on with EC2, VPC, and DynamoDB — compute, networking, and managed data stores.', credentialId: '', url: 'https://drive.google.com/file/d/1DPSi0J1MBvLrQ0gFh8OZwuhHBeR0Gs7H/view?usp=sharing' },
    { name: 'Architecting on AWS', issuer: 'AWS Training', date: '2023-06', summary: 'Cloud architecture patterns for designing and troubleshooting solutions across the AWS ecosystem.', credentialId: '', url: 'https://drive.google.com/file/d/1_AzOVgRNSHhYFN_Hrnxm8Be1X5wKlBHA/view?usp=sharing' },
  ],
  languages: [
    { name: 'Indonesian', level: 'Native' },
    {
      name: 'English',
      level: 'Professional — formal',
      note: 'Reads, writes, and communicates comfortably in formal and technical contexts; conversational fluency developing.',
    },
  ],
};
