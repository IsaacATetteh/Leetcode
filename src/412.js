/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let j = i + 1;
    if ((j / 3) % 1 === 0 && (j / 5) % 1 === 0) {
      arr.push("FizzBuzz");
    } else if ((j / 3) % 1 === 0) {
      arr.push("Fizz");
    } else if ((j / 5) % 1 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(j.toString());
    }
  }
  return arr;
};
