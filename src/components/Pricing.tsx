import { Check, ArrowRight } from 'lucide-react';
import QuickQuote from './QuickQuote';

const packages = [
  {
    name: 'Basis',
    price: 'ab 399',
    description: 'Perfekt für kleinere Entrümpelungen',
    features: [
      'Bis zu 10 m³ Volumen',
      'Professionelle Entsorgung',
      'Besenreine Übergabe',
      'Inkl. Transport & Entsorgung',
      'Wertanrechnung möglich',
    ],
    popular: false,
  },
  {
    name: 'Komfort',
    price: 'ab 699',
    description: 'Ideal für Wohnungsauflösungen',
    features: [
      'Bis zu 30 m³ Volumen',
      'Komplette Wohnungsauflösung',
      'Besenreine Übergabe',
      'Inkl. Transport & Entsorgung',
      'Wertanrechnung garantiert',
      'Termingarantie',
      'Express-Service verfügbar',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 'ab 1.299',
    description: 'Für große Objekte & Gewerbe',
    features: [
      'Unbegrenztes Volumen',
      'Gewerbe & Privat',
      'Besenreine Übergabe',
      'Inkl. Transport & Entsorgung',
      'Maximale Wertanrechnung',
      'Termingarantie',
      '24h Express-Service',
      'Samstags ohne Aufpreis',
      'Persönlicher Ansprechpartner',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="preise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Transparente Preise
          </h2>
          <p className="text-lg sm:text-xl text-secondary-light max-w-2xl mx-auto">
            Faire Festpreise ohne versteckte Kosten. Kostenlose Besichtigung und Angebot vor Ort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? 'border-primary sm:scale-105 sm:hover:scale-110'
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                <p className="text-secondary-light mb-6 min-h-[3rem]">{pkg.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-4xl sm:text-5xl font-bold text-primary">{pkg.price}€*</span>
                    <span className="text-secondary-light text-sm">Festpreis</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 min-h-[280px]">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-secondary text-sm leading-relaxed break-words">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                  }`}
                >
                  Jetzt buchen
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-secondary-light text-sm">
            * Festpreis zzgl. Anfahrt und eventuelle Zusatzleistungen
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12 mt-12">
          <QuickQuote />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all duration-300"
          >
            Individuelles Angebot anfordern
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
