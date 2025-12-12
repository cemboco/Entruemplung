import { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { supabase, isSupabaseConfigured, BlogPost } from '../lib/supabase';

interface BlogProps {
  onNavigateToPost: (slug: string) => void;
}

export default function Blog({ onNavigateToPost }: BlogProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    if (!isSupabaseConfigured || !supabase) {
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

      setPosts(data || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Fehler beim Laden der Blog-Artikel';
      setError(errorMessage);
      setPosts([]);
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
