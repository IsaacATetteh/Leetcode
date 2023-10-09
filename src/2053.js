/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  let map = new Map();
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (let [key, value] of map) {
    console.log(map.get(key));
    if (map.get(key) < 2) {
      k--;
      if (k == 0) {
        return key;
      }
    }
  }
  return "";
};
