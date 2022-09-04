console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const nums = input
    .split(/\s+/)
    .slice(1)
    .map(s => +s);

  return Math.min(
    ...nums.map(n => {
      let i = 0;
      while (~(n >> i) & 1) i++;
      return i;
    }),
  );
}
