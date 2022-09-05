module.exports.lines = str => str.split(/\r?\n|\r/);
module.exports.words = str => str.trim().split(/\s+/);
module.exports.ints = str => Int32Array.from(str.trim().split(/\s+/));
module.exports.floats = str => Float64Array.from(str.trim().split(/\s+/));

module.exports.sortBy = (arr, map = v => v, des = 0) =>
  arr
    .map(v => [map(v), v])
    .sort([([a], [b]) => a - b, ([a], [b]) => b - a][des])
    .map(v => v[1]);

module.exports.range = (first, last) => {
  if (!last) [first, last] = [0, first];
  return [...Array(last - first)].map((_, i) => i + first);
};

module.exports.sum = nums => nums.reduce((a, b) => a + b);
// 等差数列の和の公式
module.exports.sum1toN = n => (n * (n + 1)) / 2;
module.exports.sumNtoM = (n, m) => sum1toN(m) - sum1toN(n);
