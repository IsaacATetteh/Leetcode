/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split("");
  let vowels = [];
  let str = "aeiouAEIOU";

  for (let i = 0; i < s.length; i++) {
    if (str.includes(s[i])) {
      vowels.push(s[i]);
      s[i] = "~";
    }
  }

  let n = vowels.length - 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "~") {
      s[i] = vowels[n--];
    }
  }
  return s.join("");
};
