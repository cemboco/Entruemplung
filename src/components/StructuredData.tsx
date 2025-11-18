import { useEffect } from 'react';
import {
  generateOrganizationSchema,
  generateServicesSchema,
  generateOffersSchema,
  generateFAQSchema,
  generateWebsiteSchema
} from '../utils/schema';

export default function StructuredData() {
  useEffect(() => {
    const organizationSchema = generateOrganizationSchema();
    const servicesSchema = generateServicesSchema();
    const offersSchema = generateOffersSchema();
    const faqSchema = generateFAQSchema();
    const websiteSchema = generateWebsiteSchema();

    const schemas = [
      organizationSchema,
      ...servicesSchema,
      offersSchema,
      faqSchema,
      websiteSchema
    ];

    schemas.forEach((schema, index) => {
      const scriptId = `structured-data-${index}`;
      let script = document.getElementById(scriptId) as HTMLScriptElement;

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    });

    return () => {
      schemas.forEach((_, index) => {
        const scriptId = `structured-data-${index}`;
        const script = document.getElementById(scriptId);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
}
