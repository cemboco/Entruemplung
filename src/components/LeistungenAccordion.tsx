import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface AccordionSection {
  title: string;
  content: JSX.Element;
}

export default function LeistungenAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  const sections: AccordionSection[] = [
    {
      title: 'Entrümpelung bedeutet oft mehr als Aufräumen',
      content: (
        <>
          <p className="mb-4">
            Viele Menschen merken erst spät, wie sehr zu viele Sachen psychisch belastend sein können. Volle Räume, alte Möbel, persönliche Gegenstände und unnötige Dinge kosten Energie. Der Alltag wird schwerer, Entscheidungen fallen schwerer, und oft entsteht das Gefühl von innerer Unruhe. Ordnung zu schaffen ist dann keine leichte Aufgabe.
          </p>
          <p className="mb-4">
            Gerade bei emotionalen Belastungen fällt es schwer, Dinge wegzugeben. Viele Menschen fragen sich: Warum fällt Wegwerfen so schwer? Häufig hängen Erinnerungen an materiellen Dingen, an Momenten, an Menschen oder an Lebensphasen. Manche Dinge haben einmal Freude bereitet, andere stehen für Sicherheit oder Gewohnheit.
          </p>
          <p>
            Das gilt besonders bei einer{' '}
            <a
              href="https://serviceplus-entruempelung.de/blog/entruempelung-todesfall-haushaltsaufloesung/"
              className="text-midnight underline hover:opacity-80"
            >
              Wohnung leer räumen nach Tod
            </a>
            , nach Trennung oder in Phasen von Überforderung. In solchen Situationen treffen Trauer, Zeitdruck und Verantwortung aufeinander. Wir kennen diese Situationen aus unserer täglichen Arbeit und gehen respektvoll, ruhig und strukturiert damit um. Kleine Schritte sind oft hilfreicher als lange To-do-Listen, die zusätzlich belasten.
          </p>
        </>
      ),
    },
    {
      title: 'Entrümpelung, Loslassen und innere Ruhe',
      content: (
        <>
          <p className="mb-4">
            Entrümpeln heißt nicht nur, Dinge zu entfernen. Es geht darum, bewusste Entscheidungen zu treffen und sich wieder auf das Wesentliche zu konzentrieren. Viele erleben dabei: Ordnung im Außen, Ordnung im Innen ist mehr als ein Spruch. Wenn Räume klarer werden, entsteht oft auch im Kopf mehr Ruhe.
          </p>
          <p className="mb-4">
            Immer mehr Menschen interessieren sich für{' '}
            <a
              href="https://serviceplus-entruempelung.de/blog/minimalismus-stuttgart-tipps-einfacher-leben/"
              className="text-midnight underline hover:opacity-80"
            >
              Minimalismus
            </a>
            . Minimalismus bedeutet nicht Verzicht oder Leere, sondern einen bewussten Umgang mit Besitz. Die psychologische Wirkung von Minimalismus zeigt sich bei vielen darin, dass weniger Besitz mehr Übersicht, mehr Zeit und mehr innere Ruhe bringt. Leben mit weniger Dingen kann den Alltag spürbar erleichtern.
          </p>
          <p className="mb-4">
            Ein minimalistisches Leben oder ein minimalistischer Lebensstil beginnt oft mit einem ersten Schritt. Viele suchen nach Minimalismus anfangen Tipps oder fragen sich, wie minimalistisch wohnen trotz Familie möglich ist. Manche orientieren sich an bekannten Ansätzen wie der KonMari-Methode, andere finden ihren eigenen Weg. Viele berichten von befreienden Ausmisten-Erfahrungen und davon, wie gut es tut, sich von Dingen zu trennen, die keine Rolle mehr spielen.
          </p>
          <p>
            Unsere Arbeit unterstützt genau diesen Prozess. Ohne Druck. Ohne Bewertung. Immer angepasst an Ihre Situation.
          </p>
        </>
      ),
    },
    {
      title: 'Hilfe bei Überforderung, Trauer und psychischen Belastungen',
      content: (
        <>
          <p className="mb-4">
            In manchen Fällen sind Wohnungen stark belastet. Das kann durch Trauer, lange Überforderung oder psychische Erkrankungen entstehen. Themen wie Chaos Wohnung Depression oder Ordnung bei Depression betreffen viele Menschen, auch wenn sie selten offen darüber sprechen.
          </p>
          <p className="mb-4">
            Viele suchen Unterstützung, weil sie sich überfordert fühlen, nicht loslassen können oder weil die Wohnung zur zusätzlichen Belastung geworden ist. Auch das Messie-Syndrom ist häufiger, als viele denken. Die Suche nach Messie-Syndrom Hilfe Stuttgart zeigt, wie groß der Bedarf ist.
          </p>
          <p className="mb-4">
            Bei der{' '}
            <a
              href="https://serviceplus-entruempelung.de/blog/messie-entruempelung-professionelle-hilfe/"
              className="text-midnight underline hover:opacity-80"
            >
              Messie-Wohnung Entrümpelung
            </a>{' '}
            arbeiten wir ruhig, klar und diskret. Wir wissen, dass es hier nicht nur um Müll oder Unordnung geht, sondern um Menschen und ihre Geschichte.
          </p>
          <p>
            Deshalb handeln wir respektvoll und stimmen uns auf Wunsch mit Angehörigen oder Betreuern ab. Eine Entrümpelung ersetzt keine Therapie, kann aber entlasten. Manche erleben Entrümpeln als Therapie-nahen Schritt, weil Struktur entsteht und der Alltag wieder überschaubar wird.
          </p>
        </>
      ),
    },
    {
      title: 'Keller ausräumen, alte Möbel entsorgen, Platz schaffen',
      content: (
        <>
          <p className="mb-4">
            Auch Keller, Dachböden und Garagen sind oft voll. Viele schieben das Keller entrümpeln Stuttgart lange vor sich her. Kartons, alte Möbel und Dinge, die keinen Nutzen mehr haben, blockieren Platz und Übersicht.
          </p>
          <p>
            Wir übernehmen das Keller ausräumen, trennen Materialien sorgfältig und kümmern uns um die fachgerechte Entsorgung. Gut erhaltene Gegenstände können angerechnet werden. So bleibt der Entrümpelung Festpreis fair und transparent. Ziel ist es, Platz zu schaffen und Räume wieder nutzbar zu machen.
          </p>
        </>
      ),
    },
    {
      title: 'Entrümpelung in Stuttgart – Kosten, Ablauf und Neuanfang',
      content: (
        <>
          <p className="mb-4">
            Viele Menschen informieren sich zuerst über die Entrümpelung Kosten Stuttgart. Deshalb arbeiten wir mit klaren Abläufen.
          </p>
          <p className="mb-4">
            Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Angebot. Der Entrümpelung Festpreis enthält alle Leistungen. Keine versteckten Kosten. Keine Überraschungen.
          </p>
          <p className="mb-4">
            Auch eine Entrümpelung kurzfristig ist möglich, zum Beispiel bei Umzug, Neuvermietung oder Übergabe. Als erfahrene Entrümpelungsfirma Stuttgart reagieren wir flexibel und zuverlässig.
          </p>
          <p className="mb-4">
            Für viele Menschen ist eine Entrümpelung ein Schritt in einen neuen Abschnitt. Ob nach Trennung, nach einem Todesfall oder aus dem Wunsch nach Veränderung. Entrümpeln nach Trennung, Wohnung leer machen Neuanfang oder Entrümpelung loslassen lernen sind häufige Anliegen.
          </p>
          <p>
            Ordnung kann helfen, emotionale Blockaden zu lösen. Räume werden wieder nutzbar. Entscheidungen fallen leichter. Der Alltag fühlt sich ruhiger an.
          </p>
        </>
      ),
    },
    {
      title: 'Wie lange dauert eine Entrümpelung?',
      content: (
        <>
          <p className="mb-4">
            Eine häufige Frage ist: Wie lange dauert eine Entrümpelung?
          </p>
          <p className="mb-4">
            Die Antwort hängt von mehreren Faktoren ab. Dazu zählen die Größe der Wohnung, die Menge der Gegenstände und die Zugänglichkeit der Räume.
          </p>
          <p className="mb-4">
            Kleinere Wohnungen oder einzelne Räume lassen sich oft innerhalb eines Tages entrümpeln. Auch das Keller ausräumen oder das Entfernen alter Möbel ist meist schnell erledigt. Größere Wohnungen, Häuser oder stark belastete Räume benötigen mehr Zeit und werden sorgfältig geplant.
          </p>
          <p className="mb-4">
            Bei einer Wohnungsauflösung nach einem Todesfall oder einer Messie-Wohnung Entrümpelung ist ein ruhiges Vorgehen besonders wichtig. Hier nehmen wir uns die nötige Zeit, um strukturiert und respektvoll zu arbeiten. Trotzdem achten wir darauf, den Ablauf effizient zu gestalten.
          </p>
          <p className="mb-4">
            Viele Kundinnen und Kunden wünschen sich eine Entrümpelung kurzfristig. Das ist in vielen Fällen möglich. Nach einer Besichtigung können wir meist genau sagen, wie lange die Entrümpelung dauert und wann der Termin umgesetzt werden kann.
          </p>
          <p>
            Unser Ziel ist es, den Zeitaufwand realistisch einzuschätzen und Termine zuverlässig einzuhalten. So wissen Sie von Anfang an, womit Sie rechnen können, und behalten die nötige Planungssicherheit.
          </p>
        </>
      ),
    },
    {
      title: 'Entrümpelung in Ihrer Nähe',
      content: (
        <>
          <p className="mb-4">
            Wir sind in Stuttgart und der Umgebung im Einsatz und reagieren flexibel auf Anfragen vor Ort. Kurze Anfahrtswege ermöglichen eine schnelle Planung und eine zuverlässige Umsetzung. Das gilt für Wohnungsauflösungen, Entrümpelungen nach einem Todesfall, Messie-Wohnungen oder das Keller entrümpeln in Stuttgart.
          </p>
          <p className="mb-4">
            Eine Entrümpelung in Ihrer Nähe bedeutet auch persönliche Abstimmung. Besichtigungen lassen sich kurzfristig vereinbaren, Fragen klären sich schneller und der Ablauf bleibt übersichtlich. So wissen Sie von Anfang an, woran Sie sind.
          </p>
          <p>
            Unser Ziel ist es, Ihnen unkompliziert zu helfen – dort, wo Unterstützung gebraucht wird. Direkt vor Ort. Ruhig, zuverlässig und gut organisiert.
          </p>
        </>
      ),
    },
    {
      title: 'Ihr Partner für professionelle Entrümpelung in Stuttgart',
      content: (
        <>
          <p className="mb-4">
            Ob Wohnungsauflösung, Entrümpelung nach Todesfall, Messie-Wohnung oder Keller entrümpeln in Stuttgart – wir arbeiten zuverlässig und diskret, gehen Schritt für Schritt vor und sorgen für einen ruhigen, übersichtlichen Ablauf.
          </p>
          <p>
            Wenn Sie eine professionelle Entrümpelung in Stuttgart suchen, die menschlich, klar und strukturiert arbeitet, sind wir für Sie da. Nehmen Sie Kontakt auf. Wir beraten Sie unverbindlich und finden gemeinsam eine Lösung, die zu Ihnen passt.
          </p>
        </>
      ),
    },
  ];

  const handleToggle = (index: number) => {
    if (openIndex !== index) setOpenIndex(index);
  };

  useEffect(() => {
    detailsRefs.current.forEach((detail, index) => {
      if (detail) detail.open = index === openIndex;
    });
  }, [openIndex]);

  return (
    <div className="max-w-4xl mx-auto my-16">
      {/* Main Title and Subtitle */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-midnight mb-3 leading-tight">
          Entrümpelungsfirma in Stuttgart und Umgebung – zuverlässig und organisiert
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-light">
          Professionelle Entrümpelung in Stuttgart und Umgebung
        </p>
      </div>

      {/* House Container - representing the "house" metaphor */}
      <div className="house-container bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        {sections.map((section, index) => (
          <details
            key={index}
            ref={(el) => (detailsRefs.current[index] = el)}
            className="house-room"
            open={index === openIndex}
          >
            <summary
              className="house-door"
              onClick={(e) => {
                e.preventDefault();
                handleToggle(index);
              }}
            >
              <span className="house-door-title">
                {section.title}
              </span>
              <ChevronDown 
                className="house-door-icon" 
                size={20} 
                strokeWidth={1.5}
              />
            </summary>
            <div className="house-room-content">
              {section.content}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
