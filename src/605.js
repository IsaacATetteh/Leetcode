/**
 
@param {number[]} flowerbed
@param {number} n
@return {boolean}
*/
var canPlaceFlowers = function (flowerbed, n) {
  let max = 0;
  let temp = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] == 0) {
      temp++;
      if (temp > max) {
        max = temp;
      }
    } else {
      temp = 0;
    }
  }
  return max - n > 1;
};
