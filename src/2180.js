/**
 * @param {number} num
 * @return {number}
 */
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    let temp = i
      .toString()
      .split("")
      .reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue),
        0
      );
    if (temp % 2 === 0) {
      count++;
    }
  }
  return count;
};
