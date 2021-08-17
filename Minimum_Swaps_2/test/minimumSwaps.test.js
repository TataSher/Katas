const minimumSwaps = require('../main/minimumSwaps');

test('An array of two numbers swapped returns 1', () => {
  expect(minimumSwaps([2, 1])).toBe(1);
});

test('An array with no swaps returns 0', () => {
  expect(minimumSwaps([1, 2, 3])).toBe(0);
});

test('An array of 3 numbers with edge numbers swapped returns 1', () => {
  expect(minimumSwaps([3, 2, 1])).toBe(1);
});

test('An array of 4 numbers and 3 swaps', () => {
  expect(minimumSwaps([4, 3, 1, 2])).toBe(3);
});