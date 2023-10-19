/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let max = 0;
  let left = 0;
  let right = 0;
  let flips = k;

  while (right < nums.length) {
    if (nums[right] === 1) {
      right++;
    } else if (flips > 0) {
      right++;
      flips--;
    } else {
      if (nums[left] === 0) {
        flips++;
      }
      left++;
    }
    max = Math.max(max, right - left);
  }

  return max;
};
