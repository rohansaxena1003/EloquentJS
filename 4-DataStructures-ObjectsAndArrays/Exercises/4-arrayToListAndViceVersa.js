// Your code here.

function arrayToList(arr) {
    let list = {
        value : arr[0],
        rest : null
    };

    let next = list;
    for(let i = 1; i < arr.length; i++) {
        let node = {
            value: arr[i],
            rest : null
        };
        next.rest = node;
        next = node;
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    while(list != null) {
        arr.push(list.value);
        list = list.rest;
    }

    return arr;
}

function prepend(value, list) {
    let newList = {
        value: value,
        rest: list
    };
    return newList;
}

function nth(list, idx) {
    while(list!=null) {
      	if(idx < 0) {
          return 'wrong index givev';
        }
        if(idx==0) {
            return list.value;
        }
        list = list.rest;
        idx--;
    }
}

function recursiveNth(list,idx) {
    if(list == null) {
        return 'list ends';
    }
    if(idx == 0) {
        return list.value;
    }
    return recursiveNth(list.rest, idx-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10,14,16,18, 20, 30]), 3));
// → 18
console.log(recursiveNth(arrayToList([10,14,16,18, 20, 30]), 3));
// → 18