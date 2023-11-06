/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let left = 0;
  let right = 0;
  let arr = [];

  while (right < s.length) {
    if (s[left] === s[right]) {
      right++;
    } else {
      if (right - left >= 3) {
        arr.push([left, right - 1]);
      }
      left = right;
    }
  }

  if (right - left >= 3) {
    arr.push([left, right - 1]);
  }

  return arr;
};
