/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let lowest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === Math.abs(lowest)) {
      lowest = nums[i];
    } else if (Math.abs(nums[i]) < Math.abs(lowest)) {
      lowest = nums[i];
    }
  }
  return lowest;
};
