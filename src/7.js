/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  if (x < 0) {
    x = -parseInt((-x).toString().split("").reverse().join(""));
    return x < INT_MIN ? 0 : x;
  } else {
    x = parseInt(x.toString().split("").reverse().join(""));
    return x > INT_MAX ? 0 : x;
  }
};
