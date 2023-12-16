/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let map = new Map();
  let arr = [];
  for (const char of s) {
    if (char.toUpperCase === char) {
      if (s.includes(char.toLowercase)) {
        arr.push(char);
      }
    }
  }
};
