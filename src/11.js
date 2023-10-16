/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let width = right - left;
    let height2 = Math.min(height[right], height[left]);
    let area = parseInt(width * height2);

    if (area > max) {
      max = area;
    }

    height[right] > height[left] ? left++ : right--;
  }
  return max;
};
