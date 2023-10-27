/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let pos = [0, 0];

  for (const char of moves) {
    if (char === "U") {
      pos[0]++;
    } else if (char === "D") {
      pos[0]--;
    } else if (char === "R") {
      pos[1]++;
    } else if (char === "L") {
      pos[1]--;
    }
  }
  return pos[0] === 0 && pos[1] === 0;
};
