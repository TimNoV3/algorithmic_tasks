const str = "ABBCDEEEF";

const subString = str => {
 let new_obj = {};
 let el = str[0];
 let count = 1;
 let max_el = '';
 let max_count = 0;
 for (let new_el of str.slice(1)) {
   
   if (new_el === el) {
     count += 1;
   }
   else {
     if (count > max_count) {
       max_el = el;
       max_count = count;       
     }
     el = new_el;
     count = 1;
   }
 } 
 new_obj[max_el] = max_count;
 return new_obj
}

console.log(subString(str));