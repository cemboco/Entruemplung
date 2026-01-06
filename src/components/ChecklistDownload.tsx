export default function ChecklistDownload() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-10 text-center">
        
          <h2 className="text-2xl md:text-3xl font-semibold text-midnight mb-4">
            Kostenlose Entrümpelungs-Checkliste
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Eine 15-Punkte-Checkliste für Haushaltsauflösungen und Entrümpelungen.
            Entwickelt für Situationen, in denen Übersicht, Ruhe und Struktur
            besonders wichtig sind.
          </p>

          <a
            href="https://serviceplusstuttgart.gumroad.com/l/xlkyy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-midnight text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Checkliste herunterladen
          </a>

          <p className="text-sm text-gray-500 mt-5">
            Kostenlos & unverbindlich · Download über Gumroad
          </p>
        </div>
      </div>
    </section>
  );
}
