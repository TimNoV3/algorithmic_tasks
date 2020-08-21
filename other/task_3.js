const waysOnStairs = count => {
  if (count === 0) return 1
  else 
    if (count === 1) return 1
    else if (count === 2) return 2;
         else return waysOnStairs(count - 1) + waysOnStairs (count - 2)  
}

console.log(waysOnStairs(20));