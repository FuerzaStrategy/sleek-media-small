import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public");

// Max width for hero/full-bleed images — no need to go wider than 1920
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 82;

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findImages(full)));
    } else if ([".png", ".jpg", ".jpeg"].includes(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function optimize(filePath) {
  const info = await sharp(filePath).metadata();
  const originalStat = await stat(filePath);
  const originalSize = originalStat.size;

  const outPath = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outPath);

  const newStat = await stat(outPath);
  const newSize = newStat.size;
  const saving = ((1 - newSize / originalSize) * 100).toFixed(1);

  console.log(
    `✓ ${basename(filePath).padEnd(45)} ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB  (${saving}% smaller)`
  );

  // Remove original
  await unlink(filePath);
}

const images = await findImages(PUBLIC_DIR);
console.log(`Found ${images.length} images to optimize...\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const img of images) {
  const s = await stat(img);
  totalBefore += s.size;
  await optimize(img);
  const webpPath = img.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const s2 = await stat(webpPath);
  totalAfter += s2.size;
}

console.log(`\n${"─".repeat(60)}`);
console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB  (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}% reduction)`);
