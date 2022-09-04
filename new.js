const { copyFile } = require('fs');

const norm = str => str.normalize('NFKC').replace(/[-_]+/g, " ").replace(/[\p{P}\p{S}]+/ug, '').replace(/\s+/g, "_");

const time = new Date().toISOString().split(/\D/).slice(0, -3).join('');
const input = norm(process.argv.slice(2).join('') || 'problem');
const name = `${time}_${input}`;

const js = [`src/_template.js`, `src/${name}.js`];
const yml = js.map(s => s.replace(/\.js/, '.yml'));

copyFile(...js, () => console.log(`- created: ${js[1]}`));
copyFile(...yml, () => console.log(`- created: ${yml[1]}`));
