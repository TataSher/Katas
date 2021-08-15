const countingValleys = require('../main/countingValleys');

test('when given 2 steps with a valley returns 1', () => {
  expect(countingValleys(2, 'DU')).toBe(1);
});

test('when given 2 steps with a mountaint returns 0', () => {
  expect(countingValleys(2, 'UD')).toBe(0);
});

test('when given 4 steps with 2 valleys returns 2', () => {
  expect(countingValleys(4, 'DUDU')).toBe(2);
})

test('when given 8 steps with 1 valleys returns 1', () => {
  expect(countingValleys(8, 'UDDDUDUU')).toBe(1);
})