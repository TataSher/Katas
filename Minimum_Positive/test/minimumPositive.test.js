const minimumPositive = require('../main/minimumPositive');

test('adds 1 + 2 to equal 3', () => {
  expect(minimumPositive(1, 2)).toBe(3);
});