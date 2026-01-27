import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { getServiceBySlug, services } from '../data/services';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { trackPhoneClick } from '../utils/analytics';

// Normalize German umlauts to their ASCII equivalents
function normalizeUmlauts(str: string): string {
  return str
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/Ä/g, 'Ae')
    .replace(/Ö/g, 'Oe')
    .replace(/Ü/g, 'Ue')
    .replace(/ß/g, 'ss');
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const rawSlug = slug || location.pathname.replace('/', '');
  const actualSlug = normalizeUmlauts(rawSlug);
  const service = actualSlug ? getServiceBySlug(actualSlug) : undefined;

  // Redirect to normalized URL if umlauts are present
  useEffect(() => {
    if (rawSlug !== actualSlug && service) {
      navigate(`/${actualSlug}`, { replace: true });
    }
  }, [rawSlug, actualSlug, navigate, service]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [actualSlug]);

  const isServer = typeof window === "undefined";

  // During SSR, never render NotFound - render neutral shell instead
  // Let client-side router handle 404 detection after hydration
  if (!service && isServer) {
    // Return minimal loading shell for SSR
    return (
      <div className="min-h-screen bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  // Client-side: show NotFound if service doesn't exist
  if (!service && !isServer) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-midnight mb-4">Service nicht gefunden</h1>
          <p className="text-gray-600 mb-8">Die angeforderte Leistung existiert nicht.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-midnight hover:text-midnight/80 transition-colors"
          >
            <ArrowLeft size={20} />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  if (!service) {
    return null;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-midnight transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Zurück zur Übersicht
          </button>

          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-midnight/5 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon className="text-midnight" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-midnight mb-4 tracking-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 font-light">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {service.fullDescription}
          </p>
        </div>

        <div className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-midnight mb-6">Für wen ist diese Leistung?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{service.intro.forWhom}</p>

          <h3 className="text-xl font-semibold text-midnight mb-4">Typische Situationen:</h3>
          <ul className="space-y-3 mb-6">
            {service.intro.situations.map((situation, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-midnight rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-gray-700">{situation}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white rounded-xl p-6 border-l-4 border-midnight">
            <p className="text-gray-700 leading-relaxed italic">{service.intro.emotional}</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-midnight mb-4">{service.whatWeOffer.title}</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.whatWeOffer.description}</p>
          <div className="bg-gradient-to-br from-midnight/5 to-transparent rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-midnight mb-6">Was ist enthalten:</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {service.whatWeOffer.included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-midnight/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-midnight" size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-midnight mb-6">Ihre Vorteile</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-midnight/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-midnight" size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-midnight mb-6">Unser Ablauf</h2>
            <ol className="space-y-4">
              {service.process.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-midnight text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mb-16 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-midnight mb-6">Unser Einsatzgebiet: Stuttgart & Umgebung</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{service.localRelevance.description}</p>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold text-midnight mb-4">Wir sind für Sie da in:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {service.localRelevance.areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-midnight rounded-full"></div>
                  <span className="text-gray-700 text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-midnight via-midnight to-midnight/90 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {service.cta.title}
            </h2>
            <p className="text-gray-300 text-lg font-light mb-8 max-w-2xl mx-auto">
              {service.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4915732649483"
                onClick={trackPhoneClick}
                className="inline-flex items-center justify-center gap-2 bg-white text-midnight px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <Phone size={20} />
                01573 2649483
              </a>
              <Link
                to="/#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Online anfragen
              </Link>
            </div>
          </div>
        </div>

        {service.relatedServices && service.relatedServices.length > 0 && (
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-midnight mb-6">Weitere Leistungen für Sie</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {service.relatedServices.map((relatedSlug) => {
                const relatedService = services.find(s => s.slug === relatedSlug);
                if (!relatedService) return null;
                const ServiceIcon = relatedService.icon;
                return (
                  <Link
                    key={relatedSlug}
                    to={`/${relatedSlug}`}
                    className="block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-midnight/5 rounded-lg flex items-center justify-center">
                        <ServiceIcon className="w-5 h-5 text-midnight" />
                      </div>
                      <h4 className="font-semibold text-midnight">{relatedService.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedService.shortDescription}</p>
                    <div className="mt-4 text-sm font-medium text-midnight flex items-center gap-1">
                      Mehr erfahren <ArrowLeft size={16} className="rotate-180" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {service.additionalContent && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-midnight mb-8">{service.additionalContent.title}</h2>
            <div className="space-y-8">
              {service.additionalContent.sections.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-midnight mb-4">{section.heading}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-midnight mb-6">Häufig gestellte Fragen</h3>
          <div className="space-y-6 text-gray-700">
            {service.faq && service.faq.length > 0 ? (
              service.faq.map((item, index) => (
                <div key={index} className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <p className="font-semibold text-lg text-midnight mb-3">{item.question}</p>
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              ))
            ) : (
              <>
                <div>
                  <p className="font-semibold mb-2">Wie schnell können Sie bei mir sein?</p>
                  <p className="text-sm">In dringenden Fällen können wir oft noch am selben oder nächsten Tag bei Ihnen sein. Kontaktieren Sie uns für eine schnelle Terminabsprache.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Wie erfolgt die Preisgestaltung?</p>
                  <p className="text-sm">Nach einer kostenlosen Besichtigung vor Ort erstellen wir Ihnen ein transparentes Festpreis-Angebot. Es gibt keine versteckten Kosten.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Entsorgen Sie auch fachgerecht?</p>
                  <p className="text-sm">Ja, wir entsorgen alle Materialien nach gesetzlichen Vorgaben. Verwertbare Gegenstände werden recycelt oder weiterverwertet.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
