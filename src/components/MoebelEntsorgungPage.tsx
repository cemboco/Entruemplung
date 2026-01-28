import { fallbackMoebelEntsorgung } from '../data/services';
import ServicePageWithSSR from './ServicePageWithSSR';

/**
 * MoebelEntsorgungPage - SSR-enabled service page for Möbel Entsorgung
 * 
 * This component uses the fallback data pattern to enable
 * true SSR/SSG with real service content rendered on the server.
 * 
 * The service data is loaded at build/import time, ensuring the page
 * is fully rendered during SSR without a neutral shell.
 */
export default function MoebelEntsorgungPage() {
  if (!fallbackMoebelEntsorgung) {
    throw new Error('moebel-entsorgung service not found - required for SSR');
  }

  return (
    <ServicePageWithSSR 
      service={fallbackMoebelEntsorgung}
      customMeta={{
        title: "Möbel Entsorgung Stuttgart | Serviceplus Entrümpelung",
        description: "Professionelle Möbelentsorgung in Stuttgart. Abholung & fachgerechte Entsorgung von Möbeln aller Art. Umweltfreundlich, schnell und zu fairen Preisen."
      }}
    />
  );
}
