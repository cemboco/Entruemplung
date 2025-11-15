import { MapPin, CheckCircle } from 'lucide-react';

const regions = [
  'Stuttgart-Mitte',
  'Stuttgart-West',
  'Stuttgart-Süd',
  'Stuttgart-Nord',
  'Stuttgart-Ost',
  'Bad Cannstatt',
  'Esslingen',
  'Ludwigsburg',
  'Böblingen',
  'Sindelfingen',
  'Waiblingen',
  'Fellbach',
  'Kornwestheim',
  'Leonberg',
  'Filderstadt',
  'Ostfildern',
];

export default function Coverage() {
  return (
    <section className="py-20 bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Design ohne Titel.png"
                alt="Serviceplus Entrümpelung Transporter"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6">
              <MapPin size={20} />
              <span className="font-semibold">Unser Einzugsgebiet</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6 leading-tight">
              In ganz Stuttgart und Umgebung für Sie da
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              Mit unserem Firmensitz in Stuttgart sind wir Ihr lokaler Partner für professionelle
              Entrümpelungen. Wir kennen die Region und garantieren schnelle Anfahrtszeiten
              innerhalb eines 30 km Radius.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Schnelle Reaktionszeiten durch lokale Präsenz',
                'Kenntnis der regionalen Entsorgungsstellen',
                'Flexible Terminvereinbarung auch kurzfristig',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-300 text-lg font-light">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-block bg-white text-midnight px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Jetzt Verfügbarkeit prüfen
            </a>

            <div className="mt-12 pt-8 border-t border-white/20">
              <h3 className="text-2xl font-light text-white mb-6">Wir sind aktiv in:</h3>
              <div className="grid grid-cols-2 gap-4">
                {regions.map((region, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-light">{region}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm font-light">
                  Weitere Orte in der Region Stuttgart auf Anfrage. Rufen Sie uns an!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
