/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let num = Math.max(...nums);
    let result = 0;

    while(k > 0) {
        result += num;
        num++;
        console.log(result);
        k--;
    }
    
    return result;
};