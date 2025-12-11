import React, { useState } from 'react';

type Step =
  | 'objekt'
  | 'flaeche'
  | 'etage'
  | 'voll'
  | 'plz'
  | 'termin'
  | 'kontakt'
  | 'fertig';

type FormData = {
  objekt: string;
  objektSonstiges: string;
  flaeche: string;
  flaecheHinweis: string;
  etage: string;
  aufzug: boolean;
  etageHinweis: string;
  fuellgrad: string;
  plz: string;
  ort: string;
  termin: string;
  terminDatum: string;
  terminHinweis: string;
  name: string;
  email: string;
  telefon: string;
  rueckrufZeit: string;
  datenschutz: boolean;
};

const initialData: FormData = {
  objekt: '',
  objektSonstiges: '',
  flaeche: '',
  flaecheHinweis: '',
  etage: '',
  aufzug: false,
  etageHinweis: '',
  fuellgrad: '',
  plz: '',
  ort: '',
  termin: '',
  terminDatum: '',
  terminHinweis: '',
  name: '',
  email: '',
  telefon: '',
  rueckrufZeit: '',
  datenschutz: false,
};

const steps: Step[] = [
  'objekt',
  'flaeche',
  'etage',
  'voll',
  'plz',
  'termin',
  'kontakt',
];

export default function QuickQuote() {
  const [step, setStep] = useState<Step>('objekt');
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const currentIndex = steps.indexOf(step);
  const progress = ((currentIndex + 1) / steps.length) * 100;

  const update = (patch: Partial<FormData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  const next = () => {
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) {
      setStep(steps[idx + 1]);
    }
  };

  const back = () => {
    const idx = steps.indexOf(step);
    if (idx > 0) {
      setStep(steps[idx - 1]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.datenschutz) return;

    setSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/meonwoje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setStep('fertig');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
      {step !== 'fertig' && (
        <>
          <h2 className="text-2xl font-semibold mb-1 text-gray-900">
            Kostenlose Schnellanfrage
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Beantworten Sie ein paar kurze Fragen – so können wir Ihnen schnell ein
            unverbindliches Angebot machen.
          </p>

          <div className="w-full h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full rounded-full bg-blue-700 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 'objekt' && (
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-900">
              Was soll entrümpelt werden?
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {['Haus', 'Wohnung', 'Keller', 'Dachboden', 'Garage', 'Firma / Büro'].map(
                (label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => update({ objekt: label })}
                    className={`border rounded-xl px-3 py-2 text-sm text-left transition ${
                      data.objekt === label
                        ? 'border-blue-700 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-blue-500 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </button>
                )
              )}
              <button
                type="button"
                onClick={() => update({ objekt: 'Sonstiges' })}
                className={`border rounded-xl px-3 py-2 text-sm text-left transition ${
                  data.objekt === 'Sonstiges'
                    ? 'border-blue-700 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-blue-500 hover:bg-gray-50'
                }`}
              >
                Sonstiges
              </button>
            </div>

            {data.objekt === 'Sonstiges' && (
              <div className="mt-3">
                <label className="block text-sm mb-1 text-gray-700">
                  Kurz beschreiben (optional)
                </label>
                <input
                  type="text"
                  value={data.objektSonstiges}
                  onChange={(e) =>
                    update({ objektSonstiges: e.target.value })
                  }
                  className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="z. B. Scheune, Lagerraum …"
                />
              </div>
            )}
          </div>
        )}

        {step === 'flaeche' && (
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-900">
              Wie groß ist die Fläche ungefähr?
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Bis 30 m²',
                '30–60 m²',
                '60–100 m²',
                '100–150 m²',
                'Über 150 m²',
                'Ich bin mir nicht sicher',
              ].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => update({ flaeche: label })}
                  className={`border rounded-xl px-3 py-2 text-sm text-left transition ${
                    data.flaeche === label
                      ? 'border-blue-700 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-blue-500 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            {data.flaeche === 'Ich bin mir nicht sicher' && (
              <div className="mt-3">
                <label className="block text-sm mb-1 text-gray-700">
                  Hinweis (optional)
                </label>
                <input
                  type="text"
                  value={data.flaecheHinweis}
                  onChange={(e) =>
                    update({ flaecheHinweis: e.target.value })
                  }
                  className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="z. B. 3-Zimmer-Wohnung, normal groß"
                />
              </div>
            )}
          </div>
        )}

        {step === 'etage' && (
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-900">
              In welcher Etage befindet sich das Objekt?
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Keller / Souterrain',
                'Erdgeschoss',
                '1. Etage',
                '2. Etage',
                '3. Etage oder höher',
              ].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => update({ etage: label })}
                  className={`border rounded-xl px-3 py-2 text-sm text-left transition ${
                    data.etage === label
                      ? 'border-blue-700 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-blue-500 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <label className="inline-flex items-center gap-2 mt-3 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={data.aufzug}
                onChange={(e) => update({ aufzug: e.target.checked })}
              />
              Es gibt einen Aufzug
            </label>

            <div className="mt-3">
              <label className="block text-sm mb-1 text-gray-700">
                Besonderheiten (optional)
              </label>
              <input
                type="text"
                value={data.etageHinweis}
                onChange={(e) =>
                  update({ etageHinweis: e.target.value })
                }
                className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="z. B. enge Treppe, Hinterhaus …"
              />
            </div>
          </div>
        )}

        {step === 'voll' && (
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-900">
              Wie voll ist der Bereich?
            </h3>
            <div className="space-y-2">
              {[
                { value: 'wenig', label: 'Nur wenig – ein paar Sachen' },
                {
                  value: 'normal',
                  label: 'Normal voll – übliche Möbel und Kartons',
                },
                {
                  value: 'voll',
                  label: 'Ziemlich voll – viele Möbel und Kisten',
                },
                {
                  value: 'sehr_voll',
                  label: 'Sehr voll – kaum noch Platz',
                },
                {
                  value: 'extrem',
                  label: 'Extrem voll / Messi-ähnlich',
                },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => update({ fuellgrad: opt.value })}
                  className={`w-full border rounded-xl px-3 py-2 text-sm text-left transition ${
                    data.fuellgrad === opt.value
                      ? 'border-blue-700 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-blue-500 hover:bg-gray-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'plz' && (
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-900">
              Wo befindet sich das Objekt?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-1">
                <label className="block text-sm mb-1 text-gray-700">
                  PLZ *
                </label>
                <input
                  type="text"
                  value={data.plz}
                  onChange={(e) => update({ plz: e.target.value })}
                  autoComplete="postal-code"
                  className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  maxLength={5}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1 text-gray-700">
                  Ort (optional)
                </label>
                <input
                  type="text"
                  value={data.ort}
                  onChange={(e) => update({ ort: e.target.value })}
                  autoComplete="address-level2"
                  className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
          </div>
        )}

        {step === 'termin' && (
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-900">
              Wann soll der Auftrag durchgeführt werden?
            </h3>
            <div className="space-y-2">
              {[
                'Möglichst umgehend',
                'In 1–3 Monaten',
                'In 3–6 Monaten',
                'Andere Angabe',
              ].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => update({ termin: label })}
                  className={`w-full border rounded-xl px-3 py-2 text-sm text-left transition ${
                    data.termin === label
                      ? 'border-blue-700 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-blue-500 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {data.termin === 'Andere Angabe' && (
              <div className="mt-3 space-y-3">
                <div>
                  <label className="block text-sm mb-1 text-gray-700">
                    Gewünschtes Datum (optional)
                  </label>
                  <input
                    type="date"
                    value={data.terminDatum}
                    onChange={(e) =>
                      update({ terminDatum: e.target.value })
                    }
                    className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700">
                    Hinweis zum Zeitraum (optional)
                  </label>
                  <input
                    type="text"
                    value={data.terminHinweis}
                    onChange={(e) =>
                      update({ terminHinweis: e.target.value })
                    }
                    className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="z. B. nach dem 15.03., lieber vormittags"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {step === 'kontakt' && (
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-900">
              Wie können wir Sie erreichen?
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => update({ name: e.target.value })}
                  autoComplete="name"
                  className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  E-Mail *
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => update({ email: e.target.value })}
                  autoComplete="email"
                  className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  value={data.telefon}
                  onChange={(e) => update({ telefon: e.target.value })}
                  autoComplete="tel"
                  className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Beste Zeit für Rückruf (optional)
                </label>
                <input
                  type="text"
                  value={data.rueckrufZeit}
                  onChange={(e) =>
                    update({ rueckrufZeit: e.target.value })
                  }
                  className="w-full border rounded-xl px-3 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="z. B. vormittags / nachmittags"
                />
              </div>

              <label className="flex items-start gap-2 text-xs text-gray-600 mt-2">
                <input
                  type="checkbox"
                  checked={data.datenschutz}
                  onChange={(e) =>
                    update({ datenschutz: e.target.checked })
                  }
                  className="mt-0.5 w-4 h-4 rounded border-gray-300 text-blue-700 focus:ring-blue-600"
                />
                <span className="font-light leading-relaxed">
                  Mit dem Absenden des Formulars erkläre ich mich damit einverstanden, dass meine Angaben zur Kontaktaufnahme verwendet werden. Weitere Infos in der{' '}
                  <a
                    href="#datenschutz"
                    className="text-blue-700 underline hover:text-blue-600 transition-colors"
                  >
                    Datenschutzerklärung
                  </a>
                  .
                </span>
              </label>
            </div>
          </div>
        )}

        {step === 'fertig' && submitted && (
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">
              Vielen Dank für Ihre Anfrage!
            </h3>
            <p className="text-sm text-gray-600">
              Wir melden uns in Kürze telefonisch oder per E-Mail mit einer
              ersten Einschätzung und einem unverbindlichen Angebot.
            </p>
          </div>
        )}

        {step !== 'fertig' && (
          <div className="flex items-center justify-between pt-2 gap-3">
            {currentIndex > 0 ? (
              <button
                type="button"
                onClick={back}
                className="text-sm px-3 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                Zurück
              </button>
            ) : (
              <div />
            )}

            {step !== 'kontakt' && (
              <button
                type="button"
                onClick={next}
                className="ml-auto text-sm px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-600 shadow-sm"
              >
                Weiter
              </button>
            )}

            {step === 'kontakt' && (
              <button
                type="submit"
                disabled={submitting || !data.datenschutz}
                className="ml-auto text-sm px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-600 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Wird gesendet…' : 'Unverbindliche Anfrage senden'}
              </button>
            )}
          </div>
        )}
      </form>

      {step !== 'fertig' && (
        <p className="mt-4 text-[11px] text-gray-500 text-center">
          Kein Risiko, kein Spam: Wir verwenden Ihre Daten ausschließlich zur
          Bearbeitung Ihrer Anfrage.
        </p>
      )}
    </div>
  );
}
