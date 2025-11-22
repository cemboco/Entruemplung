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
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-midnight/60 mb-4 font-medium">
            About Us
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-midnight mb-8 tracking-tight">
            Über Uns
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Wir, das sind Cemil und Jermaine, sind ein junges Team aus Stuttgart, das anpackt, wo andere zögern.
          </p>
        </div>

        <div
          className={`bg-white rounded-3xl p-10 sm:p-14 md:p-16 mb-16 shadow-lg border border-gray-100 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed mb-8 text-center">
              Ob Entrümpelung, Haushaltsauflösung oder Messie-Wohnung - wir schaffen Platz.
              Auf Wunsch vermitteln wir auch frei gewordene Wohnungen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="mb-4 p-4 bg-midnight/5 rounded-2xl group-hover:bg-midnight/10 transition-colors duration-300">
                      <Icon className="text-midnight" size={28} strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-midnight/60 mb-4 font-medium">
              Values
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight tracking-tight">
              Unsere Werte
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-midnight/20 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100 + 600}ms` : '0ms',
                  }}
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-midnight/5 rounded-xl flex items-center justify-center group-hover:bg-midnight/10 transition-colors duration-300">
                      <Icon className="text-midnight" size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-midnight mb-4 group-hover:text-midnight/80 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`bg-gradient-to-br from-midnight via-midnight to-midnight/90 rounded-3xl p-10 sm:p-14 md:p-16 text-white text-center relative overflow-hidden transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <Handshake size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Unser Versprechen
            </h3>
            <p className="text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto text-gray-300">
              Am Ende zählt nur eines: Ihre Zufriedenheit. Jeder Auftrag wird mit der gleichen Sorgfalt behandelt,
              egal ob 20m² Keller oder 300m² Gewerbe. Mit Respekt, Diskretion und Verlässlichkeit
              verwandeln wir überladene Räume in neue Möglichkeiten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
