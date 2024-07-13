/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let people = Array(num_people).fill(0);
  let count = 0;
  while (candies > 0) {
    if (candies >= count + 1) {
      candies -= count + 1;
      people[count % num_people] += count + 1;
    } else {
      people[count % num_people] += candies;
      candies = 0;
    }
    count++;
  }
  return people;
};
