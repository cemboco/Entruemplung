import { ArrowRight, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/ChatGPT Image 5. Nov. 2025, 21_16_33.png"
          alt="Professionelle Entrümpelung Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-midnight mb-8 leading-tight tracking-tight">
              <span className="block font-bold mb-2">
                Serviceplus
              </span>
              Professionelle
              <span className="block font-normal mt-2">
                Entrümpelung
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 font-light">
              Stuttgart & Umgebung
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#kontakt"
                className="group bg-midnight text-white px-10 py-5 rounded-full font-medium text-base hover:bg-midnight-dark transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Kostenlose Beratung
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="tel:+4915560850344"
                className="bg-white border border-gray-300 text-midnight px-10 py-5 rounded-full font-medium text-base hover:border-gray-400 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Phone size={18} />
                0155-60850344
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

          <div
            className={`hidden lg:block relative transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/ChatGPT Image 5. Nov. 2025, 21_16_33.png"
                alt="Professionelle Entrümpelung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
