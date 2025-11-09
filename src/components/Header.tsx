import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#preise', label: 'Preise' },
    { href: '#ablauf', label: 'Ablauf' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <span className="inline-block">Serviceplus</span>
            <span className={`block text-sm font-normal ${isScrolled ? 'text-secondary' : 'text-gray-200'}`}>
              Entrümplungen
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'text-secondary hover:text-primary'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+4971112345678"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              <Phone size={18} />
              <span className="hidden lg:inline">0711 / 123 456 78</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 py-6 bg-white rounded-lg shadow-xl">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-secondary hover:text-primary hover:bg-gray-50 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+4971112345678"
                className="mx-6 flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                <Phone size={18} />
                0711 / 123 456 78
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
