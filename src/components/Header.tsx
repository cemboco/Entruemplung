import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { trackPhoneClick } from '../utils/analytics';
import { services } from '../data/services';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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

  const handleDropdownEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

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
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className="flex items-center gap-1 text-sm font-light text-gray-600 hover:text-midnight transition-colors duration-300 py-2"
              >
                Leistungen
                <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 -mt-2">
                  <div className="w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/${service.slug}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-midnight transition-colors"
                        onClick={() => {
                          setIsServicesDropdownOpen(false);
                          if (closeTimeoutRef.current) {
                            clearTimeout(closeTimeoutRef.current);
                          }
                        }}
                      >
                        {service.title.replace(' Stuttgart', '')}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full px-0 py-2 text-sm font-light text-gray-600 hover:text-midnight transition-colors"
                >
                  Leistungen
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/${service.slug}`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        className="block py-2 text-sm font-light text-gray-500 hover:text-midnight transition-colors"
                      >
                        {service.title.replace(' Stuttgart', '')}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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
