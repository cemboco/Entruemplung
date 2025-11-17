import { ArrowLeft } from 'lucide-react';

interface DatenschutzProps {
  onBack: () => void;
}

export default function Datenschutz({ onBack }: DatenschutzProps) {
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

        <h1 className="text-4xl font-light text-midnight mb-8">Datenschutzerklärung</h1>

        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="text-gray-700 font-medium mb-2">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </p>
            <p className="text-gray-700 font-light leading-relaxed">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p className="text-gray-700 font-medium mb-2 mt-4">Wie erfassen wir Ihre Daten?</p>
            <p className="text-gray-700 font-light leading-relaxed">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um
              Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
              betreten.
            </p>

            <p className="text-gray-700 font-medium mb-2 mt-4">Wofür nutzen wir Ihre Daten?</p>
            <p className="text-gray-700 font-light leading-relaxed">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="text-gray-700 font-medium mb-2 mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p className="text-gray-700 font-light leading-relaxed">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
              Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
              können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
              bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">2. Hosting</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Externes Hosting</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
              werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v.a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
              und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1
              lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Datenschutz</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
              erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
              nicht möglich.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="mt-3 text-gray-700 font-light space-y-1">
              <p>Serviceplus Entrümpelung GbR</p>
              <p>Geschäftsführer und Gesellschafter: Cemil Bocohonsi, Jermaine Anderson</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ] [Ort]</p>
              <p className="mt-2">Telefon: 0155-60850344</p>
              <p>E-Mail: info@serviceplus-entrümpelung.de</p>
            </div>
            <p className="text-gray-700 font-light leading-relaxed mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen
              o. Ä.) entscheidet.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Speicherdauer</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
              werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
              Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">
              Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
            </h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen
              datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
              personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf
              hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
              eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
              erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <p className="text-gray-700 font-light leading-relaxed uppercase">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie
              jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die
              Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese
              Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht,
              entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
              personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe
              für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die
              Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch
              nach Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="text-gray-700 font-light leading-relaxed uppercase mt-2">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht,
              jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
              derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in
              Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr
              zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
              verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
              aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Auskunft, Löschung und Berichtigung</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
              Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
              zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
              folgenden Fällen:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 font-light">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
                in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt
                der Löschung die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
                Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
                überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen.
              </li>
            </ul>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
              ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
              juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
              eines Mitgliedstaats verarbeitet werden.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
              Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
              Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
              von Dritten mitgelesen werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Kontaktformular</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
              und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
              effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
              (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
              insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
              bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
              effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
              gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-midnight mb-4">5. Newsletter</h2>

            <h3 className="text-lg font-medium text-midnight mb-3 mt-6">Newsletter-Daten</h3>
            <p className="text-gray-700 font-light leading-relaxed">
              Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine
              E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der
              angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere
              Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für
              den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Die Verarbeitung der in das Newsletter-Anmeldeformular eingegebenen Daten erfolgt ausschließlich auf
              Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der
              Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit
              widerrufen, etwa über den „Austragen"-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten
              Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
            </p>
            <p className="text-gray-700 font-light leading-relaxed mt-2">
              Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer
              Austragung aus dem Newsletter bei uns bzw. dem Newsletter-Diensteanbieter gespeichert und nach der
              Abbestellung des Newsletters oder nach Zweckfortfall aus der Newsletter-Verteilerliste gelöscht. Wir
              behalten uns vor, E-Mail-Adressen aus unserem Newsletter-Verteiler nach eigenem Ermessen im Rahmen
              unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm font-light">
              Quelle: Erstellt mit dem Datenschutz-Generator.de von RA Dr. Thomas Schwenke
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
