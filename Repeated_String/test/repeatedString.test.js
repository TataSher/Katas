const repeatedString = require('../main/repeatedString');

test("when given a string with 'a' returns 1", () => {
  expect(repeatedString('a', 1)).toBe(1);
});

test("when given a string with 'a' and n=2 returns 2", () => {
  expect(repeatedString('a', 2)).toBe(2);
});

test("when given a string with 'aa' and n=1 returns 2", () => {
  expect(repeatedString('aa', 2)).toBe(2);
});