const firstRecurringChar = str => {
  let array = [];
  str = str.replace(/\s+/g, '');
  console.log(str);
  for (let el of str){
    if (array.includes(el)) {
      return el;
    }
    else array.push(el);
  }
}

console.log(firstRecurringChar('e g jrd g')); 