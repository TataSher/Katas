function repeatedString(s, n) {
  let longString = s.repeat(n)
  let countOfA = 0
  for (let i = 0; i < n; i++) {
    longString[i] === 'a' ? countOfA++ : countOfA;
  }
  return countOfA
}
module.exports = repeatedString;