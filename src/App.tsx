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
import FeedbackTab from './components/FeedbackTab';

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
      <Process />
      <Pricing />
      <Coverage />
      <FAQ />
      <Contact />
      <Footer />
      <CallToActionPopup />
      <FeedbackTab />
    </div>
  );
}

export default App;
