export default function ChecklistDownload() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-midnight mb-4">
          Kostenlose Entrümpelungs-Checkliste
        </h2>

        <p className="text-gray-700 mb-6">
          Eine 15-Punkte-Checkliste für Haushaltsauflösungen und Entrümpelungen –
          hilfreich, wenn vieles gleichzeitig organisiert werden muss.
        </p>

        <a
          href="https://serviceplusstuttgart.gumroad.com/l/xlkyy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-midnight text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Checkliste herunterladen
        </a>

        <p className="text-sm text-gray-500 mt-4">
          Kostenlos & unverbindlich · Download über Gumroad
        </p>
      </div>
    </section>
  );
}
