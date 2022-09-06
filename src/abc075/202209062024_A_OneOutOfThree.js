function main(input) {
  const [a, b, c] = input.split(/\s+/);
  return a == b ? c : a == c ? b : a;
}

module.exports = module.id == "." ? console.log(main(require('fs').readFileSync(0, 'utf8'))) : { main };
