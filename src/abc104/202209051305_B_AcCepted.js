function main(input) {
  return /^A[a-z]+C[a-z]+$/.test(input) ? 'AC' : 'WA';
}

console.log(main(require('fs').readFileSync(0, 'utf8')));
