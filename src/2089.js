/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    if(!nums.includes(target)) {
      return []
    }
    
    let arr = nums.sort(function (a, b) {  return a - b;  })
    let currentPos = arr.indexOf(target)
    let res = []

    for(let i = 0; i < arr.length; i++) {
       if(arr[i] == target) {
         res.push(currentPos)
         currentPos++
       }
    }
    return res
};