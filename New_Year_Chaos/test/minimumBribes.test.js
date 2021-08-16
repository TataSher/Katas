const minimumBribes = require('../main/minimumBribes');

test('with and array of 2 returns 1', () => {
  expect(minimumBribes([2, 1])).toEqual(1);
});

test('with and array of 3 returns 1', () => {
  expect(minimumBribes([2, 3, 1])).toEqual(1);
});