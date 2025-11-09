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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MapPin size={20} />
              <span className="font-semibold">Unser Einzugsgebiet</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              In ganz Stuttgart und Umgebung für Sie da
            </h2>

            <p className="text-xl text-secondary-light mb-8 leading-relaxed">
              Mit unserem Firmensitz in Stuttgart sind wir Ihr lokaler Partner für professionelle
              Entrümpelungen. Wir kennen die Region und garantieren schnelle Anfahrtszeiten
              innerhalb eines 30 km Radius.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Kostenlose Anfahrt im gesamten Stadtgebiet Stuttgart',
                'Schnelle Reaktionszeiten durch lokale Präsenz',
                'Kenntnis der regionalen Entsorgungsstellen',
                'Flexible Terminvereinbarung auch kurzfristig',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-secondary text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Jetzt Verfügbarkeit prüfen
            </a>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Wir sind aktiv in:</h3>
              <div className="grid grid-cols-2 gap-4">
                {regions.map((region, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">{region}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-secondary-light text-sm">
                  Weitere Orte in der Region Stuttgart auf Anfrage. Rufen Sie uns an!
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
