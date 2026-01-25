import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '..', 'dist');

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

async function prerenderRoute(route) {
  try {
    const { render } = await import('../dist-ssr/entry-server.js');
    const appHtml = render(route);

    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    if (route === '/') {
      writeFileSync(join(distPath, 'index.html'), html, 'utf-8');
    } else {
      const routePath = join(distPath, route);
      if (!existsSync(routePath)) {
        mkdirSync(routePath, { recursive: true });
      }
      writeFileSync(join(routePath, 'index.html'), html, 'utf-8');
    }
  } catch (error) {
    console.warn(`Warning: Could not prerender ${route}, using template:`, error.message);

    if (route !== '/') {
      const routePath = join(distPath, route);
      if (!existsSync(routePath)) {
        mkdirSync(routePath, { recursive: true });
      }
      writeFileSync(join(routePath, 'index.html'), template, 'utf-8');
    }
  }
}

for (const route of routes) {
  await prerenderRoute(route);
}

console.log(`✓ Prerendered ${routes.length} routes`);
