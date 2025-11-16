import { Heart, Shield, Users, Clock, MapPin, Handshake } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Zuverlässigkeit',
    description: 'Wir halten unsere Versprechen - termingerecht und wie vereinbart. Darauf können Sie sich verlassen.',
  },
  {
    icon: Heart,
    title: 'Freundlichkeit',
    description: 'Jeder Auftrag wird mit Respekt und Einfühlungsvermögen behandelt, besonders in schwierigen Situationen.',
  },
  {
    icon: Handshake,
    title: 'Vertrauen',
    description: 'Diskretion und Ehrlichkeit sind für uns selbstverständlich. Ihre Zufriedenheit steht an erster Stelle.',
  },
];

const features = [
  {
    icon: Clock,
    text: 'Meist innerhalb weniger Minuten vor Ort',
  },
  {
    icon: MapPin,
    text: 'Regional verwurzelt in Stuttgart und Umgebung',
  },
  {
    icon: Users,
    text: 'Persönlicher Service - kein Callcenter',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative">
          <div className="flex justify-center items-start mb-6">
            <div className="flex-1"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-midnight flex-1">
              Über Uns
            </h2>
            <div className="flex-1 flex justify-end">
              <img
                src="/Haushaltsauflösungen.png"
                alt="Haushaltsauflösungen Team"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg"
              />
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Wir, das sind Cemil und Jermaine, sind ein junges Team aus Stuttgart, das anpackt, wo andere zögern.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 md:p-16 mb-16 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed mb-8 text-center">
              Ob Entrümpelung, Haushaltsauflösung oder Messie-Wohnung - wir schaffen Platz.
              Auf Wunsch vermitteln wir auch frei gewordene Wohnungen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-gray-50 rounded-full">
                      <Icon className="text-midnight" size={24} strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-gray-600 font-light">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-light text-midnight mb-12 text-center">
            Unsere Werte
          </h3>
          <div className="grid sm:grid-cols-3 gap-px bg-gray-200">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 sm:p-10 hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="mb-6">
                    <Icon className="text-midnight" size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-medium text-midnight mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-midnight text-white rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-light mb-6">
            Unser Versprechen
          </h3>
          <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto opacity-90">
            Am Ende zählt nur eines: Ihre Zufriedenheit. Jeder Auftrag wird mit der gleichen Sorgfalt behandelt,
            egal ob 20m² Keller oder 300m² Gewerbe. Mit Respekt, Diskretion und Verlässlichkeit
            verwandeln wir überladene Räume in neue Möglichkeiten.
          </p>
        </div>
      </div>
    </section>
  );
}
