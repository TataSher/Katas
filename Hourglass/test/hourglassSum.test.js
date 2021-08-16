const hourglassSum = require('../main/hourglassSum');

test('with array of 1s returns 7', () => {
  expect(hourglassSum([[1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1]])).toBe(7);
});

test('with array of 1s returns 7', () => {
  expect(hourglassSum([[1,1,1,1,1,1], [1,1,1,2,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1]])).toBe(8);
});