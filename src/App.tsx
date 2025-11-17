import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'impressum'>('home');

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#impressum') {
      setCurrentPage('impressum');
    }
  }, []);

  const navigateToImpressum = () => {
    setCurrentPage('impressum');
    window.location.hash = 'impressum';
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
        <Header onNavigateToImpressum={navigateToImpressum} />
        <Impressum onBack={navigateToHome} />
        <Footer onNavigateToImpressum={navigateToImpressum} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onNavigateToImpressum={navigateToImpressum} />
      <Hero />
      <Services />
      <About />
      <Process />
      <Pricing />
      <Coverage />
      <FAQ />
      <Contact />
      <Footer onNavigateToImpressum={navigateToImpressum} />
      <CallToActionPopup />
    </div>
  );
}

export default App;
