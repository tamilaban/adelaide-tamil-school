/*
 * One-off: downscale and recompress the bundled photos in src/assets so the
 * production build isn't shipping ~3 MB PNGs. Overwrites the files in place;
 * imports keep working because filenames don't change.
 *
 *   node scripts/optimize-images.mjs
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const DIR = new URL('../src/assets/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
// Logo stays lossless-ish and small; everything else is a photo.
const MAX_WIDTH = { default: 1600, poster: 1200, logo: 512 };
const QUALITY = 72;

const files = (await readdir(DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
  const path = join(DIR, file);
  const before = (await stat(path)).size;
  const key = basename(file, extname(file)).replace(/-\d+$/, '');
  const width = MAX_WIDTH[key] ?? MAX_WIDTH.default;

  const img = sharp(path).rotate();
  const meta = await img.metadata();
  const pipeline = meta.width && meta.width > width ? img.resize({ width }) : img;

  const out = await pipeline
    .png({ quality: QUALITY, compressionLevel: 9, palette: true })
    .toBuffer();

  if (out.length < before) {
    await writeFile(path, out);
    console.log(`${file}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(out.length / 1024 / 1024).toFixed(2)}MB`);
  } else {
    console.log(`${file}: kept (${(before / 1024 / 1024).toFixed(2)}MB)`);
  }
}
