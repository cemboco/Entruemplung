import { Users, Award, Clock, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Über 10 Jahre Erfahrung in der professionellen Entrümpelung und Haushaltsauflösung',
    },
    {
      icon: Award,
      title: 'Zertifizierte Qualität',
      description: 'Geprüfte Fachbetrieb mit höchsten Standards bei Entsorgung und Recycling',
    },
    {
      icon: Clock,
      title: 'Schnell & Zuverlässig',
      description: 'Flexible Terminvereinbarung und pünktliche Ausführung - auch kurzfristig',
    },
    {
      icon: Heart,
      title: 'Mit Respekt',
      description: 'Diskrete und respektvolle Behandlung Ihrer persönlichen Gegenstände',
    },
  ];

  return (
    <section id="ueber-uns" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Über uns
          </h2>
          <p className="text-lg sm:text-xl text-secondary-light max-w-3xl mx-auto">
            Serviceplus steht für professionelle Entrümpelungen in Stuttgart und Umgebung.
            Wir sind Ihr zuverlässiger Partner für schnelle, diskrete und faire Entrümpelungen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              Ihre Experten für Entrümpelungen
            </h3>
            <div className="space-y-4 text-secondary-light leading-relaxed">
              <p>
                Seit über 10 Jahren sind wir der kompetente Ansprechpartner für alle Arten von
                Entrümpelungen im Raum Stuttgart. Ob Wohnungsauflösung, Kellerentrümpelung oder
                Geschäftsauflösung – wir erledigen jeden Auftrag professionell und zuverlässig.
              </p>
              <p>
                Unser erfahrenes Team kennt sich mit allen Herausforderungen aus und arbeitet
                stets diskret, sorgfältig und schnell. Dabei legen wir besonderen Wert auf
                umweltgerechte Entsorgung und faire Preise.
              </p>
              <p>
                Wir verstehen, dass eine Entrümpelung oft mit persönlichen oder schwierigen
                Situationen verbunden ist. Deshalb behandeln wir jeden Auftrag mit der nötigen
                Sensibilität und Respekt.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h4 className="font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-secondary-light text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-secondary-light">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">2500+</div>
              <div className="text-secondary-light">Erfolgreiche Projekte</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-secondary-light">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
