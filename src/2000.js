/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if(!word.includes(ch)) {
        return word;
    }
    let pos = word.indexOf(ch);
    let sub = word.substring(0, pos);
    let array = sub.split("");
    array = array.reverse();
    let str = ch + array.join("") + word.substring(pos+1, word.length);
    return str;
   
};