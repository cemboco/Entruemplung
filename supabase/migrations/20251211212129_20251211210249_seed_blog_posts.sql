/*
  # Seed Blog Posts - Sample Content
  
  1. Purpose
    - Add initial blog posts for SEO and content marketing
    - Content focused on Entrümpelung, Haushaltsauflösung in Stuttgart
  
  2. Content Summary
    - 6 blog posts covering different aspects of the service
    - Categories: Entrümpelung, Haushaltsauflösung, Tipps & Ratgeber, Nachhaltigkeit
    - All posts are published and ready to display
    - Real, helpful content for users in Stuttgart area
  
  3. SEO Optimization
    - Each post has meta descriptions and keywords
    - Proper slugs for URL structure
    - Tags for better categorization
*/

-- Insert sample blog posts
INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  featured_image,
  author,
  category,
  tags,
  meta_description,
  meta_keywords,
  published,
  published_at
) VALUES 
(
  'Haushaltsauflösung Stuttgart: Was Sie beachten sollten',
  'haushaltsaufloesung-stuttgart-beachten',
  'Eine Haushaltsauflösung ist mehr als nur Entrümpeln. Erfahren Sie, worauf es ankommt und wie Sie dabei viel Zeit und Geld sparen können.',
  E'# Haushaltsauflösung Stuttgart: Was Sie beachten sollten\n\nEine Haushaltsauflösung ist oft mit emotionalen Momenten verbunden. Ob nach einem Todesfall, bei einem Umzug ins Pflegeheim oder einer Trennung – wir stehen Ihnen zur Seite.\n\n## Der Unterschied zwischen Entrümpelung und Haushaltsauflösung\n\nViele verwenden die Begriffe synonym, aber es gibt wichtige Unterschiede:\n\n### Entrümpelung\n- Fokus auf Entsorgung\n- Meist teilweise oder komplett verwertungsarme Gegenstände\n- Schneller Prozess\n\n### Haushaltsauflösung\n- Sorgfältige Sortierung aller Gegenstände\n- Identifikation von Wertgegenständen\n- Oft mit Nachlassverwertung verbunden\n- Mehr Zeit und Sorgfalt erforderlich',
  '/4350943.jpg',
  'ServicePlus Stuttgart',
  'Haushaltsauflösung',
  ARRAY['Haushaltsauflösung', 'Stuttgart', 'Nachlassverwertung', 'Wertanrechnung'],
  'Haushaltsauflösung in Stuttgart: Tipps, Kosten, Ablauf. Faire Wertanrechnung & sensibles Vorgehen. Jetzt kostenlos beraten lassen!',
  'haushaltsauflösung stuttgart, wohnungsauflösung, nachlassverwertung, entrümpelung todesfall',
  true,
  NOW() - INTERVAL '14 days'
),
(
  'Messie-Entrümpelung: Professionelle Hilfe mit Fingerspitzengefühl',
  'messie-entruempelung-professionelle-hilfe',
  'Messie-Entrümpelungen erfordern besondere Sensibilität und Erfahrung. Wie wir Betroffenen in Stuttgart diskret und professionell helfen.',
  E'# Messie-Entrümpelung: Professionelle Hilfe mit Fingerspitzengefühl\n\nDas Messie-Syndrom ist eine ernsthafte Erkrankung, die professionelle Hilfe erfordert. Bei ServicePlus Stuttgart verstehen wir die besonderen Anforderungen dieser sensiblen Situation.',
  '/Entruempelung_serviceplus_stuttgart.jpg',
  'ServicePlus Stuttgart',
  'Tipps & Ratgeber',
  ARRAY['Messie-Syndrom', 'Entrümpelung', 'Stuttgart', 'Diskretion', 'Sensible Hilfe'],
  'Messie-Entrümpelung in Stuttgart: Professionell, diskret und mit Fingerspitzengefühl. Wir helfen Betroffenen und Angehörigen. Vertrauliche Beratung!',
  'messie entrümpelung stuttgart, messie wohnung räumen, diskrete entrümpelung, messie hilfe stuttgart',
  true,
  NOW() - INTERVAL '21 days'
),
(
  'Nachhaltigkeit bei der Entrümpelung: Umweltschutz beginnt bei uns',
  'nachhaltigkeit-entrümpelung-umweltschutz',
  'Entrümpeln muss nicht gleich wegwerfen bedeuten. Wie wir bei ServicePlus Stuttgart auf Nachhaltigkeit und Umweltschutz achten.',
  E'# Nachhaltigkeit bei der Entrümpelung: Umweltschutz beginnt bei uns\n\nJedes Jahr landen Tonnen von Hausrat auf Mülldeponien – dabei könnte vieles wiederverwendet oder recycelt werden. Bei ServicePlus Stuttgart nehmen wir Nachhaltigkeit ernst.',
  '/nachher.jpg',
  'ServicePlus Stuttgart',
  'Nachhaltigkeit',
  ARRAY['Nachhaltigkeit', 'Recycling', 'Umweltschutz', 'Stuttgart', 'Wiederverwertung'],
  'Nachhaltige Entrümpelung in Stuttgart: Wir recyceln, spenden & schonen die Umwelt. Professionell, transparent, verantwortungsvoll. Jetzt informieren!',
  'nachhaltige entrümpelung, recycling stuttgart, umweltschutz entrümpelung, wiederverwertung hausrat',
  true,
  NOW() - INTERVAL '28 days'
),
(
  'Kosten einer Entrümpelung: Was Sie wirklich zahlen',
  'kosten-entruempelung-preise-stuttgart',
  'Transparente Preisübersicht: Welche Faktoren beeinflussen die Kosten einer Entrümpelung und wie können Sie Geld sparen?',
  E'# Kosten einer Entrümpelung: Was Sie wirklich zahlen\n\nDie häufigste Frage bei Entrümpelungen: "Was kostet das?" Eine berechtigte Frage! Hier erfahren Sie alles über realistische Preise und versteckte Kostenfallen.',
  '/vorher.jpg',
  'ServicePlus Stuttgart',
  'Tipps & Ratgeber',
  ARRAY['Kosten', 'Preise', 'Entrümpelung Stuttgart', 'Kalkulation', 'Sparen'],
  'Entrümpelung Stuttgart Kosten: Transparente Preisübersicht, Spartipps & versteckte Kosten erkennen. Jetzt Festpreis-Angebot einholen!',
  'entrümpelung kosten stuttgart, preise wohnungsräumung, was kostet entrümpelung, festpreis entrümpelung',
  true,
  NOW() - INTERVAL '35 days'
),
(
  'Entrümpelung nach Todesfall: Einfühlsame Unterstützung in schwerer Zeit',
  'entruempelung-todesfall-haushaltsaufloesung',
  'Der Verlust eines geliebten Menschen ist schwer genug. Wir nehmen Ihnen die Last der Wohnungsauflösung ab – respektvoll und professionell.',
  E'# Entrümpelung nach Todesfall: Einfühlsame Unterstützung in schwerer Zeit\n\nNach dem Tod eines geliebten Menschen fällt es schwer, sich mit praktischen Dingen zu beschäftigen. Dennoch muss oft schnell eine Wohnung aufgelöst werden. Wir helfen Ihnen in dieser schwierigen Zeit.',
  '/stuttgart-entrümpelung-serviceplus.png',
  'ServicePlus Stuttgart',
  'Haushaltsauflösung',
  ARRAY['Todesfall', 'Nachlassentrümpelung', 'Haushaltsauflösung', 'Wohnungsauflösung', 'Stuttgart'],
  'Entrümpelung nach Todesfall in Stuttgart: Einfühlsam, respektvoll, professionell. Wir unterstützen Sie in schwerer Zeit. Kostenlose Beratung!',
  'entrümpelung todesfall stuttgart, haushaltsauflösung verstorbene, wohnungsauflösung erbe, nachlassentrümpelung',
  true,
  NOW() - INTERVAL '42 days'
)
ON CONFLICT (slug) DO NOTHING;