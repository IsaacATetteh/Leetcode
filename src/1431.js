/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let arr = [];
  for (const candy of candies) {
    candy + extraCandies >= max ? arr.push(true) : arr.push(false);
  }
  return arr;
};
