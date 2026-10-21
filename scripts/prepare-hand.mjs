// Turns scans/photos of ink on paper into transparent PNGs the site can tint.
//   1. Put scans in src/assets/hand/raw/  (e.g. signature.jpg, divider.jpg, art.jpg)
//   2. npm run hand
//   3. Clean PNGs appear in src/assets/hand/ with the same names.
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const RAW = 'src/assets/hand/raw';
const OUT = 'src/assets/hand';
// Pixels darker than INK become fully opaque; lighter than PAPER become transparent.
const INK = Number(process.env.INK ?? 110);
const PAPER = Number(process.env.PAPER ?? 205);

const files = (await readdir(RAW)).filter((f) => /\.(jpe?g|png|webp|tiff?)$/i.test(f));
if (!files.length) console.log(`No scans found in ${RAW}/`);

for (const file of files) {
  const { data, info } = await sharp(path.join(RAW, file))
    .rotate()
    .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
    .greyscale()
    .normalise()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const v = data[i * channels];
    rgba[i * 4 + 3] = v <= INK ? 255 : v >= PAPER ? 0 : Math.round((255 * (PAPER - v)) / (PAPER - INK));
  }
  const out = path.join(OUT, `${path.parse(file).name}.png`);
  await sharp(rgba, { raw: { width, height, channels: 4 } }).trim().png().toFile(out);
  console.log(`✓ ${file} → ${out}`);
}
