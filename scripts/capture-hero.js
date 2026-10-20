const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: '1440x900', width: 1440, height: 900 },
  { name: '1366x768', width: 1366, height: 768 },
  { name: '1280x680', width: 1280, height: 680 },
  { name: '1024x768', width: 1024, height: 768 },
  { name: '768x1024', width: 768, height: 1024 },
  { name: '390x844', width: 390, height: 844 },
];

async function capture() {
  const outDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
  });

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    // Allow Framer Motion entrance animation to settle
    await page.waitForTimeout(1000);

    const shotPath = path.join(outDir, `hero-${vp.name}.png`);
    await page.screenshot({ path: shotPath });
    console.log(`Saved screenshot: ${shotPath}`);

    // Check for horizontal scrollbar
    const hasHScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    console.log(`Viewport ${vp.name} horizontal scrollbar: ${hasHScroll ? 'YES (BAD)' : 'NO (GOOD)'}`);

    await context.close();
  }

  await browser.close();
  console.log('All screenshots captured!');
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
