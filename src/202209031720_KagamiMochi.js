console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  return new Set(input.split(/\s+/).slice(1)).size
}
