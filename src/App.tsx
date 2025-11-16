import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import BeforeAfter from './components/BeforeAfter';
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
      <Services />
      <About />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light text-midnight mb-4">
              Unsere Arbeit <span className="font-bold">in Aktion</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Professionelle Entrümpelung mit sichtbaren Ergebnissen
            </p>
          </div>
          <BeforeAfter
            beforeImage="/ChatGPT Image 5. Nov. 2025, 21_16_33 copy.png"
            afterImage="/sdf (7).png"
            beforeLabel="Vorher"
            afterLabel="Nachher"
          />
        </div>
      </section>
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
