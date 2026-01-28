import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('../dist/client/index.html'), 'utf-8');
const { render } = await import('../dist/server/entry-server.js');

// Extract blog post slugs from the data file
const blogPostsContent = fs.readFileSync(toAbsolute('../src/data/blogPosts.ts'), 'utf-8');
const slugMatches = Array.from(blogPostsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g));
const blogSlugs = slugMatches.map(match => match[1]);

// Define all routes to prerender
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
  '/impressum',
  '/datenschutz',
  '/danke',
  ...blogSlugs.map(slug => `/blog/${slug}`)
];

console.log(`\nPrerendering ${routes.length} routes...\n`);

const failedRoutes = [];
const criticalRoutes = ['/', '/blog', '/haushaltsaufloesung'];

for (const url of routes) {
  try {
    const { html, helmet } = render(url);
    
    // Inject the rendered HTML and helmet tags into the template
    let document = template;
    document = document.replace('<!--app-html-->', html);
    
    // Replace default meta tags with route-specific ones from helmet
    if (helmet.title) {
      document = document.replace(/<title>.*?<\/title>/, helmet.title);
    }
    
    // For helmet meta/link tags, we append them at the end of head to override defaults
    // React Helmet adds data-rh="true" attribute which indicates these are the canonical values
    if (helmet.meta || helmet.link || helmet.script) {
      const headCloseIndex = document.indexOf('</head>');
      const helmetTags = [helmet.meta, helmet.link, helmet.script].filter(Boolean).join('\n    ');
      if (helmetTags) {
        document = document.slice(0, headCloseIndex) + '    ' + helmetTags + '\n  ' + document.slice(headCloseIndex);
      }
    }
    
    const filePath = url === '/' 
      ? toAbsolute('../dist/client/index.html')
      : toAbsolute(`../dist/client${url}/index.html`);
    
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, document);
    console.log(`✓ Prerendered ${url}`);
  } catch (error) {
    console.error(`✗ Error prerendering ${url}:`, error.message);
    failedRoutes.push({ url, error: error.message });
    
    // Fail build if critical route fails
    if (criticalRoutes.includes(url)) {
      console.error(`\n❌ Critical route ${url} failed to prerender. Build cannot continue.\n`);
      process.exit(1);
    }
  }
}

if (failedRoutes.length > 0) {
  console.warn(`\n⚠️  Warning: ${failedRoutes.length} route(s) failed to prerender:`);
  failedRoutes.forEach(({ url, error }) => {
    console.warn(`   - ${url}: ${error}`);
  });
}

console.log(`\n✓ Prerendering complete!\n`);
