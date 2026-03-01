/**
 * Generate AI DEV Syllabus PDF
 *
 * Prerequisites: dev server running (`npm run dev`)
 * Usage: node generate-syllabus-pdf.mjs [url]
 * Output: public/pdf/ai-dev-syllabus-2026.pdf
 */

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, 'public', 'pdf', 'ai-dev-syllabus-2026.pdf');
const PAGE_URL = process.argv[2] || 'http://localhost:4321/ai-dev-syllabus';

async function generatePDF() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Set viewport to A4 width (794px ≈ 210mm at 96dpi)
  await page.setViewport({ width: 794, height: 1123 });

  console.log(`Loading ${PAGE_URL}...`);
  await page.goto(PAGE_URL, {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });

  // Wait for fonts and images
  await page.waitForFunction(() => document.fonts.ready, { timeout: 15000 });
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Inject CSS to reduce PDF weight — remove heavy decorative layers
  console.log('Optimizing for PDF...');
  await page.addStyleTag({
    content: `
      /* Remove heavy decorative layers to reduce PDF size */
      .lyr-noise { display: none !important; }
      .blob { display: none !important; }
      .lyr-vig { display: none !important; }
      .closing-mesh { display: none !important; }
      .nn-mesh { display: none !important; }
      .cover-fingerprint { display: none !important; }

      /* Simplify glass effects — solid backgrounds instead of blur */
      .glass-card {
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        background: rgba(18, 18, 28, 0.95) !important;
      }
      .glass-card::before,
      .glass-card::after {
        display: none !important;
      }

      /* Simplify grid to static pattern */
      .lyr-grid { opacity: 0.3 !important; }
      .lyr-grid::after { display: none !important; }

      /* Simplify toolbar — will be hidden anyway */
      .toolbar { display: none !important; }

      /* Reduce box shadows */
      .page { box-shadow: none !important; }
      .nn-circle { box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important; }

      /* Ensure solid backgrounds for print */
      .page { background: #0a0a0f !important; }
    `,
  });

  // Small delay for styles to apply
  await new Promise(resolve => setTimeout(resolve, 500));

  console.log('Generating PDF...');
  await page.pdf({
    path: OUTPUT_PATH,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    scale: 1,
  });

  await browser.close();

  // Report file size
  const { stat } = await import('fs/promises');
  const stats = await stat(OUTPUT_PATH);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(1);
  console.log(`PDF saved to: ${OUTPUT_PATH} (${sizeMB} MB)`);
}

generatePDF().catch(err => {
  console.error('PDF generation failed:', err.message);
  process.exit(1);
});
