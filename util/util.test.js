const { range, sortBy, sum, sum1toN, sumNtoM } = require('./util');

test('range', () => {
  // length
  expect(range(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // first..last
  expect(range(5, 10)).toStrictEqual([5, 6, 7, 8, 9]);
});

test('sortBy', () => {
  // Ascending
  expect(sortBy(['aa', 'b', 'ccc'], v => v.length)).toStrictEqual(["b", "aa", "ccc"]);

  // Descending
  expect(sortBy(['aa', 'b', 'ccc'], v => v.length, 1)).toStrictEqual(["ccc", "aa", "b"]);
});

test('sum1toN', () => {
  // 1 ～ 100
  const nums = range(1, 101);
  expect(sum(nums)).toBe(5050);
  expect(sum1toN(100)).toBe(5050);
})

test('sumNtoM', ()=>{
  // 100 ～ 555
  const nums = range(1, 556);
  expect(sum(nums)).toBe(154290);
  expect(sum1toN(555)).toBe(154290);
});