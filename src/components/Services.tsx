import { Home, Trash2, Package, Truck, Briefcase, Recycle, Building2, Warehouse, Sofa, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const bounded = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(bounded);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

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

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

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

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div
            className={`text-base sm:text-lg text-gray-600 font-light leading-relaxed space-y-6 transition-all duration-1000 delay-200 ${
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
          </div>

          <div
            ref={containerRef}
            className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl select-none"
            style={{ touchAction: 'none' }}
          >
            <img
              src="/vorher.jpg"
              alt="Vorher - Leerer Raum"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/nachher.jpg"
                alt="Nachher - Eingerichteter Raum"
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform"
                onMouseDown={handleMouseDown}
                onTouchStart={() => setIsDragging(true)}
              >
                <ChevronLeft className="w-5 h-5 text-midnight absolute left-1" />
                <ChevronRight className="w-5 h-5 text-midnight absolute right-1" />
              </div>
            </div>

            <div className="absolute top-4 left-4 bg-midnight/80 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
              Vorher
            </div>
            <div className="absolute top-4 right-4 bg-gold/90 text-midnight px-3 py-1.5 rounded-lg text-xs font-medium">
              Nachher
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
