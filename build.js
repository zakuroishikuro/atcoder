const { readFile, writeFile } = require('fs/promises');
const { build } = require('esbuild');

const src = 'util/util.js';
const min = 'util/util.min.js';

(async () => {
  await build({
    entryPoints: [src],
    outfile: min,
    bundle: true,
    minify: true,
    target: 'es2019',
  });
return
  // 雑すぎん？
  console.log('[minified util]');
  let js = await readFile(min, 'utf-8');
  js = js
    .replace(/}\);.\(\);}\)\(\);$/m, ';')
    .replace(/.\.exports\./g, '\nconst ')
    .split(/\n/)
    .slice(1)
    .map(s => s.trim())
    .join('\n');
  console.log(js);
  await writeFile(min, js, 'utf-8');
})();
