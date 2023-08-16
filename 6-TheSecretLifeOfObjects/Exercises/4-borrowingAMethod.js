let map = {one: true, two: true, hasOwnProperty: 22};

// map.hasOwnProperty = function (key) {
//     return this.has(key);
// }

console.log(map);
// Fix this call
console.log( Object.prototype.hasOwnProperty.call(map, "one") );
// → true
console.log( map.hasOwnProperty);