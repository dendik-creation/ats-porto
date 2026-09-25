"""Generates src/slides/portfolio.html. Run: python src/slides/build.py"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
css = open(os.path.join(HERE, 'viewport-base.css'), encoding='utf8').read()
P = '../../public'


def t(en, id_):
    """Both languages inline; CSS shows the one matching <html lang>."""
    if en == id_:
        return en
    return f'<span class="l" lang="en">{en}</span><span class="l" lang="id">{id_}</span>'


def phones(slug, n):
    return ''.join(f'<img class="phone reveal" style="--i:{i+2}" src="{P}/projects/{slug}/{i+1}.webp" alt="">' for i in range(n))


def feature(name, role, date, desc, kw, imgs, links, dark=False, portrait=False):
    tags = ''.join(pill(k) for k in kw)
    slug, n = imgs
    if portrait:
        shots = f'<div class="phones">{phones(slug, n)}</div>'
    else:
        shots = (f'<div class="shots"><img class="shot main reveal" style="--i:2" src="{P}/projects/{slug}/1.webp" alt="">'
                 f'<img class="shot sub a reveal" style="--i:3" src="{P}/projects/{slug}/2.webp" alt="">'
                 f'<img class="shot sub b reveal" style="--i:4" src="{P}/projects/{slug}/3.webp" alt=""></div>')
    return f'''
<section class="slide {'dark' if dark else 'light'} feature{' portrait' if portrait else ''}">
  <div class="fcopy">
    <p class="label reveal" style="--i:0">{t(*role)}, {date}</p>
    <h2 class="reveal" style="--i:1">{name}</h2>
    <p class="lede reveal" style="--i:2">{t(*desc)}</p>
    <ul class="tags reveal" style="--i:3">{tags}</ul>
    <p class="links reveal" style="--i:4"><a>{links}</a></p>
  </div>
  {shots}
</section>'''


slides = []

# 1 title
slides.append(f'''
<section class="slide light title">
  <svg class="hero-bg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><g fill="none" stroke-linecap="round"><path class="hp hp-a" pathLength="240" d="M880,60 C1020,150 1120,90 1260,220 S1480,400 1400,540 S1180,700 1340,830"/><path class="hp hp-b" pathLength="240" d="M740,600 C890,510 1040,650 1170,560 S1400,470 1560,610"/><path class="hp hp-c" pathLength="240" d="M1080,860 C1230,790 1330,870 1500,800"/><path class="hp hp-d" pathLength="240" d="M140,560 C320,495 480,640 660,570 S900,480 1080,590"/><path class="hp hp-e" pathLength="240" d="M120,800 C360,725 560,860 800,780 S1180,700 1420,800"/><path class="hp hp-thin hp-f" pathLength="240" d="M420,640 C560,700 700,660 820,730"/><path class="hp-swash" d="M1290,300 C1320,255 1395,258 1425,310 C1452,362 1408,430 1350,422 C1302,415 1278,352 1290,300 Z"/><path class="hp-swash hp-swash-b" d="M630,580 C650,553 692,557 703,586 C713,614 686,637 659,629 C637,622 618,602 630,580 Z"/></g><g><circle class="hn" cx="1260" cy="220" r="3.5" style="--d:0s"/><circle class="hn" cx="1400" cy="540" r="3.5" style="--d:1.2s"/><circle class="hn" cx="1170" cy="560" r="3.5" style="--d:2.4s"/><circle class="hn" cx="1500" cy="800" r="3.5" style="--d:3.6s"/><circle class="hn" cx="1350" cy="422" r="3.5" style="--d:4.8s"/><circle class="hn" cx="660" cy="570" r="3" style="--d:0.8s"/><circle class="hn" cx="480" cy="640" r="2.5" style="--d:2s"/><circle class="hn" cx="800" cy="780" r="3" style="--d:3.2s"/><circle class="hn" cx="1080" cy="590" r="2.5" style="--d:5.4s"/></g></svg>
  <p class="label reveal" style="--i:0">{t('Portfolio 2026, Kudus, Central Java', 'Portofolio 2026, Kudus, Jawa Tengah')}</p>
  <h1 class="reveal" style="--i:1">Dendi’<br>Setiawan</h1>
  <img class="logo reveal" style="--i:3" src="{P}/logo_in_dark.webp" alt="DC logo" width="321" height="358">
  <p class="role reveal" style="--i:3">202451181<br>Teknik Informatika</p>
  <div class="clawd-box"><img class="clawd" src="{P}/static/slides/slide-1/claude.svg" alt="Claude Code mascot waving hello"></div>
  <img class="kbd reveal" style="--i:2" src="{P}/static/arc/hero-section.webp" alt="Illustrated keyboard">
</section>''')

# 2 about
slides.append(f'''
<section class="slide light about">
  <p class="label reveal" style="--i:0">{t('About', 'Tentang')}</p>
  <div class="big reveal" style="--i:1">4<span>{t('years', 'tahun')}</span></div>
  <div class="abody">
    <h2 class="reveal" style="--i:2">{t('A Kudus student who learns by building.', 'Mahasiswa dari Kudus yang belajar sambil membangun.')}</h2>
    <p class="lede reveal" style="--i:3">{t('I study Teknik Informatika in Kudus. In vocational school I worked with networks, but my focus was always programming, and I have been building things for four years. These days I take freelance work and hang out with people as hungry for technology as I am.', 'Saya kuliah Teknik Informatika di Kudus. Di SMK saya belajar jaringan, tetapi fokus saya selalu pemrograman, dan sudah empat tahun saya membangun berbagai hal. Sekarang saya menerima proyek freelance dan bergabung dengan orang-orang yang sama haus akan teknologinya.')}</p>
    <dl class="facts reveal" style="--i:4">
      <div><dt>{t('Name', 'Nama')}</dt><dd>Dendi’ Setiawan</dd></div>
      <div><dt>{t('From', 'Asal')}</dt><dd>{t('Kudus, Central Java', 'Kudus, Jawa Tengah')}</dd></div>
      <div><dt>{t('Studying', 'Kuliah')}</dt><dd>Teknik Informatika</dd></div>
      <div><dt>{t('Student ID', 'NIM')}</dt><dd>202451181</dd></div>
    </dl>
  </div>
</section>''')

# education
edu = [(t('2024 to now', '2024 sampai sekarang'), 'Universitas Muria Kudus', 'Teknik Informatika',
        t('A student who joined an active campus organization that is hungry for technology.', 'Mahasiswa yang bergabung dengan organisasi kampus yang aktif dan haus akan teknologi.')),
       (t('2021 to 2024', '2021 sampai 2024'), 'SMK Negeri 2 Kudus', 'Teknik Komputer Jaringan',
        t('Configured MikroTik networks and entered several technology competitions. Programming got most of my focus.', 'Mengonfigurasi jaringan MikroTik dan mengikuti beberapa lomba teknologi. Fokus saya ada di pemrograman.'))]
rows = ''.join(f'<li class="row reveal" style="--i:{i+1}"><span class="yr">{y}</span><div><h3>{p}</h3><p class="org">{o}</p></div><p class="sum">{s}</p></li>' for i, (y, p, o, s) in enumerate(edu))
slides.append(f'''
<section class="slide light edu">
  <h2 class="reveal" style="--i:0">{t('Education', 'Pendidikan')}</h2>
  <ol class="rows">{rows}</ol>
</section>''')

# 3 stack: brand icons read from src/components/atoms (BrandIcon registry + icons/*.astro)
import re
ATOMS = os.path.join(HERE, '..', 'components', 'atoms')
_bi = open(os.path.join(ATOMS, 'BrandIcon.astro'), encoding='utf8').read()
_imports = dict(re.findall(r"import (\w+) from './icons/(\w+)\.astro'", _bi))
_registry = dict(re.findall(r"^\s*(\w+)\s*:\s*(\w+),", _bi.split('const REGISTRY')[1].split('};')[0], re.M))
_keep = set(re.findall(r"'(\w+)'", _bi.split('KEEP_COLOR_ICONS = new Set([')[1].split(']')[0]))


_uid = 0


def svg_for(name):
    """(inline svg, keep-native-colour) for a tech name, or None when BrandIcon has no icon for it."""
    key = re.sub(r'[^a-z0-9]', '', name.lower())
    comp = _registry.get(key)
    if not comp:
        return None
    svg = open(os.path.join(ATOMS, 'icons', _imports[comp] + '.astro'), encoding='utf8').read().split('---')[-1].strip()
    svg = svg.replace('{...Astro.props}', f'role="img" aria-label="{name}"')
    # inlined svgs share one document, so gradient/clip ids (id="a") must be unique per instance
    global _uid
    _uid += 1
    for i in set(re.findall(r'id="([^"]+)"', svg)):
        svg = re.sub(rf'(id="){re.escape(i)}"', rf'\g<1>u{_uid}-{i}"', svg)
        svg = svg.replace(f'url(#{i})', f'url(#u{_uid}-{i})').replace(f'href="#{i}"', f'href="#u{_uid}-{i}"')
    return svg, key in _keep


def icon(name):
    """Stack-slide icon, or the plain label when there is none."""
    found = svg_for(name)
    if not found:
        return f'<li class="txt">{name}</li>'
    svg, keep = found
    return f'<li class="ic{" keep" if keep else ""}" title="{name}">{svg}</li>'


def pill(name):
    """Tag pill with a leading brand icon when one exists."""
    found = svg_for(name)
    if not found:
        return f'<li>{name}</li>'
    svg, keep = found
    return f'<li><span class="pi{" keep" if keep else ""}">{svg}</span>{name}</li>'


groups = [('Frontend', ['TypeScript', 'Next.js', 'Astro', 'Vue', 'React', 'Flutter', 'shadcn/ui']),
          ('Backend', ['PHP', 'Laravel', 'Django', 'Node.js', 'Go', 'Bun', 'Prisma', 'Drizzle']),
          ('Database', ['MySQL', 'PostgreSQL', 'SQLite', 'Oracle']),
          ('Cloud', ['AWS', 'Firebase', 'Pusher', 'Digital Ocean', 'Nginx', 'Caddy']),
          ('Game engine', ['Godot', 'Construct 3']),
          ('Tools', ['Git', 'GitHub', 'Figma', 'WordPress', 'Docker', 'Obsidian', 'Notion'])]
GROUP_ID = {'Game engine': 'Mesin game', 'Tools': 'Alat'}
cells = ''.join(f'<div class="cell reveal" style="--i:{i+1}"><h3>{t(n, GROUP_ID.get(n, n))}</h3><ul class="icons">{"".join(icon(k) for k in ks)}</ul></div>' for i, (n, ks) in enumerate(groups))
slides.append(f'''
<section class="slide light stack">
  <h2 class="reveal" style="--i:0">{t('The stack', 'Teknologi')}</h2>
  <div class="grid3">{cells}</div>
</section>''')

# 4 divider
slides.append(f'''
<section class="slide dark divider">
  <p class="label reveal" style="--i:0">{t('Selected work', 'Karya pilihan')}</p>
  <h2 class="reveal" style="--i:1">{t('Projects', 'Proyek')}</h2>
  <p class="lede reveal" style="--i:2">{t('Two builds worth a closer look.', 'Dua proyek yang layak dilihat lebih dekat.')}</p>
</section>''')

slides.append(feature('Bi Booster', ('Core systems &amp; DevOps', 'Sistem inti &amp; DevOps'), '2026',
    ('A SaaS website builder for Indonesian small businesses. It turns a structured business profile into a static site through a staged LLM workflow.', 'Website builder berbasis SaaS untuk UMKM Indonesia. Profil bisnis terstruktur diubah menjadi situs statis lewat alur kerja LLM bertahap.'),
    ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'DeepSeek API', 'Caddy', 'Docker', 'Cloudflare'],
    ('bi-booster', 6), 'bibooster.id'))
slides.append(feature('KeRaS.', ('Creator &amp; lead engineer', 'Kreator &amp; lead engineer'), '2026',
    ('An open-source PWA for students submitting course-registration requests. It scrapes the campus portal and needs no application database.', 'PWA open source untuk mahasiswa yang mengajukan permintaan KRS. Aplikasi mengambil data dari portal kampus lewat scraping dan tidak memerlukan database sendiri.'),
    ['Next.js', 'TypeScript', 'Bun', 'PostHog', 'Docker', 'Cloudflare', 'Redis'],
    ('keras', 5), 'keras.dendikcreation.dev', dark=True))

# experience
jobs = [(t('2026 to now', '2026 sampai sekarang'), 'Chief Technology Officer', 'BI Booster',
         t('Architecture, SaaS platform, and DevOps for an automated website builder.', 'Arsitektur, platform SaaS, dan DevOps untuk website builder otomatis.')),
        (t('2025 to now', '2025 sampai sekarang'), t('Freelance software engineer', 'Software engineer freelance'), 'Remote',
         t('Client web and mobile apps, from database schema to deployment.', 'Aplikasi web dan mobile untuk klien, dari skema database sampai deployment.')),
        (t('2024 to 2025', '2024 sampai 2025'), 'Fullstack developer', 'PT. Innovasia Inovasi Indonesia',
         t('WhatsApp ordering and charity-fund tools with Meta WhatsApp API, Biteship, and JNE.', 'Alat pemesanan dan penyaluran dana amal lewat WhatsApp, memakai Meta WhatsApp API, Biteship, dan JNE.')),
        ('2024', t('Fullstack developer &amp; DBA, intern', 'Fullstack developer &amp; DBA, magang'), 'PT. Pura Group Indonesia',
         t('Employee-data app in PowerBuilder and Oracle; audit system in Laravel and React.', 'Aplikasi data karyawan dengan PowerBuilder dan Oracle, serta sistem audit dengan Laravel dan React.')),
        ('2023', t('Fullstack developer, intern', 'Fullstack developer, magang'), 'PT. Humanika Mitra Solusi',
         t('Voting app with REST API, database schema, and admin panel.', 'Aplikasi voting dengan REST API, skema database, dan panel admin.'))]
rows = ''.join(f'<li class="row reveal" style="--i:{i+1}"><span class="yr">{y}</span><div><h3>{p}</h3><p class="org">{o}</p></div><p class="sum">{s}</p></li>' for i, (y, p, o, s) in enumerate(jobs))
slides.append(f'''
<section class="slide light exp">
  <h2 class="reveal" style="--i:0">{t('Experience', 'Pengalaman')}</h2>
  <ol class="rows">{rows}</ol>
</section>''')

# volunteer
slides.append(f'''
<section class="slide dark vol">
  <h2 class="reveal" style="--i:0">{t('Teaching and competing', 'Mengajar dan berlomba')}</h2>
  <div class="two">
    <div class="reveal" style="--i:1"><p class="label">{t('2025 to now', '2025 sampai sekarang')}</p><h3>Muria Computer Club</h3><p class="org">{t('Educator and competition judge', 'Edukator dan juri lomba')}</p>
      <ul><li>{t('Runs Laravel training sessions.', 'Mengadakan sesi pelatihan Laravel.')}</li><li>{t('Guides hands-on workflows and software architecture.', 'Membimbing praktik alur kerja dan arsitektur perangkat lunak.')}</li><li>{t('Judges “Vibe Coding”, where first-year students build with Google AI Studio.', 'Menjadi juri “Vibe Coding”, tempat mahasiswa tahun pertama membangun proyek dengan Google AI Studio.')}</li></ul></div>
    <div class="reveal" style="--i:2"><p class="label">{t('2023 to 2024', '2023 sampai 2024')}</p><h3>Pemburu Lomba Skadaku</h3><p class="org">{t('Competition participant', 'Peserta lomba')}</p>
      <ul><li>{t('Entered technology competitions close to industry practice.', 'Mengikuti lomba teknologi yang dekat dengan praktik industri.')}</li><li>{t('Shared what worked with peers.', 'Membagikan pengalaman lomba kepada rekan.')}</li></ul></div>
  </div>
</section>''')

# awards
slides.append(f'''
<section class="slide light awards">
  <h2 class="reveal" style="--i:0">{t('Awards and certifications', 'Penghargaan dan sertifikasi')}</h2>
  <div class="aw">
    <figure class="reveal" style="--i:1"><img src="{P}/static/certifications/awards/1st_aws_project.webp" alt=""><figcaption>{t('<b>1st place</b> AWS Club Competition, Central Java, 2023. School-profile site built in WordPress, exported as a static site.', '<b>Juara 1</b> AWS Club Competition, Jawa Tengah, 2023. Situs profil sekolah dibuat dengan WordPress dan diekspor menjadi situs statis.')}</figcaption></figure>
    <figure class="reveal" style="--i:2"><img src="{P}/static/certifications/awards/3rd_province_web_tech.webp" alt=""><figcaption>{t('<b>3rd place</b> LKS Web Technologies, Batang City, 2023. HTML5, JavaScript, PHP, and a Laravel + Vue REST API.', '<b>Juara 3</b> LKS Web Technologies, Kota Batang, 2023. HTML5, JavaScript, PHP, dan REST API Laravel + Vue.')}</figcaption></figure>
    <ul class="certs reveal" style="--i:3">
      <li>Belajar Dasar Cloud dan Gen AI di AWS <em>Dicoding, 2026</em></li>
      <li>Spec-Driven Development dengan Kiro <em>Dicoding, 2026</em></li>
      <li>Microsoft Office Specialist, Excel 2019 <em>Microsoft, 2026</em></li>
      <li>Junior Web Programmer <em>BNSP, 2023</em></li>
      <li>AWS Cloud Practitioner, Technical Essentials, Architecting <em>AWS Training, 2023</em></li>
    </ul>
  </div>
</section>''')

# contact
slides.append(f'''
<section class="slide dark contact">
  <p class="label reveal" style="--i:0">{t('Open to freelance and full-time work', 'Terbuka untuk kerja freelance dan penuh waktu')}</p>
  <h2 class="reveal" style="--i:1">{t('Let’s build<br>something.', 'Ayo bangun<br>sesuatu.')}</h2>
  <img class="logo reveal" style="--i:3" src="{P}/logo_in_dark.webp" alt="DC logo" width="321" height="358">
  <ul class="reveal" style="--i:2">
    <li><b>Email</b> setiawandendik0205@gmail.com</li>
    <li><b>Web</b> dendikcreation.dev</li>
    <li><b>GitHub</b> dendik-creation</li>
    <li><b>LinkedIn</b> dendi-setiawan</li>
  </ul>
</section>''')

style = css + open(os.path.join(HERE, 'deck.css'), encoding='utf8').read()
js = open(os.path.join(HERE, 'deck.js'), encoding='utf8').read()

html = f'''<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Dendi' Setiawan Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,400..700,0..100,0..1;1,9..144,400..700,0..100,0..1&family=Bricolage+Grotesque:opsz,wght@12..96,400..700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>{style}</style></head>
<body>
<div class="pbar" id="bar" aria-hidden="true"><div class="pbar-track"></div><div class="pbar-fill"></div><i class="pbar-tip"></i></div>
<div class="deck-viewport"><main class="deck-stage" id="deckStage">{''.join(slides)}
<div class="pt-veil" id="ptVeil" aria-hidden="true"><div class="pt-layer"></div>{'<span class="pt-pixel"></span>' * 8}</div>
</main></div>
<a class="exit-web" href="/" target="_top" aria-label="Back to website / Kembali ke website"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></a>
<div class="deck-chrome">
<div class="lang-pill" role="group" aria-label="Language"><button type="button" data-lang="en">EN</button><button type="button" data-lang="id">ID</button></div>
<div class="deck-controls"><span id="count"></span><span>← →</span></div>
</div>
<script>{js}</script>
</body></html>'''
open(os.path.join(HERE, 'portfolio.html'), 'w', encoding='utf8').write(html)
print(len(slides), 'slides')
