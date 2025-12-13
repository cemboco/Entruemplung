import { useEffect, useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LocationTicker from './components/LocationTicker';
import StructuredData from './components/StructuredData';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { trackPageView } from './utils/analytics';

const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Process = lazy(() => import('./components/Process'));
const Pricing = lazy(() => import('./components/Pricing'));
const Coverage = lazy(() => import('./components/Coverage'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const CallToActionPopup = lazy(() => import('./components/CallToActionPopup'));
const QuickQuoteTab = lazy(() => import('./components/QuickQuoteTab'));
const Impressum = lazy(() => import('./components/Impressum'));
const Datenschutz = lazy(() => import('./components/Datenschutz'));
const ThankYou = lazy(() => import('./components/ThankYou'));

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'impressum' | 'datenschutz' | 'danke' | 'blog' | 'blog-post'>('home');
  const [currentBlogSlug, setCurrentBlogSlug] = useState<string>('');

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const handleHashChange = () => {
    const hash = window.location.hash;
    if (hash === '#impressum') {
      setCurrentPage('impressum');
      trackPageView('/impressum', 'Impressum');
      window.scrollTo(0, 0);
    } else if (hash === '#datenschutz') {
      setCurrentPage('datenschutz');
      trackPageView('/datenschutz', 'Datenschutz');
      window.scrollTo(0, 0);
    } else if (hash === '#danke') {
      setCurrentPage('danke');
      trackPageView('/danke', 'Danke');
      window.scrollTo(0, 0);
    } else if (hash === '#blog') {
      setCurrentPage('blog');
      trackPageView('/blog', 'Blog');
      window.scrollTo(0, 0);
    } else if (hash.startsWith('#blog/')) {
      const slug = hash.replace('#blog/', '');
      setCurrentBlogSlug(slug);
      setCurrentPage('blog-post');
      trackPageView(`/blog/${slug}`, `Blog: ${slug}`);
      window.scrollTo(0, 0);
    } else if (hash === '' || hash === '#' || !hash.startsWith('#')) {
      setCurrentPage('home');
      trackPageView('/', 'Entrümpelung Stuttgart');
    }
  };

  useEffect(() => {
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateToImpressum = () => {
    setCurrentPage('impressum');
    window.location.hash = 'impressum';
    window.scrollTo(0, 0);
    trackPageView('/impressum', 'Impressum');
  };

  const navigateToDatenschutz = () => {
    setCurrentPage('datenschutz');
    window.location.hash = 'datenschutz';
    window.scrollTo(0, 0);
    trackPageView('/datenschutz', 'Datenschutz');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = '';
    window.scrollTo(0, 0);
    trackPageView('/', 'Entrümpelung Stuttgart');
  };

  const navigateToDanke = () => {
    setCurrentPage('danke');
    window.location.hash = 'danke';
    window.scrollTo(0, 0);
    trackPageView('/danke', 'Danke');
  };

  const navigateToBlog = () => {
    setCurrentPage('blog');
    window.location.hash = 'blog';
    window.scrollTo(0, 0);
    trackPageView('/blog', 'Blog');
  };

  const navigateToBlogPost = (slug: string) => {
    setCurrentBlogSlug(slug);
    setCurrentPage('blog-post');
    window.location.hash = `blog/${slug}`;
    window.scrollTo(0, 0);
    trackPageView(`/blog/${slug}`, `Blog: ${slug}`);
  };

  if (currentPage === 'blog-post') {
    return (
      <div className="min-h-screen">
        <StructuredData />
        <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} onNavigateToBlog={navigateToBlog} onNavigateToHome={navigateToHome} />
        <ErrorBoundary>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div></div>}>
            <BlogPost slug={currentBlogSlug} onBack={navigateToBlog} />
          </Suspense>
        </ErrorBoundary>
        <Footer onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
        <WhatsAppButton />
        <Suspense fallback={null}>
          <QuickQuoteTab />
        </Suspense>
      </div>
    );
  }

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen">
        <StructuredData />
        <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} onNavigateToBlog={navigateToBlog} onNavigateToHome={navigateToHome} />
        <ErrorBoundary>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div></div>}>
            <Blog onNavigateToPost={navigateToBlogPost} />
          </Suspense>
        </ErrorBoundary>
        <Footer onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
        <WhatsAppButton />
        <Suspense fallback={null}>
          <QuickQuoteTab />
        </Suspense>
      </div>
    );
  }

  if (currentPage === 'danke') {
    return (
      <div className="min-h-screen">
        <StructuredData />
        <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} onNavigateToBlog={navigateToBlog} onNavigateToHome={navigateToHome} />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div></div>}>
          <ThankYou onBack={navigateToHome} />
        </Suspense>
        <Footer onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
      </div>
    );
  }

  if (currentPage === 'impressum') {
    return (
      <div className="min-h-screen">
        <StructuredData />
        <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} onNavigateToBlog={navigateToBlog} onNavigateToHome={navigateToHome} />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div></div>}>
          <Impressum onBack={navigateToHome} />
        </Suspense>
        <Footer onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
        <WhatsAppButton />
        <Suspense fallback={null}>
          <QuickQuoteTab />
        </Suspense>
      </div>
    );
  }

  if (currentPage === 'datenschutz') {
    return (
      <div className="min-h-screen">
        <StructuredData />
        <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} onNavigateToBlog={navigateToBlog} onNavigateToHome={navigateToHome} />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div></div>}>
          <Datenschutz onBack={navigateToHome} />
        </Suspense>
        <Footer onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
        <WhatsAppButton />
        <Suspense fallback={null}>
          <QuickQuoteTab />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <StructuredData />
      <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} onNavigateToBlog={navigateToBlog} onNavigateToHome={navigateToHome} />
      <Hero />
      <LocationTicker />
      <Suspense fallback={<div className="py-20 text-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight mx-auto"></div></div>}>
        <Services />
        <About />
        <Process />
        <Pricing />
        <Coverage />
        <FAQ />
        <Contact onNavigateToDanke={navigateToDanke} />
      </Suspense>
      <Footer onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
      <Suspense fallback={null}>
        <CallToActionPopup />
      </Suspense>
      <WhatsAppButton />
      <Suspense fallback={null}>
        <QuickQuoteTab />
      </Suspense>
    </div>
  );
}

export default App;
