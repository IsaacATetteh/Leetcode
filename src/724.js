/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;
  let left = 0;

  nums.forEach((num) => {
    sum += num;
  });

  for (let i = 0; i < nums.length; i++) {
    right = sum - left - nums[i];
    if (left === right) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};
