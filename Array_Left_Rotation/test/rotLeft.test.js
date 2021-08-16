const rotLeft = require('../main/rotLeft');

test('When given array length 2 and rotation value 1 returns "2 1"', () => {
  expect(rotLeft(2, 1)).toBe("2 1");
});