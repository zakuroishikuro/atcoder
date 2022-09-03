input = require('fs').readFileSync(0, 'utf8').trim();

output = input.split(/\n/)[0];

console.log(output);
