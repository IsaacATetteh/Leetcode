/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let arr1 = [];
  let arr2 = [];

  let max = 0;

  nums1.length > nums2.length ? (max = nums1.length) : (max = nums2.length);

  for (let i = 0; i < max; i++) {
    if (
      nums1[i] !== undefined &&
      !nums2.includes(nums1[i]) &&
      !arr1.includes(nums1[i])
    )
      arr1.push(nums1[i]);

    if (
      nums2[i] !== undefined &&
      !nums1.includes(nums2[i]) &&
      !arr2.includes(nums2[i])
    )
      arr2.push(nums2[i]);
  }

  return [arr1, arr2];
};
