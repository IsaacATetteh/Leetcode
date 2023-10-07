/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const map = new Map();
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let key of map.keys()) {
    if (parseFloat(map.get(key)) > nums.length / 3) {
      arr.push(key);
    }
  }
  return arr;
};
