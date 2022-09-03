input = require('fs').readFileSync(0, 'utf8').trim();

[a, b] = input.split(/\s+/);
output = ['Even', 'Odd'][(+a * +b) & 1];

console.log(output);
