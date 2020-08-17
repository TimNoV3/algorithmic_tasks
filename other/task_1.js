/**
 * Дана строка, написать функцию которая за один проход по строке вернет первый
 * символ встретившийся второй раз
 */

const firstRecurringChar = str => {
  let array = [];
  str = str.replace(/\s+/g, '');
  
  for (let el of str){
    if (array.includes(el)) {
      return el;
    }
    else array.push(el);
  }
}






console.log(firstRecurringChar("abcdefa") === "a")
console.log(firstRecurringChar("gHRirHS") === "H")
console.log(firstRecurringChar("e g jrd g") === "g")