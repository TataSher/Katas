const sockMerchant = require('../main/sockMerchant');

test('when 1 sock is given returns 0', () => {
  expect(sockMerchant(1, [1])).toBe(0);
});

test('when 2 same socks are given returns 1', () => {
  expect(sockMerchant(2, [1, 1])).toBe(1)
});