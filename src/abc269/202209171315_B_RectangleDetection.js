function main(input) {
  let lines = input.split(/\n/);
  let first = lines.findIndex(line=>line.includes("#")) + 1;
  let last = lines.findLastIndex(line=>line.includes("#")) + 1;

  let width = lines[first - 1].match(".+#+")[0].length;

  return [first, width, last, last - first];
}

console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
