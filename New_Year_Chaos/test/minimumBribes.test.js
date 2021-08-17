const minimumBribes = require('../main/minimumBribes');

test('with and array of 2 returns 1', () => {
  expect(minimumBribes([2, 1])).toBe(1);
});

test('with and array of 3 returns 1', () => {
  expect(minimumBribes([2, 3, 1])).toBe(2);
});

test('Long array with 1 bribe returns 1', () => {
  expect(minimumBribes([1, 2, 3, 5, 4, 6, 7])).toBe(1);
});

test('Long array with 3 bribe returns 3', () => {
  expect(minimumBribes([2, 1, 5, 3, 4])).toBe(3);
});

test('Long array with 3 bribe returns 3', () => {
  expect(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])).toBe('Too chaotic');
});

test('Long array with 3 bribe returns 3', () => {
  expect(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).toBe(7);
});
