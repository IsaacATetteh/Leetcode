/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  if (!s.includes("b")) {
    return true;
  }

  let arr = s.split("");
  let start = arr.indexOf("b") + 1;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] == "a") {
      return false;
    }
  }
  return true;
};
