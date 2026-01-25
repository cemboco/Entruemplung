import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, Share2, Phone, ChevronUp } from 'lucide-react';
import { supabase, isSupabaseConfigured, BlogPost as BlogPostType } from '../lib/supabase';
import { fallbackPosts } from '../data/blogPosts';

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const navigate = useNavigate();
  // Initialize with fallback data for SSR - allows prerendering of blog posts
  const fallbackPost = fallbackPosts.find(p => p.slug === slug);
  const [post, setPost] = useState<BlogPostType | null>(fallbackPost || null);
  // Only show loading if no fallback data available (will load from Supabase on client)
  const [loading, setLoading] = useState(fallbackPost ? false : true);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return;

      const articleTop = articleRef.current.offsetTop;
      const articleHeight = articleRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const progress = Math.min(
        Math.max((scrollY - articleTop + windowHeight * 0.3) / (articleHeight - windowHeight * 0.5), 0),
        1
      );
      setReadingProgress(progress * 100);
      setShowScrollTop(scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    window.location.hash = '';
    setTimeout(() => {
      const contactSection = document.getElementById('kontakt');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight mx-auto mb-4"></div>
          <p className="text-gray-500">Artikel wird geladen...</p>
        </div>
      </div>
    );
  }

  const isServer = typeof window === "undefined";

  // During SSR, never render NotFound - render neutral shell instead
  // Let client-side router handle 404 detection after hydration
  if (!post && isServer) {
    // Return minimal loading shell for SSR
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-28 pb-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  // Client-side: show NotFound if post doesn't exist
  if (!post && !isServer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">?</span>
          </div>
          <h2 className="text-2xl font-bold text-midnight mb-4">Artikel nicht gefunden</h2>
          <p className="text-gray-600 mb-6">Der gesuchte Artikel existiert nicht oder wurde entfernt.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 bg-midnight text-white px-6 py-3 rounded-full hover:bg-midnight/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück zum Blog
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
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
    <>
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50"
        style={{ marginTop: '72px' }}
      >
        <div
          className="h-full bg-gradient-to-r from-ocean to-teal-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <article ref={articleRef} className="min-h-screen bg-gray-50 pt-28 pb-16">
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-midnight px-4 py-2 rounded-full transition-all mb-8 group hover:bg-white hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Zurück zum Blog</span>
          </button>

          {post.featured_image && (
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-10 shadow-2xl">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-ocean text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-lg">
                  {post.category || 'Unkategorisiert'}
                </span>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              <header className="mb-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mb-6 leading-tight tracking-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-sm md:text-base">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-ocean" />
                    {formatDate(post.published_at)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-ocean" />
                    {getReadingTime(post.content)}
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">
                    von <span className="font-medium text-midnight">{post.author}</span>
                  </span>
                  <button
                    onClick={handleShare}
                    className="ml-auto flex items-center gap-2 text-ocean hover:text-midnight transition-colors hover:bg-ocean/10 px-3 py-1.5 rounded-full"
                    aria-label="Artikel teilen"
                  >
                    <Share2 className="w-5 h-5" />
                    <span className="hidden sm:inline">Teilen</span>
                  </button>
                </div>
              </header>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10" />

              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2 mb-10 flex-wrap">
                  <Tag className="w-5 h-5 text-ocean flex-shrink-0" />
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-gray-600 bg-gray-100 hover:bg-ocean/10 hover:text-ocean px-4 py-1.5 rounded-full transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-midnight via-midnight to-ocean p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Haben Sie Fragen oder brauchen Sie Hilfe?
                </h3>
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  Unser Team steht Ihnen gerne zur Verfugung. Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleContactClick}
                    className="inline-flex items-center justify-center gap-2 bg-white text-midnight px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Jetzt Kontakt aufnehmen
                  </button>
                  <a
                    href="tel:+4915732649483"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-midnight transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    01573 2649483
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-midnight font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Weitere Artikel lesen
            </button>
          </div>
        </div>
      </article>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-midnight text-white rounded-full shadow-lg hover:bg-midnight/90 transition-all flex items-center justify-center hover:-translate-y-1"
          aria-label="Nach oben scrollen"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
