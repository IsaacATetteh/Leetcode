/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(token);
    } else {
      let x = parseInt(stack.pop());
      let y = parseInt(stack.pop());
      switch (token) {
        case "+":
          stack.push(y + x);
          break;
        case "/":
          stack.push(Math.trunc(y / x));
          break;
        case "-":
          stack.push(y - x);
          break;
        case "*":
          stack.push(y * x);
          break;
      }
    }
  }
  return stack[0];
};
