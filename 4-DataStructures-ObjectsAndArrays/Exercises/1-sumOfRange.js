
function range(start,end,step=1) {
    let arr = [];
  	if(start<=end){ 
      while(start <= end) {
          arr.push(start);
          start+= step;
      }
    }else{
      step > 0? step = -1 : step;
      
      while(start >= end) {
          arr.push(start);
          start+= step;
      }
    }
    return arr;
}

function sum(arr) {
    let total = 0;
    for(let number of arr) {
        total+= number;
    }
    return total;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));
//-> [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(range(5,2));
// → [5, 4, 3, 2]
console.log(range(5,2,-2));
// → [5, 3]