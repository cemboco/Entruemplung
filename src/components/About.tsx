import { Heart, Shield, Users, Clock, MapPin, Handshake, CheckCircle2 } from 'lucide-react';
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
    <section id="about" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hauptbereich: Split Layout (Links Text, Rechts Bild) */}
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Linke Spalte: Text */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <p className="text-xs uppercase tracking-[0.3em] text-midnight/60 mb-3 font-medium">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-midnight mb-6 leading-tight">
              Über Uns
            </h2>
            
            <div className="prose prose-lg text-gray-600 font-light mb-8">
              <p className="mb-4 text-lg">
                Wir, das sind <span className="font-medium text-midnight">Cemil und Jermaine</span>, sind ein junges Team aus Stuttgart, das anpackt, wo andere zögern.
              </p>
              <p>
                Ob Entrümpelung, Haushaltsauflösung oder Messie-Wohnung – wir schaffen Platz. 
                Auf Wunsch vermitteln wir auch frei gewordene Wohnungen direkt weiter.
              </p>
            </div>

            {/* Features Liste (jetzt vertikal unter dem Text) */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center shadow-sm text-midnight">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-gray-700 font-light">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rechte Spalte: Bild */}
          <div className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Dekorativer Hintergrund-Rahmen */}
            <div className="absolute inset-0 bg-midnight/5 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
            
            {/* Das Bild - Hier bitte DEIN Bild einfügen */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop" 
                alt="Das Serviceplus Team bei der Arbeit" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Werte Bereich */}
        <div className="mb-10">
          <div
            className={`text-center mb-10 transition-all duration-1000 delay-300 ${
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
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 150 + 400}ms` : '0ms',
                  }}
                >
                  <div className="mb-5">
                    <div className="w-14 h-14 bg-midnight/5 rounded-xl flex items-center justify-center group-hover:bg-midnight group-hover:text-white transition-colors duration-300">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-midnight mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600 font-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Versprechen Box */}
        <div
          className={`bg-midnight rounded-2xl p-8 md:p-12 text-white text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Handshake size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-light mb-4">
            Unser Versprechen
          </h3>
          <p className="text-base font-light leading-relaxed max-w-2xl mx-auto text-gray-300">
            Am Ende zählt nur eines: Ihre Zufriedenheit. Jeder Auftrag wird mit der gleichen Sorgfalt behandelt,
            egal ob 20m² Keller oder 300m² Gewerbe. Mit Respekt, Diskretion und Verlässlichkeit
            verwandeln wir überladene Räume in neue Möglichkeiten.
          </p>
        </div>
      </div>
    </section>
  );
}
