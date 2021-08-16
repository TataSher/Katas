function rotLeft(a, d) {
  newArray = [ ...Array(a).keys() ].map( i => i+1);

  return newArray.reverse().join(' ');

}
module.exports = rotLeft;