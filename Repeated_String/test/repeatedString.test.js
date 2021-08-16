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

test("when given a string with 'ba' and n=4 returns 2", () => {
  expect(repeatedString('ba', 4)).toBe(2);
});

test("when given a string with 'baa' and n=7 returns 4", () => {
  expect(repeatedString('baa', 7)).toBe(4);
});

test("when given a string with 'aab' and n=7 returns 2", () => {
  expect(repeatedString('aab', 7)).toBe(5);
});