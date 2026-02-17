# Screenshot Generation

This directory contains scripts for generating website screenshots.

## Generate Screenshots

To generate screenshots for all sites defined in `data/sites.ts`:

```bash
node scripts/generate-screenshots.js
```

### Requirements

- Node.js installed
- Dependencies installed: `npm install`
- Sites must be publicly accessible
- Puppeteer will download Chromium automatically on first run

### Output

Screenshots are saved to `public/sites/{slug}.webp` in WebP format (1440x900px, top portion only).

### Notes

- The script will overwrite existing screenshots
- Each screenshot takes a few seconds to generate
- Make sure sites are accessible and not blocking headless browsers
