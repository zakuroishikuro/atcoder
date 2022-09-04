console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [hp, attack] = input.split(/\s+/);
  return Math.ceil(hp / attack);
}
