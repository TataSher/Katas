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

test('with 3 cumulus clouds and 1 thunderhead returns 2', () => {
  expect(jumpingOnClouds([0, 1, 0, 0])).toBe(2);
})

test('with 6 cumulus clouds and 1 thunderhead in the middle returns 3', () => {
  expect(jumpingOnClouds([0, 0, 0, 0, 1, 0])).toBe(3);
});

test('with 3 cumulus clouds and 1 thunderhead returns 2', () => {
  expect(jumpingOnClouds([0, 1, 0, 0])).toBe(2);
});

test('with 6 cumulus clouds returns 2', () => {
  expect(jumpingOnClouds([0, 0, 0, 0, 0, 0])).toBe(3);
});

test('with a random combo return 28',() => {
  expect(jumpingOnClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0])).toBe(28)
});