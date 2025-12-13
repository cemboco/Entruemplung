import { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { supabase, isSupabaseConfigured, BlogPost } from '../lib/supabase';

interface BlogProps {
  onNavigateToPost: (slug: string) => void;
}

const fallbackPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Entrümpelung in Stuttgart: Der komplette Leitfaden für 2025',
    slug: 'entrümpelung-stuttgart-leitfaden-2025',
    excerpt: 'Alles, was Sie über professionelle Entrümpelung in Stuttgart wissen müssen. Von Kosten über Ablauf bis zu wichtigen Tipps für Ihre Wohnungsräumung.',
    content: `Eine professionelle Entrümpelung in Stuttgart erfordert Erfahrung und Sorgfalt. In diesem umfassenden Leitfaden erfahren Sie alles über den Ablauf, die Kosten und worauf Sie achten sollten.

## Warum eine professionelle Entrümpelung?

Eine professionelle Entrümpelung spart nicht nur Zeit, sondern auch Nerven. Unsere erfahrenen Teams kennen sich mit allen Arten von Räumungen aus und wissen, wie man effizient und umweltbewusst vorgeht.

## Die Kosten im Überblick

Die Kosten für eine Entrümpelung in Stuttgart hängen von verschiedenen Faktoren ab:
- Größe der Wohnung oder des Hauses
- Menge und Art des zu entsorgenden Materials
- Zugänglichkeit (Stockwerk, Aufzug vorhanden?)
- Zeitaufwand

## Unser Service

Wir bieten Ihnen:
- Kostenlose Besichtigung und Angebotserstellung
- Fachgerechte Entsorgung und Recycling
- Diskrete und schnelle Abwicklung
- Faire und transparente Preise`,
    featured_image: '/Entruempelung_serviceplus_stuttgart.jpg',
    author: 'ServicePlus Stuttgart Team',
    category: 'Entrümpelung',
    tags: ['Entrümpelung', 'Stuttgart', 'Wohnungsräumung', 'Kosten'],
    meta_description: 'Kompletter Leitfaden für Entrümpelung in Stuttgart 2025. Kosten, Ablauf und Tipps.',
    meta_keywords: 'Entrümpelung Stuttgart, Wohnungsräumung, Kosten',
    published: true,
    published_at: '2025-12-04T21:20:52.541505+00:00',
    views: 0,
    created_at: '2025-12-04T21:20:52.541505+00:00',
    updated_at: '2025-12-04T21:20:52.541505+00:00'
  },
  {
    id: '2',
    title: 'Haushaltsauflösung Stuttgart: Was Sie beachten sollten',
    slug: 'haushaltsaufloesung-stuttgart-beachten',
    excerpt: 'Eine Haushaltsauflösung ist mehr als nur Entrümpeln. Erfahren Sie, worauf es ankommt und wie Sie dabei viel Zeit und Geld sparen können.',
    content: `Eine Haushaltsauflösung ist eine emotionale und logistische Herausforderung. Mit der richtigen Planung und professioneller Unterstützung wird dieser Prozess deutlich einfacher.

## Was gehört zur Haushaltsauflösung?

Eine komplette Haushaltsauflösung umfasst:
- Sortierung aller Gegenstände
- Entsorgung oder Verkauf von Möbeln
- Fachgerechte Entsorgung von Elektrogeräten
- Endreinigung der Räume

## Wertanrechnung

Viele Haushalte enthalten noch wertvolle Gegenstände. Wir rechnen den Wert dieser Gegenstände gegen die Entrümpelungskosten auf.

## Zeitersparnis

Eine professionelle Haushaltsauflösung kann innerhalb von 1-2 Tagen abgeschlossen werden, während dies in Eigenregie oft Wochen dauert.`,
    featured_image: '/4257357.jpg',
    author: 'ServicePlus Stuttgart Team',
    category: 'Haushaltsauflösung',
    tags: ['Haushaltsauflösung', 'Stuttgart', 'Wohnungsauflösung'],
    meta_description: 'Haushaltsauflösung Stuttgart - Worauf Sie achten sollten und wie Sie sparen können.',
    meta_keywords: 'Haushaltsauflösung Stuttgart, Wohnungsauflösung',
    published: true,
    published_at: '2025-11-27T21:21:31.050198+00:00',
    views: 0,
    created_at: '2025-11-27T21:21:31.050198+00:00',
    updated_at: '2025-11-27T21:21:31.050198+00:00'
  },
  {
    id: '3',
    title: 'Messie-Entrümpelung: Professionelle Hilfe mit Fingerspitzengefühl',
    slug: 'messie-entruempelung-professionelle-hilfe',
    excerpt: 'Messie-Entrümpelungen erfordern besondere Sensibilität und Erfahrung. Wie wir Betroffenen in Stuttgart diskret und professionell helfen.',
    content: `Messie-Entrümpelungen sind eine besondere Herausforderung, die viel Einfühlungsvermögen erfordert. Wir behandeln jeden Fall mit der nötigen Diskretion und Respekt.

## Besondere Anforderungen

Bei Messie-Wohnungen sind besondere Maßnahmen erforderlich:
- Vorsortierung wichtiger Dokumente
- Sensible Kommunikation mit Betroffenen
- Oft mehrere Durchgänge nötig
- Zusammenarbeit mit Beratern

## Unser Ansatz

Wir arbeiten eng mit Betroffenen zusammen und gehen Schritt für Schritt vor, um niemanden zu überfordern.

## Diskret und professionell

Alle unsere Mitarbeiter sind geschult im Umgang mit besonderen Situationen und behandeln jeden Fall vertraulich.`,
    featured_image: '/4350943.jpg',
    author: 'ServicePlus Stuttgart Team',
    category: 'Tipps & Ratgeber',
    tags: ['Messie', 'Entrümpelung', 'Stuttgart', 'Hilfe'],
    meta_description: 'Messie-Entrümpelung Stuttgart - Professionelle und diskrete Hilfe.',
    meta_keywords: 'Messie Entrümpelung Stuttgart, Messie Wohnung',
    published: true,
    published_at: '2025-11-20T21:21:31.050198+00:00',
    views: 0,
    created_at: '2025-11-20T21:21:31.050198+00:00',
    updated_at: '2025-11-20T21:21:31.050198+00:00'
  },
  {
    id: '4',
    title: 'Nachhaltigkeit bei der Entrümpelung: Umweltschutz beginnt bei uns',
    slug: 'nachhaltigkeit-entrümpelung-umweltschutz',
    excerpt: 'Entrümpeln muss nicht gleich wegwerfen bedeuten. Wie wir bei ServicePlus Stuttgart auf Nachhaltigkeit und Umweltschutz achten.',
    content: `Nachhaltigkeit ist uns wichtig. Deshalb sortieren wir jeden Gegenstand sorgfältig und führen ihn der bestmöglichen Verwertung zu.

## Unsere Nachhaltigkeitsstrategie

1. **Wiederverwendung**: Noch brauchbare Möbel und Gegenstände spenden wir an soziale Einrichtungen
2. **Recycling**: Materialien werden fachgerecht getrennt und recycelt
3. **Fachgerechte Entsorgung**: Sondermüll wird ordnungsgemäß entsorgt

## Partnerschaften

Wir arbeiten mit lokalen Recyclinghöfen und sozialen Einrichtungen zusammen.

## Umweltbilanz

Durch unsere Sortiermethode können wir bis zu 70% der Materialien dem Recycling zuführen.`,
    featured_image: '/nachher.jpg',
    author: 'ServicePlus Stuttgart Team',
    category: 'Nachhaltigkeit',
    tags: ['Nachhaltigkeit', 'Recycling', 'Umweltschutz', 'Stuttgart'],
    meta_description: 'Nachhaltige Entrümpelung Stuttgart - Umweltschutz und Recycling.',
    meta_keywords: 'Nachhaltige Entrümpelung, Recycling Stuttgart',
    published: true,
    published_at: '2025-11-13T21:21:31.050198+00:00',
    views: 0,
    created_at: '2025-11-13T21:21:31.050198+00:00',
    updated_at: '2025-11-13T21:21:31.050198+00:00'
  },
  {
    id: '5',
    title: 'Kosten einer Entrümpelung: Was Sie wirklich zahlen',
    slug: 'kosten-entruempelung-preise-stuttgart',
    excerpt: 'Transparente Preisübersicht: Welche Faktoren beeinflussen die Kosten einer Entrümpelung und wie können Sie Geld sparen?',
    content: `Entrümpelungskosten sind oft undurchsichtig. Wir bringen Licht ins Dunkel und zeigen Ihnen, worauf Sie achten sollten.

## Kostenfaktoren

Die Kosten setzen sich aus verschiedenen Faktoren zusammen:
- **Raumgröße**: Je größer die Fläche, desto höher die Kosten
- **Menge**: Das Volumen des zu entsorgenden Materials
- **Anfahrt**: Entfernung zum Objekt
- **Stockwerk**: Mit oder ohne Aufzug
- **Sperrgut**: Besonders große oder schwere Gegenstände

## Durchschnittspreise in Stuttgart

- 1-Zimmer-Wohnung: 400-800€
- 3-Zimmer-Wohnung: 800-1.500€
- Haus: 1.500-3.000€

## Spartipps

- Vorsortierung selbst vornehmen
- Wertgegenstände verkaufen oder spenden
- Mehrere Angebote einholen`,
    featured_image: '/vorher.jpg',
    author: 'ServicePlus Stuttgart Team',
    category: 'Tipps & Ratgeber',
    tags: ['Kosten', 'Preise', 'Entrümpelung', 'Stuttgart'],
    meta_description: 'Entrümpelung Kosten Stuttgart - Transparente Preisübersicht und Spartipps.',
    meta_keywords: 'Entrümpelung Kosten Stuttgart, Preise',
    published: true,
    published_at: '2025-11-06T21:21:31.050198+00:00',
    views: 0,
    created_at: '2025-11-06T21:21:31.050198+00:00',
    updated_at: '2025-11-06T21:21:31.050198+00:00'
  },
  {
    id: '6',
    title: 'Entrümpelung nach Todesfall: Einfühlsame Unterstützung in schwerer Zeit',
    slug: 'entruempelung-todesfall-haushaltsaufloesung',
    excerpt: 'Der Verlust eines geliebten Menschen ist schwer genug. Wir nehmen Ihnen die Last der Wohnungsauflösung ab – respektvoll und professionell.',
    content: `Der Verlust eines geliebten Menschen ist eine schwere Zeit. Die anschließende Wohnungsauflösung kann zusätzlich belasten. Wir helfen Ihnen dabei mit Respekt und Einfühlungsvermögen.

## Besondere Sensibilität

Eine Entrümpelung nach einem Todesfall erfordert:
- Respektvoller Umgang mit persönlichen Gegenständen
- Zeit für Angehörige zum Abschiednehmen
- Sorgfältige Sortierung wichtiger Dokumente
- Diskrete Durchführung

## Unser Service

Wir bieten:
- Flexible Terminvereinbarung
- Behutsame Räumung
- Aufbewahrung wichtiger Gegenstände
- Unterstützung bei Behördengängen

## Wichtige Dokumente

Wir achten besonders auf:
- Testamente und Vollmachten
- Versicherungsunterlagen
- Bankdokumente
- Persönliche Erinnerungsstücke

## Zeitrahmen

Wir passen uns Ihrem Tempo an und drängen nicht zur Eile.`,
    featured_image: '/stuttgart-entrümpelung-serviceplus.png',
    author: 'ServicePlus Stuttgart Team',
    category: 'Haushaltsauflösung',
    tags: ['Todesfall', 'Haushaltsauflösung', 'Nachlassverwaltung', 'Stuttgart'],
    meta_description: 'Entrümpelung nach Todesfall Stuttgart - Einfühlsame und professionelle Unterstützung.',
    meta_keywords: 'Entrümpelung Todesfall Stuttgart, Nachlassverwaltung',
    published: true,
    published_at: '2025-10-30T21:21:31.050198+00:00',
    views: 0,
    created_at: '2025-10-30T21:21:31.050198+00:00',
    updated_at: '2025-10-30T21:21:31.050198+00:00'
  }
];

export default function Blog({ onNavigateToPost }: BlogProps) {
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    if (!isSupabaseConfigured || !supabase) {
      setPosts(fallbackPosts);
      setLoading(false);
      return;
    }

    try {
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (supabaseError) {
        throw supabaseError;
      }

      setPosts(data && data.length > 0 ? data : fallbackPosts);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setPosts(fallbackPosts);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['Alle', ...Array.from(new Set(posts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'Alle'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} Min. Lesezeit`;
  };

  if (loading) {
    return (
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-ocean text-sm font-semibold tracking-wider uppercase mb-2">
            Ratgeber & Tipps
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
            Unser Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nützliche Informationen rund um Entrümpelung, Haushaltsauflösung und Wohnungsräumung in Stuttgart
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-ocean text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {error ? (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg mb-4">
              {error}
            </p>
            <button
              onClick={() => loadPosts()}
              className="bg-ocean text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Erneut versuchen
            </button>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              Aktuell sind keine Blog-Artikel verfügbar. Schauen Sie bald wieder vorbei!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => onNavigateToPost(post.slug)}
              >
                {post.featured_image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-ocean text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.published_at)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {getReadingTime(post.content)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-midnight mb-3 group-hover:text-ocean transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <Tag className="w-4 h-4 text-gray-400" />
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center text-ocean font-semibold group-hover:gap-3 gap-2 transition-all">
                    Weiterlesen
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
