/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const array = new Array(n);
  for (let i = 0; i < n + 1; i++) {
    array[i] = bit(i);
  }
  return array;
};

function bit(num) {
  const arr = num.toString(2).split("");
  var result = 0;
  for (var i in arr) {
    result += parseInt(arr[i]);
  }
  return result;
}
