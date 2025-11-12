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
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-midnight mb-6">
            Erfolgsgeschichten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Über 5.000 zufriedene Kunden vertrauen auf unsere Expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gray-200 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-10 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-medium text-midnight mb-1">{project.type}</h3>
                  <p className="text-sm text-gray-500 font-light">{project.location}</p>
                </div>
                <CheckCircle className="text-midnight" size={24} strokeWidth={1.5} />
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm font-light">{project.description}</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="border-l border-gray-200 pl-4">
                  <div className="text-lg font-medium text-midnight mb-1">{project.size}</div>
                  <div className="text-xs text-gray-500 font-light">Fläche</div>
                </div>
                <div className="border-l border-gray-200 pl-4">
                  <div className="text-lg font-medium text-gray-900 mb-1">{project.volume}</div>
                  <div className="text-xs text-gray-500 font-light">Volumen</div>
                </div>
                <div className="border-l border-gray-200 pl-4">
                  <div className="text-lg font-medium text-gray-900 mb-1">{project.duration}</div>
                  <div className="text-xs text-gray-500 font-light">Dauer</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gray-200">
          {[
            {
              icon: CheckCircle,
              stat: '98%',
              label: 'Termingerechte Fertigstellung',
            },
            {
              icon: Clock,
              stat: '< 24h',
              label: 'Durchschnittliche Reaktionszeit',
            },
            {
              icon: TrendingUp,
              stat: '5.000+',
              label: 'Erfolgreich abgeschlossene Projekte',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="text-center p-12 bg-white"
              >
                <div className="mb-4">
                  <Icon className="text-midnight mx-auto" size={28} strokeWidth={1.5} />
                </div>
                <div className="text-3xl font-light text-midnight mb-2">{item.stat}</div>
                <div className="text-sm text-gray-600 font-light">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
