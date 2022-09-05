const { range, sortBy } = require('./util');

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
