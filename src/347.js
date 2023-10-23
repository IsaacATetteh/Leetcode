/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const countArray = Array.from(map);
  countArray.sort((a, b) => b[1] - a[1]);
  return countArray.slice(0, k).map(([key, value]) => key);
};
