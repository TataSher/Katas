function repeatedString(s, n) {
  let remainder = n % s.length
  let fullTimes = (n - remainder) / s.length
  let countOfA = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      i<remainder ? countOfA+=fullTimes + 1 : countOfA+=fullTimes
    }
  }
  return countOfA
}
module.exports = repeatedString;