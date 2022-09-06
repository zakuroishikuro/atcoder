import { test, expect } from 'vitest';
import { range, sortBy, sum, sum1toN, sumNtoM, sum1toN_step2 } from './util.mjs';

test('range', () => {
  // length
  expect(range(10)).toEqual(Int32Array.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

  // first...last
  expect(range(5, 10)).toEqual(Int32Array.of(5, 6, 7, 8, 9));

  // first...last, step
  expect(range(10, 20, 2)).toEqual(Int32Array.of(10, 12, 14, 16, 18));
});

test('sortBy', () => {
  // Ascending
  expect(sortBy(['aa', 'b', 'ccc'], v => v.length)).toEqual(['b', 'aa', 'ccc']);

  // Descending
  expect(sortBy(['aa', 'b', 'ccc'], v => v.length, 1)).toEqual(['ccc', 'aa', 'b']);
});

test('sum1toN', () => {
  // 1..10
  expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
  expect(sum1toN(10)).toBe(55);

  // 1..100
  expect(sum(range(1, 101))).toBe(5050);
  expect(sum1toN(100)).toBe(5050);
});

test('sumNtoM', () => {
  // 5..10
  expect(sum([5, 6, 7, 8, 9, 10])).toBe(45);
  expect(sumNtoM(5, 10)).toBe(45);
  // 100..555
  expect(sum(range(100, 556))).toBe(149340);
  expect(sumNtoM(100, 555)).toBe(149340);
});

test('sum1toN_step2', () => {
  // 1..10 step 2
  expect(sum([1, 3, 5, 7, 9])).toBe(25);
  expect(sum1toN_step2(10)).toBe(25);

  // 1..555 step 2
  expect(sum(range(1, 556, 2))).toBe(76729);
  expect(sum1toN_step2(555)).toBe(76729);
});
