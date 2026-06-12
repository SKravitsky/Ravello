#!/usr/bin/env node
import { mkdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const MAX_DIMENSION = 1600;
const JPEG_QUALITY = 82;

// Pretend to be a browser — some hosts block default fetch UA / hotlinking
const FETCH_HEADERS = {
    'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/jpeg,image/png,*/*',
    'Accept-Language': 'en-US,en;q=0.9',
};

const downloads = [
    // Hotels (Accommodations.tsx)
    { dest: 'public/images/hotels', slug: 'villa-cimbrone',     url: 'https://www.hotelvillacimbrone.com/wp-content/uploads/2020/02/Hotel-Villa-Cimbrone-23-1920.jpg' },
    { dest: 'public/images/hotels', slug: 'villa-eva',          url: 'https://wi-web-eiw.s3.eu-west-1.amazonaws.com/exclusiveitaly/images/original/90b6765a-fc62-4ed0-b9b5-7d52843c3dfb/villa-eva-01.jpg' },
    { dest: 'public/images/hotels', slug: 'hotel-giordano',     url: 'https://www.giordanohotel.it/public/web/gallerie/gf_3wed_clr_0002_16.jpg' },
    { dest: 'public/images/hotels', slug: 'hotel-parsifal',     url: 'https://hotelparsifal.it/images//slide/chiostro-home.jpg' },
    { dest: 'public/images/hotels', slug: 'hotel-due-torri',    url: 'https://www.hotel2torri.com/img/2torri/location/rooftop-w1280.webp' },
    { dest: 'public/images/hotels', slug: 'residence-due-torri',url: 'https://images.trvl-media.com/lodging/5000000/4320000/4316700/4316661/044e7d2c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill' },
    { dest: 'public/images/hotels', slug: 'al-raggio-di-sole',  url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/732091873.jpg?k=b6f4a5b2eacbe330c1f0df5b944819786961f2c74de9380bc83f6999fd77983b&o=' },

    // Activities (ThingsToDo.tsx) — Villa Cimbrone Gardens reuses hotels/villa-cimbrone.jpg
    { dest: 'public/images/activities', slug: 'villa-rufolo',       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROY6WZAh0hjirpqI1Njq9tWpb4xZLIbr8n8A&s' },
    { dest: 'public/images/activities', slug: 'ravello-duomo',      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/d2/41/2b/duomo-di-ravello.jpg?w=900&h=500&s=1' },
    { dest: 'public/images/activities', slug: 'amalfi',             url: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=1600&fit=crop' },
    { dest: 'public/images/activities', slug: 'positano',           url: 'https://images.unsplash.com/photo-1561956021-947f09ae0101?q=80&w=1600&fit=crop' },
    { dest: 'public/images/activities', slug: 'pompeii',            url: 'https://img.lemde.fr/2024/11/08/0/0/2000/1500/664/0/75/0/5f02fa6_1731066031448-pompeii-body-casts-1-credit-archeological-park-of-pompeii.jpg' },
    { dest: 'public/images/activities', slug: 'boat-tour',          url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/20/4d/30.jpg' },
    { dest: 'public/images/activities', slug: 'limoncello-tasting', url: 'https://whiteonricecouple.com/recipe/images/lemon-tree-container-11-550x830-1.jpg' },
    { dest: 'public/images/activities', slug: 'cooking-class',      url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/df/1e/4b.jpg' },
];

const dirs = new Set(downloads.map(d => d.dest));
for (const d of dirs) await mkdir(d, { recursive: true });

const fmt = (b) => b >= 1024 * 1024 ? `${(b / 1024 / 1024).toFixed(1)} MB` : `${Math.round(b / 1024)} KB`;

const results = [];

for (const { dest, slug, url } of downloads) {
    const outPath = join(dest, `${slug}.jpg`);
    process.stdout.write(`${slug.padEnd(22)} `);

    try {
        const res = await fetch(url, { headers: FETCH_HEADERS, redirect: 'follow' });
        if (!res.ok) {
            console.log(`✗ HTTP ${res.status}`);
            results.push({ slug, ok: false, reason: `HTTP ${res.status}` });
            continue;
        }
        const buf = Buffer.from(await res.arrayBuffer());

        await sharp(buf)
            .rotate()
            .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside', withoutEnlargement: true })
            .flatten({ background: '#FFFFFF' })
            .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true })
            .toFile(outPath);

        const size = (await stat(outPath)).size;
        console.log(`✓ ${fmt(size).padStart(7)}  → ${outPath}`);
        results.push({ slug, ok: true, path: outPath });
    } catch (err) {
        console.log(`✗ ${err.message}`);
        results.push({ slug, ok: false, reason: err.message });
    }
}

console.log('-'.repeat(72));
const ok = results.filter(r => r.ok).length;
const fail = results.length - ok;
console.log(`${ok} succeeded, ${fail} failed${fail ? ': ' + results.filter(r => !r.ok).map(r => r.slug).join(', ') : ''}`);
