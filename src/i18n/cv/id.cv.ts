// Indonesian CV content, aligned with the English source.
// project slugs/order (enforced at build time by ../index.ts's drift check).
// Proper nouns (product names, company names, tech/keyword names, official
// certificate titles, URLs) are intentionally left untranslated.
import type { CV } from '../../data/cv';

export const cv: CV = {
  basics: {
    name: "Dendi' Setiawan",
    siteName: "Dendi' Creation",
    label: 'Fullstack Dev',
    email: 'setiawandendik0205@gmail.com',
    url: 'https://dendikcreation.dev',
    cvUrl: 'https://drive.google.com/file/d/1IC-G5b8WJTjGduhHqbUdW04bh5lSSKqL/view?usp=sharing',
    summary:
      'Saya membangun produk fullstack secara end-to-end, dari desain database hingga antarmuka pengguna. Empat tahun pengalaman di pengembangan web dan mobile, menggunakan Laravel, Go, Node.js, Vue, Next.js, Astro, dan Flutter untuk menghadirkan software yang aman dan cepat.',
    seoDescription:
      "Dendi' Setiawan adalah fullstack developer dari Indonesia yang membangun produk web dan mobile dengan Laravel, Go, Node.js, Vue, Next.js, Astro, dan Flutter.",
    location: { city: 'Kudus', countryCode: 'ID', region: 'Jawa Tengah' },
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
    location: 'Jawa Tengah, Indonesia',
    startDate: '2026-03',
    endDate: 'Present',
    summary: 'Memimpin arsitektur sistem inti, pengembangan platform SaaS, dan infrastruktur DevOps untuk membangun website UMKM secara otomatis melalui alur kerja LLM bertahap.',
    highlights: [
    'Merancang arsitektur core system menggunakan Next.js, TypeScript, Prisma, PostgreSQL, Redis, dan BullMQ untuk mendukung proses pembuatan website yang terstruktur dan asynchronous.',
    'Mengembangkan workflow berbasis LLM menggunakan DeepSeek API untuk mengubah profil bisnis terstruktur menjadi website statis yang siap dipublikasikan.',
    'Merancang dan mengelola infrastruktur deployment berbasis Docker dan Caddy, termasuk konfigurasi domain, reverse proxy, serta integrasi Cloudflare.',
    'Mengimplementasikan background job processing menggunakan Redis dan BullMQ untuk menjalankan proses pembuatan website secara reliable dan scalable.'
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
    },
    {
      name: 'Freelance',
      position: 'Software Engineer Freelance',
      location: 'Remote',
      startDate: '2025-07',
      endDate: 'Present',
      summary: 'Membangun dan merilis aplikasi web serta mobile untuk klien, mencakup layanan backend, antarmuka, dan deployment.',
      highlights: [
        'Merancang skema database, membangun REST API, dan membuat antarmuka responsif untuk aplikasi klien.',
        'Men-deploy aplikasi fullstack dengan Node.js, Go, dan teknologi web yang sesuai kebutuhan proyek.'
      ],
      keywords: ['Laravel', 'Go', 'Node.js', 'React', 'Vue', 'Flutter', 'Docker', 'Next.js']
    },
    {
      name: 'PT. Innovasia Inovasi Indonesia',
      position: 'Fullstack Developer, Freelance Remote',
      location: 'Jawa Barat, Indonesia',
      startDate: '2024-07',
      endDate: '2025-07',
      summary:
        'Software bisnis untuk pemasaran produk dan penyaluran dana amal melalui WhatsApp for Business.',
      highlights: [
        'Merilis kustomisasi template serta integrasi Meta WhatsApp API, Biteship, dan JNE untuk pemesanan dan pengiriman.',
        'Membangun alur broadcast yang menghubungkan pelanggan dan penjual melalui WhatsApp.',
        'Menangani model data, REST API, integrasi pihak ketiga, dan antarmuka operator.',
      ],
      keywords: ['Laravel', 'PHP', 'Vue', 'Meta WhatsApp API', 'Biteship', 'JNE Shipping API'],
    },
    {
      name: 'PT. Pura Group Indonesia',
      position: 'Fullstack Developer & Database Administrator, Magang',
      location: 'Jawa Tengah, Indonesia',
      startDate: '2024-02',
      endDate: '2024-05',
      summary: 'Membangun dan memelihara aplikasi bisnis yang berjalan berdampingan dengan sistem yang sudah ada.',
      highlights: [
        'Membangun aplikasi manajemen data karyawan dengan PowerBuilder dan Oracle, termasuk administrasi database langsung.',
        'Mengembangkan sistem audit mutu internal dengan Laravel dan React untuk menjalankan serta merangkum audit per pengguna.',
      ],
      keywords: ['Laravel', 'React', 'Oracle', 'PowerBuilder', 'MySQL'],
    },
    {
      name: 'PT. Humanika Mitra Solusi',
      position: 'Fullstack Developer, Magang',
      location: 'Jawa Tengah, Indonesia',
      startDate: '2023-06',
      endDate: '2023-08',
      summary: 'Membangun dan memelihara aplikasi web untuk kebutuhan bisnis.',
      highlights: [
        'Membangun aplikasi voting Pilih Dhewe dengan integrasi REST API.',
        'Mengerjakan skema database, API backend, dan panel admin.',
      ],
      keywords: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    },
  ],
  volunteer: [
    {
      organization: 'Pemburu Lomba Skadaku',
      position: 'Pemburu',
      location: 'Kudus, Indonesia',
      startDate: '2023-02',
      endDate: '2024-07',
      summary: 'Mengikuti berbagai kegiatan lomba dalam bidang teknologi.',
      highlights: [
        'Mengikuti berbagai lomba teknologi yang relevan dengan industri.',
        'Berbagi pengalaman dan pengetahuan dengan orang lain dalam mengikuti lomba teknologi.'
      ]
    },
    {
      organization: 'Muria Computer Club',
      position: 'Edukator / Mentor',
      location: 'Kudus, Indonesia',
      startDate: '2025-05',
      endDate: 'Present',
      summary: 'Mengajar dan membimbing anggota pada dasar-dasar pengembangan web yang praktis.',
      highlights: [
        'Mengadakan sesi pelatihan tentang Laravel dan ekosistemnya.',
        'Membimbing anggota lewat praktik alur kerja pengembangan dan arsitektur perangkat lunak.'
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
      isPin: false,
      name: 'Get The Matrix',
      description:
        'Proyek pembelajaran interaktif oleh tiga orang yang mengubah materi matriks menjadi latihan singkat untuk web dan mobile.',
      seoDescription:
        'Get The Matrix adalah game pembelajaran matriks untuk web dan mobile yang dibuat dengan Construct 3 oleh tim tiga orang.',
      date: '2022-11',
      role: 'Programmer Game',
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
        'Aplikasi pembelajaran interaktif yang mengenalkan gamelan Jawa melalui audio instrumen dan materi sejarah singkat.',
      seoDescription:
        'Gamelaneka adalah aplikasi pembelajaran interaktif tentang gamelan Jawa dengan audio instrumen dan materi sejarah.',
      date: '2023-11',
      role: 'Desain & Build Interaktif',
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
      isPin: false,
      name: 'Audit Mutu Internal System',
      description:
        'Sistem audit mutu internal untuk menjalankan audit per pengguna dan meninjau hasilnya, dibangun dengan Laravel, React, Oracle, dan REST API.',
      seoDescription:
        'Audit Mutu Internal System adalah aplikasi Laravel dan React untuk pelaksanaan audit mutu internal per pengguna.',
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
        'Aplikasi kesehatan masyarakat untuk mencatat dan menilai data terkait stunting, disertai modul pembelajaran digital bagi keluarga.',
      seoDescription:
        'Family Care Stunting adalah aplikasi Flutter dan Laravel untuk pencatatan asesmen dan distribusi modul pembelajaran.',
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
      isPin: true,
      name: 'Tree Smart Coach',
      description:
        'Sistem monitoring untuk Kemenag Kudus yang membantu pengawas madrasah mencatat tinjauan dan menindaklanjuti data sekolah.',
      seoDescription:
        'Tree Smart Coach adalah sistem monitoring Laravel dan Flutter untuk pengawasan madrasah di Kemenag Kudus.',
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
      isPin: true,
      name: 'SNUMAKU PKWU',
      description:
        'Aplikasi pembelajaran di Google Play untuk kelas kewirausahaan SMK, mencakup perencanaan, validasi, produksi, dan pemasaran.',
      seoDescription:
        'SNUMAKU PKWU adalah aplikasi Google Play untuk pembelajaran kewirausahaan SMK yang dibangun dengan Godot.',
      date: '2025-12',
      role: 'Lead Developer Interaktif',
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
      isPin: true,
      name: 'KeRaS.',
      description:
        'PWA open-source yang membantu mahasiswa mengirim permintaan KRS. Aplikasi ini tidak memakai database aplikasi dan mendukung scraping portal.',
      seoDescription:
        'KeRaS adalah PWA open-source untuk pengisian KRS dengan scraping portal tanpa database aplikasi.',
      date: '2026-01',
      role: 'Kreator & Lead Engineer',
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
      isPin: true,
      name: 'Bi Booster',
      description:
        'SaaS pembuat website untuk UMKM Indonesia. Platform ini membuat situs statis dari profil bisnis melalui alur kerja LLM bertahap.',
      seoDescription:
        'Bi Booster adalah SaaS pembuat website untuk UMKM Indonesia dengan profil bisnis terstruktur dan alur kerja LLM.',
      date: '2026-03',
      role: 'Arsitek Core System & DevOps',
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
  certificates: [
    { type: 'award', name: 'Juara 1, Kompetisi AWS Club', issuer: 'Jawa Tengah', date: '2023-11', summary: 'Membangun website profil sekolah yang menampilkan kegiatan dan administrasi, menggunakan WordPress dan mengonversinya jadi situs statis lewat plugin WordPress.', image: '/static/sections/certification/awards/1st_aws_project.png' },
    { type: 'award', name: 'Juara 3, LKS Web Technologies', issuer: 'Kabupaten Batang', date: '2023-05', summary: 'Ajang competitive programming tingkat provinsi: tugas HTML5/CSS/JS/PHP native, game clone Plants vs. Zombies, dan REST API pencari kerja yang dibangun dengan Laravel dan Vue di sisi frontend.', image: '/static/sections/certification/awards/3rd_province_web_tech.png' },
    { type: 'certification', name: 'Belajar Dasar Cloud dan Gen AI di AWS', issuer: 'Dicoding', date: '2026', summary: 'Dasar-dasar cloud computing AWS dan model prompt engineering AI generatif.', credentialId: '3XE1QNMVZRN', url: 'https://www.dicoding.com/certificates/53XE1QNMVZRN', image: '/static/sections/certification/certificate/dicoding_cloud_gen_ai.png' },
    { type: 'certification', name: 'Spec-Driven Development dengan Kiro', issuer: 'Dicoding', date: '2026', summary: 'Desain dan dokumentasi API backend berbasis spec menggunakan toolkit pengembangan modern.', credentialId: 'GRX5WOM4KZ0M', url: 'https://www.dicoding.com/certificates/GRX5WOM4KZ0M', image: '/static/sections/certification/certificate/dicoding_kiro_sdd.png' },
    { type: 'certification', name: 'Microsoft Office Specialist - Excel 2019', issuer: 'Microsoft', date: '2026', summary: 'Sertifikasi kompetensi profesional dalam pemodelan spreadsheet tingkat lanjut dan analisis data.', credentialId: 'wNMEx-2FNW', url: 'https://www.certiport.com/portal/pages/credentialverification.aspx', image: '/static/sections/certification/certificate/microsoft_office_specialsit.png' },
    { type: 'certification', name: 'Junior Web Programmer (BNSP)', issuer: 'LSP Teknologi Digital', date: '2023-11', endDate: '2026-11', summary: 'Kompetensi tersertifikasi nasional dalam administrasi database dengan framework Django.', credentialId: '11843220', url: 'https://drive.google.com/file/d/1YCEHNxRW3Ozu3bG5S3soIc36eec1U09N/view', image: '/static/sections/certification/certificate/lsp_juniorweb.png' },
    { type: 'certification', name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Dasar-dasar cloud: layanan inti AWS, skema harga, dan model shared-responsibility.', credentialId: '', url: 'https://drive.google.com/file/d/1kmqZlREcC-7_XKkVaYcYs3e3anfZKHgw/view?usp=sharing', image: '/static/sections/certification/certificate/aws_cloud_practitioner_essentials.png' },
    { type: 'certification', name: 'AWS Technical Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Praktik langsung dengan EC2, VPC, dan DynamoDB untuk compute, networking, dan managed data store.', credentialId: '', url: 'https://drive.google.com/file/d/1DPSi0J1MBvLrQ0gFh8OZwuhHBeR0Gs7H/view?usp=sharing', image: '/static/sections/certification/certificate/aws_technical_essentials.png' },
    { type: 'certification', name: 'Architecting on AWS', issuer: 'AWS Training', date: '2023-06', summary: 'Pola arsitektur cloud untuk merancang dan melakukan troubleshooting solusi di ekosistem AWS.', credentialId: '', url: 'https://drive.google.com/file/d/1_AzOVgRNSHhYFN_Hrnxm8Be1X5wKlBHA/view?usp=sharing', image: '/static/sections/certification/certificate/aws_architecting.png' },
    { type: 'certification', name: 'Sertifikat Kemalasan', issuer: 'Ingin Menjadi Programmer Handal Namun Enggan Ngoding', date: '2025-07', summary: 'Sebagai penghargaan atas komitmen luar biasa dalam mempertahankan aktivitas Facebook selama periode kerja yang kritis. Konsistensi, fokus, dan dedikasi Anda untuk melakukan apa pun selain tugas yang diberikan sungguh patut diapresiasi.', image: '/static/sections/certification/certificate/imphnen_lazy.png' },
  ],
  languages: [
    { name: 'Bahasa Indonesia', level: 'Professional Maksimal' },
    {
      name: 'Bahasa Inggris',
      level: 'Profesional, formal',
      note: 'Membaca, menulis, dan berkomunikasi dengan nyaman dalam konteks formal dan teknis; kefasihan percakapan sedang berkembang.',
    },
  ],
};
