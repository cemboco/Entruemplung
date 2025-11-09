import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Serviceplus</h3>
            <p className="text-gray-300 mb-4">
              Ihr zuverlässiger Partner für professionelle Entrümpelungen und Haushaltsauflösungen in Stuttgart und Umgebung.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Leistungen</h4>
            <ul className="space-y-2 text-gray-300">
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
                  Sperrmüll-Abholung
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
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <Phone className="flex-shrink-0 mt-1" size={18} />
                <a href="tel:+4971112345678" className="hover:text-white transition-colors">
                  0711 / 123 456 78
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="flex-shrink-0 mt-1" size={18} />
                <a href="mailto:info@serviceplus-entruempelung.de" className="hover:text-white transition-colors break-all">
                  info@serviceplus-entruempelung.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <span>
                  Musterstraße 123<br />
                  70173 Stuttgart
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Öffnungszeiten</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Mo - Fr:</span>
                <span className="font-semibold">07:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samstag:</span>
                <span className="font-semibold">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sonntag:</span>
                <span className="font-semibold">Notfall</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-white/10 rounded-lg">
              <p className="text-sm font-semibold mb-1">24h Express-Hotline</p>
              <a href="tel:+491771234567" className="text-lg font-bold hover:text-gray-200 transition-colors">
                0177 / 123 45 67
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2024 Serviceplus Entrümplungen. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="#" className="hover:text-white transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
