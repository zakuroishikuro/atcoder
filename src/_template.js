function main(input) {
  const [a] = input.trim().split(/\s+/);
  return a;
}

console.log(main(require('fs').readFileSync(0, 'utf8')));
