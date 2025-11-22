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
    <section id="leistungen" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light italic">
            "Wir räumen auf - Sie atmen auf"
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-midnight mb-6">
            Unsere Leistungen
          </h2>
          <div className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto font-light leading-relaxed space-y-4">
            <p>
              Zeit ist kostbar - besonders wenn eine Wohnung <strong className="font-semibold text-midnight">schnell geräumt</strong> werden muss. Ob für die <strong className="font-semibold text-midnight">Neuvermietung einer Immobilie</strong>, nach einer Räumungsklage oder weil der Umzugstermin näher rückt: In solchen Situationen benötigen Sie einen Partner, der <strong className="font-semibold text-midnight">schnell, professionell und zuverlässig</strong> handelt. Genau hier setzen wir an.
            </p>
            <p>
              Unser Leistungsspektrum umfasst <strong className="font-semibold text-midnight">9 spezialisierte Dienstleistungen</strong>: Von der kompletten <strong className="font-semibold text-midnight">Haushaltsauflösung mit Wertanrechnung</strong> über die diskrete Bearbeitung von <strong className="font-semibold text-midnight">Messie-Wohnungen</strong> bis zur effizienten <strong className="font-semibold text-midnight">Gewerbeentrümpelung außerhalb der Geschäftszeiten</strong>. Jeder Auftrag wird individuell geplant und von unserem <strong className="font-semibold text-midnight">geschulten Fachteam</strong> durchgeführt - schnell, zuverlässig und zu <strong className="font-semibold text-midnight">transparenten Festpreisen</strong>.
            </p>
            <p>
              Dabei übernehmen wir nicht nur den reinen Abtransport: Wir kümmern uns um die <strong className="font-semibold text-midnight">fachgerechte Entsorgung</strong>, trennen verwertbare Materialien, berücksichtigen Sondermüll und Schadstoffe und übergeben Ihre Räumlichkeiten <strong className="font-semibold text-midnight">besenrein</strong>. Gut erhaltene Möbel, Antiquitäten und Wertgegenstände werden fair bewertet und vom Gesamtpreis abgezogen. So sparen Sie Kosten und handeln nachhaltig.
            </p>
            <p>
              Besonders wichtig ist uns der <strong className="font-semibold text-midnight">sensible Umgang mit emotionalen Situationen</strong>. Bei Haushaltsauflösungen nach Todesfällen arbeiten wir mit großem <strong className="font-semibold text-midnight">Einfühlungsvermögen und Diskretion</strong>. Wertvolle Erinnerungsstücke werden sorgfältig aussortiert und Ihnen übergeben. Bei Messie-Wohnungen garantieren wir <strong className="font-semibold text-midnight">absolute Verschwiegenheit</strong> - kein Aufsehen, keine neugierigen Blicke der Nachbarn.
            </p>
            <p>
              Was uns auszeichnet: <strong className="font-semibold text-midnight">Transparente Kalkulation mit Festpreisgarantie</strong>, keine versteckten Kosten, fachgerechte Entsorgung nach allen Vorschriften und ein eingespieltes Team, das diskret, respektvoll und effizient arbeitet. Mit moderner Ausrüstung, ausreichend Personal und jahrelanger Erfahrung schaffen wir auch große Projekte in kürzester Zeit.
            </p>
            <p>
              Wir erstellen Ihnen <strong className="font-semibold text-midnight">innerhalb von 24 Stunden ein kostenloses und unverbindliches Angebot</strong> - nach Besichtigung vor Ort oder auf Basis Ihrer Fotos und Angaben. Dabei beraten wir Sie ehrlich: Manchmal können Sie durch Eigenleistung Kosten sparen, manchmal ist der Komplettservice die wirtschaftlichere Lösung. Wir finden gemeinsam den besten Weg für Ihre Situation.
            </p>
            <p>
              Rufen Sie uns an oder nutzen Sie unsere Schnellanfrage. Unser freundliches Team beantwortet Ihre Fragen und vereinbart gerne einen unverbindlichen Besichtigungstermin - auch <strong className="font-semibold text-midnight">kurzfristig am selben oder nächsten Tag</strong>.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Icon className="text-midnight" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
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
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-midnight p-12 sm:p-16 md:p-20 text-white text-center -mx-4 sm:-mx-6 lg:-mx-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">24-Stunden Express-Service</h3>
          <p className="text-gray-300 text-base sm:text-lg font-light mb-10 max-w-2xl mx-auto">
            Notfall? Wir sind auch am Wochenende und an Feiertagen für Sie da
          </p>
          <a
            href="#schnellanfrage"
            className="inline-block bg-white text-midnight px-12 sm:px-14 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Jetzt zur kostenlosen Schnellanfrage
          </a>
        </div>
      </div>
    </section>
  );
}
