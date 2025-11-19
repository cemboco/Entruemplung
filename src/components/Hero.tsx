import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/Serviceplus_Entruempelung_stuttgart_Baden_wuerttemberg.png"
          alt="ServicePlus Entrümpelung Stuttgart - Professionelles Team bei Haushaltsauflösung und Wohnungsräumung"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-midnight mb-4 leading-tight tracking-tight">
              ServicePlus Entrümpelung GbR
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-midnight mb-6 leading-tight">
              Entrümpelung & Räumung - Professionell, günstig & nachhaltig
            </h2>

            <div className="mb-10 max-w-3xl">
              <p className="text-base sm:text-lg md:text-xl text-gray-900 font-normal leading-relaxed border-2 border-gray-300 rounded-lg p-6 bg-white/80 backdrop-blur-sm shadow-md">
                Schnelle und diskrete Entrümpelung in Stuttgart. Wohnungen, Keller, Haushaltsauflösungen – fair, zuverlässig, besenrein. Jetzt kostenlose Beratung oder Schnellanfrage sichern.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-4xl">
              <a
                href="#kontakt"
                className="group bg-midnight text-white px-8 py-5 rounded-full font-medium text-base hover:bg-midnight-dark transition-all duration-300 flex items-center gap-3 justify-center shadow-lg"
              >
                Kostenlose Beratung
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="tel:+4915560850344"
                className="bg-white border-2 border-midnight text-midnight px-8 py-5 rounded-full font-medium text-base hover:bg-midnight hover:text-white transition-all duration-300 flex items-center gap-3 justify-center shadow-lg"
              >
                <Phone size={20} />
                0155-60850344
              </a>
              <a
                href="mailto:info@serviceplus-entruempelung.de"
                className="bg-white border border-gray-300 text-midnight px-8 py-5 rounded-full font-medium text-base hover:border-gray-400 transition-all duration-300 flex items-center gap-3 justify-center shadow-lg"
              >
                <Mail size={20} />
                info@serviceplus-entruempelung.de
              </a>
              <a
                href="#schnellanfrage"
                className="bg-gray-100 text-midnight px-8 py-5 rounded-full font-medium text-base hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 justify-center shadow-lg"
              >
                <MessageSquare size={20} />
                Schnellanfrage
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-gray-200">
              {[
                { number: '24h', label: 'Express-Service' },
                { number: '100%', label: 'Zufriedenheit' },
                { number: '100%', label: 'Nachhaltig & Umweltbewusst' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-light text-midnight mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
