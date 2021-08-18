const arrayManipulation = require('../main/arrayManipulation');

test('Given array of 2 and 1 operation', () => {
  expect(arrayManipulation(2, [[1,1,2]])).toBe(2);
});

test('Given array of 3 and 2 operation2', () => {
  expect(arrayManipulation(3, [[1,2,2],[2,2,2]])).toBe(4);
});