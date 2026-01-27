import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '..', 'dist');

// Import services data to generate routes dynamically
const servicesModule = await import('../src/data/services.ts');
const services = servicesModule.services;

// Get all service slugs dynamically from the services data
const serviceSlugs = services.map(s => s.slug);

console.log('📦 Services found:', serviceSlugs.length);
console.log('📋 Service slugs:', serviceSlugs.join(', '));

// Define all routes to pre-generate as static HTML
const routes = [
  '/',
  ...serviceSlugs.map(slug => `/${slug}`), // Dynamically add service routes
  '/blog',
  '/blog/entruempelung-stuttgart-leitfaden-2026',
  '/blog/haushaltsaufloesung-stuttgart-beachten',
  '/blog/messie-entruempelung-professionelle-hilfe',
  '/blog/nachhaltige-entruempelung-recycling-stuttgart',
  '/blog/kosten-entruempelung-preise-stuttgart',
  '/blog/entruempelung-todesfall-haushaltsaufloesung',
  '/blog/minimalismus-stuttgart-tipps-einfacher-leben',
  '/blog/wohnungsuebergabe-stuttgart-checkliste-tipps',
  '/blog/neujahrsvorsatz-entruempelung-2026-tipps',
  '/blog/immobilienverkauf-stuttgart-entruempelung-wertsteigerung',
  '/blog/entruempelung-steuerlich-absetzbar-tipps',
  '/blog/verkleinerung-im-alter-betreutes-wohnen-stuttgart-entruempelung',
  '/blog/keller-entruempelung-stuttgart-fruehjahrsputz',
  '/blog/unserioese-entruempler-erkennen-stuttgart-warnsignale',
  '/impressum',
  '/datenschutz',
  '/danke'
];

const template = readFileSync(join(distPath, 'index.html'), 'utf-8');

// Generate static HTML files for all routes
for (const route of routes) {
  try {
    if (route === '/') {
      // Root route already has index.html
      console.log(`✓ Root route (/) already exists`);
    } else {
      const routePath = join(distPath, route);
      if (!existsSync(routePath)) {
        mkdirSync(routePath, { recursive: true });
      }
      writeFileSync(join(routePath, 'index.html'), template, 'utf-8');
      console.log(`✓ Generated ${route}/index.html`);
    }
  } catch (error) {
    console.error(`✗ Error generating ${route}:`, error.message);
  }
}

console.log(`\n✓ SSG generation complete: ${routes.length} routes`);
console.log('\n📊 Summary:');
console.log(`   - ${serviceSlugs.length} service pages`);
console.log(`   - ${routes.length - serviceSlugs.length} other pages`);
console.log(`   - Total: ${routes.length} static pages generated`);
