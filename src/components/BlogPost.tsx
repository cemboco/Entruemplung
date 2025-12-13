import { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { supabase, isSupabaseConfigured, BlogPost as BlogPostType } from '../lib/supabase';
import { fallbackPosts } from '../data/blogPosts';

interface BlogPostProps {
  slug: string;
  onBack: () => void;
}

export default function BlogPost({ slug, onBack }: BlogPostProps) {
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

  const loadPost = async () => {
    if (!isSupabaseConfigured || !supabase) {
      const fallbackPost = fallbackPosts.find(p => p.slug === slug);
      setPost(fallbackPost || null);
      if (fallbackPost) {
        document.title = `${fallbackPost.title} | ServicePlus Stuttgart`;
      }
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (data) {
        setPost(data);

        try {
          await supabase
            .from('blog_posts')
            .update({ views: data.views + 1 })
            .eq('id', data.id);
        } catch (viewError) {
        }

        if (data.meta_description) {
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', data.meta_description);
          }
        }

        document.title = `${data.title} | ServicePlus Stuttgart`;
      } else {
        const fallbackPost = fallbackPosts.find(p => p.slug === slug);
        setPost(fallbackPost || null);
        if (fallbackPost) {
          document.title = `${fallbackPost.title} | ServicePlus Stuttgart`;
        }
      }
    } catch (error) {
      const fallbackPost = fallbackPosts.find(p => p.slug === slug);
      setPost(fallbackPost || null);
      if (fallbackPost) {
        document.title = `${fallbackPost.title} | ServicePlus Stuttgart`;
      }
    } finally {
      setLoading(false);
    }
  };

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

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link wurde in die Zwischenablage kopiert!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-midnight mb-4">Artikel nicht gefunden</h2>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-ocean hover:text-midnight transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück zum Blog
          </button>
        </div>
      </div>
    );
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ServicePlus Stuttgart',
      logo: {
        '@type': 'ImageObject',
        url: 'https://serviceplus-stuttgart.de/logo.png'
      }
    },
    datePublished: post.published_at,
    dateModified: post.updated_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': window.location.href
    }
  };

  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-ocean hover:text-midnight transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Zurück zum Blog
        </button>

        {post.featured_image && (
          <div className="relative h-96 rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-ocean text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {post.category}
              </span>
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-ocean" />
              {formatDate(post.published_at)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-ocean" />
              {getReadingTime(post.content)}
            </span>
            <span className="text-gray-500">
              von {post.author}
            </span>
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-2 text-ocean hover:text-midnight transition-colors"
              aria-label="Artikel teilen"
            >
              <Share2 className="w-5 h-5" />
              Teilen
            </button>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              <Tag className="w-5 h-5 text-ocean" />
              {post.tags.map((tag, index) => (
                <span key={index} className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-ocean to-midnight text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Benötigen Sie professionelle Entrümpelungsdienste?
              </h3>
              <p className="mb-6 opacity-90">
                Kontaktieren Sie uns für ein kostenloses Angebot. Wir sind in Stuttgart und Umgebung für Sie da!
              </p>
              <button
                onClick={() => {
                  onBack();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-white text-ocean px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Jetzt Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
