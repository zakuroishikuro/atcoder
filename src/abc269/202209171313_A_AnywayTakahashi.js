function main(input) {
  const [a, b, c, d] = input.split(/\s+/).map(Number);
  return `${(a + b) * (c - d)}\nTakahashi`;
}

console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
