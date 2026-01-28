import { fallbackImmobilienraeumung } from '../data/services';
import ServicePageWithSSR from './ServicePageWithSSR';

/**
 * ImmobilienraeumungPage - SSR-enabled service page for Immobilienräumung
 * 
 * This component uses the fallback data pattern to enable
 * true SSR/SSG with real service content rendered on the server.
 * 
 * The service data is loaded at build/import time, ensuring the page
 * is fully rendered during SSR without a neutral shell.
 */
export default function ImmobilienraeumungPage() {
  if (!fallbackImmobilienraeumung) {
    throw new Error('immobilienraeumung service not found - required for SSR');
  }

  return (
    <ServicePageWithSSR 
      service={fallbackImmobilienraeumung}
      customMeta={{
        title: "Immobilienräumung Stuttgart | Serviceplus Entrümpelung",
        description: "Professionelle Immobilien- und Wohnungsräumung in Stuttgart. Komplette Räumung bei Verkauf, Vermietung oder Übergabe. Schnell, diskret & zuverlässig."
      }}
    />
  );
}
