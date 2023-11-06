/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  var set = new Set(nums);
  let max = 0;
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let len = 0;
      while (set.has(num + len)) {
        len++;
      }
      max = Math.max(len, max);
    }
  }
  return max;
};
