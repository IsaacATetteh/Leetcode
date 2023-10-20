/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (const char of nums) {
    if (char.toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
};
