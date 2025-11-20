import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LocationTicker from './components/LocationTicker';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Coverage from './components/Coverage';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallToActionPopup from './components/CallToActionPopup';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import StructuredData from './components/StructuredData';
import WhatsAppButton from './components/WhatsAppButton';
import QuickQuoteTab from './components/QuickQuoteTab';

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
    } else if (hash === '#datenschutz') {
      setCurrentPage('datenschutz');
    }
  }, []);

  const navigateToImpressum = () => {
    setCurrentPage('impressum');
    window.location.hash = 'impressum';
    window.scrollTo(0, 0);
  };

  const navigateToDatenschutz = () => {
    setCurrentPage('datenschutz');
    window.location.hash = 'datenschutz';
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  if (currentPage === 'impressum') {
    return (
      <div className="min-h-screen">
        <StructuredData />
        <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
        <Impressum onBack={navigateToHome} />
        <Footer onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
        <WhatsAppButton />
        <QuickQuoteTab />
      </div>
    );
  }

  if (currentPage === 'datenschutz') {
    return (
      <div className="min-h-screen">
        <StructuredData />
        <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
        <Datenschutz onBack={navigateToHome} />
        <Footer onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
        <WhatsAppButton />
        <QuickQuoteTab />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <StructuredData />
      <Header onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
      <Hero />
      <LocationTicker />
      <Services />
      <About />
      <Process />
      <Pricing />
      <Coverage />
      <FAQ />
      <Contact />
      <Footer onNavigateToImpressum={navigateToImpressum} onNavigateToDatenschutz={navigateToDatenschutz} />
      <CallToActionPopup />
      <WhatsAppButton />
      <QuickQuoteTab />
    </div>
  );
}

export default App;
