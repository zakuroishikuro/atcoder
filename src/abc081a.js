input = require('fs').readFileSync(0, 'utf8').trim();

output = input.replace(/[^1]/g, '').length

console.log(output);
