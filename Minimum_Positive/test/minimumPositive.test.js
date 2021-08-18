const minimumPositive = require('../main/minimumPositive');

test('gets [1] and returns 2', () => {
  expect(minimumPositive([1])).toBe(2);
});

test('gets [2] and returns 1', () => {
  expect(minimumPositive([1])).toBe(2);
});