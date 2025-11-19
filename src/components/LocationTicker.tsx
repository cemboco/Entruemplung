export default function LocationTicker() {
  const locations = [
    'Stuttgart-Mitte',
    'Bad Cannstatt',
    'Feuerbach',
    'Zuffenhausen',
    'Vaihingen',
    'Degerloch',
    'Esslingen',
    'Ludwigsburg',
    'Böblingen',
    'Sindelfingen',
    'Waiblingen',
    'Fellbach',
    'Kornwestheim',
    'Leonberg',
    'Ostfildern',
    'Filderstadt',
    'Leinfelden-Echterdingen',
    'Ditzingen',
    'Gerlingen',
    'Korntal-Münchingen'
  ];

  return (
    <div className="bg-gray-50 py-6 overflow-hidden border-y border-gray-200">
      <div className="relative flex">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...locations, ...locations].map((location, index) => (
            <div key={index} className="flex items-center">
              <span className="text-sm md:text-base font-light text-midnight px-4">
                {location}
              </span>
              <span className="text-midnight opacity-40">•</span>
            </div>
          ))}
        </div>
        <div className="flex animate-scroll whitespace-nowrap" aria-hidden="true">
          {[...locations, ...locations].map((location, index) => (
            <div key={`duplicate-${index}`} className="flex items-center">
              <span className="text-sm md:text-base font-light text-midnight px-4">
                {location}
              </span>
              <span className="text-midnight opacity-40">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
