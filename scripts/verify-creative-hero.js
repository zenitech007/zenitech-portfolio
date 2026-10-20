/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const targetViewports = [
  { name: '360px', width: 360, height: 740 },
  { name: '768px', width: 768, height: 1024 },
  { name: '1280px', width: 1280, height: 800 },
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

  console.log('Testing Creative Developer Hero across viewports at http://localhost:3000...');

  for (const vp of targetViewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    // 1. Horizontal scrollbar check
    const hasHScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    console.log(`Viewport ${vp.name}: Horizontal scrollbar = ${hasHScroll ? 'FAIL (overflow)' : 'PASS (no overflow)'}`);

    // 2. Single H1 check
    const h1Count = await page.locator('h1').count();
    console.log(`Viewport ${vp.name}: H1 count = ${h1Count} ${h1Count === 1 ? '(PASS)' : '(FAIL)'}`);

    // 3. Screenshot hero section
    const heroLocator = page.locator('#hero');
    const heroShotPath = path.join(outDir, `creative-hero-${vp.name}.png`);
    await heroLocator.screenshot({ path: heroShotPath });
    console.log(`Saved screenshot: ${heroShotPath}`);

    await context.close();
  }

  await browser.close();
  console.log('Verification completed successfully.');
}

verify().catch((err) => {
  console.error('Hero verification failed:', err);
  process.exit(1);
});
