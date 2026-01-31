import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

console.log('\n🔍 Verifying build output...\n');

let hasErrors = false;

// 1. Check if dist directory exists
console.log('1. Checking dist directory...');
const distDir = toAbsolute('../dist');
if (!fs.existsSync(distDir)) {
  console.error('   ❌ dist/ directory not found. Run `npm run build` first.');
  hasErrors = true;
} else {
  console.log('   ✅ dist/ directory exists');
}

// 2. Check if assets directory exists
console.log('\n2. Checking assets directory...');
const assetsDir = path.join(distDir, 'assets');
if (!fs.existsSync(assetsDir)) {
  console.error('   ❌ dist/assets/ directory not found');
  hasErrors = true;
} else {
  console.log('   ✅ dist/assets/ directory exists');
  
  // 3. Check for JS and CSS files
  console.log('\n3. Checking for JS and CSS bundles...');
  const files = fs.readdirSync(assetsDir);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const cssFiles = files.filter(f => f.endsWith('.css'));
  
  if (jsFiles.length === 0) {
    console.error('   ❌ No JS files found in dist/assets/');
    hasErrors = true;
  } else {
    console.log(`   ✅ Found ${jsFiles.length} JS file(s): ${jsFiles.join(', ')}`);
  }
  
  if (cssFiles.length === 0) {
    console.error('   ❌ No CSS files found in dist/assets/');
    hasErrors = true;
  } else {
    console.log(`   ✅ Found ${cssFiles.length} CSS file(s): ${cssFiles.join(', ')}`);
  }
}

// 4. Check index.html
console.log('\n4. Checking index.html...');
const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('   ❌ dist/index.html not found');
  hasErrors = true;
} else {
  const indexContent = fs.readFileSync(indexPath, 'utf-8');
  
  // Check for module script tag (the main app bundle)
  const scriptMatch = indexContent.match(/<script[^>]*type="module"[^>]*src="([^"]+)"[^>]*>/);
  if (!scriptMatch) {
    console.error('   ❌ No module script tag found in index.html');
    hasErrors = true;
  } else {
    const scriptSrc = scriptMatch[1];
    console.log(`   ✅ Script reference found: ${scriptSrc}`);
    
    // Check if referenced file exists (only for relative paths starting with /)
    // External URLs (http://, https://, //) are not checked
    if (scriptSrc.startsWith('/') && !scriptSrc.startsWith('//')) {
      const scriptPath = path.join(distDir, scriptSrc);
      if (!fs.existsSync(scriptPath)) {
        console.error(`   ❌ Referenced script file does not exist: ${scriptPath}`);
        hasErrors = true;
      } else {
        console.log(`   ✅ Referenced script file exists`);
      }
    } else if (scriptSrc.startsWith('//') || scriptSrc.startsWith('http')) {
      console.log(`   ℹ️  External script URL (not checked): ${scriptSrc}`);
    }
  }
  
  // Check for CSS link
  const cssMatch = indexContent.match(/<link[^>]*href="([^"]+\.css)"[^>]*>/);
  if (!cssMatch) {
    console.error('   ❌ No CSS link found in index.html');
    hasErrors = true;
  } else {
    const cssHref = cssMatch[1];
    console.log(`   ✅ CSS reference found: ${cssHref}`);
    
    // Check if referenced file exists
    const cssPath = path.join(distDir, cssHref);
    if (!fs.existsSync(cssPath)) {
      console.error(`   ❌ Referenced CSS file does not exist: ${cssPath}`);
      hasErrors = true;
    } else {
      console.log(`   ✅ Referenced CSS file exists`);
    }
  }
}

// 5. Check _redirects file
console.log('\n5. Checking _redirects configuration...');
const redirectsPath = path.join(distDir, '_redirects');
if (!fs.existsSync(redirectsPath)) {
  console.error('   ❌ dist/_redirects not found');
  hasErrors = true;
} else {
  const redirectsContent = fs.readFileSync(redirectsPath, 'utf-8');
  
  // Check for problematic force flag on SPA fallback
  if (redirectsContent.match(/\/\*\s+\/index\.html\s+200!/)) {
    console.error('   ⚠️  WARNING: SPA fallback has force flag (!)');
    console.error('      This will prevent assets from being served correctly.');
    console.error('      Change "/*    /index.html   200!" to "/*    /index.html   200"');
    hasErrors = true;
  } else {
    console.log('   ✅ _redirects configuration looks correct');
  }
}

// 6. Check manifest.json
console.log('\n6. Checking Vite manifest...');
const manifestPath = path.join(distDir, '.vite', 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.warn('   ⚠️  .vite/manifest.json not found (optional)');
} else {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  console.log('   ✅ Vite manifest exists');
  console.log(`   📄 Entry point: ${manifest['index.html']?.file || 'N/A'}`);
}

// Summary
console.log('\n' + '='.repeat(60));
if (hasErrors) {
  console.error('❌ Build verification FAILED');
  console.error('\nPlease fix the errors above before deploying.');
  process.exit(1);
} else {
  console.log('✅ Build verification PASSED');
  console.log('\nYour build is ready for deployment! 🚀');
  console.log('\nNext steps:');
  console.log('  - Deploy the dist/ folder to Netlify/Vercel');
  console.log('  - Verify assets load correctly in production');
  console.log('  - Check browser console for any errors');
}
console.log('='.repeat(60) + '\n');
