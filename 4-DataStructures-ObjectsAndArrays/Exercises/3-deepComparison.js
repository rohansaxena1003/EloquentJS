// Your code here.
function deepEqual(obj1, obj2) {
    if(obj1 == null || obj2 == null) {
        return false;
    }

    if (typeof (obj1) == 'object' && typeof (obj2) == 'object') {
        let arr1 = Object.keys(obj1).sort();
        let arr2 = Object.keys(obj2).sort();
        if (arr1.length != arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (typeof (obj1[arr1[i]]) == 'object' && typeof (obj2[arr2[i]]) == 'object') {
                let returnVal = deepEqual(obj1[arr1[i]], obj2[arr2[i]]);
                if(returnVal==false) {
                    return false;
                }
            } else if (obj1[arr1[i]] != obj2[arr2[i]]) {
                return false;
            }
            // console.log(obj1[arr1[i]] , obj2[arr2[i]]);
        }

        return true;

    } else if (obj1 === obj2) {
        return true;
    }

    return false;
}







let obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepEqual(1, '1'));
// false
console.log(deepEqual(2, 2));
// true
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
console.log(deepEqual(obj, { object: 2 , here: { is: "an" }}));
// → true