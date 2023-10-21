/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  let vowels = "AEIOUaeiou";
  let arr = [];
  let j = 0;
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      arr.push(s[i]);
      s[i] = "~";
    }
  }

  arr = arr.sort();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "~") {
      s[i] = arr[j++];
    }
  }

  return s.join("");
};
