import { fallbackSperrmuellEntsorgung } from '../data/services';
import ServicePageWithSSR from './ServicePageWithSSR';

/**
 * SperrmuellEntsorgungPage - SSR-enabled service page for Sperrmüll Entsorgung
 * 
 * This component uses the fallback data pattern from BlogPost to enable
 * true SSR/SSG with real service content rendered on the server.
 * 
 * The service data is loaded at build/import time, ensuring the page
 * is fully rendered during SSR without a neutral shell.
 */
export default function SperrmuellEntsorgungPage() {
  if (!fallbackSperrmuellEntsorgung) {
    throw new Error('sperrmuell-entsorgung service not found - required for SSR');
  }

  return <ServicePageWithSSR service={fallbackSperrmuellEntsorgung} />;
}
