let array = ['string', 12, [1,2,3], false];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const shuffle_v1 = (array) => {
  let new_array = array;
  for (let i = new_array.length -1 ; i >= 1 ; i-=1) {
    let rand = getRandomInt(i);
    let c = new_array[i];
    new_array[i] = new_array[rand];
    new_array[rand] = c;
  }
  return new_array
}

// console.log(shuffle_v1(array));

const shuffle_v2 = (array) => {
  let new_array = array;
  // console.log(new_array);
  if (new_array.length === 0) {
    return []
  }
  let rand = getRandomInt(new_array.length - 1);
  let el = [new_array[rand]];
  new_array.splice(rand,1);
  
  return el.concat(shuffle_v2(new_array))
}

console.log(shuffle_v2(array));