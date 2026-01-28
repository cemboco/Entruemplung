import { fallbackKellerDachboden } from '../data/services';
import ServicePageWithSSR from './ServicePageWithSSR';

/**
 * KellerDachbodenPage - SSR-enabled service page for Keller & Dachboden
 * 
 * This component uses the fallback data pattern from BlogPost to enable
 * true SSR/SSG with real service content rendered on the server.
 * 
 * The service data is loaded at build/import time, ensuring the page
 * is fully rendered during SSR without a neutral shell.
 */
export default function KellerDachbodenPage() {
  if (!fallbackKellerDachboden) {
    throw new Error('keller-dachboden service not found - required for SSR');
  }

  return <ServicePageWithSSR service={fallbackKellerDachboden} />;
}
