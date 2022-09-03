console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [a, b] = input.split(/\s+/);
  return ['Even', 'Odd'][(+a * +b) & 1];
}
