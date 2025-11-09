import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Wie schnell können Sie eine Entrümpelung durchführen?',
    answer:
      'In der Regel können wir innerhalb von 2-3 Werktagen einen Termin anbieten. Für dringende Fälle bieten wir auch einen 24-Stunden Express-Service an. Nach Terminvereinbarung erfolgt die Entrümpelung meist am selben oder nächsten Tag.',
  },
  {
    question: 'Wie werden die Kosten berechnet?',
    answer:
      'Die Kosten richten sich nach dem Volumen der zu entsorgenden Gegenstände, der Komplexität der Arbeit und dem Standort. Nach einer kostenlosen Vor-Ort-Besichtigung erhalten Sie ein transparentes Festpreis-Angebot. Verwertbare Gegenstände werden fair bewertet und vom Preis abgezogen.',
  },
  {
    question: 'Was passiert mit den entrümpelten Gegenständen?',
    answer:
      'Wir trennen sorgfältig nach wiederverwertbaren und zu entsorgenden Materialien. Brauchbare Möbel und Gegenstände werden an gemeinnützige Organisationen gespendet oder verkauft. Nicht verwertbare Materialien werden fachgerecht entsorgt und recycelt. Sie erhalten alle erforderlichen Entsorgungsnachweise.',
  },
  {
    question: 'Benötige ich eine Halteverbotszone?',
    answer:
      'In den meisten Fällen nicht. Unser erfahrenes Team findet in der Regel geeignete Parkmöglichkeiten. Bei sehr engen Straßen oder besonderen Situationen können wir die Beantragung einer Halteverbotszone für Sie übernehmen. Die Kosten dafür werden transparent im Angebot aufgeführt.',
  },
  {
    question: 'Muss ich bei der Entrümpelung anwesend sein?',
    answer:
      'Für die Besichtigung und Angebotserstellung sollten Sie anwesend sein. Bei der eigentlichen Entrümpelung ist Ihre Anwesenheit nicht zwingend erforderlich, sofern Sie uns Zugang gewähren und uns mitteilen, was entsorgt werden soll. Viele Kunden bevorzugen es jedoch, während der Entrümpelung vor Ort zu sein.',
  },
  {
    question: 'Sind Sie versichert?',
    answer:
      'Ja, wir verfügen über eine umfassende Haftpflicht- und Unfallversicherung. Sollte während der Entrümpelung ein Schaden entstehen, sind Sie vollständig abgesichert. Unsere Mitarbeiter sind geschult und arbeiten äußerst sorgfältig, um Schäden zu vermeiden.',
  },
  {
    question: 'Können Sie auch Gefahrstoffe entsorgen?',
    answer:
      'Kleinere Mengen an Schadstoffen wie alte Farben, Lacke oder Chemikalien können wir fachgerecht entsorgen. Bei größeren Mengen oder speziellen Gefahrstoffen arbeiten wir mit zertifizierten Entsorgungsfachbetrieben zusammen und organisieren die Entsorgung für Sie.',
  },
  {
    question: 'Welche Zahlungsmöglichkeiten bieten Sie an?',
    answer:
      'Sie können bequem per Überweisung, EC-Karte oder bar bezahlen. Die Zahlung erfolgt nach Abschluss der Arbeiten und Ihrer Abnahme. Sie erhalten eine ordnungsgemäße Rechnung mit ausgewiesener Mehrwertsteuer.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Häufige Fragen
          </h2>
          <p className="text-xl text-secondary-light">
            Antworten auf die wichtigsten Fragen rund um unseren Service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-primary pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="text-white" size={20} />
                  ) : (
                    <Plus className="text-white" size={20} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 text-secondary-light leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-secondary-light mb-4">
            Haben Sie weitere Fragen? Wir beraten Sie gerne persönlich!
          </p>
          <a
            href="#kontakt"
            className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
