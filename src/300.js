/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let longest = new Array(nums.length).fill(1);
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        longest[i] = Math.max(longest[i], 1 + longest[j]);
      }
    }
  }
  return Math.max(...longest);
};
