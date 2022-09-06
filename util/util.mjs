// そのまま使うかは別としてメモ代わりのものも書いておく
export const lines = str => str.split(/\r?\n|\r/);
export const words = str => str.trim().split(/\s+/);
export const ints = str => Int32Array.from(str.trim().split(/\s+/));
export const floats = str => Float64Array.from(str.trim().split(/\s+/));

export const sortBy = (arr, map = v => v, des = 0) =>
  arr
    .map(v => [map(v), v])
    .sort([([a], [b]) => a - b, ([a], [b]) => b - a][des])
    .map(v => v[1]);

export const range = (first, last = first, step = 1) => {
  first = (first != last) * first;
  let n = first - step;
  return Int32Array.from(Array(Math.floor((last - first) / step)), () => (n += step));
};

export const sum = nums => nums.reduce((a, b) => a + b);

// 三角数, 等差数列の和の公式
export const sum1toN = n => (n * (n + 1)) / 2;
export const sumNtoM = (n, m) => sum1toN(m) - sum1toN(n - 1);

// 四角数, 平方数
export const sum1toN_step2 = n => Math.floor(n / 2) ** 2;
