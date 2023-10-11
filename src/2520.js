/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let count = 0;
  let numString = num.toString();
  for (const char of numString) {
    if ((num / parseInt(char)) % 1 == 0) {
      count++;
    }
  }

  return count;
};
