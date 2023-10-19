/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === "B" && stack[stack.length - 1] === "A") ||
      (s[i] === "D" && stack[stack.length - 1] === "C")
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length;
};
