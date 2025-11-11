import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-light mb-6">Serviceplus</h3>
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
                <a href="tel:+4971112345678" className="hover:text-white transition-colors">
                  0711 / 123 456 78
                </a>
              </li>
              <li>
                <a href="mailto:info@serviceplus-entruempelung.de" className="hover:text-white transition-colors break-all">
                  info@serviceplus-entruempelung.de
                </a>
              </li>
              <li>
                Musterstraße 123<br />
                70173 Stuttgart
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

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-light">
            <p>
              © 2024 Serviceplus Entrümplungen
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Datenschutz
              </a>
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
