const jumpingOnClouds = require('../main/jumpingOnClouds');

test('with 2 cumulus clouds returns 1', () => {
  expect(jumpingOnClouds([0,0])).toBe(1);
});

test('with 2 cumulus clouds and 1 thunderhead in the middle returns 1', () => {
  expect(jumpingOnClouds([0,1,0])).toBe(1);
});

test('with 2 cumulus clouds and 1 thunderhead in the middle returns 1', () => {
  expect(jumpingOnClouds([0,0,0])).toBe(1);
});