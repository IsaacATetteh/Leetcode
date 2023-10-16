/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let lowest = Infinity;
  let middle = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= lowest) {
      lowest = nums[i];
    } else if (nums[i] <= middle) {
      middle = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
