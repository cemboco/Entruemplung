import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { supabase, isSupabaseConfigured, BlogPost } from '../lib/supabase';
import { fallbackPosts } from '../data/blogPosts';
import PageMeta from './PageMeta';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  useEffect(() => {
    console.log('isSupabaseConfigured', isSupabaseConfigured);
    console.log('fallback ids', fallbackPosts.map(p => p.id));
  }, []);

  useEffect(() => {
    console.log('posts state ids', posts.map(p => p.id));
  }, [posts]);

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

  const formatDate = (dateString: unknown) => {
    const d = new Date(typeof dateString === 'string' ? dateString : '');
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getReadingTime = (content: unknown) => {
    const text = typeof content === 'string' ? content : '';
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} Min. Lesezeit`;
  };

  const categories = ['Alle', ...Array.from(new Set(posts.map(post => post.category || 'Unkategorisiert')))];

  const filteredPosts = selectedCategory === 'Alle'
    ? posts
    : posts.filter(post => (post.category || 'Unkategorisiert') === selectedCategory);

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
      <PageMeta
        title="Blog - Ratgeber & Tipps zur Entrümpelung"
        description="Nützliche Tipps und Ratgeber rund um Entrümpelung, Haushaltsauflösung und Wohnungsräumung in Stuttgart. Praktische Hinweise von Experten."
        canonical="https://serviceplus-entruempelung.de/blog/"
      />
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
                  ? 'bg-midnight text-white shadow-lg'
                  : 'bg-white text-midnight border border-gray-200 hover:bg-midnight hover:text-white'
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
              <Link
                key={post.id}
                to={`/blog/${post.slug}/`}
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                {post.featured_image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-ocean text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category || 'Unkategorisiert'}
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
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
