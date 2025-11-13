import { Shield, Clock, Award, Users, Leaf, Euro, FileCheck, Handshake, Lock } from 'lucide-react';

const trustFactors = [
  {
    icon: Shield,
    title: 'Vollversichert & Zertifiziert',
    description: 'Betriebshaftpflichtversicherung bis 5 Mio. € und zertifizierter Entsorgungsfachbetrieb nach §56 KrWG',
  },
  {
    icon: Clock,
    title: 'Pünktlich & Zuverlässig',
    description: 'Termintreue ist unser Versprechen - 98% unserer Aufträge erfolgen termingerecht',
  },
  {
    icon: Award,
    title: 'Erfahren & Kompetent',
    description: 'Über 5.000 erfolgreiche Entrümpelungen in Stuttgart und Umgebung',
  },
  {
    icon: Users,
    title: 'Geschultes Fachpersonal',
    description: 'IHK-geprüfte Fachkräfte mit Spezialausbildung in Entsorgung, Recycling und Gefahrgut',
  },
  {
    icon: Leaf,
    title: 'Umweltzertifiziert',
    description: 'ISO 14001 zertifiziert - fachgerechte Trennung und umweltfreundliche Entsorgung',
  },
  {
    icon: Euro,
    title: 'Transparente Festpreise',
    description: 'Kostenlose Besichtigung und Festpreis-Garantie ohne versteckte Kosten',
  },
  {
    icon: FileCheck,
    title: 'Entsorgungsnachweise',
    description: 'Lückenlose Dokumentation und offizielle Entsorgungsnachweise für alle Materialien',
  },
  {
    icon: Handshake,
    title: 'Lokaler Partner',
    description: 'Familienunternehmen aus Stuttgart - persönlich, regional und vertrauenswürdig',
  },
  {
    icon: Lock,
    title: 'Diskretion garantiert',
    description: 'Verschwiegenheitserklärung und absolute Diskretion - besonders bei sensiblen Aufträgen',
  },
];

export default function Trust() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Warum Serviceplus vertrauen?
          </h2>
          <p className="text-lg sm:text-xl text-secondary-light max-w-2xl mx-auto">
            Qualität und Zuverlässigkeit seit über 15 Jahren - darauf können Sie sich verlassen
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 sm:p-8 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">{factor.title}</h3>
                <p className="text-sm sm:text-base text-secondary-light leading-relaxed">{factor.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
              Kundenstimmen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Familie Müller',
                  location: 'Stuttgart-West',
                  rating: 5,
                  text: 'Absolut professionelle Arbeit! Die Wohnungsauflösung nach dem Tod meiner Mutter wurde sehr einfühlsam durchgeführt. Faire Preise und pünktliche Abwicklung.',
                },
                {
                  name: 'Thomas K.',
                  location: 'Esslingen',
                  rating: 5,
                  text: 'Schneller Service, faire Wertanrechnung für die alten Möbel. Das Team war freundlich und hat alles besenrein hinterlassen. Absolut empfehlenswert!',
                },
                {
                  name: 'Sandra W.',
                  location: 'Stuttgart-Süd',
                  rating: 5,
                  text: 'Kurzfristig einen Termin bekommen und die Entrümpelung wurde top durchgeführt. Preis-Leistung stimmt absolut. Vielen Dank!',
                },
                {
                  name: 'Immobilien GmbH',
                  location: 'Ludwigsburg',
                  rating: 5,
                  text: 'Zuverlässiger Partner für unsere Gewerbe-Objekte. Termine werden eingehalten und die Abwicklung ist immer reibungslos. Gerne wieder!',
                },
              ].map((review, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-secondary-light mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-primary">{review.name}</p>
                    <p className="text-sm text-secondary-light">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
