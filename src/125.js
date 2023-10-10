/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s
    .replace(/[^a-z0-9]/gi, "")
    .toUpperCase()
    .split("");
  let str2 = s
    .replace(/[^a-z0-9]/gi, "")
    .toUpperCase()
    .split("");
  let reversedStr = str.reverse().join("");
  return reversedStr === str2.join("");
};
