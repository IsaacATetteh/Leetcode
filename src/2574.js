/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let left = [0];
  let right = new Array(nums.length).fill(0);
  let final = new Array(nums.length);

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] + nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] + nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    final[i] = Math.abs(left[i] - right[i]);
  }
  return final;
};
