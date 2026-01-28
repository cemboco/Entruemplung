import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// Move dist/client/* to dist/ (for deployment)
// This makes the final output structure match what hosting expects

console.log('\nFinalizing build output...\n');

const clientDir = toAbsolute('../dist/client');
const distDir = toAbsolute('../dist');

// Check if we need to move files
if (fs.existsSync(clientDir)) {
  // Read all files in client directory
  const files = fs.readdirSync(clientDir);
  
  for (const file of files) {
    const sourcePath = path.join(clientDir, file);
    const destPath = path.join(distDir, file);
    
    // Skip if destination already exists at root (shouldn't happen but just in case)
    if (file !== 'client' && file !== 'server') {
      // Check if file/dir exists at destination
      if (fs.existsSync(destPath) && destPath !== sourcePath) {
        // Remove existing
        if (fs.statSync(destPath).isDirectory()) {
          fs.rmSync(destPath, { recursive: true, force: true });
        } else {
          fs.unlinkSync(destPath);
        }
      }
      
      // Move to root level
      fs.renameSync(sourcePath, destPath);
      console.log(`✓ Moved ${file} to dist/`);
    }
  }
  
  // Remove now-empty client directory
  if (fs.readdirSync(clientDir).length === 0) {
    fs.rmdirSync(clientDir);
    console.log('✓ Removed empty client directory');
  }
} else {
  console.log('ℹ Client directory not found, assuming already at dist/');
}

// Clean up server build artifacts (not needed in deployment)
const serverDir = toAbsolute('../dist/server');
if (fs.existsSync(serverDir)) {
  fs.rmSync(serverDir, { recursive: true, force: true });
  console.log('✓ Removed server build artifacts');
}

console.log('\n✓ Build finalized! Ready for deployment.\n');
