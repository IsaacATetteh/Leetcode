/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let set = new Set();
  for (const char of nums1) {
    if (nums2.includes(char) || nums3.includes(char)) {
      set.add(char);
    }
  }
  for (const char of nums2) {
    if (nums3.includes(char) || nums1.includes(char)) {
      set.add(char);
    }
  }
  return Array.from(set);
};
