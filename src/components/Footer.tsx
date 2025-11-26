import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Star } from 'lucide-react';

interface FooterProps {
  onNavigateToImpressum?: () => void;
  onNavigateToDatenschutz?: () => void;
}

export default function Footer({ onNavigateToImpressum, onNavigateToDatenschutz }: FooterProps = {}) {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl font-light mb-6">Serviceplus Entrümpelung GbR</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Ihr zuverlässiger Partner für professionelle Entrümpelungen in Stuttgart und Umgebung.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide mb-6">Leistungen</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors">
                  Haushaltsauflösungen
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors">
                  Entrümpelungen
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors">
                  Messie-Wohnungen
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-white transition-colors">
                  Gewerbe-Entrümpelung
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide mb-6">Kontakt</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li>
                <a href="tel:+4915732649483" className="hover:text-white transition-colors">
                  01573 2649483
                </a>
              </li>
              <li>
                <a href="mailto:info@serviceplus-entruempelung.de" className="hover:text-white transition-colors break-all">
                  info@serviceplus-entruempelung.de
                </a>
              </li>
            </ul>

            <h4 className="text-xs font-medium uppercase tracking-wide mb-4 mt-8">Folgen Sie uns</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li>
                <a
                  href="https://share.google/6WMIxPfu1CcFrAcEl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Finden Sie uns auf Google Maps
                </a>
              </li>
              <li>
                <a
                  href="https://share.google/6WMIxPfu1CcFrAcEl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Star className="w-4 h-4" />
                  Bewerten Sie uns auf Google
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide mb-6">Öffnungszeiten</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-light">
              <li>Mo - Fr: 07:00 - 20:00</li>
              <li>Sa: 08:00 - 18:00</li>
              <li>So: Notfall-Hotline</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 sm:pt-6">
          <p className="text-gray-500 text-xs font-light leading-relaxed mb-4 text-center max-w-4xl mx-auto">
            Hinweis: Alle Preise verstehen sich als Richtwerte. Der endgültige Preis wird nach einer kostenlosen Besichtigung individuell berechnet und richtet sich nach Aufwand, Volumen, Entsorgungskosten und Zugänglichkeit.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-xs font-light text-center md:text-left">
            <p>
              © 2025 Serviceplus Entrümpelung GbR
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button
                onClick={onNavigateToImpressum}
                className="hover:text-gray-300 transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={onNavigateToDatenschutz}
                className="hover:text-gray-300 transition-colors"
              >
                Datenschutz
              </button>
              <a href="#" className="hover:text-gray-300 transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
