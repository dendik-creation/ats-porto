"""Generates src/slides/portfolio.html. Run: python src/slides/build.py"""
import os
HERE = os.path.dirname(os.path.abspath(__file__))
css = open(os.path.join(HERE, 'viewport-base.css'), encoding='utf8').read()
P = '../../public'


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
    <p class="label reveal" style="--i:0">{role}, {date}</p>
    <h2 class="reveal" style="--i:1">{name}</h2>
    <p class="lede reveal" style="--i:2">{desc}</p>
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
  <p class="label reveal" style="--i:0">Portfolio 2026, Kudus, Central Java</p>
  <h1 class="reveal" style="--i:1">Dendi’<br>Setiawan</h1>
  <p class="role reveal" style="--i:3">Fullstack Developer</p>
  <div class="clawd-box"><img class="clawd" src="{P}/static/slides/slide-1/claude.svg" alt="Claude Code mascot waving hello"></div>
  <img class="kbd reveal" style="--i:2" src="{P}/static/arc/hero-section.webp" alt="Illustrated keyboard">
</section>''')

# 2 about
slides.append('''
<section class="slide light about">
  <p class="label reveal" style="--i:0">About</p>
  <div class="big reveal" style="--i:1">4<span>years</span></div>
  <div class="abody">
    <h2 class="reveal" style="--i:2">Database to deployment, one person can carry it.</h2>
    <p class="lede reveal" style="--i:3">Builds web and mobile products across database design, APIs, interfaces, and hosting. Past work covers business systems, public-service apps, and interactive learning products.</p>
  </div>
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
cells = ''.join(f'<div class="cell reveal" style="--i:{i+1}"><h3>{n}</h3><ul class="icons">{"".join(icon(k) for k in ks)}</ul></div>' for i, (n, ks) in enumerate(groups))
slides.append(f'''
<section class="slide light stack">
  <h2 class="reveal" style="--i:0">The stack</h2>
  <div class="grid3">{cells}</div>
</section>''')

# 4 divider
slides.append('''
<section class="slide dark divider">
  <p class="label reveal" style="--i:0">Selected work</p>
  <h2 class="reveal" style="--i:1">Projects</h2>
  <p class="lede reveal" style="--i:2">Four featured builds, then the rest of the shelf.</p>
</section>''')

slides.append(feature('Bi Booster', 'Core systems &amp; DevOps', '2026',
    'A SaaS website builder for Indonesian small businesses. It turns a structured business profile into a static site through a staged LLM workflow.',
    ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'DeepSeek API', 'Caddy', 'Docker', 'Cloudflare'],
    ('bi-booster', 6), 'bibooster.id'))
slides.append(feature('KeRaS.', 'Creator &amp; lead engineer', '2026',
    'An open-source PWA for students submitting course-registration requests. It scrapes the campus portal and needs no application database.',
    ['Next.js', 'TypeScript', 'Bun', 'PostHog', 'Docker', 'Cloudflare', 'Redis'],
    ('keras', 5), 'keras.dendikcreation.dev', dark=True))
slides.append(feature('SNUMAKU PKWU', 'Lead interactive developer', '2025',
    'A Google Play learning app for vocational entrepreneurship classes: planning, validation, production, and marketing.',
    ['Godot', 'Figma', 'UI/UX Design', 'Interactive multimedia'],
    ('snumaku-pkwu', 4), 'Google Play'))
slides.append(feature('Tree Smart Coach', 'Solo fullstack', '2024',
    'A monitoring system for Kemenag Kudus. Madrasah supervisors record reviews and follow up on school data from a Flutter app backed by a Laravel API.',
    ['Laravel', 'MySQL', 'PHP', 'Flutter', 'FCM', 'Pusher'],
    ('tree-smart-coach', 3), 'Google Play', dark=True, portrait=True))

# more projects
more = [('Family Care Stunting', '2024', 'Solo fullstack', 'Public-health app for recording stunting assessments, with learning modules for families. Flutter + Laravel.'),
        ('Gamelaneka', '2023', 'Design &amp; interactive build', 'Interactive Javanese gamelan learning app with instrument audio and short history. Construct 3.'),
        ('Audit Mutu Internal', '2024', 'Fullstack', 'Internal quality-audit system for per-user audits and summaries. Laravel, React, Oracle.'),
        ('Get The Matrix', '2022', 'Game programmer', 'Three-person math game that turns matrix lessons into short interactive exercises. Construct 3.')]
c = ''.join(f'<article class="mcard reveal" style="--i:{i+1}"><p class="label">{r}, {d}</p><h3>{n}</h3><p>{t}</p></article>' for i, (n, d, r, t) in enumerate(more))
slides.append(f'''
<section class="slide light more">
  <h2 class="reveal" style="--i:0">And the rest of the shelf</h2>
  <div class="grid2">{c}</div>
</section>''')

# experience
jobs = [('2026 to now', 'Chief Technology Officer', 'BI Booster', 'Architecture, SaaS platform, and DevOps for an automated website builder.'),
        ('2025 to now', 'Freelance software engineer', 'Remote', 'Client web and mobile apps, from database schema to deployment.'),
        ('2024 to 2025', 'Fullstack developer', 'PT. Innovasia Inovasi Indonesia', 'WhatsApp ordering and charity-fund tools with Meta WhatsApp API, Biteship, and JNE.'),
        ('2024', 'Fullstack developer &amp; DBA, intern', 'PT. Pura Group Indonesia', 'Employee-data app in PowerBuilder and Oracle; audit system in Laravel and React.'),
        ('2023', 'Fullstack developer, intern', 'PT. Humanika Mitra Solusi', 'Voting app with REST API, database schema, and admin panel.')]
rows = ''.join(f'<li class="row reveal" style="--i:{i+1}"><span class="yr">{y}</span><div><h3>{p}</h3><p class="org">{o}</p></div><p class="sum">{s}</p></li>' for i, (y, p, o, s) in enumerate(jobs))
slides.append(f'''
<section class="slide light exp">
  <h2 class="reveal" style="--i:0">Experience</h2>
  <ol class="rows">{rows}</ol>
</section>''')

# volunteer
slides.append('''
<section class="slide dark vol">
  <h2 class="reveal" style="--i:0">Teaching and competing</h2>
  <div class="two">
    <div class="reveal" style="--i:1"><p class="label">2025 to now</p><h3>Muria Computer Club</h3><p class="org">Educator and competition judge</p>
      <ul><li>Runs Laravel training sessions.</li><li>Guides hands-on workflows and software architecture.</li><li>Judges “Vibe Coding”, where first-year students build with Google AI Studio.</li></ul></div>
    <div class="reveal" style="--i:2"><p class="label">2023 to 2024</p><h3>Pemburu Lomba Skadaku</h3><p class="org">Competition participant</p>
      <ul><li>Entered technology competitions close to industry practice.</li><li>Shared what worked with peers.</li></ul></div>
  </div>
</section>''')

# awards
slides.append(f'''
<section class="slide light awards">
  <h2 class="reveal" style="--i:0">Awards and certifications</h2>
  <div class="aw">
    <figure class="reveal" style="--i:1"><img src="{P}/static/certifications/awards/1st_aws_project.webp" alt=""><figcaption><b>1st place</b> AWS Club Competition, Central Java, 2023. School-profile site built in WordPress, exported as a static site.</figcaption></figure>
    <figure class="reveal" style="--i:2"><img src="{P}/static/certifications/awards/3rd_province_web_tech.webp" alt=""><figcaption><b>3rd place</b> LKS Web Technologies, Batang City, 2023. HTML5, JavaScript, PHP, and a Laravel + Vue REST API.</figcaption></figure>
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
slides.append('''
<section class="slide dark contact">
  <p class="label reveal" style="--i:0">Open to freelance and full-time work</p>
  <h2 class="reveal" style="--i:1">Let’s build<br>something.</h2>
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
<div class="deck-controls"><span id="count"></span><span>← →</span></div>
<script>{js}</script>
</body></html>'''
open(os.path.join(HERE, 'portfolio.html'), 'w', encoding='utf8').write(html)
print(len(slides), 'slides')
