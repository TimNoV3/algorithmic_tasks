const { Heap } = require ('heap-js')  ;
const minHeap = new Heap(Heap.maxComparator);

const pointXY = [
  [2,3],
  [3,3],
  [2,1],
  [7,2]
]

const NFPoints = (array = pointXY, heap, n) => {
  let new_heap = Object.assign(heap);
 
  for (let el of array) {
    let value = Math.sqrt(el[0]*el[0] + el[1]*el[1]);
    if (new_heap.heapArray.length < n){
      new_heap.push(value);
    } else if (new_heap.heapArray[0] > value) {
      new_heap.pop;
      new_heap.push(value);
    }
  }
  
  return new_heap.heapArray;
}
console.log(NFPoints(pointXY, minHeap, 2));