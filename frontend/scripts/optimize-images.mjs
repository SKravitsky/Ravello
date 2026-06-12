#!/usr/bin/env node
import { readdir, mkdir, stat, copyFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const SRC = 'public/images';
const DEST = 'public/images-optimized';
const MAX_DIMENSION = 2400;
const JPEG_QUALITY = 82;

const fmt = (bytes) => {
    if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    return `${Math.round(bytes / 1024)} KB`;
};

await mkdir(DEST, { recursive: true });

const entries = (await readdir(SRC)).sort();
let totalBefore = 0;
let totalAfter = 0;

for (const file of entries) {
    const src = join(SRC, file);
    const ext = extname(file).toLowerCase();
    const isImage = ['.jpg', '.jpeg', '.png'].includes(ext);

    if (!isImage) {
        await copyFile(src, join(DEST, file));
        continue;
    }

    // Convert .png photos to .jpg; keep .jpeg/.jpg extensions as-is to minimize code churn
    const outExt = ext === '.png' ? '.jpg' : ext;
    const outName = basename(file, ext) + outExt;
    const dest = join(DEST, outName);

    const srcSize = (await stat(src)).size;
    totalBefore += srcSize;

    await sharp(src)
        .rotate()                                       // honor EXIF orientation
        .resize({
            width: MAX_DIMENSION,
            height: MAX_DIMENSION,
            fit: 'inside',
            withoutEnlargement: true,
        })
        .flatten({ background: '#FFFFFF' })             // strip alpha so JPEG is safe
        .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true })
        .toFile(dest);

    const outSize = (await stat(dest)).size;
    totalAfter += outSize;
    const pct = ((1 - outSize / srcSize) * 100).toFixed(0);
    const renamed = file !== outName ? `  → ${outName}` : '';
    console.log(`${file.padEnd(26)} ${fmt(srcSize).padStart(9)} → ${fmt(outSize).padStart(8)}  (-${pct}%)${renamed}`);
}

console.log('-'.repeat(72));
const pct = ((1 - totalAfter / totalBefore) * 100).toFixed(0);
console.log(`Total                       ${fmt(totalBefore).padStart(9)} → ${fmt(totalAfter).padStart(8)}  (-${pct}%)`);
console.log(`\nOutput: ${DEST}/`);
console.log('Eyeball, then:  mv public/images-optimized/* public/images/ && rmdir public/images-optimized');
