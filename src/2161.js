/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let left = [];
  let right = [];
  let middle = [];
  for (const num of nums) {
    if (num === pivot) {
      middle.push(num);
    } else {
      num < pivot ? left.push(num) : right.push(num);
    }
  }
  return left.concat(middle, right);
};
