/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  let map = new Map();
  word = word.split("");
  for (const letter of word) {
    map.has(letter) ? map.set(letter, map.get(letter) + 1) : map.set(letter, 0);
  }
  return map.size >= word.length - 1;
};
