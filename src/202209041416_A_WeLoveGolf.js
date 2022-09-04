console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [k, a, b] = input.split(/\s+/).map(s => +s);
  return Math.ceil(a / k) * k <= b ? 'OK' : 'NG';
}
