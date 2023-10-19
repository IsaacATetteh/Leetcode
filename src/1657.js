/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) return false;

  let freq1 = Array(26).fill(0);
  let freq2 = Array(26).fill(0);
  const set1 = new Set();
  const set2 = new Set();

  for (let i = 0; i < word1.length; i++) {
    set1.add(word1[i]);
    set2.add(word2[i]);

    const charCode1 = word1.charCodeAt(i) - 97;
    freq1[charCode1]++;

    const charCode2 = word2.charCodeAt(i) - 97;
    freq2[charCode2]++;
  }

  if (set1.length !== set2.length) return false;

  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);

  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }

  for (const char of set1) {
    if (!set2.has(char)) return false;
  }

  return true;
};
