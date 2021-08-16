const repeatedString = require('../main/repeatedString');

test("when given a string with 'a' returns 1", () => {
  expect(repeatedString('a', 1)).toBe(1);
});