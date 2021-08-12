const sockMerchant = require('../main/sockMerchant');

test('when 1 sock is given returns 0', () => {
  expect(sockMerchant(1, [1])).toBe(0);
});

test('when 2 same socks are given returns 1', () => {
  expect(sockMerchant(2, [1, 1])).toBe(1)
});

test('when given 2 different socks returns 0', () => {
  expect(sockMerchant(2, [1, 2])).toBe(0)
})

test('when given 3 socks with one pair at the end returns 1', () => {
  expect(sockMerchant(3, [1, 2, 2])).toBe(1)
})

test('when given 3 socks with the same color returns 1', () => {
  expect(sockMerchant(3, [1, 1, 1])).toBe(1)
})

test('when given 4 socks with 2 pairs returns 2', () => {
  expect(sockMerchant(3, [1, 1, 2, 2])).toBe(2)
})

test('when given 4 socks with a non consecutive pair returns 1', () => {
  expect(sockMerchant(3, [1, 2, 3, 1])).toBe(1)
})

test('when given random sock amounts with colours returns pair count', () => {
  expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3)
})