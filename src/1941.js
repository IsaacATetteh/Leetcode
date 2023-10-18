/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const first = map.values().next().value;

  for (const [key, value] of map) {
    if (value !== first) return false;
  }
  return true;
};
