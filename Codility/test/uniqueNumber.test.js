const uniqueNumber = require('../main/uniqueNumber');

test('shows number when just 1 given', () => {
  expect(uniqueNumber([1])).toEqual(1);
});

test('shows -1 when no numbers available', () => {
  expect(uniqueNumber([1,1])).toEqual(-1);
});

test('shows first unique number when 2 numbers given', () => {
  expect(uniqueNumber([1, 2])).toBe(1)
})

test('shows first unique number when 10 numbers given', () => {
  expect(uniqueNumber([1, 2, 5, 4, 5, 1, 2, 20, 4, 6])).toBe(20)
})