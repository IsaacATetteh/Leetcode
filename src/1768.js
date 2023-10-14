/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let newStr = "";
  let bigger = 0;

  word1.length > word2.length
    ? (bigger = word1.length)
    : (bigger = word2.length);
  for (let i = 0; i < bigger; i++) {
    if (word1[i] == undefined) {
      newStr += word2[i];
    } else if (word2[i] == undefined) {
      newStr += word1[i];
    } else {
      newStr += word1[i];
      newStr += word2[i];
    }
  }
  return newStr;
};
