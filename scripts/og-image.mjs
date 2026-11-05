// Generates public/og-image.png (1200x627, LinkedIn's recommended link-preview size).
// Run with `npm run og` after changing the name or headline.
import sharp from 'sharp';

const width = 1200;
const height = 627;
const font = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#0f172a"/>
  <rect x="0" y="0" width="16" height="${height}" fill="#2dd4bf"/>
  <g font-family="${font}">
    <text x="96" y="250" font-size="104" font-weight="700" fill="#ffffff">Baya Khouini</text>
    <text x="100" y="340" font-size="50" font-weight="500" fill="#5eead4">Software Engineer · Full Stack &amp; AI</text>
    <rect x="100" y="400" width="120" height="4" rx="2" fill="#334155"/>
    <text x="100" y="500" font-size="30" fill="#cbd5e1">batta0102.github.io/portfolio</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og-image.png');
console.log('Wrote public/og-image.png');
