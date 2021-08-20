const plusOne = require('../main/plusOne');

test('adds 3 to equal 6', () => {
  expect(plusOne(3)).toBe(6);
});

test('adds 4 to equal 10', () => {
  expect(plusOne(4)).toBe(10);
});