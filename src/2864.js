/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  s = s.split("");
  let ones = 0;
  let zeros = 0;
  let str = "";

  for (const char of s) {
    if (char == "0") {
      zeros++;
    } else {
      ones++;
    }
  }

  str += "1".repeat(ones - 1);
  str += "0".repeat(zeros);
  str += 1;

  return str;
};
