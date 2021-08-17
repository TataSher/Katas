const minimumSwaps = require('../main/minimumSwaps');

test('An array of two numbers swapped returns 1', () => {
  expect(minimumSwaps([2, 1])).toBe(1);
});

test('An array with no swaps returns 0', () => {
  expect(minimumSwaps([1, 2, 3])).toBe(0);
});