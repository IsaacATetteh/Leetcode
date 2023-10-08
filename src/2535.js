/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let count = 0;
  let count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    let temp = nums[i].toString().split("");
    for (let i = 0; i < temp.length; i++) {
      count2 += parseInt(temp[i]);
    }
    console.log(count2);
  }

  return Math.abs(count - count2);
};
