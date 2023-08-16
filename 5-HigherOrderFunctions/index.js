// Filter Function 

function filter(array, test) {
    let passed = [];
    for(value of array) {
        if(test(value)) passed.push(value);
    }
    return passed;
}

console.log(filter([1,2,3,4,5,6,7], (n) => { return n%4==0 ? true : false; }));

let arr = [1,2,3,4,5,6,7];
console.log(arr.filter(s => s%3==0));


// Map function

function map(array, transform) {
    let mapped = [];
    for(let value of array) {
        mapped.push(transform(value));
    }
    return mapped;
}

let arr2 = [1,2,3,4,5];
console.log(map(arr2, e => { return e+50; }));
console.log(arr2);

console.log(arr2.map( n => n+20));


// Reduce function
console.log('Reduce');
let start = 12;
console.log([1, 2, 3, 4].reduce((a, b) => a + b, start) );


//Some function

console.log([1,2,3,4,5,6,7].some( n => n*3 ===15));