/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroes = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j++] = nums[i];
    } else {
      zeroes++;
    }
  }

  for (let i = nums.length - zeroes; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
