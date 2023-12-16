/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let total = 0;
  let len = num / 2 + 1;

  if (num === 1) {
    return false;
  }

  for (let i = 1; i < len; i++) {
    if (num % i === 0) {
      total += i;
    }
  }

  return total === num;
};
