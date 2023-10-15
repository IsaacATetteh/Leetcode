/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let pos = 0; // position to insert the character/value
  let index = 0; // how far we are into the array
  let count = 0; // count of the current character

  while (index < chars.length) {
    let curr = chars[index];
    count = 0;
    while (curr == chars[index]) {
      index++;
      count++;
    }
    chars[pos++] = curr;
    if (count > 1) {
      let str = count.toString();
      for (let i = 0; i < str.length; i++) {
        chars[pos++] = str[i];
      }
    }
  }
  return pos;
};
