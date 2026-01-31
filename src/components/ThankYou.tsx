import { CheckCircle, Phone, Mail, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { trackConversion } from '../utils/analytics';
import PageMeta from './PageMeta';

export default function ThankYou() {
  useEffect(() => {
    trackConversion();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <PageMeta
        title="Vielen Dank für Ihre Anfrage | ServicePlus Stuttgart"
        description="Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden zurück. ServicePlus Stuttgart - Professionelle Entrümpelung."
        canonical="https://serviceplus-entruempelung.de/danke/"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-midnight mb-6">
            Vielen Dank für Ihre Anfrage!
          </h1>

          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Wir haben Ihre Nachricht erfolgreich erhalten und melden uns innerhalb der nächsten 24 Stunden bei Ihnen.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-8">
          <h2 className="text-2xl font-light text-midnight mb-6">
            Wie geht es jetzt weiter?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-midnight text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <div>
                <h3 className="font-medium text-midnight mb-1">Prüfung Ihrer Anfrage</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Wir prüfen Ihre Anfrage und bereiten ein maßgeschneidertes Angebot für Sie vor.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-midnight text-white rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <div>
                <h3 className="font-medium text-midnight mb-1">Persönliche Kontaktaufnahme</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Innerhalb von 24 Stunden nehmen wir telefonisch oder per E-Mail Kontakt mit Ihnen auf.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-midnight text-white rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <div>
                <h3 className="font-medium text-midnight mb-1">Kostenlose Vor-Ort-Besichtigung</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Bei Bedarf vereinbaren wir einen Termin für eine kostenlose Besichtigung vor Ort.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-midnight text-white rounded-full flex items-center justify-center text-sm font-medium">
                4
              </div>
              <div>
                <h3 className="font-medium text-midnight mb-1">Verbindliches Angebot</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Sie erhalten ein transparentes, unverbindliches Festpreisangebot ohne versteckte Kosten.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-midnight text-white rounded-2xl p-8 sm:p-10 mb-8">
          <h2 className="text-2xl font-light mb-6">
            Dringender Bedarf?
          </h2>
          <p className="text-gray-200 font-light leading-relaxed mb-6">
            Wenn es eilig ist, rufen Sie uns direkt an. Wir sind für Sie da und können in vielen Fällen kurzfristige Termine anbieten.
          </p>

          <div className="space-y-4">
            <a
              href="tel:+4915732649483"
              className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-300 font-light">24h Express-Hotline</div>
                <div className="text-xl font-medium">01573 2649483</div>
              </div>
            </a>

            <a
              href="mailto:info@serviceplus-entruempelung.de"
              className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-300 font-light">E-Mail</div>
                <div className="text-base font-medium break-all">info@serviceplus-entruempelung.de</div>
              </div>
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white text-midnight px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 shadow-sm border border-gray-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
