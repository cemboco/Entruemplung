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
    <section id="leistungen" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-secondary-light max-w-2xl mx-auto">
            Von der Wohnungsauflösung bis zur Gewerbe-Entrümpelung - wir bieten den kompletten Service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-secondary-light leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">24-Stunden Express-Service</h3>
              <p className="text-gray-200 text-lg">
                Notfall? Wir sind auch am Wochenende und an Feiertagen für Sie da!
              </p>
            </div>
            <a
              href="#kontakt"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap hover:scale-105 shadow-xl"
            >
              Jetzt anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
