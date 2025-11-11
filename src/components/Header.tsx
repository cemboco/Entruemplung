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
          ? 'bg-white border-b border-gray-200 py-4'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-light text-gray-900 transition-colors duration-300 tracking-tight"
          >
            Serviceplus
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+4971112345678"
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all duration-300"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">0711 / 123 456 78</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-0 py-2 text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+4971112345678"
                className="mt-2 flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Phone size={16} />
                0711 / 123 456 78
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
