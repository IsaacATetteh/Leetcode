/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s.substring(i, i + 1) === "i") {
      arr.reverse();
      continue;
    } else {
      arr[i] = s.substring(i, i + 1);
    }
  }
  return arr.join("");
};
