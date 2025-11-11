import { ArrowRight, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Professionelle
            <span className="block font-normal mt-2">
              Entrümpelung
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Stuttgart & Umgebung
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#kontakt"
              className="group bg-gray-900 text-white px-10 py-5 rounded-full font-medium text-base hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              Kostenlose Beratung
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="tel:+4971112345678"
              className="bg-white border border-gray-300 text-gray-900 px-10 py-5 rounded-full font-medium text-base hover:border-gray-400 transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={18} />
              0711 / 123 456 78
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-gray-200">
            {[
              { number: '24h', label: 'Express-Service' },
              { number: '100%', label: 'Zufriedenheit' },
              { number: '100%', label: 'Nachhaltig & Umweltfreundlich' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="w-6 h-10 border border-gray-300 rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
