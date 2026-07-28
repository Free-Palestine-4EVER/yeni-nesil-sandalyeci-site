import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;
const ACCENT = "#b5652e";
const ACCENT_DARK = "#1c1b19";

async function main() {
  const sourcePath = path.join(root, "photos", "post-04.jpg");

  const base = await sharp(sourcePath)
    .resize(WIDTH, HEIGHT, { fit: "cover" })
    .modulate({ saturation: 0.35 })
    .tint(ACCENT)
    .toBuffer();

  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scrim" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="${ACCENT_DARK}" stop-opacity="0.92" />
          <stop offset="55%" stop-color="${ACCENT_DARK}" stop-opacity="0.35" />
          <stop offset="100%" stop-color="${ACCENT_DARK}" stop-opacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#scrim)" />
      <text x="64" y="500" font-family="Arial, sans-serif" font-size="30" letter-spacing="4" fill="${ACCENT}" font-weight="700">İSTANBUL · CONTRACT FURNITURE MANUFACTURER</text>
      <text x="64" y="570" font-family="Arial, sans-serif" font-size="66" fill="#f6f1e9" font-weight="900">YENİ NESİL SANDALYECİ</text>
      <text x="64" y="80" font-family="Tahoma, Arial, sans-serif" font-size="34" fill="#f6f1e9" font-weight="700">ييني نسل صندلیجي</text>
    </svg>
  `;

  const outPath = path.join(root, "public", "og.png");

  await sharp(base)
    .composite([{ input: Buffer.from(svg) }])
    .png()
    .toFile(outPath);

  console.log(`Generated OG image at ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
