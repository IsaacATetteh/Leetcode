/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let str = num.toString();
  if (str.includes("6")) {
    let pos = str.indexOf("6");
    str = str.replace("6", "9");
    return str;
  } else {
    return num;
  }
};
