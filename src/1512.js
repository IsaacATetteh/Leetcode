/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let result = 0;
  let count = {};

  for (let num of nums) {
    if (num in count) {
      result += count[num];
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  return result;
};
