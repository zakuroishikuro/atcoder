function main(input) {
  const words = input.trim().split(/\s+/).slice(1);
  const cnt = words
    .map(w => [...w].sort().join(''))
    .reduce((dict, word) => {
      if (!(word in dict)) {
        dict[word] = 0;
      } else {
        dict[word]++;
      }
      return dict;
    }, {});
  return Object.values(cnt).reduce((s, c) => {
    return s + (c * (c + 1)) / 2;
  }, 0);
}

console.log(main(require('fs').readFileSync(0, 'utf8')));
