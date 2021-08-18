const arrayManipulation = require('../main/arrayManipulation');

test('Given array of 2 and 1 operation', () => {
  expect(arrayManipulation(2, [[1,1,2]])).toBe(2);
});

test('Given array of 3 and 2 operations', () => {
  expect(arrayManipulation(3, [[1,2,2],[2,2,2]])).toBe(4);
});

test('Given array of 3 and 3 operations', () => {
  expect(arrayManipulation(5, [[1, 2, 100], [2, 5, 100],[3, 4, 100]])).toBe(200);
});