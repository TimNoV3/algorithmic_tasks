/**
 * Дана строка, написать функцию которая за один проход по строке вернет первый
 * символ встретившийся второй раз
 */

const firstRecurringChar = str => {
  let voc = [];
  str = str.replace(/\s+/g, '');
  
  for (let el of str){
    if (voc[el] === 1) {
      return el;
    }
    else voc[el] = 1;
  }
}






console.log(firstRecurringChar("abcdefa") === "a")
console.log(firstRecurringChar("gHRirHS") === "H")
console.log(firstRecurringChar("e g jrd g") === "g")