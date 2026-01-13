import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { trackPhoneClick } from '../utils/analytics';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#about', label: 'Über uns' },
    { href: '#ablauf', label: 'Ablauf' },
    { href: '#preise', label: 'Preise' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    const isOnHomePage = location.pathname === '/';

    if (!isOnHomePage) {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

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
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <img
              src="/sdf (7).png"
              alt="Serviceplus Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-light text-midnight transition-colors duration-300 tracking-tight">
              S+
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-light text-gray-600 hover:text-midnight transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/blog"
              className="text-sm font-light text-gray-600 hover:text-midnight transition-colors duration-300"
            >
              Blog
            </Link>
            <a
              href="tel:+4915732649483"
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-midnight text-white text-sm font-medium hover:bg-midnight-dark transition-all duration-300"
              onClick={trackPhoneClick}
            >
              <Phone size={16} />
              <span className="hidden lg:inline">01573 2649483</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-midnight"
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
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-0 py-2 text-sm font-light text-gray-600 hover:text-midnight transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-0 py-2 text-sm font-light text-gray-600 hover:text-midnight transition-colors"
              >
                Blog
              </Link>
              <a
                href="tel:+4915732649483"
                className="mt-2 flex items-center justify-center gap-2 bg-midnight text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-midnight-dark transition-colors"
                onClick={trackPhoneClick}
              >
                <Phone size={16} />
                01573 2649483
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
