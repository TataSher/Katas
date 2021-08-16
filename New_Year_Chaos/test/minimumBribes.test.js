const minimumBribes = require('../main/minimumBribes');

test('with and array of 2 returns 1', () => {
  expect(minimumBribes([2, 1])).toBe(1);
});

test('with and array of 3 returns 1', () => {
  expect(minimumBribes([2, 3, 1])).toBe(1);
});

test('with and array of 4 returns "Too Chaotic"', () => {
  expect(() => {minimumBribes([2, 3, 4, 1])}).toThrow("Too Chaotic");
});

test('Long array with 1 bribe returns 1', () => {
  expect(minimumBribes([1, 2, 3, 5, 4, 6, 7])).toBe(1);
});
