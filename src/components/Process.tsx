import { Phone, Calendar, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Kontaktaufnahme',
    description:
      'Rufen Sie uns an oder nutzen Sie unser Kontaktformular. Wir beraten Sie kostenlos und unverbindlich.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Calendar,
    title: 'Kostenlose Besichtigung',
    description:
      'Wir kommen zu Ihnen vor Ort, besichtigen das Objekt und erstellen ein transparentes Festpreis-Angebot.',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Truck,
    title: 'Professionelle Durchführung',
    description:
      'Unser erfahrenes Team entrümpelt zuverlässig und effizient. Wertgegenstände werden angerechnet.',
    color: 'from-secondary to-secondary-light',
  },
  {
    icon: CheckCircle,
    title: 'Besenreine Übergabe',
    description:
      'Sie erhalten Ihr Objekt besenrein zurück. Entsorgungsnachweise und Rechnung inklusive.',
    color: 'from-green-500 to-green-600',
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/Design ohne Titel (1).png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            So einfach geht's
          </h2>
          <p className="text-xl text-secondary-light max-w-2xl mx-auto">
            In nur 4 Schritten zu Ihrer professionellen Entrümpelung
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary to-green-500 transform -translate-y-1/2 mx-20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="text-white" size={36} />
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-primary shadow-md border-2 border-gray-100">
                          {index + 1}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                      <p className="text-secondary-light leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-10 py-5 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Jetzt kostenloses Angebot einholen
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
