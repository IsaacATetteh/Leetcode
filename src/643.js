/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let first = 0;
  let last = k;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let sum = maxSum;

  while (last < nums.length) {
    sum -= nums[first];
    sum += nums[last++];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum / k;
};

console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
