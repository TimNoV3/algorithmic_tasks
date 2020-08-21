max_code = '26';

const waysToDecode = message => {
  if (message[0] === '0') return 0;
  if (message.length === 0) return 1
  else {
    if (message.length === 1 || message.slice(0,2) > max_code) return waysToDecode(message.slice(1))
    else return waysToDecode(message.slice(2)) + waysToDecode(message.slice(1));
  }
}


console.log(waysToDecode('12345') === 3)
console.log(waysToDecode('11111111111') === 144)
console.log(waysToDecode('12345678901234') === 0)
