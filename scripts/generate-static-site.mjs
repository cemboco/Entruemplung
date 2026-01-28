import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '..', 'dist');
const srcPath = join(__dirname, '..', 'src');

// Read blog posts to generate routes
let fallbackPosts = [];
try {
  // Try to load from built dist if available, otherwise from src
  const blogDataPath = join(srcPath, 'data', 'blogPosts.ts');
  const content = readFileSync(blogDataPath, 'utf-8');
  
  // Extract slugs using regex (simple approach)
  const slugMatches = content.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
  fallbackPosts = Array.from(slugMatches).map(match => ({ slug: match[1] }));
} catch (error) {
  console.error('Error loading blog posts:', error.message);
}

// Define all static routes
const staticRoutes = [
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
  '/danke'
];

// Generate blog post routes from data
const blogRoutes = fallbackPosts.map(post => `/blog/${post.slug}`);

// Combine all routes
const routes = [...staticRoutes, ...blogRoutes];

console.log(`\nGenerating static site for ${routes.length} routes...\n`);

// Read the base template
const template = readFileSync(join(distPath, 'index.html'), 'utf-8');

// Simple approach: Generate directory structure with index.html for each route
// The React app will hydrate on the client side with the actual content
for (const route of routes) {
  try {
    if (route === '/') {
      console.log(`✓ Root route (/) already exists`);
    } else {
      const routePath = join(distPath, route);
      if (!existsSync(routePath)) {
        mkdirSync(routePath, { recursive: true });
      }
      
      // Write the template - React will hydrate with content
      writeFileSync(join(routePath, 'index.html'), template, 'utf-8');
      console.log(`✓ Generated ${route}/index.html`);
    }
  } catch (error) {
    console.error(`✗ Error generating ${route}:`, error.message);
  }
}

console.log(`\n✓ Static site generation complete: ${routes.length} routes`);
console.log('Note: Using client-side hydration. Content rendered by React on page load.\n');
