/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let count = 0;
  let max = 0;

  if (a < b) {
    max = a;
  } else {
    max = b;
  }

  for (let i = 1; i <= max; i++) {
    if ((a / i) % 1 == 0 && (b / i) % 1 == 0) {
      count++;
    }
  }
  return count;
};
