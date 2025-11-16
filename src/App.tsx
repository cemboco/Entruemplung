import { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="py-16 bg-white flex justify-center">
        <a
          href="#schnellanfrage"
          className="bg-midnight text-white px-16 py-7 rounded-full font-medium text-xl hover:bg-midnight-dark transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
        >
          Schnellanfrage starten
        </a>
      </div>
      <Services />
      <About />
      <Process />
      <Pricing />
      <Coverage />
      <FAQ />
      <Contact />
      <Footer />
      <CallToActionPopup />
    </div>
  );
}

export default App;
