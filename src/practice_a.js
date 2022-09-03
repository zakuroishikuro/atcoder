input = require('fs').readFileSync(0, 'utf8').trim();

[a, b, c, s] = input.trim().split(/\s+/);
output = `${+a + +b + +c} ${s}`;

console.log(output);
