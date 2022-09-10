function main(input) {
  const [len, ...nums] = input
    .trim()
    .split(/\s+/)
    .map(s => +s);

  const indexes = nums.map((_, i) => nums.indexOf(i));

  const bucket = Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = -1; j <= 1; j++) {
      const idx = (i + j + len) % len;
      const idxOf = indexes[idx];
      const diff = (idxOf - i + len) % len;
      bucket[diff]++;
    }
  }
  return Math.max(...bucket);
}

console.log(main(require('fs').readFileSync(0, 'utf8')));
