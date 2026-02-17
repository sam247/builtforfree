/**
 * Screenshot Generation Script
 * 
 * Generates WebP screenshots of client websites using Puppeteer.
 * 
 * Usage:
 *   node scripts/generate-screenshots.js
 * 
 * Requirements:
 *   - Puppeteer installed (npm install puppeteer)
 *   - Sites must be publicly accessible
 *   - Output directory: public/sites/
 */

require('esbuild-register');

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { sites } = require('../data/sites.ts');

const OUTPUT_DIR = path.join(__dirname, '../public/sites');
const VIEWPORT_WIDTH = 1440;
const VIEWPORT_HEIGHT = 900;
const CLIP_HEIGHT = 900;
const WEBP_QUALITY = 80;

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generateScreenshot(site) {
  console.log(`Generating screenshot for: ${site.name} (${site.url})...`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--ignore-certificate-errors',
      '--ignore-ssl-errors',
    ],
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({
      width: VIEWPORT_WIDTH,
      height: VIEWPORT_HEIGHT,
      deviceScaleFactor: 1,
    });

    // Navigate to site
    await page.goto(site.url, {
      waitUntil: 'networkidle0',
      timeout: 30000,
      ignoreHTTPSErrors: true,
    });

    // Wait a bit for any animations/loading to complete
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Capture screenshot with clip (top 900px only)
    const screenshotPath = path.join(OUTPUT_DIR, `${site.slug}.webp`);
    
    await page.screenshot({
      path: screenshotPath,
      type: 'webp',
      quality: WEBP_QUALITY,
      clip: {
        x: 0,
        y: 0,
        width: VIEWPORT_WIDTH,
        height: CLIP_HEIGHT,
      },
    });

    console.log(`✓ Saved: ${screenshotPath}`);
  } catch (error) {
    console.error(`✗ Error generating screenshot for ${site.name}:`, error.message);
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log(`Starting screenshot generation for ${sites.length} site(s)...\n`);

  for (const site of sites) {
    await generateScreenshot(site);
  }

  console.log(`\n✓ Screenshot generation complete!`);
}

main().catch(console.error);
