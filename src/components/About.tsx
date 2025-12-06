import { Heart, Shield, Users, Clock, MapPin, Handshake } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
    <section id="about" className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-midnight/60 mb-3 font-medium">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-midnight mb-6">
            Über Uns
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-light mb-8">
            Wir, das sind Cemil und Jermaine, sind ein junges Team aus Stuttgart, das anpackt, wo andere zögern.
          </p>

          <div className="max-w-4xl mx-auto mb-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/stuttgart-entrümpelung-serviceplus.png"
                alt="ServicePlus Entrümpelung Team in Stuttgart - Cemil und Jermaine mit Transporter"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-2xl p-8 mb-10 shadow-sm border border-gray-100 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 font-light text-center mb-8">
              Ob Entrümpelung, Haushaltsauflösung oder Messie-Wohnung - wir schaffen Platz.
              Auf Wunsch vermitteln wir auch frei gewordene Wohnungen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="mb-3 p-3 bg-midnight/5 rounded-xl">
                      <Icon className="text-midnight" size={24} strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-gray-600 font-light">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div
            className={`text-center mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-midnight/60 mb-3 font-medium">
              Values
            </p>
            <h3 className="text-2xl sm:text-3xl font-light text-midnight">
              Unsere Werte
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100 + 600}ms` : '0ms',
                  }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-midnight/5 rounded-lg flex items-center justify-center">
                      <Icon className="text-midnight" size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`bg-midnight rounded-2xl p-8 text-white text-center transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
            <Handshake size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-light mb-4">
            Unser Versprechen
          </h3>
          <p className="text-sm font-light leading-relaxed max-w-2xl mx-auto text-gray-300">
            Am Ende zählt nur eines: Ihre Zufriedenheit. Jeder Auftrag wird mit der gleichen Sorgfalt behandelt,
            egal ob 20m² Keller oder 300m² Gewerbe. Mit Respekt, Diskretion und Verlässlichkeit
            verwandeln wir überladene Räume in neue Möglichkeiten.
          </p>
        </div>
      </div>
    </section>
  );
}
