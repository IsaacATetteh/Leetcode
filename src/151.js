/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim().split(" ").reverse();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      s.splice(i, 1);
      i--;
    }
  }
  return s.join(" ");
};
