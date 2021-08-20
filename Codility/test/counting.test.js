const counting = require('../main/counting');

test('counts integers', () => {
  expect(counting([1, 2, 3, 3, 2, 1, 3], 3)).toEqual(3);
});