const count_of_negative_num = matrix => {
  let max_string = 0;
  let max_stand = 0;
  for (let el of matrix){
    if (el[0] >= 0) {
      max_string = matrix.indexOf(el)-1;
      break;
    }
  }
  for (let el of matrix[max_string]){
    if (el >= 0) { 
      max_stand = matrix[max_string].indexOf(el)-1;
      break;
    }
  }
  return matrix[0].length * (max_string) + max_string;
}

console.log(count_of_negative_num([[-9, -6, -5, -4,-3], [-2, 0, 1, 2, 3], [4, 5, 6, 7, 8 ]]));