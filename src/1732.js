/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let alt = 0;
  let max = 0;
  for (const num of gain) {
    alt += num;
    if (alt > max) {
      max = alt;
    }
  }
  return max;
};
