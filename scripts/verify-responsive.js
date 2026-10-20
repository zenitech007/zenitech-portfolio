const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function testResponsive() {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const viewports = [
    { name: 'mobile-360', width: 360, height: 800 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'desktop-1280', width: 1280, height: 900 },
    { name: 'desktop-1440', width: 1440, height: 960 },
  ];

  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  let allPassed = true;

  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });

    const consoleErrors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('http://localhost:3010', { waitUntil: 'networkidle' });
    // Wait for Framer Motion entrance animations to settle
    await page.waitForTimeout(1400);

    // Check horizontal scroll
    const overflowInfo = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      const bodyWidth = document.body.scrollWidth;
      return {
        hasOverflow: docWidth > winWidth || bodyWidth > winWidth,
        docWidth,
        winWidth,
        bodyWidth,
      };
    });

    console.log(`[${vp.name}] Viewport: ${vp.width}x${vp.height}`);
    console.log(`  Doc width: ${overflowInfo.docWidth}, Window width: ${overflowInfo.winWidth}, Body width: ${overflowInfo.bodyWidth}`);
    console.log(`  Overflow-X: ${overflowInfo.hasOverflow ? 'FAIL' : 'PASS'}`);

    if (overflowInfo.hasOverflow) {
      allPassed = false;
    }

    // Verify Hero ONLY (no other sections)
    const sectionCheck = await page.evaluate(() => {
      return {
        hasHero: !!document.getElementById('home'),
        hasServices: !!document.getElementById('services'),
        hasWork: !!document.getElementById('work'),
        hasProcess: !!document.getElementById('process'),
        hasContact: !!document.getElementById('contact'),
      };
    });
    console.log(`  Section presence check:`, sectionCheck);

    if (!sectionCheck.hasHero || sectionCheck.hasServices || sectionCheck.hasWork || sectionCheck.hasContact) {
      console.error(`  Sections condition failed (should be Hero ONLY)!`);
      allPassed = false;
    }

    const screenshotPath = path.join(screenshotsDir, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`  Saved screenshot to ${screenshotPath}`);

    if (consoleErrors.length > 0) {
      console.log(`  Console errors:`, consoleErrors);
    } else {
      console.log(`  Console errors: 0`);
    }

    await page.close();
  }

  await browser.close();
  console.log(`\nOverall verification: ${allPassed ? 'ALL PASSED ✅' : 'FAILED ❌'}`);
  process.exit(allPassed ? 0 : 1);
}

testResponsive().catch((err) => {
  console.error(err);
  process.exit(1);
});
