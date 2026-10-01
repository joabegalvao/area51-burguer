// Gera, a partir de tools/logo/letreiro.svg, das fontes e das fotos do site:
//   assets/img/favicon-32.png, icon-192.png, apple-touch-icon.png   a nave em neon sobre o escuro
//   assets/img/compartilhamento.jpg                                   1200x630 para WhatsApp e redes
//
// Uso (na raiz do projeto, depois de python3 tools/optimize-images.py):
//   node tools/render-compartilhamento.js
//
// Requer Node e Playwright com Chromium. Se o Playwright não estiver instalado
// neste projeto, informe os caminhos pelas variáveis de ambiente
// PLAYWRIGHT_MODULE (pasta node_modules/playwright) e CHROMIUM_PATH.
const path = require('path');
const fs = require('fs');
const os = require('os');

const playwrightModule = process.env.PLAYWRIGHT_MODULE || 'playwright';
const { chromium } = require(playwrightModule);

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'assets/img');
const lettering = fs.readFileSync(path.join(root, 'tools/logo/letreiro.svg'), 'utf8');
const ufo = fs.readFileSync(path.join(root, 'tools/logo/nave.svg'), 'utf8');
const ship = (size) => ufo.replace(/width="[\d.]+" height="[\d.]+"/, `width="${size}" height="${size}"`);
// o letreiro herda a cor do elemento pai (fill="currentColor")
const mark = (width) => lettering.replace(/width="[\d.]+" height="[\d.]+"/, `width="${width}" height="auto"`);

const fontFace = (family, file) => `@font-face { font-family: "${family}"; src: url("file://${path.join(root, 'assets/fonts', file)}") format("woff2"); font-weight: 400 700; }`;
const fonts = [fontFace('Alfa Slab One', 'alfa-slab-one-normal-latin.woff2'), fontFace('Rubik', 'rubik-normal-latin.woff2')].join('\n');

const photo = fs.readdirSync(out).filter((f) => /^burger-na-mao-\d+\.jpg$/.test(f)).sort().pop();

const icon = (size, width) => ({
  w: size, h: size,
  // o ícone é a nave: o letreiro inteiro fica ilegível em 32 px
  html: `<div style="width:${size}px;height:${size}px;background:#1a0f0a;color:#e62129;display:grid;place-items:center">${ship(width)}</div>`,
});

const pages = {
  favicon: { ...icon(32, 28), file: 'favicon-32.png' },
  icon192: { ...icon(192, 150), file: 'icon-192.png' },
  apple: { ...icon(180, 140), file: 'apple-touch-icon.png' },
  card: {
    w: 1200, h: 630, file: 'compartilhamento.jpg', jpeg: true,
    html: `<div style="width:1200px;height:630px;display:grid;grid-template-columns:640px 560px;background:#1a0f0a;color:#fdf3e9;font-family:Rubik,sans-serif;overflow:hidden">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:0 64px">
        <div style="display:flex;align-items:center;gap:22px;color:#e62129;filter:drop-shadow(0 0 4px #f63831) drop-shadow(0 0 18px rgba(246,56,49,.65)) drop-shadow(0 0 40px rgba(246,56,49,.35))">${ship(110)}${mark(360)}</div>
        <div style="margin-top:40px;font-family:'Alfa Slab One',serif;font-size:44px;line-height:1.06">Baita hambúrguer,<br><span style="color:#f2b134">sem miséria.</span></div>
        <div style="margin-top:22px;font-size:17px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#c9b3a4">Av. Paraná, 1591, Maringá PR</div>
      </div>
      <img src="file://${path.join(out, photo)}" style="width:560px;height:630px;object-fit:cover;object-position:50% 40%;display:block" alt="">
    </div>`,
  },
};

(async () => {
  const browser = await chromium.launch(
    process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
  );
  const tmp = path.join(os.tmpdir(), 'area51-render.html');
  for (const p of Object.values(pages)) {
    const page = await browser.newPage({ viewport: { width: p.w, height: p.h }, deviceScaleFactor: 1 });
    // a página é aberta por file:// para o Chromium aceitar as fontes e a foto locais
    fs.writeFileSync(tmp, `<!doctype html><html><head><meta charset="utf-8"><style>${fonts} body{margin:0;background:transparent}</style></head><body>${p.html}</body></html>`);
    await page.goto('file://' + tmp, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot(p.jpeg
      ? { path: path.join(out, p.file), type: 'jpeg', quality: 86 }
      : { path: path.join(out, p.file) });
    await page.close();
    console.log('assets/img/' + p.file);
  }
  fs.unlinkSync(tmp);
  await browser.close();
})();
