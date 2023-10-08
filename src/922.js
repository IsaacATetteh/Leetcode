/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let evens = [];
  let odds = [];
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length / 2; i++) {
    arr.push(evens[i]);
    arr.push(odds[i]);
  }
  return arr;
};
