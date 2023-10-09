/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let str = num.toString().split("").sort();
  let sum = parseInt(str[0] + str[3]) + parseInt(str[1] + str[2]);
  return sum;
};
