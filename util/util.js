module.exports.lines = str => str.split(/\r?\n|\r/);
module.exports.words = str => str.trim().split(/\s+/);
module.exports.ints = str => Int32Array.from(str.trim().split(/\s+/));
module.exports.floats = str => Float64Array.from(str.trim().split(/\s+/));

module.exports.sortBy = (arr, map = v => v, des = 0) => {
  var f = [(a, b) => a - b, (a, b) => b - a][des] || des;
  return arr
    .map(v => [map(v), v])
    .sort(([a], [b]) => f(a, b))
    .map(v => v[1]);
};

module.exports.range = (first, last) => {
  if (!last) [first, last] = [0, first];
  return [...Array(last - first)].map((_, i) => i + first);
};
