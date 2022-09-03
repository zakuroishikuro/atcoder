console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [a, b, c, s] = input.trim().split(/\s+/);
  return `${+a + +b + +c} ${s}`;
}
