import { fallbackWertanrechnung } from '../data/services';
import ServicePageWithSSR from './ServicePageWithSSR';

/**
 * WertanrechnungPage - SSR-enabled service page for Wertanrechnung
 * 
 * This component uses the fallback data pattern to enable
 * true SSR/SSG with real service content rendered on the server.
 * 
 * The service data is loaded at build/import time, ensuring the page
 * is fully rendered during SSR without a neutral shell.
 */
export default function WertanrechnungPage() {
  if (!fallbackWertanrechnung) {
    throw new Error('wertanrechnung service not found - required for SSR');
  }

  return (
    <ServicePageWithSSR 
      service={fallbackWertanrechnung}
      customMeta={{
        title: "Wertanrechnung Stuttgart | Serviceplus Entrümpelung",
        description: "Wertanrechnung bei Entrümpelung in Stuttgart. Faire Bewertung & Verrechnung verwertbarer Gegenstände. Transparente Abwicklung und kostenlose Schätzung vor Ort."
      }}
    />
  );
}
