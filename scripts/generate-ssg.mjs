import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '..', 'dist');

// Define all routes to pre-generate as static HTML
const routes = [
  '/',
  '/haushaltsaufloesung',
  '/entruempelung',
  '/messie-wohnungen',
  '/keller-dachboden',
  '/sperrmuell-entsorgung',
  '/gewerbe-entruempelung',
  '/immobilienraeumung',
  '/moebel-entsorgung',
  '/wertanrechnung',
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
