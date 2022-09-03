const { copyFile } = require('fs');
const time = new Date().toISOString().split(/\D/).slice(0, -3).join('');
const input = (process.argv[2] || 'problem').replace(/\W+/g, '');
const name = `${time}_${input}`;

const js = [`src/_template.js`, `src/${name}.js`];
const yml = js.map(s => s.replace(/\.js/, '.yml'));

copyFile(...js, () => console.log(`- created: ${js[1]}`));
copyFile(...yml, () => console.log(`- created: ${yml[1]}`));
