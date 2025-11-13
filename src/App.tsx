import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Coverage from './components/Coverage';
import Showcase from './components/Showcase';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Pricing />
      <Coverage />
      <Showcase />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
