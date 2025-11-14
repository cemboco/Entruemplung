import { Clock, MapPin, Users, Shield, Heart, Handshake } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Clock,
      title: 'Meist innerhalb weniger Minuten vor Ort',
    },
    {
      icon: MapPin,
      title: 'Regional verwurzelt in Stuttgart und Umgebung',
    },
    {
      icon: Users,
      title: 'Persönlicher Service - kein Callcenter',
    },
  ];

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

  return (
    <section id="ueber-uns" className="py-20 bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Über Uns</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wir, das sind Cemil und Jermaine, sind ein junges Team aus Stuttgart, das anpackt, wo andere zögern.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl">
          <p className="text-xl text-center text-gray-700 mb-12 leading-relaxed">
            Ob Entrümpelung, Haushaltsauflösung oder Messie-Wohnung - wir schaffen Platz. Auf Wunsch vermitteln wir auch frei gewordene Wohnungen.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-midnight/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-midnight" size={32} />
                  </div>
                  <p className="text-gray-700 font-medium">{feature.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
