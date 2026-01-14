import { Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LocationTicker from './components/LocationTicker';
import StructuredData from './components/StructuredData';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import ChecklistDownload from './components/ChecklistDownload';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Coverage from './components/Coverage';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CallToActionPopup from './components/CallToActionPopup';
import QuickQuoteTab from './components/QuickQuoteTab';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import ThankYou from './components/ThankYou';
import ServicePage from './components/ServicePage';

const BlogPostWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  return <BlogPost slug={slug || ''} />;
};

const HomePage = () => (
  <>
    <Hero />
    <ChecklistDownload />
    <LocationTicker />
    <Services />
    <About />
    <Process />
    <Pricing />
    <Coverage />
    <FAQ />
    <Contact />
    <CallToActionPopup />
  </>
);

const BlogListPage = () => (
  <ErrorBoundary>
    <Blog />
  </ErrorBoundary>
);

const BlogPostPage = () => (
  <ErrorBoundary>
    <BlogPostWrapper />
  </ErrorBoundary>
);

const ImpressumPage = () => <Impressum />;
const DatenschutzPage = () => <Datenschutz />;
const ThankYouPage = () => <ThankYou />;

export default function AppRoutes() {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/haushaltsaufloesung" element={<ServicePage />} />
        <Route path="/entruempelung" element={<ServicePage />} />
        <Route path="/messie-wohnungen" element={<ServicePage />} />
        <Route path="/keller-dachboden" element={<ServicePage />} />
        <Route path="/sperrmuell-entsorgung" element={<ServicePage />} />
        <Route path="/gewerbe-entruempelung" element={<ServicePage />} />
        <Route path="/immobilienraeumung" element={<ServicePage />} />
        <Route path="/moebel-entsorgung" element={<ServicePage />} />
        <Route path="/wertanrechnung" element={<ServicePage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="/danke" element={<ThankYouPage />} />
        <Route path="/:slug" element={<ServicePage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <QuickQuoteTab />
    </div>
  );
}
