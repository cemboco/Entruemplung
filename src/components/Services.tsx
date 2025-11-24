import { Home, Trash2, Package, Truck, Briefcase, Recycle, Building2, Warehouse, Sofa } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="leistungen" className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-midnight/60 mb-4 font-medium">
            Services
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-midnight mb-8 tracking-tight">
            Unsere Leistungen
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 font-light italic max-w-2xl mx-auto">
            "Wir räumen auf - Sie atmen auf"
          </p>

          <div
            className={`text-base sm:text-lg text-gray-600 max-w-4xl mx-auto font-light leading-relaxed space-y-6 mt-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
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

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="/Bildschirmfoto 2025-11-19 um 23.08.07.png"
              alt=""
              className="w-auto h-auto max-w-full max-h-full object-contain opacity-20"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-midnight/20 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100 + 400}ms` : '0ms',
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-midnight/5 rounded-xl flex items-center justify-center group-hover:bg-midnight/10 transition-colors duration-300">
                      <Icon className="text-midnight" size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-midnight mb-4 group-hover:text-midnight/80 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-light mb-6 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-4 border-t border-gray-100">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 font-light">
                        <div className="w-1.5 h-1.5 bg-midnight/40 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          </div>
        </div>

        <div
          className={`mt-24 bg-gradient-to-br from-midnight via-midnight to-midnight/90 rounded-3xl p-12 sm:p-16 md:p-20 text-white text-center relative overflow-hidden transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Express-Service
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              24-Stunden Verfügbarkeit
            </h3>
            <p className="text-gray-300 text-base sm:text-lg font-light mb-10 max-w-2xl mx-auto">
              Notfall? Wir sind auch am Wochenende und an Feiertagen für Sie da
            </p>
            <a
              href="#schnellanfrage"
              className="inline-block bg-white text-midnight px-10 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Jetzt zur kostenlosen Schnellanfrage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
