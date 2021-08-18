const arrayManipulation = require('../main/arrayManipulation');

test('Given array of 2 and 1 operation', () => {
  expect(arrayManipulation(2, [1,1,2])).toBe(2);
});