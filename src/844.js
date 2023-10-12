/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  s = s.split("");
  t = t.split("");

  let str1 = s.reduce((stack, value) => {
    if (value == "#") {
      stack.pop();
    } else {
      stack.push(value);
    }
    return stack;
  }, []);

  let str2 = t.reduce((stack, value) => {
    if (value == "#") {
      stack.pop();
    } else {
      stack.push(value);
    }
    return stack;
  }, []);

  return str1.join("") == str2.join("");
};
