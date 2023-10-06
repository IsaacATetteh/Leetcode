/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const array = s.split("");
  const array2 = t.split("");
  array.sort();
  array2.sort();

  return array.join() == array2.join();
};
