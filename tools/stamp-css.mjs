/**
 * Stamps the stylesheet links with a hash of the stylesheets themselves.
 *
 * The blynai.eu zone overrides Cache-Control for static extensions with its own
 * Browser Cache TTL (4 hours), so a deploy can hand a returning visitor new
 * markup with the previous stylesheet — which is how the product band once
 * arrived unstyled. A hash in the query makes the URL change whenever the CSS
 * changes, so the browser fetches a file it has never seen and the zone TTL
 * stops mattering. The query is part of the cache key on this zone, verified.
 *
 * Run it after touching any CSS, before committing:
 *
 *   node tools/stamp-css.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = ['index.html', 'lt/index.html', 'dokumentacija/index.html',
  '404.html'];

// Everything the pages actually load: our sheet, the design system entry point
// and every token file it imports.
const sheets = ['site.css', 'ds/styles.css',
  ...(await readdir(join(ROOT, 'ds/tokens'))).filter(f => f.endsWith('.css')).sort()
    .map(f => 'ds/tokens/' + f)];

const hash = createHash('sha256');
for (const rel of sheets) hash.update(rel).update(await readFile(join(ROOT, rel)));
const stamp = hash.digest('hex').slice(0, 8);

// 404.html is served for any missing path at any depth, so its links are
// root-absolute; every other page keeps them relative so it opens from file://.
const LINK = /href="((?:\.\.\/|\/)?(?:ds\/styles|site)\.css)(?:\?v=[0-9a-f]+)?"/g;
for (const page of PAGES) {
  const file = join(ROOT, page);
  const before = await readFile(file, 'utf8');
  const after = before.replace(LINK, (_, path) => `href="${path}?v=${stamp}"`);
  if (after !== before) await writeFile(file, after);
  console.log(`  ${page}  ${after === before ? 'unchanged' : '-> ?v=' + stamp}`);
}
console.log(`stamp ${stamp} over ${sheets.length} stylesheets`);
