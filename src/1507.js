/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let str = "";
  let monthNum = 0;
  let dateNum = "";
  const arr = date.split(" ");

  if (month.indexOf(arr[1]) + 1 < 10) {
    monthNum = "0" + (month.indexOf(arr[1]) + 1);
  } else {
    monthNum = month.indexOf(arr[1]) + 1;
  }
  if (arr[0].length > 3) {
    dateNum = arr[0].substring(0, 2);
    console.log(dateNum);
  } else {
    dateNum = "0" + arr[0].substring(0, 1);
  }

  return arr[2] + "-" + monthNum + "-" + dateNum;
};
