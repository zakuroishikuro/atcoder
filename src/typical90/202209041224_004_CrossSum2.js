console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [h, w, ...nums] = input.split(/\s+/).map(s => +s);

  const rowSums = [];
  const colSums = [];

  return nums
    .map((n, i) => {
      const x = i % w;
      const y = ((i / w) | 0) * w;

      if (!rowSums[y]) {
        const row = nums.slice(y, y + w);
        rowSums[y] = row.reduce((a, b) => a + b);
      }

      if (!colSums[x]) {
        const col = [...Array(h)].map((_, i) => nums[i * w + x]);
        colSums[x] = col.reduce((a, b) => a + b);
      }

      const sum = rowSums[y] + colSums[x] - n;

      return sum + (x != w - 1 ? ' ' : '\n');
    })
    .join('');
}
