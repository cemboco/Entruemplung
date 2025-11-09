import { CheckCircle, Clock, TrendingUp } from 'lucide-react';

const projects = [
  {
    type: 'Haushaltsauflösung',
    location: 'Stuttgart-West',
    size: '120 m² Wohnung',
    duration: '1 Tag',
    volume: '45 m³',
    description: 'Komplette Wohnungsauflösung inkl. Entsorgung und besenreiner Übergabe',
  },
  {
    type: 'Gewerbe-Entrümpelung',
    location: 'Esslingen',
    size: '300 m² Bürofläche',
    duration: '2 Tage',
    volume: '80 m³',
    description: 'Büroauflösung mit Entsorgung von IT-Equipment und Möbeln',
  },
  {
    type: 'Keller-Entrümpelung',
    location: 'Ludwigsburg',
    size: '60 m² Keller',
    duration: '4 Stunden',
    volume: '20 m³',
    description: 'Vollständige Kellerentrümpelung inkl. Sondermüll-Entsorgung',
  },
  {
    type: 'Messie-Wohnung',
    location: 'Stuttgart-Süd',
    size: '85 m² Wohnung',
    duration: '1,5 Tage',
    volume: '35 m³',
    description: 'Diskrete Reinigung und professionelle Entsorgung',
  },
];

export default function Showcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Unsere Erfolgsgeschichten
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Über 5.000 zufriedene Kunden vertrauen auf unsere Expertise. Hier einige Beispiele unserer Arbeit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{project.type}</h3>
                  <p className="text-gray-300">{project.location}</p>
                </div>
                <CheckCircle className="text-green-400" size={32} />
              </div>

              <p className="text-gray-200 mb-6 leading-relaxed">{project.description}</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">{project.size}</div>
                  <div className="text-sm text-gray-300">Fläche</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">{project.volume}</div>
                  <div className="text-sm text-gray-300">Volumen</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">{project.duration}</div>
                  <div className="text-sm text-gray-300">Dauer</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: CheckCircle,
              stat: '98%',
              label: 'Termingerechte Fertigstellung',
              description: 'Wir halten unsere Zusagen ein',
            },
            {
              icon: Clock,
              stat: '< 24h',
              label: 'Durchschnittliche Reaktionszeit',
              description: 'Schnelle Hilfe wenn Sie uns brauchen',
            },
            {
              icon: TrendingUp,
              stat: '5.000+',
              label: 'Erfolgreich abgeschlossene Projekte',
              description: 'Erfahrung auf die Sie zählen können',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                  <Icon size={32} />
                </div>
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <div className="text-lg font-semibold mb-2">{item.label}</div>
                <div className="text-sm text-gray-300">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
