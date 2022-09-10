function main(input) {
  return new Set(input.trim().split(/\s+/)).size;
}

console.log(main(require('fs').readFileSync(0, 'utf8')));
