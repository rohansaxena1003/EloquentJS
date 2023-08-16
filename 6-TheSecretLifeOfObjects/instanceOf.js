class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof!");
    }
  }
  
  const myDog = new Dog("Buddy");
  
  console.log(myDog instanceof Dog);      // Output: true
  console.log(myDog instanceof Animal);   // Output: true
  console.log(myDog instanceof Object);   // Output: true
//   console.log(myDog instanceof Cat);      // Output: false

  let myAni = new Animal('Boffalo');
  console.log(myAni instanceof Dog);      // Output: false
  console.log(myAni instanceof Animal);   // Output: true
  console.log(myAni instanceof Object);   // Output: true
  console.log(myAni instanceof Array);    // Output: false

  