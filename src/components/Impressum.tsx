import { ArrowLeft, MapPin, Phone, Mail } from 'lucide-react';

interface ImpressumProps {
  onBack: () => void;
}

export default function Impressum({ onBack }: ImpressumProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-midnight hover:text-midnight-dark transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-light">Zurück zur Startseite</span>
        </button>

        <h1 className="text-4xl font-light text-midnight mb-8">Impressum</h1>

        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2 text-gray-700 font-light">
              <p className="font-medium">Serviceplus Entrümpelung GbR</p>
              <p>Geschäftsführer und Gesellschafter: Cemil Bocohonsi, Jermaine Anderson</p>
              <p>Karlsbaderweg 5</p>
              <p>73652 Welzheim</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">Kontakt</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={18} className="text-midnight" />
                <a href="tel:+4915560850344" className="hover:text-midnight transition-colors">
                  0155-60850344
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-midnight" />
                <a href="mailto:info@serviceplus-entruempelung.de" className="hover:text-midnight transition-colors">
                  info@serviceplus-entruempelung.de
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <div className="text-gray-700 font-light space-y-2">
              <p>Berufsbezeichnung: Entrümpelungsservice</p>
              <p>Zuständige Kammer: [Falls zutreffend]</p>
              <p>Verliehen in: Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="space-y-2 text-gray-700 font-light">
              <p>Cemil Bocohonsi, Jermaine Anderson</p>
              <p>Karlsbaderweg 5</p>
              <p>73652 Welzheim</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">EU-Streitschlichtung</h2>
            <p className="text-gray-700 font-light">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-midnight hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-gray-700 font-light">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">Haftung für Inhalte</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">Haftung für Links</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">Urheberrecht</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
