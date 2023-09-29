/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let array = s.trim().split(" ");
    let last = array.pop();
    return last.length;
};