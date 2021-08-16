const rotLeft = require('../main/rotLeft');

test('When given array length 2 and rotation value 1 returns "2 1"', () => {
  expect(rotLeft(2, 1)).toBe("2 1");
});

test('When given array length 3 and rotation value 1 returns "2 3 1"', () => {
  expect(rotLeft(3, 1)).toBe("2 3 1");
});

test('When given array length 4 and rotation value 1 returns "2 3 4 1"', () => {
  expect(rotLeft(4, 1)).toBe("2 3 4 1");
});

test('When given array length 4 and rotation value 2 returns "3 4 1 2"', () => {
  expect(rotLeft(4, 2)).toBe("3 4 1 2");
});

test('When given array length 5 and rotation value 4 returns "3 4 1 2"', () => {
  expect(rotLeft(5, 4)).toBe("5 1 2 3 4");
});