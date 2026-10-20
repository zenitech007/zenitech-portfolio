/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const targetViewports = [
  { name: '360px-mobile', width: 360, height: 740 },
  { name: '768px-tablet', width: 768, height: 1024 },
  { name: '1280px-desktop', width: 1280, height: 800 },
];

async function verify() {
  const outDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
  });

  console.log('Testing responsive viewports at http://localhost:3000...');

  for (const vp of targetViewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    // Check horizontal scrollbar
    const hasHScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    console.log(`Viewport ${vp.name}: Horizontal scrollbar = ${hasHScroll ? 'FAIL (overflow detected)' : 'PASS (no overflow)'}`);

    // Check single H1 requirement
    const h1Count = await page.locator('h1').count();
    console.log(`Viewport ${vp.name}: H1 count = ${h1Count} ${h1Count === 1 ? '(PASS)' : '(FAIL)'}`);

    // Screenshot top hero
    const heroPath = path.join(outDir, `senior-${vp.name}-hero.png`);
    await page.screenshot({ path: heroPath });

    // Screenshot full page
    const fullPath = path.join(outDir, `senior-${vp.name}-full.png`, );
    await page.screenshot({ path: fullPath, fullPage: true });

    await context.close();
  }

  await browser.close();
  console.log('All viewport checks completed successfully.');
}

verify().catch((err) => {
  console.error('Verification failed:', err);
  process.exit(1);
});
