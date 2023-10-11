/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let validParen = "() {} []";
  let stack = [];

  if (
    s.length % 2 == 1 ||
    s.length < 2 ||
    s[0] == "}" ||
    s[0] == ")" ||
    s[0] == "]"
  ) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      let combined = stack.pop() + s[i];
      if (!validParen.includes(combined)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
