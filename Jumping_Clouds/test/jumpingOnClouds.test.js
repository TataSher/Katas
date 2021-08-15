const jumpingOnClouds = require('../main/jumpingOnClouds');

test('with 2 cumulus clouds returns 2', () => {
  expect(jumpingOnClouds([0,0])).toBe(2);
});