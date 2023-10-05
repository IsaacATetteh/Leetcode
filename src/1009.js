/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  let regString = n.toString(2);
  let flippedString = "";
  for (let i = 0; i < regString.length; i++) {
    if (regString.substring(i, i + 1) == "0") {
      flippedString += "1";
    } else {
      flippedString += "0";
    }
  }
  return parseInt(flippedString, 2);
};
