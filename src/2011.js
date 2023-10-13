/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let minus = "--X";
  let minus2 = "X--";
  let count = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] == minus || operations[i] == minus2) {
      count--;
    } else {
      count++;
    }
  }
  return count;
};
