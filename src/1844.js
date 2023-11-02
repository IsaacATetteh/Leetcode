/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      str += letters[letters.indexOf(s[i - 1]) + parseInt(s[i])];
    } else {
      str += s[i];
    }
  }
  return str;
};
