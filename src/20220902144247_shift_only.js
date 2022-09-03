input = require('fs').readFileSync(0, 'utf8').trim();

counts = input
  .split(/\s+/)
  .slice(1)
  .map(n => (+n).toString(2).replace(/.*1/, '').length);

output = Math.min(...counts);

console.log(output);
