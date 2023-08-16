// Constructor function
function Person(name) {
    this.name = name;
}

// Adding a method to the prototype object
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Creating instances of the Person class
const person1 = new Person("Alice");
const person2 = new Person("Bob");

// Calling the method defined in the prototype
person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob

console.log(Person.prototype); // { greet: [Function (anonymous)] }

Person.prototype = {}; // I have overwritten the default object by assigning a new object to the `prototype` property.
Person.prototype.eat = function(fruit) {
    console.log(`${this.name} eats ${fruit}`);
}

const person3 = new Person('Gracia');
person3.eat('Mango'); // 'Gracia eats Mango'
console.log(Person.prototype); // { eat: [Function (anonymous)] }
// person1.eat('Orange');// not a function
