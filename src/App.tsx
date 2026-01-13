import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LocationTicker from './components/LocationTicker';
import StructuredData from './components/StructuredData';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import ChecklistDownload from './components/ChecklistDownload';

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

const BlogPostWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  return <BlogPost slug={slug || ''} />;
};

const HomePage = () => (
  <>
    <Hero />
    <ChecklistDownload />
    <LocationTicker />
    <Suspense fallback={<div className="py-20 text-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight mx-auto"></div></div>}>
      <Services />
      <About />
      <Process />
      <Pricing />
      <Coverage />
      <FAQ />
      <Contact />
    </Suspense>
    <Suspense fallback={null}>
      <CallToActionPopup />
    </Suspense>
  </>
);

const BlogListPage = () => (
  <ErrorBoundary>
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div></div>}>
      <Blog />
    </Suspense>
  </ErrorBoundary>
);

const BlogPostPage = () => (
  <ErrorBoundary>
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div></div>}>
      <BlogPostWrapper />
    </Suspense>
  </ErrorBoundary>
);

const ImpressumPage = () => (
  <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div></div>}>
    <Impressum />
  </Suspense>
);

const DatenschutzPage = () => (
  <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div></div>}>
    <Datenschutz />
  </Suspense>
);

const ThankYouPage = () => (
  <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight"></div></div>}>
    <ThankYou />
  </Suspense>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <StructuredData />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/danke" element={<ThankYouPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Suspense fallback={null}>
          <QuickQuoteTab />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
