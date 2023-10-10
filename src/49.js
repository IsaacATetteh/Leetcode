/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = {};
  for (let word of strs) {
    let sorted = word.split("").sort().join("");
    if (obj.hasOwnProperty(sorted)) {
      obj[sorted].push(word);
    } else {
      obj[sorted] = [word];
    }
  }
  return Object.values(obj);
};
