import { Home, Trash2, Package, Truck, Briefcase, Recycle, Building2, Warehouse, Sofa } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Haushaltsauflösungen',
    description: 'Komplette Wohnungsauflösungen nach Todesfall, Umzug oder bei Pflegebedürftigkeit. Wir übernehmen die gesamte Abwicklung inklusive Verwertung, Entsorgung und besenreiner Übergabe.',
    features: ['Komplette Abwicklung', 'Diskrete Durchführung', 'Termingerechte Übergabe'],
  },
  {
    icon: Trash2,
    title: 'Entrümpelungen',
    description: 'Professionelle Entrümpelung von Kellern, Dachböden, Garagen und Scheunen. Auch bei stark vermüllten Objekten sind wir der richtige Partner.',
    features: ['Alle Räumlichkeiten', 'Schwer zugängliche Bereiche', 'Fachgerechte Entsorgung'],
  },
  {
    icon: Package,
    title: 'Messie-Wohnungen',
    description: 'Einfühlsame und diskrete Reinigung von Messie-Wohnungen. Unser geschultes Team arbeitet respektvoll und verständnisvoll.',
    features: ['Diskretion garantiert', 'Geschultes Personal', 'Geruchsbeseitigung'],
  },
  {
    icon: Truck,
    title: 'Sperrmüll-Abholung',
    description: 'Schnelle und unkomplizierte Abholung von Sperrmüll, Altmöbeln und Elektrogeräten. Wir holen direkt bei Ihnen ab - ohne Wartezeit.',
    features: ['Flexible Termine', 'Sofort-Abholung möglich', 'Faire Preise'],
  },
  {
    icon: Briefcase,
    title: 'Gewerbe-Entrümpelung',
    description: 'Effiziente Räumung von Büros, Praxen, Geschäftsräumen und Lagerhallen. Auch außerhalb der Geschäftszeiten möglich.',
    features: ['Termingerechte Abwicklung', 'Wochenend-Service', 'Minimale Betriebsunterbrechung'],
  },
  {
    icon: Building2,
    title: 'Immobilienräumung',
    description: 'Spezialservice für Hausverwaltungen und Immobilienmakler. Schnelle Objektfreimachung für Neuvermietung oder Verkauf.',
    features: ['Express-Service', 'Besenreine Übergabe', 'Direkte Abrechnung'],
  },
  {
    icon: Warehouse,
    title: 'Keller & Dachboden',
    description: 'Professionelle Entrümpelung von vollgestellten Kellern und Dachböden. Inklusive Entsorgung von Sondermüll und Schadstoffen.',
    features: ['Auch schwer zugänglich', 'Sondermüll-Entsorgung', 'Staubfreie Arbeit'],
  },
  {
    icon: Sofa,
    title: 'Möbel-Entsorgung',
    description: 'Fachgerechte Entsorgung von Altmöbeln, Küchen, Sofas und kompletten Einrichtungen. Mit Wertanrechnung für gut erhaltene Stücke.',
    features: ['Wertanrechnung möglich', 'Umweltgerechte Entsorgung', 'Auch Einzelstücke'],
  },
  {
    icon: Recycle,
    title: 'Wertanrechnung',
    description: 'Verwertbare Möbel, Antiquitäten und Gegenstände werden von unseren Experten fair bewertet und vom Gesamtpreis abgezogen.',
    features: ['Faire Bewertung', 'Sofortige Verrechnung', 'Maximale Ersparnis'],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light italic">
            "Wir räumen auf - Sie atmen auf"
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-midnight mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Von der Wohnungsauflösung bis zur Gewerbe-Entrümpelung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-10 hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="mb-6">
                  <Icon className="text-midnight" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-midnight mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm font-light mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-500 font-light">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-midnight rounded-none p-8 sm:p-12 md:p-16 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">24-Stunden Express-Service</h3>
          <p className="text-gray-300 text-base sm:text-lg font-light mb-8 max-w-2xl mx-auto">
            Notfall? Wir sind auch am Wochenende und an Feiertagen für Sie da
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#kontakt"
              className="inline-block bg-white text-midnight px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-gray-100 transition-all duration-300"
            >
              Jetzt anfragen
            </a>
            <a
              href="#preise"
              className="inline-block bg-transparent border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-white hover:text-midnight transition-all duration-300"
            >
              Schnellanfrage starten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
