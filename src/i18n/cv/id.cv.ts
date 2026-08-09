// Indonesian CV content — translated clone of ./en.cv, same shape, same
// project slugs/order (enforced at build time by ../index.ts's drift check).
// Proper nouns (product names, company names, tech/keyword names, official
// certificate titles, URLs) are intentionally left untranslated.
import type { CV } from '../../data/cv';

export const cv: CV = {
  basics: {
    name: "Dendi' Setiawan",
    label: 'Fullstack Developer',
    email: 'setiawandendik0205@gmail.com',
    url: 'https://dendikcreation.dev',
    cvUrl: 'https://drive.google.com/file/d/1IC-G5b8WJTjGduhHqbUdW04bh5lSSKqL/view?usp=sharing',
    summary:
      "Fullstack developer dengan empat tahun pengalaman merilis produk web dan mobile enterprise secara end-to-end — dari skema database dan REST API sampai antarmuka yang benar-benar dipakai pengguna. Saya bekerja di Laravel, Go, dan Node di sisi backend, serta Vue, Next.js, Astro, dan Flutter di sisi front end, dan selalu memegang kepemilikan penuh atas satu fitur dari awal sampai akhir.",
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
      name: 'Freelance',
      position: 'Software Engineer Freelance',
      location: 'Remote',
      startDate: '2025-07',
      endDate: 'Present',
      summary: 'Mengembangkan dan merilis solusi software web dan mobile custom untuk berbagai klien secara end-to-end.',
      highlights: [
        'Merancang skema database, membangun RESTful API yang optimal, dan membangun antarmuka responsif yang langsung dipakai klien.',
        'Membangun dan men-deploy aplikasi fullstack lintas platform dengan Node.js, Go, dan stack web modern.'
      ],
      keywords: ['Laravel', 'Go', 'Node.js', 'React', 'Vue', 'Flutter', 'Docker', 'Next.js']
    },
    {
      name: 'PT. Innovasia Inovasi Indonesia',
      position: 'Fullstack Developer — Freelance, Remote',
      location: 'Jawa Barat, Indonesia',
      startDate: '2024-07',
      endDate: '2025-07',
      summary:
        'Software enterprise yang membantu bisnis memasarkan produk dan yayasan menyalurkan dana amal lewat WhatsApp for Business.',
      highlights: [
        'Merilis kustomisasi template serta integrasi dengan Meta WhatsApp API, Biteship, dan JNE untuk alur pemesanan dan pengiriman.',
        'Membangun pipeline broadcast yang menghubungkan konsumen dengan penjual — mengubah percakapan jadi konversi dalam skala besar.',
        'Memegang kepemilikan penuh atas fitur end-to-end: model data, REST API, integrasi pihak ketiga, dan UI untuk operator.',
      ],
      keywords: ['Laravel', 'PHP', 'Vue', 'Meta WhatsApp API', 'Biteship', 'JNE Shipping API'],
    },
    {
      name: 'PT. Pura Group Indonesia',
      position: 'Fullstack Developer & Database Administrator — Magang',
      location: 'Jawa Tengah, Indonesia',
      startDate: '2024-02',
      endDate: '2024-05',
      summary: 'Membangun dan memelihara software enterprise dengan framework modern berdampingan dengan sistem legacy.',
      highlights: [
        'Merilis aplikasi manajemen data karyawan di atas Oracle dengan PowerBuilder, mengelola database secara langsung.',
        'Mengembangkan sistem audit mutu internal (AMI) dengan Laravel dan React untuk menjalankan dan merekap audit per pengguna.',
      ],
      keywords: ['Laravel', 'React', 'Oracle', 'PowerBuilder', 'MySQL'],
    },
    {
      name: 'PT. Humanika Mitra Solusi',
      position: 'Fullstack Developer — Magang',
      location: 'Jawa Tengah, Indonesia',
      startDate: '2023-06',
      endDate: '2023-08',
      summary: 'Membangun dan memelihara software enterprise dengan teknologi web modern.',
      highlights: [
        'Menyelesaikan aplikasi voting Pilih Dhewe dengan integrasi RESTful API.',
        'Memegang seluruh stack: skema database, API backend, dan panel admin.',
      ],
      keywords: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    },
  ],
  volunteer: [
    {
      organization: 'Muria Computer Club',
      position: 'Edukator / Mentor',
      location: 'Kudus, Indonesia',
      startDate: '2025-05',
      endDate: 'Present',
      summary: 'Mengajar dan membimbing anggota organisasi seputar stack teknologi inti.',
      highlights: [
        'Mengadakan sesi pelatihan yang berfokus pada Laravel dan ekosistem modernnya.',
        'Membimbing anggota lewat praktik langsung alur kerja pengembangan dan best practice arsitektur.'
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
        'Proyek gamifikasi edukasi interaktif yang dirancang mengubah pembelajaran matematika matriks konvensional jadi pengalaman digital yang menarik. Dikembangkan bertiga, proyek ini punya dukungan bahasa lokal, kompatibilitas lintas platform untuk web (localhost) dan perangkat mobile, serta mekanika game intuitif yang dibuat menghilangkan kebosanan belajar konvensional.',
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
      name: 'Gamelaneka',
      description:
        'Platform pembelajaran multimedia interaktif yang dirancang melestarikan dan mengenalkan alat musik tradisional gamelan Jawa. Menghadirkan pemutaran audio instrumen asli berkualitas tinggi, modul sejarah edukatif, dan tampilan digital yang menarik dan mudah dipakai untuk menumbuhkan minat generasi muda pada warisan budaya.',
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
      name: 'Audit Mutu Internal System',
      description:
        'Sistem audit mutu internal (AMI) enterprise yang dirancang dengan infrastruktur frontend-backend terpisah. Dibuat untuk menjalankan audit granular per pengguna dan merekap ulasan historis secara sistematis. Mengintegrasikan backend Laravel yang tangguh dengan API teramankan lewat Sanctum, berdampingan dengan dashboard React berperforma tinggi yang dibangun dengan Tailwind CSS.',
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
        'Aplikasi pelacakan kesehatan masyarakat menyeluruh yang dirancang memantau, menyaring, dan mengevaluasi warga dengan riwayat stunting. Menghadirkan tes penilaian stunting yang disesuaikan berpasangan dengan modul pembelajaran digital, menyalurkan konten edukasi tepat sasaran langsung ke keluarga terdampak lewat Play Store.',
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
        'Sistem monitoring digital multi-platform yang dipesan Kementerian Agama (Kemenag) Kudus untuk memodernisasi pengawasan sekolah madrasah. Menggantikan pelaporan manual konvensional dengan pipeline evaluasi berbasis data yang terstruktur, memungkinkan pengawas melacak, mengaudit, dan meninjau performa sekolah secara sistematis dan real-time.',
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
        'Platform pembelajaran multimedia digital interaktif yang dirilis di Google Play Store untuk menyederhanakan pembelajaran kewirausahaan (PKWU) SMK. Dirancang membimbing siswa merancang, memvalidasi, memproduksi, dan memasarkan layanan nyata. Dibangun untuk mendorong kolaborasi lintas jurusan dan literasi digital lewat antarmuka game engine tingkat lanjut.',
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
      name: 'KeRaS.',
      description:
        'Aplikasi web open-source dan PWA yang stateless, dirancang membantu mahasiswa mengotomatisasi dan mengamankan pengisian KRS berkecepatan tinggi. Menghadirkan penyimpanan zero-database untuk privasi mutlak, mekanisme submit otomatis berfrekuensi tinggi, scraping portal kampus real-time, dan telemetri yang sepenuhnya teranonimkan.',
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
      name: 'Bi Booster',
      description:
        'SaaS pembuat website instan bertenaga AI untuk UMKM yang menghasilkan website statis berperforma tinggi secara real-time berdasarkan profil bisnis terstruktur. Menghadirkan pipeline generasi LLM multi-tahap, job queue berkelanjutan, alur billing otomatis lewat Midtrans, dan routing reverse-proxy dinamis.',
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
  awards: [
    {
      title: 'Juara 1 — Kompetisi AWS Club',
      date: '2023-11',
      awarder: 'Jawa Tengah',
      summary: 'Membangun website profil sekolah yang menampilkan kegiatan dan administrasi, menggunakan WordPress dan mengonversinya jadi situs statis lewat plugin WordPress.',
    },
    {
      title: 'Juara 3 — LKS Web Technologies',
      date: '2023-05',
      awarder: 'Kabupaten Batang',
      summary: 'Ajang competitive programming tingkat provinsi: tugas HTML5/CSS/JS/PHP native, game clone Plants vs. Zombies, dan REST API pencari kerja yang dibangun dengan Laravel dan Vue di sisi frontend.',
    },
  ],
  certificates: [
    { name: 'Belajar Dasar Cloud dan Gen AI di AWS', issuer: 'Dicoding', date: '2026', summary: 'Dasar-dasar cloud computing AWS dan model prompt engineering AI generatif.', credentialId: '3XE1QNMVZRN', url: 'https://www.dicoding.com/certificates/53XE1QNMVZRN' },
    { name: 'Spec-Driven Development dengan Kiro', issuer: 'Dicoding', date: '2026', summary: 'Desain dan dokumentasi API backend berbasis spec menggunakan toolkit pengembangan modern.', credentialId: 'GRX5WOM4KZ0M', url: 'https://www.dicoding.com/certificates/GRX5WOM4KZ0M' },
    { name: 'Microsoft Office Specialist - Excel 2019', issuer: 'Microsoft', date: '2026', summary: 'Sertifikasi kompetensi profesional dalam pemodelan spreadsheet tingkat lanjut dan analisis data.', credentialId: 'wNMEx-2FNW', url: 'https://www.certiport.com/portal/pages/credentialverification.aspx' },
    { name: 'Junior Web Programmer (BNSP)', issuer: 'LSP Teknologi Digital', date: '2023-11', endDate: '2026-11', summary: 'Kompetensi tersertifikasi nasional — administrasi database dengan framework Django.', credentialId: '11843220', url: 'https://drive.google.com/file/d/1YCEHNxRW3Ozu3bG5S3soIc36eec1U09N/view' },
    { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Dasar-dasar cloud: layanan inti AWS, skema harga, dan model shared-responsibility.', credentialId: '', url: 'https://drive.google.com/file/d/1kmqZlREcC-7_XKkVaYcYs3e3anfZKHgw/view?usp=sharing' },
    { name: 'AWS Technical Essentials', issuer: 'AWS Training', date: '2023-06', summary: 'Praktik langsung dengan EC2, VPC, dan DynamoDB — compute, networking, dan managed data store.', credentialId: '', url: 'https://drive.google.com/file/d/1DPSi0J1MBvLrQ0gFh8OZwuhHBeR0Gs7H/view?usp=sharing' },
    { name: 'Architecting on AWS', issuer: 'AWS Training', date: '2023-06', summary: 'Pola arsitektur cloud untuk merancang dan melakukan troubleshooting solusi di ekosistem AWS.', credentialId: '', url: 'https://drive.google.com/file/d/1_AzOVgRNSHhYFN_Hrnxm8Be1X5wKlBHA/view?usp=sharing' },
  ],
  languages: [
    { name: 'Bahasa Indonesia', level: 'Bahasa Ibu' },
    {
      name: 'Bahasa Inggris',
      level: 'Profesional — formal',
      note: 'Membaca, menulis, dan berkomunikasi dengan nyaman dalam konteks formal dan teknis; kefasihan percakapan sedang berkembang.',
    },
  ],
};
