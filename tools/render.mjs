/**
* Renders every raster file the page needs from the vector sources in this repo:
 *
 *   og/og-card.html        -> assets/og-card.png         (1200x630, exact)
 *      NOTE: the shipped og-card.png is the designer's render; run this only
 *      after editing the card's copy, and eyeball the result.
 *   assets/favicon.svg     -> favicon.ico                (16 + 32 + 48)
 *   assets/logo-avatar-512.svg -> assets/apple-touch-icon.png (180)
 *                             -> assets/icon-192.png, assets/icon-512.png
 *
 * No dependencies: a local static server plus headless Chrome, which every
 * machine that opens this repo already has. Run it after touching the card or
 * the mark, and commit the output.
 *
 *   node tools/render.mjs
 */
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, extname, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8787;

const CHROME = [
  process.env.CHROME,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find(p => p && existsSync(p));
if (!CHROME) {
  console.error('No Chrome found. Set CHROME=/path/to/chrome and re-run.');
  process.exit(1);
}

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2',
  '.json': 'application/json', '.ico': 'image/x-icon',
};

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]);
  const file = join(ROOT, path === '/' ? 'index.html' : path);
  if (!file.startsWith(ROOT)) { res.writeHead(403).end(); return; }
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' }).end(body);
  } catch {
    res.writeHead(404).end('not found');
  }
});
await new Promise(ok => server.listen(PORT, '127.0.0.1', ok));

const tmp = await mkdtemp(join(tmpdir(), 'blynai-render-'));

/**
 * Chrome writes --screenshot and then, in this version, keeps running instead of
 * exiting. So: spawn it, wait for the file to appear and stop growing, kill it.
 */
async function shot(url, out, w, h, transparent = false) {
  const child = spawn(CHROME, [
    '--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    // Its own profile: without this the run blocks on the singleton lock of a
    // Chrome the user already has open.
    `--user-data-dir=${join(tmp, 'chrome')}`, '--no-first-run', '--no-default-browser-check',
    '--disable-background-networking', '--disable-sync', '--disable-extensions',
    `--window-size=${w},${h}`, '--virtual-time-budget=8000',
    ...(transparent ? ['--default-background-color=00000000'] : []),
    `--screenshot=${out}`, url,
  ], { stdio: 'ignore' });

  const deadline = Date.now() + 60_000;
  let last = -1;
  try {
    while (Date.now() < deadline) {
      await new Promise(ok => setTimeout(ok, 250));
      if (!existsSync(out)) continue;
      const size = statSync(out).size;
      if (size > 0 && size === last) {
        console.log(`  ${out.replace(ROOT + '/', '')}  ${w}x${h}  ${size} B`);
        return;
      }
      last = size;
    }
    throw new Error(`chrome produced nothing for ${url}`);
  } finally {
    child.kill('SIGKILL');
  }
}

/** A page that shows one SVG at exactly the requested pixel box. */
async function svgPage(src, size) {
  const file = join(tmp, `icon-${size}.html`);
  await writeFile(file, `<!DOCTYPE html><meta charset="utf-8">
<style>html,body{margin:0;background:transparent}img{display:block;width:${size}px;height:${size}px}</style>
<img src="http://127.0.0.1:${PORT}${src}">`);
  return 'file://' + file;
}

/** ICO container around already-encoded PNGs — the format allows PNG payloads. */
function ico(pngs) {
  const head = Buffer.alloc(6);
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(pngs.length, 4);
  let offset = 6 + 16 * pngs.length;
  const dir = [];
  for (const { size, data } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2); e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8); e.writeUInt32LE(offset, 12);
    offset += data.length;
    dir.push(e);
  }
  return Buffer.concat([head, ...dir, ...pngs.map(p => p.data)]);
}

try {
  console.log('share card');
  await shot(`http://127.0.0.1:${PORT}/og/og-card.html`, join(ROOT, 'assets', 'og-card.png'), 1200, 630);

  console.log('favicon.ico');
  const parts = [];
  for (const size of [16, 32, 48]) {
    const out = join(tmp, `favicon-${size}.png`);
    await shot(await svgPage('/assets/favicon.svg', size), out, size, size, true);
    parts.push({ size, data: readFileSync(out) });
  }
  await writeFile(join(ROOT, 'favicon.ico'), ico(parts));
  console.log('  favicon.ico  16+32+48');

  console.log('app icons');
  for (const [size, name] of [[180, 'apple-touch-icon.png'], [192, 'icon-192.png'], [512, 'icon-512.png']]) {
    await shot(await svgPage('/assets/logo-avatar-512.svg', size), join(ROOT, 'assets', name), size, size);
  }
} finally {
  await rm(tmp, { recursive: true, force: true });
  server.close();
}
