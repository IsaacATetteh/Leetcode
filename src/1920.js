/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const perm = [];
    for(let i = 0; i < nums.length; i++) {
        perm[i] = nums[nums[i]];
    }
    return perm;
};