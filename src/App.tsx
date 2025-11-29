import { useEffect, useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LocationTicker from './components/LocationTicker';
import StructuredData from './components/StructuredData';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { trackPageView } from './utils/analytics';

const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Process = lazy(() => import('./components/Process'));
const Pricing = lazy(() => import('./components/Pricing'));
const Coverage = lazy(() => import('./components/Coverage'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const CallToActionPopup = lazy(() => import('./components/CallToActionPopup'));
const QuickQuoteTab = lazy(() => import('./components/QuickQuoteTab'));
const Impressum = lazy(() => import('./components/Impressum'));
const Datenschutz = lazy(() => import('./components/Datenschutz'));

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'impressum' | 'datenschutz'>('home');

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#impressum') {
      setCurrentPage('impressum');
      trackPageView('/impressum', 'Impressum');
    } else if (hash === '#datenschutz') {
      setCurrentPage('datenschutz');
      trackPageView('/datenschutz', 'Datenschutz');
    } else {
      trackPageView('/', 'Entrümpelung Stuttgart');
    }
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

  if (currentPage === 'impressum') {
    return (
      <div className="min-h-screen">
        <StructuredData />
        <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
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
        <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
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
      <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
      <Hero />
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
