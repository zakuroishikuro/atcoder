console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  return input.split(/\n/)[0];
}