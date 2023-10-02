/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let str = title.split(" ");

    for(let i = 0; i < title.length; i++) {
        if(typeof str[i] === 'string') {
            if(str[i].length > 2) {
              str[i] = str[i][0].toUpperCase() + str[i].substring(1).toLowerCase();
            } else {
              str[i] = str[i].toLowerCase();
            }
        } 
    }
         return str.join(" ");
};