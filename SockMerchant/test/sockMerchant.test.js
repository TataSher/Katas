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

