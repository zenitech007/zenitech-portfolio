const sharp = require('sharp');
const path = require('path');

async function createPortrait() {
  const width = 800;
  const height = 1000;

  // Render stylized SVG with dark portrait silhouette, purple ambient aura, and particle dispersion
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#12121C" />
        <stop offset="50%" stop-color="#181329" />
        <stop offset="100%" stop-color="#0A0A10" />
      </linearGradient>

      <radialGradient id="purpleAura" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.6" />
        <stop offset="60%" stop-color="#7C3AED" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#0A0A10" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="rimLight" cx="30%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#C4B5FD" stop-opacity="0.8" />
        <stop offset="40%" stop-color="#8B5CF6" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#12121C" stop-opacity="0" />
      </radialGradient>

      <filter id="blurAura" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="40" />
      </filter>
    </defs>

    <!-- Base Canvas -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

    <!-- Ambient Purple Aura -->
    <circle cx="400" cy="420" r="320" fill="url(#purpleAura)" filter="url(#blurAura)" />

    <!-- Developer Head & Torso Silhouette -->
    <g transform="translate(400, 480)">
      <!-- Shoulders & Torso -->
      <path d="M -260 480 C -240 280, -180 180, -90 140 C -40 120, 40 120, 90 140 C 180 180, 240 280, 260 480 Z" fill="#1C182E" />
      <!-- Rim light on shoulder -->
      <path d="M -260 480 C -240 280, -180 180, -90 140 C -40 120, 40 120, 90 140 C 180 180, 240 280, 260 480 Z" fill="none" stroke="#A78BFA" stroke-width="3" opacity="0.4" />

      <!-- Neck -->
      <rect x="-45" y="30" width="90" height="110" rx="20" fill="#231E38" />

      <!-- Head Base -->
      <ellipse cx="0" cy="-60" rx="120" ry="150" fill="#251F3D" />

      <!-- Hair Silhouette -->
      <path d="M -125 -60 C -130 -190, -70 -220, 0 -220 C 70 -220, 130 -190, 125 -60 C 110 -150, 40 -180, 0 -180 C -40 -180, -110 -150, -125 -60 Z" fill="#151224" />

      <!-- Eyeglasses Frame -->
      <g stroke="#C4B5FD" stroke-width="4" fill="none" opacity="0.85">
        <rect x="-85" y="-85" width="70" height="50" rx="14" />
        <rect x="15" y="-85" width="70" height="50" rx="14" />
        <line x1="-15" y1="-60" x2="15" y2="-60" />
      </g>

      <!-- Purple Rim Glow Overlay -->
      <ellipse cx="0" cy="-60" rx="120" ry="150" fill="url(#rimLight)" opacity="0.35" />
    </g>

    <!-- Dispersion Particles (Baked In) -->
    <g fill="#A78BFA" opacity="0.6">
      <circle cx="580" cy="380" r="4" />
      <circle cx="620" cy="420" r="6" opacity="0.8" />
      <circle cx="650" cy="390" r="3" />
      <circle cx="610" cy="480" r="5" />
      <circle cx="670" cy="460" r="4" opacity="0.5" />
      <circle cx="700" cy="510" r="7" opacity="0.7" />
      <circle cx="640" cy="560" r="5" />
      <circle cx="690" cy="600" r="3" opacity="0.4" />
      <circle cx="590" cy="640" r="6" />
      <circle cx="660" cy="670" r="4" />
      <!-- Star Sparkles -->
      <path d="M 660 340 Q 660 355 675 355 Q 660 355 660 370 Q 660 355 645 355 Q 660 355 660 340" fill="#C4B5FD" opacity="0.9" />
      <path d="M 690 440 Q 690 450 700 450 Q 690 450 690 460 Q 690 450 680 450 Q 690 450 690 440" fill="#C4B5FD" opacity="0.75" />
      <path d="M 630 520 Q 630 532 642 532 Q 630 532 630 544 Q 630 532 618 532 Q 630 532 630 520" fill="#A78BFA" opacity="0.85" />
    </g>

    <!-- Bottom Dark Gradient Fade into Background -->
    <rect y="700" width="${width}" height="300" fill="url(#bottomFade)" />
    <defs>
      <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0A0A10" stop-opacity="0" />
        <stop offset="70%" stop-color="#0A0A10" stop-opacity="0.85" />
        <stop offset="100%" stop-color="#0A0A10" stop-opacity="1" />
      </linearGradient>
    </defs>
  </svg>`;

  const outPath = path.join(__dirname, '..', 'public', 'images', 'portrait.jpg');
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(outPath);

  console.log('Created placeholder portrait at:', outPath);
}

createPortrait().catch(console.error);
