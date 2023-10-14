/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let notDiv = 0;
  let div = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) {
      notDiv += i;
    } else {
      div += i;
    }
  }

  return notDiv - div;
};
