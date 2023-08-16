function reverseArray(arr) {
    let newArr = [];
    for(let element of arr) {
        newArr.unshift(element);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    let start = 0, end = arr.length-1;
    while(start < end) {
        let tempNum = arr[start];
        arr[start] = arr[end];
        arr[end] = tempNum;
      	start++;
      	end--;
    }
    return arr;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]